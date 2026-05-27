import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import { useState } from "react";

import "../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">She Can Foundation</div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/programs">Programs</NavLink>
        </li>

        <li>
          <NavLink to="/stories">Stories</NavLink>
        </li>

        <li>
          <NavLink to="/volunteer">Volunteer</NavLink>
        </li>
      </ul>

      <button className="join-btn" onClick={() => navigate("/volunteer")}>
        Join Us
      </button>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
