import { Github, ExternalLink, Package } from "lucide-react";
import { workProjects, personalProjects } from "../data/portfolio";
import { Project } from "../types";

const ProjectItem = ({ project }: { project: Project }) => (
  <div className="cv-item group">
    <div className="cv-item-header mb-2 relative">
      <div className="flex flex-col">
        <h3 className="cv-item-company text-teal-400 group-hover:text-teal-300 transition-colors">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2 mt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-slate-800 text-slate-400 text-[9px] uppercase tracking-wider rounded border border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3 text-slate-400 mt-1">
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

    <ul className="space-y-2">
      <li className="cv-bullet text-slate-300 text-sm italic md:not-italic">
        {project.description}
      </li>
    </ul>
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
