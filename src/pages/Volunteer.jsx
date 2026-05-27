import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FaHandsHelping, FaUsers, FaHeart, FaArrowRight } from "react-icons/fa";

import "../styles/volunteer.css";

function Volunteer() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="volunteer-hero">
        <div className="volunteer-hero-content" data-aos="fade-right">
          <h1>Become A Volunteer</h1>

          <p>
            Join our mission to empower communities, support meaningful
            initiatives, and create positive social impact together.
          </p>

          <a href="#volunteer-form">
            <button>Join The Team</button>
          </a>
        </div>
      </section>

      {/* Why Volunteer */}

      <section className="why-volunteer">
        <div className="section-heading">
          <h2>Why Volunteer With Us?</h2>

          <p>
            Volunteers are the backbone of our initiatives. Together we can
            inspire change and support communities.
          </p>
        </div>

        <div className="volunteer-cards">
          <div className="volunteer-card" data-aos="fade-up">
            <FaHandsHelping />

            <h3>Meaningful Impact</h3>

            <p>
              Contribute directly toward programs that positively affect
              communities.
            </p>
          </div>

          <div className="volunteer-card" data-aos="fade-up">
            <FaUsers />

            <h3>Community Network</h3>

            <p>
              Connect with passionate individuals working toward social
              development.
            </p>
          </div>

          <div className="volunteer-card" data-aos="fade-up">
            <FaHeart />

            <h3>Personal Growth</h3>

            <p>
              Build leadership, communication, and teamwork skills through
              volunteering.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}

      <section className="volunteer-form-section" id="volunteer-form">
        <div className="form-container" data-aos="zoom-in">
          <h2>Join Our Volunteer Team</h2>

          <form>
            <input type="text" placeholder="Full Name" />

            <input type="email" placeholder="Email Address" />

            <input type="text" placeholder="Phone Number" />

            <textarea
              rows="6"
              placeholder="Why do you want to volunteer with us?"
            ></textarea>

            <button type="submit">
              Submit Application
              <FaArrowRight />
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Volunteer;
