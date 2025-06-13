import React from "react";
import { motion } from "framer-motion";

const ProfessionalDevelopment: React.FC = () => {
  return (
    <section
      id="professional-development"
      style={{ padding: "2rem 1rem", margin: "0 auto" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="glow-accent" style={{ marginBottom: 24 }}>
          Professional Development
        </h2>

        <div
          style={{
            backgroundColor: "var(--color-surface)",
            padding: "1.5rem",
            borderRadius: 12,
            boxShadow: "0 0 15px var(--color-accent)",
          }}
        >
          <h3 style={{ marginBottom: 8, fontWeight: "bold" }}>
            WRL Supervisor{" "}
            <span
              style={{
                fontWeight: "normal",
                fontSize: "0.9rem",
                color: "var(--color-accent)",
              }}
            >
              07/2024 - 11/2024
            </span>
          </h3>
          <h4 style={{ marginBottom: 12, fontWeight: "600" }}>
            Innovate Tech - Baluwatar, Kathmandu
          </h4>
          <ul style={{ paddingLeft: 20, lineHeight: 1.6 }}>
            <li>
              Selected as the supervisor for the Work-Related Learning (WRL)
              module, overseen by Islington College.
            </li>
            <li>
              Led and mentored 4 front-end interns, guiding them in modern web
              technologies such as React, TypeScript, Bootstrap, SASS, Redux,
              and RTK Query.
            </li>
            <li>
              Supervised the development of an HRM web application for Innovate
              Tech with 20+ core features, including employee and team
              management, leave, work from home, and out and about requests and
              approval, event and holiday calendars, profile maintenance, and
              others.
            </li>
            <li>
              Assisted 18 interns, collaborating with other WRL supervisors to
              support career growth and professional adaptability.
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default ProfessionalDevelopment;
