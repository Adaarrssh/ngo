import "../styles/hero.css";
import heroImage from "../assets/hero-image.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content" data-aos="fade-right">
        <h1>Empowering Women Creating Equal Opportunities For Every Future</h1>

        <p>
          She Can Foundation is a non-governmental organization dedicated to
          empowering women through education, support, training, and
          community-driven initiatives that create lasting social impact.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Join Us</button>

          <button className="secondary-btn">Learn More</button>
        </div>
      </div>

      <div className="hero-image" data-aos="fade-left">
        <img src={heroImage} alt="NGO Support" />
      </div>
    </section>
  );
}

export default Hero;
