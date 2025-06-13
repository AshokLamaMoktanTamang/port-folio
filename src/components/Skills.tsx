import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const skillSections = [
  {
    title: "Programming Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML/CSS",
      "C#",
      "Java",
      "Python",
    ],
  },
  {
    title: "Frontend Technologies",
    items: [
      "React.js",
      "Redux",
      "RTK Query",
      "React Query",
      "Material UI",
      "SASS",
      "Bootstrap",
      "Tailwind",
      "Shadcn/ui",
      "WebSocket",
    ],
  },
  {
    title: "Backend Technologies",
    items: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "Fastify",
      "Mongoose",
      "Prisma",
      "TypeORM",
      "Redis",
      "Docker",
    ],
  },
  {
    title: "AI Tools",
    items: ["OpenAI Whisper"],
  },
  {
    title: "API and Web Services",
    items: ["RESTful APIs", "GraphQL", "gRPC"],
  },
  {
    title: "Version Control",
    items: ["Git", "GitHub", "GitLab"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools and Technologies",
    items: ["Git", "Postman", "Figma", "Docker", "Linux", "Redis"],
  },
  {
    title: "Operating Systems",
    items: ["Windows", "Linux", "MacOS"],
  },
  {
    title: "Testing and QA",
    items: ["Jest", "Cypress", "K6", "Lighthouse"],
  },
  {
    title: "Project Management & Collaboration",
    items: ["Jira", "Trello", "Slack", "Google Chat"],
  },
];

const containerVariants = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
  hidden: {},
};

const itemVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

const Skills: React.FC = () => {
  return (
    <section id="skills" style={{ padding: "2rem 1rem", margin: "0 auto" }}>
      <h2 className="glow-accent" style={{ marginBottom: 32 }}>
        Skills
      </h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {skillSections.map(({ title, items }) => (
          <motion.div
            key={title}
            variants={itemVariants}
            style={{
              marginBottom: 32,
              padding: "1rem",
              borderRadius: 12,
              backgroundColor: "var(--color-surface)",
              boxShadow: "0 0 15px var(--color-accent)",
            }}
          >
            <h3 className="glow-accent" style={{ marginBottom: 16 }}>
              {title}
            </h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                justifyContent: "flex-start",
              }}
            >
              {items.map((skill) => (
                <Tilt
                  key={skill}
                  glareEnable
                  glareColor="var(--color-accent)"
                  glareMaxOpacity={0.2}
                  scale={1.05}
                  transitionSpeed={250}
                  style={{
                    minWidth: 110,
                    backgroundColor: "var(--color-background)",
                    padding: "0.5rem 1rem",
                    borderRadius: 8,
                    boxShadow: "0 0 8px var(--color-accent)",
                    textAlign: "center",
                    userSelect: "none",
                    cursor: "default",
                    fontWeight: 600,
                    color: "var(--color-text)",
                    fontSize: "0.9rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {skill}
                </Tilt>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
