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
              <div className="cv-item-header mb-1">
                <h3 className="cv-item-company text-teal-400">{item.title}</h3>
                <span className="cv-item-date">
                  {item.startDate} — {item.endDate}
                </span>
              </div>
              <div className="cv-item-header mb-3">
                <h4 className="cv-item-role">{item.company}</h4>
                <span className="cv-item-location">{item.location}</span>
              </div>

              <ul className="space-y-1.5">
                {item.achievements.map((achievement, i) => (
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

export default ProfessionalDevelopment;
