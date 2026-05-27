import "../styles/impact.css";

function Impact() {
  return (
    <section className="impact-section">
      <div className="impact-heading">
        <h2>Our Impact</h2>

        <p>
          Together with our volunteers and supporters, She Can Foundation
          continues empowering women and creating meaningful social change
          through education, awareness, and community initiatives.
        </p>
      </div>

      <div className="impact-cards">
        <div className="impact-card" data-aos="zoom-in">
          <h3>5000+</h3>

          <p>Women Supported</p>
        </div>

        <div className="impact-card" data-aos="zoom-in">
          <h3>120+</h3>

          <p>Community Programs</p>
        </div>

        <div className="impact-card" data-aos="zoom-in">
          <h3>300+</h3>

          <p>Active Volunteers</p>
        </div>
      </div>
    </section>
  );
}

export default Impact;
