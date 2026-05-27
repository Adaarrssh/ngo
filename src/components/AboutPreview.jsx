import { FaHandsHelping, FaGraduationCap, FaUsers } from "react-icons/fa";
import "../styles/aboutpreview.css";

function AboutPreview() {
  return (
    <section className="about-preview">
      <div className="about-top">
        <h2>About She Can Foundation</h2>

        <p>
          Registered under the Indian Society Act, 1860, She Can Foundation
          works toward building a more equitable society by supporting women
          through education, awareness campaigns, skill development, mentorship,
          and community outreach programs.
        </p>
      </div>

      <div className="about-cards">
        <div className="about-card" data-aos="fade-up">
          <FaHandsHelping className="about-icon" />

          <h3>Community Support</h3>

          <p>
            Providing meaningful support and resources to communities in need.
          </p>
        </div>

        <div className="about-card">
          <FaGraduationCap className="about-icon" />

          <h3>Education Programs</h3>

          <p>
            Empowering individuals through learning, workshops, and mentorship
            opportunities.
          </p>
        </div>

        <div className="about-card">
          <FaUsers className="about-icon" />

          <h3>Volunteer Network</h3>

          <p>
            Building a strong network of passionate volunteers dedicated to
            social impact.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
