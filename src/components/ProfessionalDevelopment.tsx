import { professionalDevelopment } from "../data/portfolio";

const ProfessionalDevelopment = () => {
  return (
    <section id="professional-development" className="py-16 cv-bg-main">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="cv-section-title uppercase">
          <span className="w-2 h-2 bg-teal-500 rounded-full inline-block"></span>
          PROFESSIONAL DEVELOPMENT
        </h2>
        <div className="cv-divider"></div>

        <div className="space-y-12">
          {professionalDevelopment.map((item, idx) => (
            <div key={idx} className="cv-item">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-1">
                <h3 className="text-lg font-black text-teal-400 uppercase tracking-tight">
                  {item.title}
                </h3>
                <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">
                  {item.startDate} — {item.endDate}
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
                <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                  {item.company}
                </h4>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {item.location}
                </span>
              </div>

              <ul className="space-y-2.5">
                {item.achievements.map((achievement, i) => (
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

export default ProfessionalDevelopment;
