import { personalInfo } from "../data/portfolio";

const About = () => {
  return (
    <section id="about" className="py-16 cv-bg-main">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="cv-section-title uppercase">
          <span className="w-2 h-2 bg-teal-500 rounded-full inline-block"></span>
          CAREER OBJECTIVE
        </h2>
        <div className="cv-divider"></div>

        <p className="text-[var(--cv-text-secondary)] text-base md:text-lg leading-relaxed text-justify font-light italic">
          "{personalInfo.summary}"
        </p>
      </div>
    </section>
  );
};

export default About;
