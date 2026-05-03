import Link from "next/link";

export default function NotFound() {
  return (
    <main className="content-page" id="main">
      <section className="content-hero">
        <p className="kicker">Not found</p>
        <h1>This page is not available.</h1>
        <p>
          The location or page may have moved. Return to the locations list to continue browsing KN Media placements.
        </p>
        <Link className="back-link" href="/#locations">
          Back to locations
        </Link>
      </section>
    </main>
  );
}
