import {
  Code2,
  Layers,
  Database,
  Globe,
  Cpu,
  Terminal,
  Sparkles,
  Box,
} from "lucide-react";
import { skills } from "../data/portfolio";

const CategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case "FRONTEND":
      return <Layers size={14} className="text-blue-400" />;
    case "BACKEND":
      return <Cpu size={14} className="text-green-400" />;
    case "DATABASES":
      return <Database size={14} className="text-purple-400" />;
    case "APIS":
      return <Globe size={14} className="text-orange-400" />;
    case "DEVOPS":
      return <Terminal size={14} className="text-red-400" />;
    case "AI/ML":
      return <Sparkles size={14} className="text-yellow-400" />;
    default:
      return <Box size={14} className="text-slate-400" />;
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 cv-bg-main">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-slate-800 rounded-lg">
            <Code2 size={24} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight uppercase">
            Skills
          </h2>
        </div>

        <div className="space-y-10">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="space-y-6">
              {/* Category Bullet */}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-[0.2em]">
                  {skillGroup.category}
                </h3>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-x-3 gap-y-4 ml-3">
                {skillGroup.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 px-3 py-1.5 bg-[#1e293b]/40 backdrop-blur-sm border border-slate-700/50 rounded-full hover:border-teal-500/50 hover:bg-[#1e293b]/60 transition-all cursor-default group shadow-sm"
                  >
                    <CategoryIcon category={skillGroup.category} />
                    <span className="text-[11px] font-semibold text-slate-200 group-hover:text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
