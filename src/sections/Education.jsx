
import { motion } from "framer-motion";
import "./Education.css";

const education = [
  {
    year: "2024 – 2027",
    degree: "Bachelor of Computer Applications (BCA)",
    course: "Computer Applications",
    place: "Aditya Institute of Management Studies & Research",
    description: "Building knowledge in technology, programming and software development."
  },
  {
    year: "2022 – 2024",
    degree: "Pre-University Course",
    course: "Science (PCMB)",
    place: "VBR PU College",
    description: "Developed a foundation in academics and problem-solving."
  },
  {
    year: "2022",
    degree: "Secondary Education",
    course: "SSLC (10th Grade)",
    place: "ST. Thomas School",
    description: "Built a strong academic foundation and learning skills."
  }
];

function Education() {
  return (
    <section className="education" id="education">

      <motion.div
        className="education-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>MY ACADEMIC JOURNEY</p>
        <h2>My <span>Education</span></h2>
      </motion.div>

      <div className="education-timeline">

        {education.map((item, index) => (
          <motion.div
            className="education-card"
            key={item.degree}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="education-dot"></div>

            <span className="education-year">{item.year}</span>

            <h3>{item.degree}</h3>
            <h4>{item.course}</h4>
            <h5>{item.place}</h5>

            <p>{item.description}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Education;
