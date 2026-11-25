
import { motion } from "framer-motion";
import "./Skills.css";

const categories = [
  {
    number: "01",
    title: "Web Development",
    icon: "🌐",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Programming Languages",
    icon: "💻",
    skills: ["Python", "Java", "JavaScript"],
  },
  {
    number: "03",
    title: "Database & Backend",
    icon: "🗄️",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST API", "JWT Authentication"],
  },
  {
    number: "04",
    title: "Data Analytics",
    icon: "📊",
    skills: ["Power BI", "Pandas", "NumPy", "Matplotlib", "Web Scraping", "Data Visualization"],
  },
  {
    number: "05",
    title: "Tools & Technologies",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "Postman", "npm"],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">

      <motion.div
        className="skills-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p>MY TECHNICAL EXPERTISE</p>
        <h2>
          My <span>Skills</span>
        </h2>
        <h4>Technologies and tools I work with</h4>
      </motion.div>

      <div className="skills-grid">

        {categories.map((category, index) => (
          <motion.div
            className="skill-category-card"
            key={category.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >

            <div className="skill-category-top">
              <span className="skill-number">
                {category.number}
              </span>

              <span className="skill-category-icon">
                {category.icon}
              </span>
            </div>

            <h3>{category.title}</h3>

            <div className="skill-technologies">
              {category.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Skills;
