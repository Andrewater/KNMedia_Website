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
  title: {
    default: "KN Media | Billboard Locations",
    template: "%s | KN Media",
  },
  description: "Preview KN Media billboard locations across Auckland and Christchurch high-traffic districts.",
  openGraph: {
    title: "KN Media | Billboard Locations",
    description: "A location-first preview of KN Media billboard sites.",
    images: ["/assets/img/og-preview.svg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
      </body>
    </html>
  );
}
