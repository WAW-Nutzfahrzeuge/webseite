import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const MAX_BODY_BYTES = 16_384;
const MIN_SUBMIT_TIME_MS = 2_500;
const MAX_SUBMIT_TIME_MS = 1000 * 60 * 60 * 6;
const RATE_LIMIT_WINDOW_MS = 1000 * 60 * 15;
const RATE_LIMIT_MAX = 5;
const REDIRECT_TO = "/danke";

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

type ContactPayload = {
    name?: unknown;
    email?: unknown;
    phone?: unknown;
    company?: unknown;
    vehicle?: unknown;
    year?: unknown;
    mileage?: unknown;
    condition?: unknown;
    message?: unknown;
    website?: unknown;
    formStartedAt?: unknown;
    source?: unknown;
};

function jsonResponse(body: Record<string, unknown>, status = 200) {
    return new Response(JSON.stringify(body), {
        status,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "no-store",
        },
    });
}

function clean(value: unknown, maxLength = 500) {
    if (typeof value !== "string") return "";
    return value
        .replace(/\u0000/g, "")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, maxLength);
}

function cleanMultiline(value: unknown, maxLength = 2500) {
    if (typeof value !== "string") return "";
    return value
        .replace(/\u0000/g, "")
        .replace(/\r\n/g, "\n")
        .replace(/\n{4,}/g, "\n\n\n")
        .trim()
        .slice(0, maxLength);
}

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function formatHtml(value: string) {
    return escapeHtml(value).replace(/\n/g, "<br />");
}

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email) && email.length <= 254;
}

function isValidPhone(phone: string) {
    const normalized = phone.replace(/[^\d+]/g, "");
    return normalized.length >= 7 && normalized.length <= 24 && /^[+\d][\d\s()./-]+$/.test(phone);
}

function getClientIp(request: Request) {
    return (
        request.headers.get("cf-connecting-ip") ||
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        request.headers.get("x-real-ip") ||
        "unknown"
    );
}

function isRateLimited(key: string) {
    const now = Date.now();
    const current = rateLimitStore.get(key);

    if (!current || current.resetAt <= now) {
        rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
        return false;
    }

    current.count += 1;
    return current.count > RATE_LIMIT_MAX;
}

function looksLikeSpam(values: string[]) {
    const combined = values.join(" ").toLowerCase();
    const urlCount = (combined.match(/https?:\/\/|www\./g) || []).length;
    const blockedTerms = [
        "casino",
        "crypto",
        "viagra",
        "loan",
        "seo backlink",
        "rank on google",
        "telegram",
        "whatsapp marketing",
    ];

    return urlCount > 2 || blockedTerms.some((term) => combined.includes(term));
}

function buildLeadText(fields: Record<string, string>) {
    return [
        "Neue Anfrage über die WAW Website",
        "",
        `Name: ${fields.name}`,
        `Telefon: ${fields.phone}`,
        `E-Mail: ${fields.email || "-"}`,
        `Unternehmen: ${fields.company || "-"}`,
        `Fahrzeug: ${fields.vehicle || "-"}`,
        `Baujahr: ${fields.year || "-"}`,
        `Kilometerstand: ${fields.mileage || "-"}`,
        `Zustand / Schäden: ${fields.condition || "-"}`,
        `Quelle: ${fields.source || "-"}`,
        "",
        "Nachricht:",
        fields.message || "-",
    ].join("\n");
}

function buildLeadHtml(fields: Record<string, string>) {
    const rows = [
        ["Name", fields.name],
        ["Telefon", fields.phone],
        ["E-Mail", fields.email || "-"],
        ["Unternehmen", fields.company || "-"],
        ["Fahrzeug", fields.vehicle || "-"],
        ["Baujahr", fields.year || "-"],
        ["Kilometerstand", fields.mileage || "-"],
        ["Zustand / Schäden", fields.condition || "-"],
        ["Quelle", fields.source || "-"],
    ];

    return `
      <div style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,sans-serif;color:#111827;">
        <div style="max-width:680px;margin:0 auto;padding:28px 16px;">
          <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:18px;overflow:hidden;">
            <div style="background:#07111f;color:#ffffff;padding:24px 28px;">
              <p style="margin:0 0 8px;color:#ff8a2a;font-size:12px;font-weight:700;letter-spacing:.08em;">WAW NUTZFAHRZEUGE</p>
              <h1 style="margin:0;font-size:24px;line-height:1.2;">Neue Website-Anfrage</h1>
            </div>
            <div style="padding:24px 28px;">
              <table style="width:100%;border-collapse:collapse;">
                ${rows
                    .map(
                        ([label, value]) => `
                  <tr>
                    <td style="width:180px;padding:10px 0;border-bottom:1px solid #eef0f3;color:#6b7280;font-size:14px;">${escapeHtml(label)}</td>
                    <td style="padding:10px 0;border-bottom:1px solid #eef0f3;color:#111827;font-size:15px;font-weight:600;">${escapeHtml(value)}</td>
                  </tr>
                `
                    )
                    .join("")}
              </table>
              <h2 style="margin:24px 0 10px;font-size:18px;color:#111827;">Nachricht</h2>
              <p style="margin:0;color:#374151;line-height:1.7;">${formatHtml(fields.message || "-")}</p>
            </div>
          </div>
        </div>
      </div>
    `;
}

function buildConfirmationText(name: string) {
    return [
        `Hallo ${name},`,
        "",
        "vielen Dank für Ihre Anfrage bei WAW Nutzfahrzeuge.",
        "Wir haben Ihre Fahrzeugdaten erhalten und melden uns schnellstmöglich zur weiteren Abstimmung.",
        "",
        "Falls Sie weitere Informationen oder Fotos ergänzen möchten, antworten Sie einfach auf diese E-Mail oder kontaktieren Sie uns telefonisch.",
        "",
        "Mit freundlichen Grüßen",
        "WAW Nutzfahrzeuge",
    ].join("\n");
}

function buildConfirmationHtml(name: string) {
    return `
      <div style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,sans-serif;color:#111827;">
        <div style="max-width:640px;margin:0 auto;padding:28px 16px;">
          <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:18px;overflow:hidden;">
            <div style="background:#07111f;color:#ffffff;padding:24px 28px;">
              <p style="margin:0 0 8px;color:#ff8a2a;font-size:12px;font-weight:700;letter-spacing:.08em;">WAW NUTZFAHRZEUGE</p>
              <h1 style="margin:0;font-size:24px;line-height:1.2;">Ihre Anfrage ist eingegangen</h1>
            </div>
            <div style="padding:24px 28px;color:#374151;line-height:1.7;">
              <p>Hallo ${escapeHtml(name)},</p>
              <p>vielen Dank für Ihre Anfrage bei WAW Nutzfahrzeuge.</p>
              <p>Wir haben Ihre Fahrzeugdaten erhalten und melden uns schnellstmöglich zur weiteren Abstimmung.</p>
              <p>Falls Sie weitere Informationen oder Fotos ergänzen möchten, antworten Sie einfach auf diese E-Mail oder kontaktieren Sie uns telefonisch.</p>
              <p style="margin-top:24px;">Mit freundlichen Grüßen<br /><strong>WAW Nutzfahrzeuge</strong></p>
            </div>
          </div>
        </div>
      </div>
    `;
}

export const POST: APIRoute = async ({ request }) => {
    try {
        const contentLength = Number(request.headers.get("content-length") || 0);
        if (contentLength > MAX_BODY_BYTES) {
            return jsonResponse({ success: false, error: "Die Anfrage ist zu groß." }, 413);
        }

        if (!request.headers.get("content-type")?.includes("application/json")) {
            return jsonResponse({ success: false, error: "Ungültiges Anfrageformat." }, 415);
        }

        const ip = getClientIp(request);
        if (isRateLimited(ip)) {
            return jsonResponse(
                { success: false, error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut oder rufen Sie direkt an." },
                429
            );
        }

        const body = (await request.json()) as ContactPayload;

        if (clean(body.website, 120)) {
            return jsonResponse({ success: true, redirectTo: REDIRECT_TO });
        }

        const startedAt = Number(body.formStartedAt || 0);
        const elapsed = Date.now() - startedAt;
        if (!startedAt || elapsed < MIN_SUBMIT_TIME_MS || elapsed > MAX_SUBMIT_TIME_MS) {
            return jsonResponse(
                { success: false, error: "Die Anfrage konnte nicht validiert werden. Bitte versuchen Sie es erneut." },
                400
            );
        }

        const fields = {
            name: clean(body.name, 80),
            email: clean(body.email, 254).toLowerCase(),
            phone: clean(body.phone, 40),
            company: clean(body.company, 100),
            vehicle: clean(body.vehicle, 140),
            year: clean(body.year, 20),
            mileage: clean(body.mileage, 40),
            condition: clean(body.condition, 180),
            message: cleanMultiline(body.message, 2500),
            source: clean(body.source, 120),
        };

        const errors: Record<string, string> = {};

        if (fields.name.length < 2) errors.name = "Bitte geben Sie Ihren Namen an.";
        if (!isValidPhone(fields.phone)) errors.phone = "Bitte geben Sie eine gültige Telefonnummer an.";
        if (fields.email && !isValidEmail(fields.email)) errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
        if (fields.year && !/^[\d\s./-]{2,20}$/.test(fields.year)) errors.year = "Bitte geben Sie ein gültiges Baujahr an.";

        if (looksLikeSpam(Object.values(fields))) {
            errors.message = "Die Anfrage wurde vom Spam-Schutz blockiert.";
        }

        if (Object.keys(errors).length > 0) {
            return jsonResponse({ success: false, error: "Bitte prüfen Sie Ihre Angaben.", errors }, 400);
        }

        const apiKey = import.meta.env.RESEND_API_KEY;
        const contactToEmail = import.meta.env.CONTACT_TO_EMAIL;
        const fromEmail = import.meta.env.CONTACT_FROM_EMAIL || "website@wawnutzfahrzeuge.de";

        if (!apiKey || apiKey === "dein_resend_api_key" || !contactToEmail) {
            console.error("Missing contact mail configuration.");
            return jsonResponse(
                { success: false, error: "Der E-Mail-Versand ist noch nicht vollständig konfiguriert." },
                500
            );
        }

        const resend = new Resend(apiKey);
        const subjectName = fields.name.replace(/[^\p{L}\p{N}\s.-]/gu, "").slice(0, 60);
        const replyTo = fields.email || undefined;

        await resend.emails.send({
            from: `WAW Nutzfahrzeuge <${fromEmail}>`,
            to: contactToEmail,
            replyTo,
            subject: `Neue Anfrage von ${subjectName}`,
            text: buildLeadText(fields),
            html: buildLeadHtml(fields),
            headers: {
                "X-Entity-Ref-ID": `waw-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
            },
        });

        if (fields.email) {
            await resend.emails.send({
                from: `WAW Nutzfahrzeuge <${fromEmail}>`,
                to: fields.email,
                replyTo: contactToEmail,
                subject: "Ihre Anfrage bei WAW Nutzfahrzeuge ist eingegangen",
                text: buildConfirmationText(fields.name),
                html: buildConfirmationHtml(fields.name),
            });
        }

        return jsonResponse({ success: true, redirectTo: REDIRECT_TO });
    } catch (error) {
        console.error("Contact form error", error);
        return jsonResponse(
            { success: false, error: "Die Anfrage konnte nicht gesendet werden. Bitte rufen Sie direkt an oder versuchen Sie es erneut." },
            500
        );
    }
};
