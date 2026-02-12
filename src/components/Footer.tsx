import { Heart } from "lucide-react";
import { personalInfo } from "../data/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-slate-300">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <span>Built with</span>
            <Heart size={16} className="text-red-500" fill="currentColor" />
            <span>using React & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
