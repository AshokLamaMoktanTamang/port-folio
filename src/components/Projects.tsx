import { ExternalLink, Github, Star } from "lucide-react";
import { projects } from "../data/portfolio";

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            A showcase of my work spanning AI-powered applications, e-learning
            platforms, and enterprise solutions
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                index === 0 ? "border-2 border-teal-400" : ""
              }`}
            >
              {index === 0 && (
                <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-2 flex items-center gap-2">
                  <Star size={20} fill="currentColor" />
                  <span className="font-semibold">Flagship Project</span>
                </div>
              )}
              <div
                className={`grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? "" : "md:grid-flow-dense"}`}
              >
                <div
                  className={`relative overflow-hidden group ${index % 2 === 0 ? "" : "md:col-start-2"}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div
                  className={`p-8 flex flex-col justify-center ${index % 2 === 0 ? "" : "md:col-start-1 md:row-start-1"}`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.longDescription || project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-teal-50 text-teal-700 text-sm rounded-full border border-teal-200 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
                      >
                        <Github size={18} />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  <div className="relative overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="text-xl font-bold text-slate-900 mb-3">
                      {project.title}
                    </h4>
                    <p className="text-slate-600 mb-4 leading-relaxed flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                    <div className="flex gap-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-teal-600 hover:text-teal-700 font-medium text-sm"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-slate-600 hover:text-slate-700 font-medium text-sm"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
