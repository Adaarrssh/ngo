import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaHandsHelping,
  FaUserGraduate,
  FaPeopleCarry,
  FaChalkboardTeacher,
  FaHeart,
  FaGlobe,
} from "react-icons/fa";

import "../styles/programs.css";

function Programs() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="programs-page-hero">
        <div className="programs-page-content" data-aos="fade-right">
          <h1>Our Programs</h1>

          <p>
            She Can Foundation organizes impactful initiatives focused on
            empowering women through education, awareness campaigns, mentorship,
            training, and community-driven support programs.
          </p>
        </div>
      </section>

      {/* Programs Grid */}

      <section className="programs-page-grid">
        <div className="programs-page-card" data-aos="fade-up">
          <FaHandsHelping className="programs-page-icon" />

          <h2>Women Empowerment</h2>

          <p>
            Supporting women through leadership opportunities, awareness
            initiatives, confidence-building, and personal development programs.
          </p>
        </div>

        <div className="programs-page-card" data-aos="fade-up">
          <FaUserGraduate className="programs-page-icon" />

          <h2>Education & Training</h2>

          <p>
            Providing mentorship, educational support, workshops, and practical
            learning opportunities for long-term growth.
          </p>
        </div>

        <div className="programs-page-card" data-aos="fade-up">
          <FaPeopleCarry className="programs-page-icon" />

          <h2>Community Outreach</h2>

          <p>
            Organizing awareness campaigns and volunteer-driven initiatives that
            uplift underserved communities.
          </p>
        </div>

        <div className="programs-page-card" data-aos="fade-up">
          <FaChalkboardTeacher className="programs-page-icon" />

          <h2>Mentorship Programs</h2>

          <p>
            Connecting individuals with mentors who guide, inspire, and support
            their educational and personal journeys.
          </p>
        </div>

        <div className="programs-page-card" data-aos="fade-up">
          <FaHeart className="programs-page-icon" />

          <h2>Support Initiatives</h2>

          <p>
            Creating programs focused on emotional support, social awareness,
            and community care initiatives.
          </p>
        </div>

        <div className="programs-page-card" data-aos="fade-up">
          <FaGlobe className="programs-page-icon" />

          <h2>Awareness Campaigns</h2>

          <p>
            Spreading awareness about equality, education, empowerment, and
            social change through campaigns and outreach activities.
          </p>
        </div>
      </section>

      {/* CTA */}

      <section className="programs-bottom-cta">
        <div className="programs-bottom-content" data-aos="zoom-in">
          <h2>Be Part Of The Change</h2>

          <p>
            Join our initiatives and help us create meaningful impact in
            communities.
          </p>

          <button>Join Us</button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Programs;
