import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experiences } from "../data/portfolio";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            My professional journey in software engineering
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-teal-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                >
                  <div className="bg-slate-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-teal-300">
                    <div className="flex items-start gap-3 mb-4 md:hidden">
                      <div className="p-2 bg-teal-100 text-teal-600 rounded-lg">
                        <Briefcase size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-1">
                          {exp.position}
                        </h3>
                        <p className="text-teal-600 font-semibold mb-2">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="hidden md:block mb-4">
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-teal-600 font-semibold">
                        {exp.company}
                      </p>
                    </div>

                    <div
                      className={`flex flex-wrap gap-3 mb-4 text-sm text-slate-600 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul
                      className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}
                    >
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-slate-600 text-sm"
                        >
                          <span
                            className={`text-teal-600 font-bold ${index % 2 === 0 ? "md:order-2" : ""}`}
                          >
                            •
                          </span>
                          <span className="flex-1">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:block w-2/12"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-8 border border-teal-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Professional Development
            </h3>
            <div className="max-w-3xl mx-auto">
              <p className="text-slate-700 font-semibold mb-2">
                WRL Supervisor - Innovate Tech (July 2024 - November 2024)
              </p>
              <ul className="text-left space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>
                    Selected as supervisor for the Work-Related Learning module,
                    overseen by Islington College
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>
                    Led and mentored 4 front-end interns in modern web
                    technologies including React, TypeScript, and Redux
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>
                    Supervised development of HRM web application with 20+ core
                    features
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>
                    Assisted 18 interns total, collaborating with other
                    supervisors to support career growth
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
