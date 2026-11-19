
import { motion } from "framer-motion";
import "./Home.css";

function Home() {
  return (
    <section className="home" id="home">

      {/* Left introduction */}
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="hero-small">Hello, I'm</p>

        <h1>
          Shivani
          <br />
          <span>Priya KS</span>
        </h1>
      </motion.div>

      {/* Centre profile photo */}
      <motion.div
        className="hero-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="photo-glow"></div>

        <img
          src="/images/Profile%20Photo%203.png"
          alt="Shivani Priya KS"
          className="profile-photo"
        />
      </motion.div>

      {/* Right introduction */}
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="hero-small">Creative</p>

        <h2>
          Full Stack
          <br />
          <span>Developer</span>
        </h2>
      </motion.div>

      {/* Social icons */}
      <motion.div
        className="hero-actions"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="hero-socials">

          <a
            href="mailto:shivanipriyaks498@gmail.com"
            className="social-btn"
            title="Email"
            aria-label="Email"
          >
            ✉
          </a>

          <a
            href="https://github.com/shivanipriyaks498-netizen"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
            title="GitHub"
            aria-label="GitHub"
          >
            GH
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            in
          </a>

        </div>

        {/* Resume button */}
        <a
          href="/files/Shivani%20Priya%20KS%20-%20Resume.pdf"
          download="Shivani Priya KS - Resume.pdf"
          className="resume-btn"
        >
          <span className="download-icon">↓</span>
          Download Resume
        </a>

      </motion.div>

    </section>
  );
}

export default Home;
