
import { motion } from "framer-motion";
import "./Experience.css";

const experiences = [
  {
    title: "Web Development Intern",
    company: "CodeAlpha",
    duration: "2026",
    status: "In Progress",
    description:
      "Currently participating in an internship at CodeAlpha, gaining practical experience through development tasks and projects.",
    icon: "💻",
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">

      <motion.div
        className="experience-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p>MY PROFESSIONAL JOURNEY</p>
        <h2>Internship & <span>Experience</span></h2>
        <h4>Where learning meets practical experience</h4>
      </motion.div>

      <div className="experience-grid">
        {experiences.map((item, index) => (
          <motion.div
            className="experience-card"
            key={item.company}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -10 }}
          >
            <div className="experience-top">
              <span className="experience-icon">{item.icon}</span>
              <span className="experience-status">
                {item.status}
              </span>
            </div>

            <p className="experience-year">{item.duration}</p>

            <h3>{item.title}</h3>
            <h4>{item.company}</h4>

            <p className="experience-description">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Experience;
