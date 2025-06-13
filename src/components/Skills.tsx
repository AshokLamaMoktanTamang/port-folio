import React from "react";
import { motion, Variants } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { skillIcons, categoryIcons } from "./icons";

const skillSections = [
  {
    title: "Programming Languages",
    iconKey: "Programming Languages",
    items: ["JavaScript", "TypeScript", "SQL", "HTML", "CSS", "C#", "Java", "Python"],
  },
  {
    title: "Frontend Technologies",
    iconKey: "Frontend",
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
    iconKey: "Backend",
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
    iconKey: "AI",
    items: ["OpenAI Whisper"],
  },
  {
    title: "API and Web Services",
    iconKey: "API",
    items: ["RESTful APIs", "GraphQL", "gRPC"],
  },
  {
    title: "Version Control",
    iconKey: "Version Control",
    items: ["Git", "GitHub", "GitLab"],
  },
  {
    title: "Databases",
    iconKey: "Database",
    items: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools and Technologies",
    iconKey: "Tools",
    items: ["Git", "Postman", "Figma", "Docker", "Linux", "Redis"],
  },
  {
    title: "Operating Systems",
    iconKey: "OS",
    items: ["Windows", "Linux", "MacOS"],
  },
  {
    title: "Testing and QA",
    iconKey: "Testing",
    items: ["Jest", "Cypress", "K6", "Lighthouse"],
  },
  {
    title: "Project Management",
    iconKey: "PM",
    items: ["Jira", "Trello", "Slack", "Google Chat"],
  },
];

const containerVariants = {
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
  hidden: {},
};

const sectionVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
  hidden: { opacity: 0, y: 20 },
};

const skillVariants: Variants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 0 15px var(--color-accent)",
    y: -3,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
  rest: { scale: 1 },
};

const Skills: React.FC = () => {
  return (
    <section id="skills" style={{ margin: "0 auto" }}>
      <h2 className="glow-accent" style={{ marginBottom: "2rem" }}>
        Skills
      </h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          gap: "2rem",
        }}
      >
        {skillSections.map(({ title, items, iconKey }) => (
          <motion.div
            key={title}
            variants={sectionVariants}
            style={{
              padding: "1.5rem",
              borderRadius: "16px",
              background: "var(--color-surface)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(5px)",
            }}
            whileHover={{ y: -5 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
                marginBottom: "1.5rem",
              }}
            >
              <span style={{ fontSize: "1.8rem", color: "var(--color-accent)" }}>
                {categoryIcons[iconKey] || "🛠️"}
              </span>
              <h3
                style={{
                  margin: 0,
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "var(--color-accent)",
                }}
              >
                {title}
              </h3>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.8rem",
              }}
            >
              {items.map((skill) => (
                <Tilt
                  key={skill}
                  glareEnable
                  glareColor="var(--color-accent)"
                  glareMaxOpacity={0.2}
                  glarePosition="all"
                  scale={1.02}
                  transitionSpeed={2000}
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                >
                  <motion.div
                    variants={skillVariants}
                    initial="rest"
                    whileHover="hover"
                    style={{
                      backgroundColor: "var(--color-background)",
                      padding: "0.5rem 1rem",
                      borderRadius: "50px",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      textAlign: "center",
                      userSelect: "none",
                      cursor: "default",
                      fontWeight: 500,
                      color: "var(--color-text)",
                      fontSize: "0.9rem",
                      whiteSpace: "nowrap",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {skillIcons[skill] || "🔧"} <span>{skill}</span>
                  </motion.div>
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
