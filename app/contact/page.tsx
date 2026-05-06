import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { InstagramFeed } from "@/components/InstagramFeed";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact KN Media to ask about billboard location availability.",
};

export default function ContactPage() {
  return (
    <main className="contact-layout-page" id="main">
      <section className="contact-card" aria-labelledby="contact-title">
        <div className="contact-intro">
          <h1 id="contact-title">Have a question?</h1>
          <p>We are here to help. Fill out the form or reach out directly and the KN Media team will get back to you.</p>
          <div className="contact-list">
            <a href="tel:+64212532077">+64 21 253 2077</a>
            <a href="mailto:kobe@knmedia.co.nz">kobe@knmedia.co.nz</a>
            <a href="mailto:nic@knmedia.co.nz">nic@knmedia.co.nz</a>
          </div>
        </div>

        <ContactForm />
      </section>
      <InstagramFeed />
      <SiteFooter />
    </main>
  );
}
