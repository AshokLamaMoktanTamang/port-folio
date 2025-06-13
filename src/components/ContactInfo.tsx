import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <section id="contact" style={{ textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="glow-accent">Contact Me</h2>
        <p>
          Feel free to reach out via email, phone or connect with me on social
          media.
        </p>
        <p>
          <a
            href="mailto:ashoklama@example.com"
            style={{
              color: "var(--color-accent)",
              fontWeight: "600",
              textDecoration: "underline",
            }}
          >
            moktashok@gmail.com
          </a>
        </p>
        <a
          href="tel:+9779840708606"
          style={{
            color: "var(--color-accent)",
            fontWeight: "600",
            textDecoration: "underline",
            textDecorationThickness: "2px",
          }}
        >
          +977 9840708606
        </a>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <a
            href="https://github.com/AshokLamaMoktanTamang"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-muted)" }}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ashok-lama-620547282/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-muted)" }}
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
