import Link from "next/link";
import { LocationBrowser } from "@/components/LocationBrowser";
import { LogoCarousel } from "@/components/LogoCarousel";
import { SiteFooter } from "@/components/SiteFooter";
import { locations } from "@/lib/locations";

export default function HomePage() {
  return (
    <main className="home-page" id="main">
      <LocationBrowser locations={locations} />
      <LogoCarousel />

      <section className="contact-strip" id="contact" aria-labelledby="contact-title">
        <div className="contact-strip-copy">
          <p className="kicker">Enquire</p>
          <h2 id="contact-title">Contact Now</h2>
          <p>Tell us which billboard location you are interested in and we will confirm availability, timing, and next steps.</p>
        </div>
        <div className="contact-strip-actions">
          <Link className="cta-button" href="/contact">Contact Now</Link>
          <a href="tel:+64212532077">+64 21 253 2077</a>
          <a href="mailto:kobe@knmedia.co.nz?cc=nic@knmedia.co.nz&subject=Billboard%20location%20enquiry">kobe@knmedia.co.nz</a>
          <a href="mailto:nic@knmedia.co.nz?subject=Billboard%20location%20enquiry">nic@knmedia.co.nz</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
