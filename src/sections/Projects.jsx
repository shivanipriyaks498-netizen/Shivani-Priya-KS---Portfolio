
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "AI Airport Assistant",
    category: "MERN + AI PROJECT",
    description:
      "An intelligent airport companion that helps travellers with flight information, airport navigation, baggage assistance and AI-powered travel support.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "AI"],
    github:
      "https://github.com/shivanipriyaks498-netizen/AI-Airport-Assistant",
    demo: "https://ai-airport-assistant-five.vercel.app/",
  },
  {
    number: "02",
    title: "Product Explorer",
    category: "ADVANCED REACT PROJECT",
    description:
      "An interactive product discovery application featuring product search, category filters, product details and voice search.",
    technologies: ["React", "Vite", "JavaScript", "REST API"],
    github: "https://github.com/shivanipriyaks498-netizen/Product-Explorer.git",
    demo: "https://product-explorer-nu-ten.vercel.app",
  },
  {
    number: "03",
    title: "Career Track",
    category: "FULL STACK WEB DEVELOPMENT",
    description:
      "Developed a Career Track application to help users explore career opportunities, manage their career goals, and track professional growth.",
    technologies: ["JavaScript", "React.js", "HTML5", "CSS3"],
    github:
      "https://github.com/shivanipriyaks498-netizen/CareerTrack-Job-Application-Interview-Tracker.git",
    demo:"https://career-track-job-application-interv.vercel.app",
  },
  {
    number: "04",
    title: "Sentiment Analysis",
    category: "DATA ANALYTICS",
    description:
      "Built a Python-based Sentiment Analysis Dashboard using NLP to classify reviews and visualize positive, negative, and neutral sentiments.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Streamlit"],
    github:
      "https://github.com/shivanipriyaks498-netizen/Sentiment-Analysis.git",
    demo:"https://sentiment-analysisgit-wpt6c4cuwuelfzwzcpqjwj.streamlit.app/",
  },
  {
    number: "05",
    title: "JavaScript Real-World Projects",
    category: "WEB DEVELOPMENT",
    description:
      "A collection of practical JavaScript projects created to improve programming, DOM manipulation and problem-solving skills.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/shivanipriyaks498-netizen/JavaScript-Real-World-Projects",
  },

  {
    number: "06",
    title: "Sound Wave - Music Player",
    category: "FRONTEND WEB DEVELOPMENT",
    description:
      "A music player web application with an interactive interface for playing music and controlling playback.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/shivanipriyaks498-netizen/Sound-Wave-.git",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">

      <motion.div
        className="projects-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p>MY RECENT WORK</p>
        <h2>
          My <span>Projects</span>
        </h2>
        <h4>Some things I've built and worked on</h4>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="project-top">
              <span className="project-number">
                {project.number}
              </span>

              <span className="project-category">
                {project.category}
              </span>
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

<div className="project-actions">
  {project.demo && (
    <a
      href={project.demo}
      target="_blank"
      rel="noreferrer"
      className="project-link demo-link"
    >
      Live Demo ↗
    </a>
  )}

  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="project-link github-link"
    >
      View on GitHub ↗
    </a>
  )}
</div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Projects;
