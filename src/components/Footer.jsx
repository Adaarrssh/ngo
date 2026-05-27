import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>She Can Foundation</h2>

          <p>
            Creating positive impact through education, community support, and
            volunteer initiatives.
          </p>
          <p>Together We Can Create Change.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/programs">Programs</a>
          <a href="/stories">Stories</a>
          <a href="/volunteer">Volunteer</a>
        </div>

        <div className="footer-socials">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 She Can Foundation. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
