
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Training", id: "training" },
    { name: "Projects", id: "projects" },
    { name: "Certificates", id: "certificates" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="navbar">
      <a
        href="#home"
        className="logo"
        onClick={() => setMenuOpen(false)}
      >
        SK<span>.</span>
      </a>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((previous) => !previous)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="portfolio-navigation"
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
}

export default Navbar;
