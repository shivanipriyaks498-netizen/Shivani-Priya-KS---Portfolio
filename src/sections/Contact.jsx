
import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
  const email = "shivanipriyaks498@gmail.com";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    "Let's Connect - Portfolio Inquiry"
  )}&body=${encodeURIComponent(
    "Hi Shivani,\n\nI would like to connect with you.\n\n"
  )}`;

  return (
    <section className="contact" id="contact">

      {/* Contact Heading */}
      <motion.div
        className="contact-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p>GET IN TOUCH</p>

        <h2>
          Let's <span>Connect</span>
        </h2>

        <h4>
          Have an opportunity or project in mind? Let's talk!
        </h4>
      </motion.div>

      {/* Contact Container */}
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <div className="contact-info">

          <h3>Have an opportunity?</h3>

          <p>
            I'd love to hear from you. Send me an email and
            let's start a conversation!
          </p>

          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="contact-email"
          >
            <span className="email-icon">✉</span>
            {email}
          </a>

          {/* Social Media Icons */}
          <div className="contact-socials">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-btn"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 17.67V10H5.8V17.67H8.34ZM7.07 8.95A1.47 1.47 0 1 0 7.07 6A1.47 1.47 0 0 0 7.07 8.95ZM18.2 17.67V13.47C18.2 11.22 17 10.03 15.39 10.03C14.09 10.03 13.51 10.75 13.19 11.26V10H10.65V17.67H13.19V13.88C13.19 12.88 13.38 11.91 14.62 11.91C15.85 11.91 15.87 13.06 15.87 13.95V17.67H18.2Z"
                />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/shivanipriyaks498-netizen"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-btn"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 8.84 21.49C9.34 21.58 9.52 21.27 9.52 21V19.1C6.74 19.7 6.16 17.92 6.16 17.92C5.7 16.75 5.05 16.44 5.05 16.44C4.14 15.82 5.12 15.83 5.12 15.83C6.13 15.9 6.66 16.87 6.66 16.87C7.55 18.39 8.99 17.95 9.55 17.69C9.64 17.05 9.9 16.61 10.19 16.36C7.97 16.11 5.63 15.25 5.63 11.5C5.63 10.43 6.01 9.55 6.67 8.86C6.57 8.61 6.22 7.61 6.77 6.27C6.77 6.27 7.62 6 9.52 7.28A9.4 9.4 0 0 1 12 6.95C12.84 6.95 13.69 7.06 14.48 7.28C16.38 6 17.23 6.27 17.23 6.27C17.78 7.61 17.43 8.61 17.33 8.86C17.99 9.55 18.37 10.43 18.37 11.5C18.37 15.26 16.03 16.1 13.8 16.35C14.17 16.67 14.5 17.29 14.5 18.24V21C14.5 21.27 14.68 21.59 15.19 21.49A10 10 0 0 0 12 2Z"
                />
              </svg>
            </a>

            {/* Resume Download */}
            <a
              href="/Shivani_Resume.pdf"
              download="Shivani_Priya_Resume.pdf"
              className="contact-social-btn"
              aria-label="Download Resume"
              title="Download Resume"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 3V15M7 10L12 15L17 10M5 19H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </a>

          </div>

          {/* Let's Talk Button */}
          <a
            href={mailtoLink}
            className="lets-talk-btn"
          >
            Let's Talk <span>↗</span>
          </a>

        </div>

      </motion.div>

    </section>
  );
}

export default Contact;
