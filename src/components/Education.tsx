import { education } from "../data/portfolio";

const Education = () => {
  return (
    <section id="education" className="py-16 cv-bg-main">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="cv-section-title uppercase">
          <span className="w-2 h-2 bg-teal-500 rounded-full inline-block"></span>
          EDUCATION
        </h2>
        <div className="cv-divider"></div>

        <div className="space-y-10">
          {education.map((edu) => (
            <div key={edu.id} className="cv-item">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-1">
                <h3 className="text-lg font-black text-teal-400 uppercase tracking-tight">
                  {edu.degree}
                </h3>
                <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">
                  {edu.startDate} — {edu.endDate}
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-2">
                <span className="text-sm text-slate-200 font-bold uppercase tracking-wider">
                  {edu.institution}
                </span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {edu.location}
                </span>
              </div>
              {edu.details && (
                <p className="text-xs text-slate-400 mt-2 italic font-medium">
                  {edu.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
