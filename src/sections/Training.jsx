
import { motion } from "framer-motion";
import { GraduationCap, CheckCircle } from "lucide-react";
import "./Training.css";

function Training() {
  return (
    <section className="training" id="training">

      <motion.div
        className="training-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>MY LEARNING JOURNEY</p>
        <h2>Professional <span>Training</span></h2>
      </motion.div>

      <motion.div
        className="training-card"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <div className="training-icon">
          <GraduationCap size={35} />
        </div>

        <div className="training-content">

          {/* Status on the right */}
          <div className="training-top">
            <span className="training-status">
              <CheckCircle size={15} />
              In Progress
            </span>
          </div>

          <h3>MERN Stack Development Training</h3>

          <h4>Anudip Foundation</h4>

          <p>
            Currently undergoing Full Stack Web Development training at
            Anudip Foundation, gaining practical knowledge of MERN stack
            technologies and developing hands-on projects.
          </p>

          <div className="training-tags">
            <span>MongoDB</span>
            <span>Express.js</span>
            <span>React.js</span>
            <span>Node.js</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default Training;
