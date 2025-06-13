import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import avatar from "@/assets/images/me.jpeg";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const startDate = new Date("2022-09");
const currentDate = new Date();

const monthsDiff =
  (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
  (currentDate.getMonth() - startDate.getMonth());

const yearsWithDecimal = monthsDiff / 12;

const formattedExperience = Math.round(yearsWithDecimal * 10) / 10;

const Hero: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        height: "calc(100vh - 144px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "var(--color-background)",
        color: "var(--color-text)",
        textAlign: "center",
        overflow: "hidden",
        paddingTop: 80,
      }}
    >
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true as any,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 300,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffffff",
              },
              links: {
                color: "#ffffffff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  // area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={{
          zIndex: 1,
          padding: "2rem",
          borderRadius: "20px",
          background: "rgba(var(--color-surface-rgb), 0.7)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          border: "1px solid rgba(var(--color-accent-rgb), 0.2)",
        }}
      >
        <Tilt
          glareEnable
          glareColor="var(--color-accent)"
          glarePosition="all"
          glareBorderRadius="50%"
          glareMaxOpacity={0.3}
          scale={1.05}
          perspective={1000}
        >
          <img
            src={avatar}
            alt="Ashok Lama"
            style={{
              width: 180,
              height: 180,
              borderRadius: "50%",
              border: "4px solid var(--color-accent)",
              marginBottom: 20,
              boxShadow: "0 0 30px rgba(var(--color-accent-rgb), 0.4)",
            }}
          />
        </Tilt>

        <motion.h1
          className="glow-accent"
          style={{
            fontSize: "3.5rem",
            marginBottom: "0.5rem",
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Ashok Lama
        </motion.h1>

        <motion.div
          style={{ minHeight: "2.5rem" }}
          whileHover={{ scale: 1.05 }}
        >
          <ReactTyped
            strings={[
              "Fullstack Node.js Developer",
              `${Math.round(formattedExperience)} Years Experience`,
            ]}
            typeSpeed={50}
            backSpeed={40}
            loop
            style={{
              fontSize: "1.5rem",
              color: "var(--color-muted)",
              fontWeight: 500,
            }}
          />
        </motion.div>
        <motion.div
          style={{ minHeight: "2.5rem" }}
          whileHover={{ scale: 1.05 }}
        >
          <a
            download={"./Ashok_Lama.pdf"}
            href={"./Ashok_Lama.pdf"}
            target="_blank"
            style={{
              color: "var(--color-accent)",
              borderBottom: "2px solid var(--color-accent)",
              paddingBottom: "2px",
              display: "block",
              width: "fit-content",
              margin: "auto",
              cursor: "pointer",
            }}
            className="nav-link"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "5%",
          zIndex: 1,
          animation: "bounce 2s infinite",
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
