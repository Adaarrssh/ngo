import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/about.css";

function About() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="about-page-hero">
        <div className="about-page-content" data-aos="fade-right">
          <h1>About She Can Foundation</h1>

          <p>
            She Can Foundation is a non-governmental organization dedicated to
            empowering women and creating equal opportunities through education,
            mentorship, awareness initiatives, and community support.
          </p>
        </div>
      </section>

      {/* Our Story */}

      <section className="our-story">
        <div className="story-left" data-aos="fade-right">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1400&auto=format&fit=crop"
            alt="Community"
          />
        </div>

        <div className="story-right" data-aos="fade-left">
          <h2>Our Story</h2>

          <p>
            She Can Foundation was established with the vision of empowering
            women and creating equal opportunities through education,
            mentorship, awareness, and community-driven initiatives.
          </p>

          <p>
            Through volunteer support and impactful programs, the foundation
            continues working toward building a more inclusive and equitable
            society.
          </p>
        </div>
      </section>

      {/* Timeline */}

      <section className="timeline-section">
        <h2 data-aos="fade-up">Our Journey</h2>

        <div className="timeline">
          <div className="timeline-item" data-aos="fade-up">
            <span>2021</span>

            <h3>Foundation Started</h3>

            <p>
              Began with a mission to support women through awareness and
              community programs.
            </p>
          </div>

          <div className="timeline-item" data-aos="fade-up">
            <span>2023</span>

            <h3>Expanded Initiatives</h3>

            <p>Introduced mentorship, education, and outreach initiatives.</p>
          </div>

          <div className="timeline-item" data-aos="fade-up">
            <span>2025</span>

            <h3>Growing Community Impact</h3>

            <p>
              Continued empowering communities through volunteers and awareness
              campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}

      <section className="founder-profile">
        <div className="founder-image" data-aos="fade-right">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
            alt="Founder"
          />
        </div>

        <div className="founder-content" data-aos="fade-left">
          <h2>Reeta Mishra</h2>

          <span>Founder & President, She Can Foundation</span>

          <p>
            Reeta Mishra founded She Can Foundation with the vision of creating
            equal opportunities for women through education, awareness,
            mentorship, and community support initiatives.
          </p>

          <p>
            Under her leadership, the organization continues working toward
            building a more inclusive and empowered society through impactful
            programs and volunteer-driven efforts.
          </p>
        </div>
      </section>

      {/* Founder Message */}

      <section className="founder-section">
        <div className="founder-box" data-aos="zoom-in">
          <h2>Message From Our Team</h2>

          <p>
            “We believe every woman deserves equal opportunities, support, and
            encouragement to grow, lead, and succeed. Together, we can create
            meaningful social change.”
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
