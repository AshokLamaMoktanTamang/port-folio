import React from "react";
import { motion } from "framer-motion";

const profileData = {
  name: "Ashok Lama",
  contact: {
    location: "Boudha, Kathmandu",
    email: "moktashok@gmail.com",
    phone: "(+977) 9840708606",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourgithub",
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
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const About: React.FC = () => {
  return (
    <section
      id="about"
      style={{ maxWidth: 900, margin: "auto", padding: "2rem" }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h1 className="glow-accent" style={{ marginBottom: "0.25rem" }}>
          {profileData.name}
        </h1>
        <p
          style={{
            marginBottom: "1rem",
            fontWeight: "600",
            color: "var(--color-accent)",
          }}
        >
          {profileData.contact.location} &middot;{" "}
          <a href={`mailto:${profileData.contact.email}`}>
            {profileData.contact.email}
          </a>{" "}
          &middot; {profileData.contact.phone}
        </p>
        <p style={{ marginBottom: 16 }}>
          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{ marginRight: 16 }}
          >
            🔗 LinkedIn
          </a>
          <a href={profileData.contact.github} target="_blank" rel="noreferrer">
            🔗 GitHub
          </a>
        </p>

        <h2 className="glow-accent">Career Objective</h2>
        <p style={{ marginBottom: "2rem" }}>{profileData.careerObjective}</p>

        <h2 className="glow-accent">Education</h2>
        <ul>
          {profileData.education.map(
            ({ degree, period, institute, affiliation }, i) => (
              <li key={i} style={{ marginBottom: 8 }}>
                <strong>{degree}</strong> &nbsp;
                <span>{period}</span>
                <br />
                <span>{institute}</span>
                {affiliation ? <>, {affiliation}</> : null}
              </li>
            )
          )}
        </ul>
      </motion.div>
    </section>
  );
};

export default About;
