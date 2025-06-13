import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const projects = [
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
  },
  {
    title: "Kung Fu Quiz",
    description: "Advanced quiz platform with real-time interaction features",
    features: [
      "Real-time scoring and feedback",
      "Secure payment integration",
      "Room for quizes",
      "Multiple mode quizes"
    ],
    technologies: ["React", "Socket.io", "Stripe API", "Bootstrap", "Paypal", "Nodejs", "Nestjs"],
    url: "https://sifu.kungfuquiz.com/",
    type: "professional",
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
];

const Projects: React.FC = () => {
  return (
    <section id="projects" style={{ margin: "0 auto" }}>
      <h2
        className="glow-accent"
        style={{ marginBottom: "2rem" }}
      >
        Projects
      </h2>

      <h3
        style={{
          marginTop: "2rem",
          color: "var(--color-accent)",
          borderBottom: "1px solid var(--color-accent)",
          paddingBottom: "0.5rem",
          textAlign: 'center'
        }}
      >
        Professional Work
      </h3>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {},
        }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
          gap: "1.5rem",
          marginTop: "1rem",
        }}
      >
        {projects
          .filter((p) => p.type === "professional")
          .map(({ title, description, url, features, technologies }) => (
            <motion.div
              key={title}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 30 },
              }}
              style={{
                backgroundColor: "var(--color-surface)",
                padding: "1.5rem",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(var(--color-accent-rgb), 0.1)",
                color: "var(--color-text)",
              }}
            >
              <Tilt
                glareEnable
                glareMaxOpacity={0.1}
                glareColor="var(--color-accent)"
                glarePosition="all"
                scale={1.02}
              >
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    style={{
                      marginBottom: "0.75rem",
                      fontSize: "1.25rem",
                      color: "var(--color-accent)",
                    }}
                  >
                    {title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--color-muted)",
                      marginBottom: "1rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {description}
                  </p>

                  {features && (
                    <div style={{ marginBottom: "1rem" }}>
                      <h4
                        style={{
                          fontSize: "0.9rem",
                          marginBottom: "0.5rem",
                          color: "var(--color-accent)",
                        }}
                      >
                        Features:
                      </h4>
                      <ul
                        style={{
                          fontSize: "0.85rem",
                          paddingLeft: "1.25rem",
                          margin: 0,
                          lineHeight: 1.6,
                          color: "var(--color-muted)",
                        }}
                      >
                        {features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {technologies && (
                    <div style={{ marginTop: "auto" }}>
                      <h4
                        style={{
                          fontSize: "0.9rem",
                          marginBottom: "0.5rem",
                          color: "var(--color-accent)",
                        }}
                      >
                        Technologies:
                      </h4>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                        }}
                      >
                        {technologies.map((tech, i) => (
                          <span
                            key={i}
                            style={{
                              fontSize: "0.75rem",
                              color: "var(--color-accent)",
                              background: "rgba(var(--color-accent-rgb), 0.1)",
                              padding: "0.25rem 0.5rem",
                              borderRadius: "4px",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        marginTop: "1rem",
                        fontSize: "0.85rem",
                        color: "var(--color-accent)",
                        textDecoration: "none",
                        fontWeight: 500,
                      }}
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </Tilt>
            </motion.div>
          ))}
      </motion.div>

      <h3
        style={{
          marginTop: "3rem",
          color: "var(--color-accent)",
          borderBottom: "1px solid var(--color-accent)",
          paddingBottom: "0.5rem",
          textAlign: 'center'
        }}
      >
        Open Source Packages
      </h3>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {},
        }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
          gap: "1.5rem",
          marginTop: "1rem",
        }}
      >
        {projects
          .filter((p) => p.type === "package")
          .map(
            ({ title, description, url, version, features, technologies }) => (
              <motion.div
                key={title}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 30 },
                }}
                style={{
                  backgroundColor: "var(--color-surface)",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  boxShadow: "0 4px 15px rgba(var(--color-accent-rgb), 0.05)",
                  color: "var(--color-text)",
                }}
              >
                <Tilt
                  glareEnable
                  glareMaxOpacity={0.05}
                  glareColor="var(--color-accent)"
                  glarePosition="all"
                  scale={1.01}
                >
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "0.75rem",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "1.2rem",
                          color: "var(--color-accent)",
                          margin: 0,
                        }}
                      >
                        {title}
                      </h3>
                      {version && (
                        <span
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--color-accent)",
                            background: "rgba(var(--color-accent-rgb), 0.1)",
                            padding: "0.25rem 0.5rem",
                            borderRadius: "4px",
                            fontWeight: 500,
                          }}
                        >
                          {version}
                        </span>
                      )}
                    </div>

                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--color-muted)",
                        marginBottom: "1rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {description}
                    </p>

                    {features && (
                      <div style={{ marginBottom: "1rem" }}>
                        <h4
                          style={{
                            fontSize: "0.85rem",
                            marginBottom: "0.5rem",
                            color: "var(--color-accent)",
                          }}
                        >
                          Features:
                        </h4>
                        <ul
                          style={{
                            fontSize: "0.8rem",
                            paddingLeft: "1.1rem",
                            margin: 0,
                            lineHeight: 1.6,
                            color: "var(--color-muted)",
                          }}
                        >
                          {features.slice(0, 3).map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {technologies && (
                      <div style={{ marginTop: "auto" }}>
                        <h4
                          style={{
                            fontSize: "0.85rem",
                            marginBottom: "0.5rem",
                            color: "var(--color-accent)",
                          }}
                        >
                          Technologies:
                        </h4>
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.4rem",
                          }}
                        >
                          {technologies.map((tech, i) => (
                            <span
                              key={i}
                              style={{
                                fontSize: "0.7rem",
                                color: "var(--color-accent)",
                                background:
                                  "rgba(var(--color-accent-rgb), 0.1)",
                                padding: "0.2rem 0.4rem",
                                borderRadius: "4px",
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {url && (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-block",
                          marginTop: "1rem",
                          fontSize: "0.8rem",
                          color: "var(--color-accent)",
                          textDecoration: "none",
                          fontWeight: 500,
                        }}
                      >
                        View Package →
                      </a>
                    )}
                  </div>
                </Tilt>
              </motion.div>
            )
          )}
      </motion.div>
    </section>
  );
};

export default Projects;
