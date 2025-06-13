import React from "react";
import { motion, Variants } from "framer-motion";

const profileData = {
  name: "Ashok Lama",
  contact: {
    location: "Boudha, Kathmandu",
    email: "moktashok@gmail.com",
    phone: "(+977) 9840708606",
    linkedin: "https://www.linkedin.com/in/ashok-lama-620547282/",
    github: "https://github.com/AshokLamaMoktanTamang",
  },
  careerObjective: `Passionate software engineer with over three years of experience in full-stack development, dedicated to creating exceptional digital experiences. Skilled in maintaining web applications, architecting scalable systems, and ensuring code quality. Proven ability to deliver innovative solutions tailored to individual needs.`,
  education: [
    {
      degree: "BSc (Hons) Computing",
      period: "2021-2023",
      institute: "Islington College, Kamalpokhari, Kathmandu",
      affiliation: "London Metropolitan University",
    },
    {
      degree: "SLC",
      period: "2018-2020",
      institute: "Trinity International College, Dilli Bazaar, Kathmandu",
    },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

const About: React.FC = () => {
  return (
    <section
      id="about"
      style={{
        margin: "0 auto",
        position: "relative"
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Name Header */}
        <motion.div variants={itemVariants}>
          <motion.h1 
            className="glow-accent" 
            style={{ 
              marginBottom: "0.5rem",
              fontSize: "2.5rem",
              fontWeight: 700,
              lineHeight: 1.2,
              position: "relative",
              display: "inline-block"
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { type: "spring", stiffness: 400 }
            }}
          >
            {profileData.name}
            <motion.span 
              style={{
                position: "absolute",
                bottom: -8,
                left: 0,
                width: "100%",
                height: "4px",
                background: "var(--color-accent)",
                borderRadius: "2px",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.h1>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={itemVariants} style={{ marginBottom: "2rem" }}>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "center",
            marginBottom: "0.5rem"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              <span>📍</span>
              <span>{profileData.contact.location}</span>
            </div>
            
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              <span>✉️</span>
              <a 
                href={`mailto:${profileData.contact.email}`}
                style={{
                  color: "var(--color-accent)",
                  textDecoration: "none",
                  fontWeight: 500,
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.textDecoration = "underline"}
                onMouseLeave={(e) => e.currentTarget.style.textDecoration = "none"}
              >
                {profileData.contact.email}
              </a>
            </div>
            
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              <span>📱</span>
              <span>{profileData.contact.phone}</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            <motion.a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--color-text)",
                textDecoration: "none",
                fontWeight: 500
              }}
              whileHover={{ 
                color: "var(--color-accent)",
                scale: 1.05
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span style={{ fontSize: "1.2rem" }}>🔗</span>
              LinkedIn
            </motion.a>
            
            <motion.a
              href={profileData.contact.github}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--color-text)",
                textDecoration: "none",
                fontWeight: 500
              }}
              whileHover={{ 
                color: "var(--color-accent)",
                scale: 1.05
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span style={{ fontSize: "1.2rem" }}>🔗</span>
              GitHub
            </motion.a>
          </div>
        </motion.div>

        {/* Career Objective */}
        <motion.div variants={itemVariants} style={{ marginBottom: "3rem" }}>
          <motion.h2 
            className="glow-accent" 
            style={{ 
              marginBottom: "1rem",
              fontSize: "1.8rem",
              position: "relative",
              display: "inline-block"
            }}
          >
            Career Objective
          </motion.h2>
          <motion.p 
            style={{ 
              lineHeight: 1.6,
              fontSize: "1.1rem",
              padding: "1.5rem",
              background: "var(--color-surface)",
              borderRadius: "12px",
              borderLeft: "4px solid var(--color-accent)"
            }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            {profileData.careerObjective}
          </motion.p>
        </motion.div>

        {/* Education */}
        <motion.div variants={itemVariants}>
          <motion.h2 
            className="glow-accent" 
            style={{ 
              marginBottom: "1.5rem",
              fontSize: "1.8rem"
            }}
          >
            Education
          </motion.h2>
          
          <motion.ul 
            style={{ 
              listStyle: "none",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem"
            }}
          >
            {profileData.education.map(({ degree, period, institute, affiliation }, i) => (
              <motion.li 
                key={i}
                style={{
                  padding: "1.5rem",
                  background: "var(--color-surface)",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  marginBottom: "0.5rem"
                }}>
                  <h3 style={{ 
                    margin: 0, 
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "var(--color-accent)"
                  }}>
                    {degree}
                  </h3>
                  <span style={{ 
                    color: "var(--color-accent)",
                    fontWeight: 500
                  }}>
                    {period}
                  </span>
                </div>
                <p style={{ margin: "0.5rem 0", lineHeight: 1.5 }}>
                  {institute}
                  {affiliation && (
                    <span style={{ fontStyle: "italic" }}>, {affiliation}</span>
                  )}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;