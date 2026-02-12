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
              <div className="cv-item-header">
                <h3 className="cv-item-company text-teal-400">{edu.degree}</h3>
                <span className="cv-item-date">
                  {edu.startDate} — {edu.endDate}
                </span>
              </div>
              <div className="cv-item-header">
                <span className="text-sm text-slate-300 font-medium">
                  {edu.institution}
                </span>
                <span className="cv-item-location text-sm">{edu.location}</span>
              </div>
              {edu.details && (
                <p className="text-xs text-slate-400 mt-1 italic">
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
