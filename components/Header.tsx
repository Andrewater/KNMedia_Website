"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { locations } from "@/lib/locations";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="site-header">
        <Logo />
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <aside className={`site-menu ${open ? "is-open" : ""}`} id="site-menu" aria-hidden={!open}>
        <button className="menu-scrim" type="button" onClick={() => setOpen(false)} aria-label="Close menu" />
        <nav className="menu-panel" aria-label="Site menu">
          <button className="menu-close" type="button" onClick={() => setOpen(false)}>
            Close
          </button>
          <Link href="/#locations">Locations</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <div className="menu-sites">
            {locations.map((location) => (
              <Link key={location.slug} href={`/locations/${location.slug}`}>
                {location.name}
              </Link>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
}
