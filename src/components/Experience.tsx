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
      "God a Proof of Concept (PoC) for generating thumbnail sprites using Python and ffmpeg, optimizing video preview generation.",
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
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Work Experience
          </h2>
          <p className="text-muted">
            My professional journey and track record.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-3 md:ml-6 space-y-12">
          {experiences.map(
            ({ role, company, location, period, details }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-accent shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-text">{role}</h3>
                    <p className="text-accent font-medium">{company}</p>
                  </div>
                  <div className="text-sm font-medium text-muted mt-1 sm:mt-0 text-right">
                    <p>{period}</p>
                    <p>{location}</p>
                  </div>
                </div>

                <div className="bg-surface/50 rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                  <ul className="space-y-3">
                    {details.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-text/80 text-sm leading-relaxed"
                      >
                        <span className="text-accent mt-1.5 text-xs">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
