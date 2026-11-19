
import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
  { name: "HTML5", icon: "🌐", level: "Advanced" },
  { name: "CSS3", icon: "🎨", level: "Advanced" },
  { name: "JavaScript", icon: "⚡", level: "Intermediate" },
  { name: "React.js", icon: "⚛️", level: "Intermediate" },
  { name: "Node.js", icon: "🟢", level: "Learning" },
  { name: "Express.js", icon: "🚀", level: "Learning" },
  { name: "MongoDB", icon: "🍃", level: "Learning" },
  { name: "Python", icon: "🐍", level: "Intermediate" },
  { name: "Git & GitHub", icon: "💻", level: "Intermediate" },
  { name: "Power BI", icon: "📊", level: "Learning" },
];

function Skills() {
  return (
    <section className="skills" id="skills">

      <motion.div
        className="skills-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>MY TECHNICAL EXPERTISE</p>
        <h2>My <span>Skills</span></h2>
        <h4>Technologies and tools I work with</h4>
      </motion.div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={skill.name}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.03 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <span>{skill.level}</span>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Skills;
