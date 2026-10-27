import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { cityAliasRoutes, indexableCitySlugs } from "./src/data/cities.ts";
import { getCitySlugFromPath, getRouteKeyFromPath, routeMap } from "./src/data/i18n.ts";

export default defineConfig({
  site: "https://www.wawnutzfahrzeuge.de",
  redirects: {
    "/service": { destination: "/leistungen", status: 301 },
    "/unser-team": { destination: "/ueber-uns", status: 301 },
  },

  integrations: [
    sitemap({
      filter: (url) => {
        const path = new URL(url).pathname.replace(/\/$/, "") || "/";
        if (path === "/service" || path === "/unser-team" || /\/danke$/.test(path) || path.startsWith("/api/")) return false;
        if (cityAliasRoutes.some((prefix) => path.startsWith(`/${prefix}/`))) return false;
        const citySlug = getCitySlugFromPath(path);
        if (citySlug) return indexableCitySlugs.has(citySlug);
        const key = getRouteKeyFromPath(path);
        return !key || Object.values(routeMap[key]).includes(path);
      },
    })
  ],

  adapter: vercel()
});