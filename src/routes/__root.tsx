import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { BUSINESS } from "@/lib/business";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: BUSINESS.seoTitle },
      { name: "description", content: BUSINESS.seoDescription },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#A31F1A" },
      { name: "author", content: BUSINESS.name },
      { name: "geo.region", content: "US-PA" },
      { name: "geo.placename", content: "Phoenixville" },
      { name: "geo.position", content: "40.1336;-75.5159" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_US" },
      { property: "og:site_name", content: BUSINESS.name },
      { property: "og:title", content: BUSINESS.seoTitle },
      { property: "og:description", content: BUSINESS.seoDescription },
      { property: "og:url", content: `${BUSINESS.siteUrl}/` },
      { property: "og:image", content: `${BUSINESS.siteUrl}/og.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: BUSINESS.seoTitle },
      { name: "twitter:description", content: BUSINESS.seoDescription },
      { name: "twitter:image", content: `${BUSINESS.siteUrl}/og.jpg` },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "canonical", href: `${BUSINESS.siteUrl}/` },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/og.jpg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;1,400&family=Fraunces:opsz,wght@9..144,500;9..144,600&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="es" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
