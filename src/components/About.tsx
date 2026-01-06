import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const profileData = {
  name: "Ashok Lama",
  contact: {
    location: "Boudha, Kathmandu",
    email: "moktashok@gmail.com",
    phone: "(+977) 9840708606",
    linkedin: "https://www.linkedin.com/in/ashok-lama-620547282/",
    github: "https://github.com/AshokLamaMoktanTamang",
  },
  careerObjective: `Passionate software engineer with over three years of experience in full-stack development. Dedicated to creating exceptional digital experiences by architecting scalable systems and ensuring code quality. Proven track record of delivering innovative solutions tailored to user needs.`,
  education: [
    {
      degree: "BSc (Hons) Computing",
      period: "2021-2023",
      institute: "Islington College, Kathmandu",
      affiliation: "London Metropolitan University",
    },
    {
      degree: "SLC",
      period: "2018-2020",
      institute: "Trinity International College, Kathmandu",
    },
  ],
};

const About: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="about" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-surface/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl"
          style={{ y }}
        >
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Column: Personal Info */}
            <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-text mb-2">
                {profileData.name}
              </h2>
              <div className="h-1 w-20 bg-accent rounded-full mb-6"></div>

              <div className="space-y-4 text-muted text-sm">
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-surface rounded-lg text-accent">
                    📍
                  </span>
                  <span>{profileData.contact.location}</span>
                </div>
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="flex items-center gap-3 hover:text-accent transition-colors"
                >
                  <span className="p-2 bg-surface rounded-lg text-accent">
                    ✉️
                  </span>
                  <span>{profileData.contact.email}</span>
                </a>
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-surface rounded-lg text-accent">
                    📱
                  </span>
                  <span>{profileData.contact.phone}</span>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-surface rounded-xl text-muted hover:text-white hover:bg-accent transition-all shadow-md"
                >
                  <span className="sr-only">LinkedIn</span>
                  LinkedIn
                </a>
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-surface rounded-xl text-muted hover:text-white hover:bg-surface/80 transition-all shadow-md"
                >
                  <span className="sr-only">GitHub</span>
                  GitHub
                </a>
              </div>
            </div>

            {/* Right Column: Bio & Education */}
            <div className="md:w-2/3">
              <div className="mb-10">
                <h3 className="text-xl font-bold text-text mb-4 flex items-center gap-2">
                  <span className="text-accent">01.</span> Career Objective
                </h3>
                <p className="text-text/80 leading-relaxed text-lg">
                  {profileData.careerObjective}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
                  <span className="text-accent">02.</span> Education
                </h3>
                <div className="space-y-6">
                  {profileData.education.map((edu, i) => (
                    <div
                      key={i}
                      className="bg-surface/50 p-6 rounded-xl border border-white/5 hover:border-accent/30 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-text/90">{edu.degree}</h4>
                        <span className="text-xs font-semibold bg-accent/10 text-accent px-2 py-1 rounded-md">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-muted text-sm mb-1">{edu.institute}</p>
                      {edu.affiliation && (
                        <p className="text-muted/70 text-xs italic">
                          {edu.affiliation}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
