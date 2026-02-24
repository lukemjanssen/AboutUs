import "./CtaButtons.css";

// Reusable CTA button pair used in: Navbar desktop, Navbar drawer, Hero section
const CtaButtons = ({ size = "base", fullWidth = false, onLinkClick }) => {
  const sizeClass  = size === "lg" ? "btn--lg"   : "";
  const widthClass = fullWidth      ? "btn--full" : "";

  // filter(Boolean) removes empty strings before joining — no stray spaces in the DOM
  const classes = (base) => [base, sizeClass, widthClass].filter(Boolean).join(" ");

  const wrapperClass = ["cta-buttons", fullWidth && "cta-buttons--stacked", size === "lg" && "cta-buttons--lg"]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClass}>
      <a
        href="#learn-more"
        className={classes("btn btn--secondary")}
        onClick={onLinkClick}
      >
        Learn more
      </a>
      <a
        href="#pricing"
        className={classes("btn btn--primary")}
        onClick={onLinkClick}
      >
        See pricing
      </a>
    </div>
  );
};

export default CtaButtons;
