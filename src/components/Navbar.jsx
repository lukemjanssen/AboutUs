import { useState, useEffect } from "react";
import "./Navbar.css";
import logoSvg from "../assets/logo.svg";
import menuIcon from "../assets/icon-menu.svg";
import closeIcon from "../assets/icon-close.svg";
import CtaButtons from "./CtaButtons";

// Defined once outside the component — never changes, no need to recreate on re-render
const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Lock body scroll when drawer is open so the page behind doesn't scroll
  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = ""; // Clean up on unmount
    };
  }, [isDrawerOpen]);

  return (
    <header className="navbar">
      {/* ── Desktop bar ─────────────────────────────────────── */}
      <div className="navbar-inner">
        <a href="/" className="navbar-logo">
          <img src={logoSvg} alt="" className="navbar-logo__image" />
          <span className="navbar-logo__mark">Abstractly</span>
        </a>

        <nav className="navbar-nav">
          <ul className="navbar-nav__list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href} className="navbar-nav__item">
                <a href={href} className="navbar-nav__link">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <CtaButtons className="navbar-cta" />

        <button
          className="navbar-hamburger"
          onClick={() => setIsDrawerOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isDrawerOpen}
          aria-controls="mobile-nav"
        >
          <img src={menuIcon} alt="" />
        </button>
      </div>

      {/* ── Overlay — darkens page behind the drawer ─────────── */}
      <div
        className={`navbar-overlay${isDrawerOpen ? " is-open" : ""}`}
        onClick={() => setIsDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile drawer ────────────────────────────────────── */}
      <div
        id="mobile-nav"
        className={`navbar-drawer${isDrawerOpen ? " is-open" : ""}`}
      >
        {/* Drawer header — logo + close button */}
        <div className="navbar-drawer__header">
          <a href="/" className="navbar-logo">
            <img src={logoSvg} alt="" className="navbar-logo__image" />
            <span className="navbar-logo__mark">Abstractly</span>
          </a>
          <button
            className="navbar-hamburger"
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close navigation menu"
          >
            <img src={closeIcon} alt="" />
          </button>
        </div>

        {/* Same NAV_LINKS data, vertical layout via CSS */}
        <nav className="navbar-drawer__nav">
          <ul className="navbar-drawer__list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="navbar-drawer__link"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Same btn classes — fullWidth stacks them vertically and stretches to 100% */}
        <CtaButtons
          fullWidth={true}
          onLinkClick={() => setIsDrawerOpen(false)}
        />
      </div>
    </header>
  );
};

export default Navbar;
