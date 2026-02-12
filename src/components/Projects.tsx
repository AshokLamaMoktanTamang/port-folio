import { Github, ExternalLink, Package } from "lucide-react";
import { workProjects, personalProjects } from "../data/portfolio";
import { Project } from "../types";

const ProjectItem = ({ project }: { project: Project }) => (
  <div className="cv-item group">
    <div className="mb-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-2">
        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-teal-400 transition-colors tracking-tight uppercase">
          {project.title}
        </h3>
        <div className="flex items-center gap-4 text-slate-500">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="hover:text-teal-400 transition-colors"
            >
              <Github size={18} />
            </a>
          )}
          {project.npmUrl && (
            <a
              href={project.npmUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="NPM"
              className="hover:text-teal-400 transition-colors"
            >
              <Package size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Live App"
              className="hover:text-teal-400 transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 bg-slate-800/50 text-slate-400 text-[9px] font-bold uppercase tracking-widest rounded border border-slate-700/50"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    <div className="pl-0 border-l-2 border-transparent group-hover:border-teal-500/20 transition-all">
      <p className="text-slate-400 text-sm leading-relaxed italic md:not-italic font-medium">
        {project.description}
      </p>
    </div>
  </div>
);

const Projects = () => {
  return (
    <>
      <section id="work-projects" className="py-16 cv-bg-main">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="cv-section-title uppercase">
            <span className="w-2 h-2 bg-teal-500 rounded-full inline-block"></span>
            WORK PROJECTS
          </h2>
          <div className="cv-divider"></div>

          <div className="space-y-12">
            {workProjects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="personal-projects" className="py-16 cv-bg-alt">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="cv-section-title uppercase">
            <span className="w-2 h-2 bg-teal-500 rounded-full inline-block"></span>
            PERSONAL PROJECTS
          </h2>
          <div className="cv-divider"></div>

          <div className="space-y-12">
            {personalProjects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
