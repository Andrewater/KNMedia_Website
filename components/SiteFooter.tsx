import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <address className="footer-contact">
        <Logo href="/" />
        <a href="tel:+64212532077">+64 21 253 2077</a>
        <a href="mailto:kobe@knmedia.co.nz">kobe@knmedia.co.nz</a>
        <a href="mailto:nic@knmedia.co.nz">nic@knmedia.co.nz</a>
      </address>

      <div className="footer-meta">
        <span>&copy; 2026 KN Media</span>
      </div>
    </footer>
  );
}
