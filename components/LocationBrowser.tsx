"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useState } from "react";
import type { Location } from "@/lib/locations";
import { LocationVisual } from "./LocationVisual";

type LocationBrowserProps = {
  locations: Location[];
};

export function LocationBrowser({ locations }: LocationBrowserProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  return (
    <section className="location-browser" id="locations" aria-label="KN Media billboard locations">
      <div className="preview-pane" aria-hidden="true">
        {locations.map((location) => (
          <LocationVisual key={location.slug} location={location} active={activeSlug === location.slug} />
        ))}
      </div>

      <div className="location-list">
        <header className="location-list-header">
          <p className="kicker">Billboard locations</p>
          <h2>Locations</h2>
          <p>Hover or tap a location to preview the placement.</p>
        </header>
        {locations.map((location) => (
          <Link
            className={`location-link ${activeSlug === location.slug ? "is-selected" : ""}`}
            href={`/locations/${location.slug}`}
            key={location.slug}
            aria-current={activeSlug === location.slug ? "true" : undefined}
            onMouseEnter={() => setActiveSlug(location.slug)}
            onFocus={() => setActiveSlug(location.slug)}
            onMouseLeave={() => setActiveSlug(null)}
            onBlur={() => setActiveSlug(null)}
            onPointerDown={() => setActiveSlug(location.slug)}
          >
            <span
              className="location-mobile-image"
              aria-hidden="true"
              style={{ "--location-image": `url(${location.image})` } as CSSProperties}
            >
              <span>KN Media</span>
            </span>
            <span className="location-copy">
              <span className="location-name">{location.name}</span>
              <span className="location-area">{location.area}</span>
              <span className="location-near">{location.nearby.join(" / ")}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
