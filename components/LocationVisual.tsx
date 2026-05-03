import type { CSSProperties } from "react";
import type { Location } from "@/lib/locations";

type LocationVisualProps = {
  location: Location;
  active?: boolean;
  detail?: boolean;
};

export function LocationVisual({ location, active = false, detail = false }: LocationVisualProps) {
  const classes = [
    detail ? "detail-visual" : "preview-card",
    location.tone === "white" ? "tone-white is-white" : "tone-red",
    active ? "is-active" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      data-preview={location.slug}
      style={{ "--location-image": `url(${location.image})` } as CSSProperties}
    >
      <span className="site-code">{location.code}</span>
      <div className="preview-title">
        <h2>{location.name}</h2>
        <p>{location.area}</p>
      </div>
      <div className="preview-details">
        <strong>Close to</strong>
        {location.nearby.map((place) => (
          <span key={place}>{place}</span>
        ))}
      </div>
    </div>
  );
}
