import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";

function getSiteUrl() {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    "http://localhost:3000";

  return url.startsWith("http") ? url : `https://${url}`;
}

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "KN Media | Billboard Locations",
    template: "%s | KN Media",
  },
  description: "Preview KN Media billboard locations across Auckland and Christchurch high-traffic districts.",
  openGraph: {
    title: "KN Media | Billboard Locations",
    description: "A location-first preview of KN Media billboard sites.",
    url: "/",
    siteName: "KN Media",
    images: ["/assets/img/og-preview.svg"],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KN Media | Billboard Locations",
    description: "A location-first preview of KN Media billboard sites.",
    images: ["/assets/img/og-preview.svg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const siteUrl = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "KN Media",
    url: siteUrl,
    email: "kobe@knmedia.co.nz",
    telephone: "+64212532077",
    areaServed: ["Auckland", "Christchurch", "New Zealand"],
    serviceType: "Street billboard advertising",
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
      </body>
    </html>
  );
}
