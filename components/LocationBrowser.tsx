"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import type { Location } from "@/lib/locations";
import { LocationVisual } from "./LocationVisual";

type LocationBrowserProps = {
  locations: Location[];
};

export function LocationBrowser({ locations }: LocationBrowserProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [canPreviewLocations, setCanPreviewLocations] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 901px)");
    const syncPreviewMode = () => {
      setCanPreviewLocations(query.matches);
      if (!query.matches) {
        setActiveSlug(null);
      }
    };

    syncPreviewMode();
    query.addEventListener("change", syncPreviewMode);

    return () => query.removeEventListener("change", syncPreviewMode);
  }, []);

  function previewLocation(slug: string) {
    if (canPreviewLocations) {
      setActiveSlug(slug);
    }
  }

  function clearPreview() {
    if (canPreviewLocations) {
      setActiveSlug(null);
    }
  }

  return (
    <section className="location-browser" id="locations" aria-label="KN Media billboard locations">
      <div className="preview-pane" aria-hidden="true">
        <div className={`preview-empty ${activeSlug ? "is-muted" : ""}`}>
          <div className="preview-hero-copy">
            <p className="kicker">KN Media</p>
            <h1>
              Premium Outdoor Advertising
              <br />
              for New Zealand
              <br />
              Businesses.
            </h1>
            <Link className="cta-button" href="/contact">Contact Now</Link>
          </div>
        </div>
        {locations.map((location) => (
          <LocationVisual key={location.slug} location={location} active={activeSlug === location.slug} />
        ))}
      </div>

      <div className="location-list">
        <header className="location-list-header">
          <p className="kicker">Billboard locations</p>
          <h2>Some of our work</h2>
          <p>Hover or tap a location to preview the placement.</p>
        </header>
        {locations.map((location) => (
          <Link
            className={`location-link ${activeSlug === location.slug ? "is-selected" : ""}`}
            href={`/locations/${location.slug}`}
            key={location.slug}
            aria-current={activeSlug === location.slug ? "true" : undefined}
            onMouseEnter={() => previewLocation(location.slug)}
            onFocus={() => previewLocation(location.slug)}
            onMouseLeave={clearPreview}
            onBlur={clearPreview}
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
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
