import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LocationVisual } from "@/components/LocationVisual";
import { SiteFooter } from "@/components/SiteFooter";
import { getLocation, locations } from "@/lib/locations";

type LocationPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);

  if (!location) {
    return { title: "Location Not Found" };
  }

  return {
    title: location.name,
    description: `Preview KN Media billboard availability at ${location.name}, ${location.area}. Close to ${location.nearby.join(", ")}.`,
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
    openGraph: {
      title: `${location.name} | KN Media`,
      description: `Preview this KN Media billboard location near ${location.nearby.join(", ")}.`,
      images: [location.image],
      type: "website",
    },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocation(slug);

  if (!location) {
    notFound();
  }

  return (
    <main className="detail-page" id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            name: location.name,
            address: location.area,
            image: location.image,
            amenityFeature: location.nearby.map((place) => ({
              "@type": "LocationFeatureSpecification",
              name: `Close to ${place}`,
            })),
          }),
        }}
      />
      <section className="detail-hero">
        <LocationVisual location={location} detail active />
        <div className="detail-copy">
          <h1>{location.name}</h1>
          <p className="district">{location.area}</p>
          <ul className="detail-list">
            {location.nearby.map((place) => (
              <li key={place}>Close to {place}</li>
            ))}
          </ul>
          <Link className="back-link" href="/#locations">
            Back to locations
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
