
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            SK<span>.</span>
          </a>

          <p>
            Full Stack Developer passionate about creating
            modern web applications and exploring new technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <h3>Connect With Me</h3>

          <div className="footer-icons">

            <a
              href="https://github.com/shivanipriyaks498-netizen"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>

            <a
              href="mailto:shivanipriyaks498@gmail.com"
              aria-label="Email"
            >
              ✉
            </a>

          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Shivani Priya KS.
          All Rights Reserved.
        </p>

        <a href="#home" className="back-to-top">
          Back to Top ↑
        </a>

      </div>

    </footer>
  );
}

export default Footer;
