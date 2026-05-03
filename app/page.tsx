import Link from "next/link";
import { LocationBrowser } from "@/components/LocationBrowser";
import { LogoCarousel } from "@/components/LogoCarousel";
import { SiteFooter } from "@/components/SiteFooter";
import { locations } from "@/lib/locations";

export default function HomePage() {
  return (
    <main className="home-page" id="main">
      <h1 className="sr-only">KN Media Billboard Locations</h1>
      <LocationBrowser locations={locations} />
      <LogoCarousel />

      <section className="contact-strip" id="contact" aria-labelledby="contact-title">
        <div className="contact-strip-copy">
          <p className="kicker">Enquire</p>
          <h2 id="contact-title">Request availability.</h2>
          <p>Tell us which billboard location you are interested in and we will confirm availability, timing, and next steps.</p>
        </div>
        <div className="contact-strip-actions">
          <Link className="cta-button" href="/contact">Enquire now</Link>
          <a href="tel:+642102831862">+64 210 283 1862</a>
          <a href="mailto:hello@knmedia.co.id?subject=Billboard%20location%20enquiry">hello@knmedia.co.id</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
