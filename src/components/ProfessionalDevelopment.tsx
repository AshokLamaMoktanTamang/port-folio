import React from "react";
import { motion } from "framer-motion";

const ProfessionalDevelopment: React.FC = () => {
  return (
    <section id="professional-development" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Professional Development
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface/50 backdrop-blur-md rounded-2xl p-8 border border-white/5 shadow-xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-text mb-1">
                WRL Supervisor
              </h3>
              <p className="text-xl text-accent font-medium">Innovate Tech</p>
            </div>
            <div className="mt-2 sm:mt-0 px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold border border-accent/20">
              07/2024 - 11/2024
            </div>
          </div>

          <div className="space-y-4 text-muted leading-relaxed text-lg">
            <div className="flex gap-3">
              <span className="text-accent mt-1.5 text-sm">▹</span>
              <p>
                Selected as the supervisor for the Work-Related Learning (WRL)
                module, overseen by Islington College.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-accent mt-1.5 text-sm">▹</span>
              <p>
                Led and mentored 4 front-end interns, guiding them in modern web
                technologies including React, TypeScript, Bootstrap, SASS,
                Redux, and RTK Query.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-accent mt-1.5 text-sm">▹</span>
              <p>
                Supervised the development of a comprehensive HRM web
                application for Innovate Tech with 20+ core features, managing
                employee profiles, leave requests, and calendars.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-accent mt-1.5 text-sm">▹</span>
              <p>
                Collaborated with other WRL supervisors to assist 18 interns,
                fostering their career growth and professional adaptability.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalDevelopment;
