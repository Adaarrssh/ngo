import "../styles/storiespreview.css";

function StoriesPreview() {
  return (
    <section className="stories-section">
      <div className="stories-top">
        <h2>Success Stories</h2>

        <p>
          Real stories of change, growth, and impact created through our
          initiatives and volunteers.
        </p>
      </div>

      <div className="stories-grid">
        <div className="story-card" data-aos="fade-up">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop"
            alt="Story"
          />

          <div className="story-content">
            <h3>Priya Sharma</h3>

            <p>
              “Through She Can Foundation’s training programs, I gained
              confidence, communication skills, and opportunities to support my
              family.”
            </p>
          </div>
        </div>

        <div className="story-card">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
            alt="Story"
          />

          <div className="story-content">
            <h3>Anjali Verma</h3>

            <p>
              “The mentorship and support I received helped me continue my
              education and become financially independent.”
            </p>
          </div>
        </div>

        <div className="story-card">
          <img
            src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1200&auto=format&fit=crop"
            alt="Story"
          />

          <div className="story-content">
            <h3>Riya Patel</h3>

            <p>
              “Volunteering with She Can Foundation allowed me to create real
              impact while learning leadership and teamwork.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoriesPreview;
