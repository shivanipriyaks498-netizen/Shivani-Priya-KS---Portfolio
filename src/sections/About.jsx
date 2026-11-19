
import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <motion.div
        className="about-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="about-subtitle">GET TO KNOW </p>
        <h2>About <span>Me</span></h2>
      </motion.div>

      <div className="about-content">

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>
            I'm <span>Shivani Priya KS</span>
          </h3>

          <h4>Creative Full Stack Developer</h4>

          <p>
            Hello! I'm Shivani Priya KS, a passionate
            developer interested in building modern,
            responsive and interactive web applications.
          </p>

          <p>
            I enjoy learning new technologies, solving
            problems and transforming creative ideas
            into meaningful digital experiences.
          </p>

          <p>
            My goal is to continuously improve my
            development skills and create applications
            that provide great user experiences.
          </p>

          <a href="#contact" className="about-btn">
            Let's Connect ↗
          </a>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-card-glow"></div>

          <h3>My Passion</h3>

          <div className="passion-item">
            <span>01</span>
            <p>Web Development</p>
          </div>

          <div className="passion-item">
            <span>02</span>
            <p>Creative UI Design</p>
          </div>

          <div className="passion-item">
            <span>03</span>
            <p>Problem Solving</p>
          </div>

          <div className="passion-item">
            <span>04</span>
            <p>Continuous Learning</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
