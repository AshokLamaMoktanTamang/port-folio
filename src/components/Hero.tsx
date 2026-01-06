import React, { useRef } from "react";
import { ReactTyped } from "react-typed";
import { motion, useScroll, useTransform } from "framer-motion";
import avatar from "@/assets/images/me.jpeg";

const startDate = new Date("2022-09");
const currentDate = new Date();
const monthsDiff =
  (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
  (currentDate.getMonth() - startDate.getMonth());
const yearsExperience = (monthsDiff / 12).toFixed(1);

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 w-full mb-10">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ y, opacity }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <div className="mb-4 inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-accent font-medium text-sm tracking-wide">
              AVAILABLE FOR WORK
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">
              Ashok Lama
            </span>
          </h1>

          <div className="h-20 md:h-24 mb-6">
            <ReactTyped
              strings={[
                "Fullstack Developer",
                "Node.js Expert",
                "React Specialist",
                `${yearsExperience} Years Experience`,
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
              className="text-2xl md:text-3xl text-muted font-medium"
            />
          </div>

          <p className="text-muted text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
            I build accessible, pixel-perfect, and performant web experiences.
            Passionate about scalable systems and modern UI.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-full bg-accent hover:bg-highlight !text-white font-semibold shadow-lg shadow-accent/25 transition-all"
            >
              Contact Me
            </motion.a>
            <motion.div className="flex gap-2">
              <a
                href="./Ashok_Lama.pdf"
                download
                className="px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-text/90 border border-white/10 font-medium transition-all"
              >
                Download CV
              </a>
              <a
                href="./Ashok_Lama.pdf"
                target="_blank"
                className="px-4 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-text/90 border border-white/10 font-medium transition-all flex items-center justify-center"
                aria-label="View CV"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Image/Graphic */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ y, opacity }}
          className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
            {/* Background Blob */}
            <div className="absolute top-0 right-0 w-full h-full bg-accent/20 blur-[80px] rounded-full animate-pulse"></div>

            {/* Image Container */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="absolute inset-0 bg-surface/20 z-10 hover:bg-transparent transition-colors duration-300"></div>
              <img
                src={avatar}
                alt="Ashok Lama"
                className="w-full h-full object-cover scale-110"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-surface/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl z-20 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-green-400 text-lg">💻</span>
              </div>
              <div>
                <p className="text-xs text-muted font-medium">Experience</p>
                <p className="text-text font-bold">{yearsExperience} Years</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted"
      >
        <span className="text-sm font-medium tracking-widest text-muted mb-2 block text-center">
          SCROLL
        </span>
        <svg
          className="w-6 h-6 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
