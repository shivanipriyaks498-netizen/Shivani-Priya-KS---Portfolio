
import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <motion.div
        className="contact-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>GET IN TOUCH</p>
        <h2>Let's <span>Connect</span></h2>
        <h4>Have an opportunity or project in mind? Let's talk!</h4>
      </motion.div>

      <div className="contact-container">

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3>Let's work together</h3>

          <p>
            I'm always interested in learning, collaborating
            and exploring new opportunities in technology.
          </p>

          <a href="mailto:shivanipriyaks498@gmail.com">
            ✉ shivanipriyaks498@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            in LinkedIn
          </a>

          <a
            href="https://github.com/shivanipriyaks498-netizen"
            target="_blank"
            rel="noreferrer"
          >
            GH GitHub
          </a>
        </motion.div>

        <motion.form
          className="contact-form"
          action="https://formsubmit.co/shivanipriyaks498@gmail.com"
          method="POST"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <input
            type="hidden"
            name="_subject"
            value="New Portfolio Message"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          />

          <button type="submit">
            Send Message →
          </button>
        </motion.form>

      </div>
    </section>
  );
}

export default Contact;
