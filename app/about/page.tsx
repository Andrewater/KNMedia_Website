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
        <h1>NZ’s Fasting Growing Street Billboard Company</h1>
        <p>
          Framed, gallery-quality A0 posters hung exclusively in affluent, high-traffic locations across Auckland and
          Christchurch. No clutter. No cheap corners. Just premium physical media for brands that serve discerning
          customers.
        </p>
      </section>

      <section className="content-grid" aria-label="Company notes">
        <article>
          <h2>Framed</h2>
          <p>Gallery-quality A0 placements designed to feel considered, physical, and premium.</p>
        </article>
        <article>
          <h2>Selective</h2>
          <p>Locations are chosen for affluent foot traffic, visibility, and brand context.</p>
        </article>
        <article>
          <h2>Uncluttered</h2>
          <p>No cheap corners, no visual noise, just media for brands serving discerning customers.</p>
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}
