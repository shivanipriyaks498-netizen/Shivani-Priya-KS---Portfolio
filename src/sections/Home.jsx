
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
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

          {/* Email */}
          <a
            href="mailto:shivanipriyaks498@gmail.com"
            className="social-btn"
            title="Email"
            aria-label="Email"
          >
            <FaEnvelope className="social-icon" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/shivanipriyaks498-netizen"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
            title="GitHub"
            aria-label="GitHub"
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3.01 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.02.75 2.06v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shivani-priya-ks"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.03 18.34H5.07V9.02h2.96v9.32ZM6.55 7.75a1.72 1.72 0 1 1 .02-3.44 1.72 1.72 0 0 1-.02 3.44Zm12.3 10.59h-2.96v-4.54c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.62H9.7V9.02h2.84v1.27h.04c.4-.73 1.36-1.5 2.8-1.5 2.99 0 3.54 1.97 3.54 4.54v5.01Z" />
            </svg>
          </a>

        </div>

        {/* Resume button */}
        <a
          href="/files/Shivani%20Priya%20KS_Resume.pdf"
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
