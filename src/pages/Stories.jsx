import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/stories.css";

function Stories() {
  const stories = [
    {
      name: "Priya Sharma",
      role: "Volunteer",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      text: "Volunteering with She Can Foundation gave me the opportunity to support communities while developing leadership and communication skills.",
    },

    {
      name: "Anjali Verma",
      role: "Student",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "The mentorship and support I received helped me continue my education and become more confident about my future.",
    },

    {
      name: "Riya Patel",
      role: "Community Member",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Through awareness programs and guidance sessions, I learned valuable skills that positively impacted my personal growth.",
    },

    {
      name: "Sneha Kapoor",
      role: "Volunteer",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "Working with the foundation allowed me to contribute toward meaningful social change and support important initiatives.",
    },

    {
      name: "Kavya Singh",
      role: "Program Participant",
      image: "https://randomuser.me/api/portraits/women/55.jpg",
      text: "The educational workshops and mentorship programs inspired me to continue learning and build confidence.",
    },

    {
      name: "Neha Gupta",
      role: "Volunteer",
      image: "https://randomuser.me/api/portraits/women/25.jpg",
      text: "Being part of She Can Foundation helped me connect with passionate people working toward empowering communities.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="stories-hero">
        <div className="stories-hero-content" data-aos="fade-right">
          <h1>Stories Of Change</h1>

          <p>
            Real stories from volunteers, students, and community members whose
            lives have been positively impacted through our initiatives.
          </p>
        </div>
      </section>

      {/* Stories Grid */}

      <section className="stories-grid-section">
        <div className="stories-grid">
          {stories.map((story, index) => (
            <div className="story-card" key={index} data-aos="fade-up">
              <img src={story.image} alt={story.name} />

              <h3>{story.name}</h3>

              <span>{story.role}</span>

              <p>"{story.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="stories-cta">
        <div className="stories-cta-content" data-aos="zoom-in">
          <h2>Become Part Of Our Journey</h2>

          <p>
            Join our volunteers and supporters in creating meaningful social
            impact.
          </p>

          <button>Join Us</button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Stories;
