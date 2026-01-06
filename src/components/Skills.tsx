import React from "react";
import { motion, Variants } from "framer-motion";
import { skillIcons, categoryIcons } from "./icons";

const skillSections = [
  {
    title: "Programming Languages",
    iconKey: "Programming Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML",
      "CSS",
      "C#",
      "Java",
      "Python",
    ],
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
    title: "Tools & Technologies",
    iconKey: "Tools",
    items: ["Postman", "Figma", "Docker", "Linux", "Redis"],
  },
  {
    title: "Operating Systems",
    iconKey: "OS",
    items: ["Windows", "Linux", "MacOS"],
  },
  {
    title: "Testing & QA",
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
    transition: { staggerChildren: 0.05 },
  },
  hidden: {},
};

const itemVariants: Variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 20 },
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Technical Proficiency
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and tools.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillSections.map(({ title, items, iconKey }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="bg-surface/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-accent/30 transition-colors duration-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                <span className="text-2xl text-accent bg-accent/10 p-2 rounded-lg">
                  {categoryIcons[iconKey] || "🛠️"}
                </span>
                <h3 className="text-lg font-semibold text-text/90">{title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 content-start">
                {items.map((skill) => (
                  <div key={skill} className="group">
                    <div className="bg-surface hover:bg-accent/10 hover:text-highlight border border-white/5 hover:border-accent/30 px-3 py-1.5 rounded-lg flex items-center gap-2 transition-all duration-200 cursor-default">
                      <span className="text-muted group-hover:text-accent transition-colors">
                        {skillIcons[skill] || "🔧"}
                      </span>
                      <span className="text-sm font-medium text-muted group-hover:text-highlight">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
