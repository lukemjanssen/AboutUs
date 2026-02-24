import "./Hero.css";
import CtaButtons from "./CtaButtons";
import heroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">

        {/* Left column — text + buttons */}
        <div className="hero-message">
          <div className="hero-text">
            <h1 className="hero-title">Well crafted abstract images</h1>
            <p className="hero-subtitle">
              High quality abstract images for your projects, wallpaper and presentations.
            </p>
          </div>
          <CtaButtons size="lg" />
        </div>

        {/* Right column — image */}
        <div className="hero-image">
          <img src={heroImage} alt="A collection of colourful abstract shapes" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
