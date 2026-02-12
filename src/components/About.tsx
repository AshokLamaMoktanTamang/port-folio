import { Code, Database, Server, Wrench, Brain, TestTube } from "lucide-react";
import { skills, personalInfo } from "../data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  "Frontend Technologies": <Code size={24} />,
  "Backend Technologies": <Server size={24} />,
  Databases: <Database size={24} />,
  "AI/ML & Tools": <Brain size={24} />,
  "DevOps & Tools": <Wrench size={24} />,
  "Testing & Quality": <TestTube size={24} />,
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Professional Background
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {personalInfo.summary}
            </p>
            <p className="text-slate-600 leading-relaxed">
              With a strong foundation in both frontend and backend
              technologies, I specialize in building scalable web applications
              using modern frameworks and tools. My experience spans from
              creating interactive user interfaces to architecting microservices
              and implementing AI-powered features.
            </p>
            <p className="text-slate-600 leading-relaxed">
              I'm passionate about mentoring junior developers and have
              successfully supervised multiple interns through the Work-Related
              Learning program, helping them grow into confident developers.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              What Drives Me
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                <p className="text-slate-600">
                  <strong className="text-slate-800">Innovation:</strong>{" "}
                  Constantly exploring new technologies and methodologies to
                  solve complex problems efficiently.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                <p className="text-slate-600">
                  <strong className="text-slate-800">Quality:</strong> Writing
                  clean, maintainable code with comprehensive testing to ensure
                  reliability.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                <p className="text-slate-600">
                  <strong className="text-slate-800">Collaboration:</strong>{" "}
                  Working closely with teams to deliver exceptional user
                  experiences and mentor others.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                <p className="text-slate-600">
                  <strong className="text-slate-800">Learning:</strong> Staying
                  current with industry trends and continuously expanding my
                  skill set.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={skillGroup.category}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105 border border-slate-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-teal-100 text-teal-600 rounded-lg">
                    {iconMap[skillGroup.category]}
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800">
                    {skillGroup.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white text-slate-700 text-sm rounded-full border border-slate-200 hover:border-teal-300 hover:bg-teal-50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
