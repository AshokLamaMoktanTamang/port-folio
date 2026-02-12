import {
  Github,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  Eye,
  Download,
  Package,
} from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { useState } from "react";
import CVViewer from "./CVViewer";

const Hero = () => {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="pt-32 pb-16 cv-bg-main relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="space-y-3 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight uppercase">
              {personalInfo.name}
              <span className="text-teal-400">.</span>
            </h1>
            <p className="text-base md:text-lg font-bold text-teal-400/90 tracking-widest uppercase">
              {personalInfo.title}
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm text-slate-400 mb-8 font-medium">
            <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
              <MapPin size={14} className="text-teal-400" />
              {personalInfo.location}
            </div>
            <span className="hidden md:inline text-slate-700">•</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={14} className="text-teal-400" />
              {personalInfo.email}
            </a>
            <span className="hidden md:inline text-slate-700">•</span>
            <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
              <Phone size={14} className="text-teal-400" />
              {personalInfo.phone}
            </div>
          </div>

          <div className="flex justify-center items-center gap-6 text-[11px] font-bold text-slate-500 mb-12 uppercase tracking-[0.2em] border-y border-slate-800/50 py-6">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-teal-400 transition-colors"
            >
              <Linkedin size={16} className="text-teal-400" />
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-teal-400 transition-colors"
            >
              <Github size={16} className="text-teal-400" />
              GitHub
            </a>
            <a
              href={personalInfo.npm}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-teal-400 transition-colors"
            >
              <Package size={16} className="text-teal-400" />
              NPM
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setIsCVOpen(true)}
              className="flex items-center gap-2 px-8 py-2.5 bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded-md text-[11px] font-bold hover:bg-teal-500/20 transition-all uppercase tracking-widest group shadow-lg shadow-teal-500/5"
            >
              <Eye
                size={16}
                className="group-hover:scale-110 transition-transform"
              />
              View CV
            </button>
            <a
              href="/Ashok_Lama.pdf"
              download
              className="flex items-center gap-2 px-8 py-2.5 bg-slate-800 text-slate-100 border border-slate-700 rounded-md text-[11px] font-bold hover:bg-slate-700 transition-all uppercase tracking-widest shadow-lg"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>
      </section>

      <CVViewer isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </>
  );
};

export default Hero;
