import Link from "next/link";
import { locations } from "@/lib/locations";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <nav className="footer-nav" aria-label="Footer navigation">
        <Link href="/about">About</Link>
        <Link href="/#contact">Enquire</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <div className="footer-locations" aria-label="Billboard locations">
        <h2>Locations</h2>
        <div>
          {locations.map((location) => (
            <Link key={location.slug} href={`/locations/${location.slug}`}>
              {location.name}
            </Link>
          ))}
        </div>
      </div>

      <address className="footer-contact">
        <strong>KN Media</strong>
        <span>AUCKLAND</span>
        <a href="tel:+642102831862">+64 210 283 1862</a>
        <a href="mailto:hello@knmedia.co.id">hello@knmedia.co.id</a>
      </address>

      <div className="footer-meta">
        <span>&copy; 2026 KN Media</span>
      </div>
    </footer>
  );
}
