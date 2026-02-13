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
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-1">
                <h3 className="text-lg font-black text-white group-hover:text-teal-400 transition-colors uppercase tracking-tight">
                  {exp.company}
                </h3>
                <span className="text-xs font-bold text-slate-400 md:text-white uppercase tracking-wider">
                  {exp.location}
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
                <h4 className="text-sm font-bold text-teal-500/90 italic">
                  {exp.position}
                </h4>
                <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">
                  {exp.startDate} — {exp.endDate}
                </span>
              </div>

              <ul className="space-y-2.5">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="cv-bullet text-sm leading-relaxed">
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
