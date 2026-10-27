type MailResult = { data: { id: string } | null; error: { message: string } | null };

export async function deliverInquiry(
  sendLead: () => Promise<MailResult>,
  sendConfirmation: (() => Promise<MailResult>) | undefined,
  logError: (message: string) => void,
) {
  const lead = await sendLead();
  if (lead.error || !lead.data?.id) {
    logError("Contact inquiry delivery was rejected.");
    throw new Error("Inquiry delivery failed");
  }

  if (sendConfirmation) {
    try {
      const confirmation = await sendConfirmation();
      if (confirmation.error || !confirmation.data?.id) {
        logError("Contact confirmation delivery was rejected; inquiry was accepted.");
      }
    } catch {
      logError("Contact confirmation delivery failed; inquiry was accepted.");
    }
  }
}
