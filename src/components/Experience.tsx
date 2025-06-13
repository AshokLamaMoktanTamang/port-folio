import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "INNOVATE TECH",
    location: "Baluwatar, Kathmandu",
    period: "07/2024 - Ongoing",
    details: [
      "Supervised and contributed to the development of a scalable Quiz platform, Kung Fu Quiz, integrated to MST.",
      "Engineered a real-time audio-to-text highlighting feature using OpenAI Whisper, improving accessibility for diverse user groups.",
      "Built real-time features for an app using socket communication and implemented session services to track user sessions in MongoDB.",
      "Worked closely with UI/UX designers using Figma to refine interfaces and enhance usability.",
      "Utilized Docker for containerized deployments and Git for version control and CI/CD workflows.",
      "Integrated Stripe and PayPal payment gateways into the application, handling both backend (Node.js, Express) and frontend (React) for secure and seamless transactions.",
      "Implemented subscription management and webhook handling, ensuring reliability and fraud prevention.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "INNOVATE TECH",
    location: "Baluwatar, Kathmandu",
    period: "06/2023 - 07/2024",
    details: [
      "Designed and implemented a microservices architecture for the application, enabling scalable and modular development.",
      "Designed a Proof of Concept (PoC) for generating thumbnail sprites using Python and ffmpeg, optimizing video preview generation.",
      "Led the development of the admin panel of My Second Teacher V2, enhancing user experience and system efficiency.",
      "Built a custom video player package with quiz annotations using React, improving interactive learning experiences.",
      "Established internal communication using gRPC, ensuring high-performance, low-latency interactions between services.",
      "Ensured mobile responsiveness for seamless user experience across devices.",
      "Contributed to the development of a scalable bulk parser AWS Lambda function to process and upload multiple records efficiently using CSV files, streamlining data handling and enhancing system performance.",
    ],
  },
  {
    role: "Full-stack Developer Trainee",
    company: "INNOVATE TECH",
    location: "Baluwatar, Kathmandu",
    period: "01/2023 - 06/2023",
    details: [
      "Worked on multiple React page views to facilitate efficient candidate management and streamline recruitment workflows.",
      "Enhanced application control efficiency by developing multiple frontend admin projects.",
      "Led the migration to Version 2 of the back-office (admin panel) using React Query, improving functionality and usability.",
    ],
  },
  {
    role: "Full-stack Developer Intern",
    company: "INNOVATE TECH",
    location: "Baluwatar, Kathmandu",
    period: "09/2022 - 01/2023",
    details: [
      "Developed an internal hiring management system, implementing Single Sign-On (SSO) using Keycloak for seamless authentication across both frontend (React) and backend (Express, Node.js).",
      "Worked on ING Hire, pdf viewer, Keycloak for authentication SSO, organization, department, level, interview management, Joi schema validation.",
      "Used Express, Node, React, Redux Toolkit, Material UI, and TypeScript.",
      "Handled file uploads with AWS S3 and multer.",
      "Implemented Google OAuth 2.0 for interview date assignments with notifications; used OAuth 2 SMTP for mail send/receive.",
      "Developed queue for notification system and used react-helmet-async for SEO optimization.",
      "Optimized MongoDB schemas to enhance query performance and streamline workflows.",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <h2 className="glow-accent">Work Experience</h2>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.3 } },
          hidden: {},
        }}
        style={{ paddingLeft: 0 }}
      >
        {experiences.map(({ role, company, location, period, details }) => (
          <motion.li
            key={`${role}-${period}`}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 40 },
            }}
            style={{
              marginBottom: 24,
              backgroundColor: "var(--color-surface)",
              padding: "1rem 1.25rem",
              borderRadius: 10,
              boxShadow: "0 0 15px var(--color-accent)",
            }}
          >
            <h3 className="glow-accent" style={{ marginBottom: 4 }}>
              {role}
            </h3>
            <p
              style={{
                fontWeight: 600,
                color: "var(--color-accent)",
                marginBottom: 6,
              }}
            >
              {company} — {location} &middot; {period}
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: "1.25rem",
                color: "var(--color-muted)",
              }}
            >
              {details.map((item, idx) => (
                <li key={idx} style={{ marginBottom: 6 }}>
                  {item}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Experience;
