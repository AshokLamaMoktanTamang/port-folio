import { BookOpen } from "lucide-react";
import { personalInfo } from "../data/portfolio";

const FloatingBlogButton = () => {
  return (
    <a
      href={personalInfo.blogs}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 text-white rounded-full shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
      aria-label="Visit My Blog"
    >
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <BookOpen
        size={24}
        className="group-hover:scale-110 transition-transform duration-300 relative z-10"
      />

      <span className="absolute right-16 px-3 py-1.5 bg-slate-800 text-white text-[10px] font-bold uppercase tracking-wider rounded border border-slate-700 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none">
        Visit My Blog
      </span>
    </a>
  );
};

export default FloatingBlogButton;
