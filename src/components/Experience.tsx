import { experiences } from "../data/portfolio";

const Experience = () => {
  return (
    <section id="experience" className="py-16 cv-bg-main">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="cv-section-title uppercase">
          <span className="w-2 h-2 bg-teal-500 rounded-full inline-block"></span>
          WORK EXPERIENCE
        </h2>
        <div className="cv-divider"></div>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="cv-item group">
              <div className="cv-item-header mb-1">
                <h3 className="cv-item-company text-teal-400 group-hover:text-teal-300 transition-colors">
                  {exp.company}
                </h3>
                <span className="cv-item-location">{exp.location}</span>
              </div>
              <div className="cv-item-header mb-3">
                <h4 className="cv-item-role">{exp.position}</h4>
                <span className="cv-item-date">{exp.startDate} — Ongoing</span>
              </div>

              <ul className="space-y-1.5">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="cv-bullet">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
