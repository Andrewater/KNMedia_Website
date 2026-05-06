import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "About",
  description: "About KN Media and its premium physical media network.",
};

export default function AboutPage() {
  return (
    <main className="content-page" id="main">
      <section className="content-hero">
        <p className="kicker">About</p>
        <h1>NZ'S FASTEST GROWING OUTDOOR ADVERTISEMENT COMPANY</h1>
        <p>
          Framed, gallery-quality A0 posters hung exclusively in affluent, high-traffic locations across Auckland and
          Christchurch. No clutter. No cheap corners. Just premium physical media for brands that serve discerning
          customers.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
