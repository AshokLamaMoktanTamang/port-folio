import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Kung Fu Quiz",
    description: "Advanced quiz platform with real-time interaction features",
    features: [
      "Real-time scoring and feedback",
      "Secure payment integration",
      "Room for quizes",
      "Multiple mode quizes",
    ],
    technologies: [
      "React",
      "Socket.io",
      "Stripe API",
      "Bootstrap",
      "Paypal",
      "Nodejs",
      "Nestjs",
    ],
    url: "https://sifu.kungfuquiz.com/",
    type: "professional",
    image: "/images/kungfu.svg",
  },
  {
    title: "My Second Teacher",
    description:
      "An award-winning e-learning platform offering interactive video lessons, eBooks, and academic support to students across 51 countries. It serves as a comprehensive digital classroom that enhances learning through technology.",
    features: [
      "Interactive Videos",
      "Ebook, classroom, Testpapers and chat features",
      "Teacher, student, parent and leader portals",
    ],
    technologies: ["React", "Bootstrap"],
    url: "https://www.mysecondteacher.com/",
    type: "professional",
    image: "/images/mst.png",
  },
  {
    title: "Home School Asia",
    description:
      "Scalable e-learning platform with comprehensive course management",
    features: [
      "Interactive Video classroom functionality",
      "Interactive test and assessment system",
      "Secure session management",
      "Progress tracking and reporting",
    ],
    technologies: ["React", "Bootstrap"],
    url: "https://www.homeschool.asia/",
    type: "professional",
    image: "/images/hsa.svg",
  },
  {
    title: "IVY Backoffice",
    description:
      "Advanced administration system for managing interactive video content",
    features: [
      "Multi-language subtitle management",
      "Audio track configuration",
      "Interactive element editor (quizzes, buttons, annotations)",
      "Content version control",
      "User permission management",
    ],
    technologies: [
      "React",
      "Material UI",
      "Node",
      "Express",
      "MongoDb",
      "AWS S3",
    ],
    url: "https://ivy.advancedpedagogy.com/login",
    type: "professional",
    image: "/images/ivy.png",
  },
  {
    title: "IVY Player",
    description:
      "Enterprise-grade interactive video player solution for educational platforms",
    features: [
      "Frame-accurate quiz and annotation system",
      "Multi-format video support with adaptive streaming",
      "Customizable player skin and branding",
      "Detailed analytics and engagement tracking",
    ],
    technologies: ["React", "React Player", "Http Live Streaming", "Mux"],
    type: "professional",
    image: "/images/ivy.png",
  },
  {
    title: "@ashoklama/statepilot",
    description: "Modern state management solution for React applications",
    features: [
      "Type-safe by design",
      "Zero-boilerplate implementation",
      "Modular state architecture",
      "Scoped selectors and dispatchers",
    ],
    technologies: ["React", "TypeScript"],
    url: "https://www.npmjs.com/package/@ashoklama/statepilot",
    version: "v0.0.2",
    type: "package",
  },
  {
    title: "ashoklama-custom-video-player",
    description: "Extensible video player with enhanced capabilities",
    features: [
      "Custom UI controls",
      "Plugin architecture",
      "Accessibility features",
      "Cross-browser compatibility",
    ],
    technologies: ["JavaScript", "HTML5 Video API"],
    url: "https://www.npmjs.com/package/ashoklama-custom-video-player",
    version: "v0.0.10",
    type: "package",
  },
  {
    title: "Scribble",
    description: "Interactive drawing application with rich features",
    features: [
      "Canvas-based rendering",
      "Multiple shape tools",
      "Layer support",
      "Export functionality",
    ],
    technologies: ["TypeScript", "HTML5 Canvas"],
    url: "https://github.com/AshokLamaMoktanTamang/scribble",
    version: "v0.0.0",
    type: "package",
  },
  {
    title: "async-worker-queue-runner",
    description: "High-performance asynchronous task processing library",
    features: [
      "Configurable concurrency control",
      "Automatic retry with exponential backoff",
      "Worker thread support for CPU-intensive tasks",
      "Promise-based API",
    ],
    technologies: ["Node.js", "TypeScript", "Worker Threads"],
    url: "https://www.npmjs.com/package/async-worker-queue-runner",
    version: "v1.0.5",
    type: "package",
  },
];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="group relative bg-surface/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 flex flex-col h-full"
  >
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="p-6 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        {project.type === "package" && (
          <span className="px-2 py-1 text-xs font-medium text-accent bg-accent/10 rounded-md border border-accent/20">
            {project.version || "NPM"}
          </span>
        )}
      </div>

      <p className="text-muted text-sm mb-6 leading-relaxed flex-grow">
        {project.description}
      </p>

      {project.features && (
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wider text-muted/80 font-semibold mb-3">
            Key Features
          </h4>
          <ul className="space-y-1">
            {project.features.slice(0, 3).map((feature, i) => (
              <li
                key={i}
                className="text-sm text-text/80 flex items-start gap-2"
              >
                <span className="text-accent mt-1">▹</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-xs font-medium text-text/90 bg-white/5 rounded-full border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-accent hover:text-highlight transition-colors group/link"
          >
            {project.type === "package" ? "View Package" : "View Project"}
            <svg
              className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  const professionalProjects = projects.filter(
    (p) => p.type === "professional"
  );
  const openSourceProjects = projects.filter((p) => p.type === "package");

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Featured Work
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            A collection of professional projects and open-source contributions.
          </p>
        </motion.div>

        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold text-text">
              Professional Projects
            </h3>
            <div className="h-px bg-white/10 flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold text-text">
              Open Source & Packages
            </h3>
            <div className="h-px bg-white/10 flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openSourceProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
