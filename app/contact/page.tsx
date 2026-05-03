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
            <a href="tel:+642102831862">+64 210 283 1862</a>
            <a href="mailto:hello@knmedia.co.id">hello@knmedia.co.id</a>
          </div>
        </div>

        <ContactForm />
      </section>
      <InstagramFeed />
      <SiteFooter />
    </main>
  );
}
