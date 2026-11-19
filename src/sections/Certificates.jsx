
import { motion } from "framer-motion";
import "./Certificates.css";

const certificates = [
  {
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    year: "2026",
    description:
      "Learned the fundamentals of Artificial Intelligence and its real-world applications.",
    link: "https://www.credly.com/badges/22d15663-7da2-4bbb-9e22-494cf0669dc8",
    icon: "🤖",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    year: "2026",
    description:
      "Developed foundational knowledge of Artificial Intelligence concepts.",
    link: "https://www.credly.com/badges/a2ef7f0d-4b28-438f-895f-c63de3c8baa5",
    icon: "🧠",
  },
  {
    title: "Getting Started with Generative AI",
    issuer: "IBM SkillsBuild",
    year: "2026",
    description:
      "Explored Generative AI concepts, capabilities, and applications.",
    link: "https://www.credly.com/go/V68GGRk4",
    icon: "✨",
  },
  {
    title: "Getting Started with Cybersecurity",
    issuer: "Please confirm issuer",
    year: "2026",
    description:
      "Learned introductory cybersecurity concepts and digital security awareness.",
    link: "https://www.credly.com/badges/91511401-f1c4-426f-816e-22b1a1f400ab",
    icon: "🔐",
  },
];

function Certificates() {
  return (
    <section className="certificates" id="certificates">

      <motion.div
        className="certificates-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="section-subtitle">MY ACHIEVEMENTS</p>

        <h2>
          My <span>Certifications</span>
        </h2>

        <p className="certificates-intro">
          Continuous learning and professional growth through
          technology and skill development.
        </p>
      </motion.div>

      <div className="certificates-grid">
        {certificates.map((certificate, index) => (
          <motion.div
            className="certificate-card"
            key={certificate.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
          >
            <div className="certificate-top">
              <span className="certificate-icon">
                {certificate.icon}
              </span>

              <span className="certificate-status completed">
                Completed
              </span>
            </div>

            <p className="certificate-year">
              {certificate.year}
            </p>

            <h3>{certificate.title}</h3>

            <h4>{certificate.issuer}</h4>

            <p className="certificate-description">
              {certificate.description}
            </p>

            {certificate.link && (
              <a
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
                className="certificate-link"
              >
                View Certificate ↗
              </a>
            )}
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Certificates;
