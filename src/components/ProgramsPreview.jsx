import {
  FaLaptopCode,
  FaChalkboardTeacher,
  FaHandsHelping,
} from "react-icons/fa";

import "../styles/programspreview.css";

function ProgramsPreview() {
  return (
    <section className="programs-section">
      <div className="programs-top">
        <h2>Our Programs</h2>

        <p>
          We organize impactful programs focused on education, mentorship, and
          community support to create long-term positive change.
        </p>
      </div>

      <div className="programs-grid">
        <div className="program-card" data-aos="zoom-in">
          <FaLaptopCode className="program-icon" />

          <h3>Women Empowerment</h3>

          <p>
            Supporting women through skill development, leadership
            opportunities, and access to essential resources.
          </p>
        </div>

        <div className="program-card">
          <FaChalkboardTeacher className="program-icon" />

          <h3>Education & Training</h3>

          <p>
            Providing workshops, mentorship programs, and educational support
            for long-term growth.
          </p>
        </div>

        <div className="program-card">
          <FaHandsHelping className="program-icon" />

          <h3>Community Outreach</h3>

          <p>
            Creating awareness campaigns and volunteer initiatives that uplift
            underserved communities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProgramsPreview;
