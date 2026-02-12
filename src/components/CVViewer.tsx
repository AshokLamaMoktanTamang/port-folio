import { X, Download } from "lucide-react";

interface CVViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVViewer = ({ isOpen, onClose }: CVViewerProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-8">
      <div
        className="absolute inset-0 cv-bg-alt/50 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative w-full max-w-5xl h-full md:h-[90vh] bg-[#0b1120] rounded-none md:rounded-xl shadow-2xl border-0 md:border border-slate-800 flex flex-col overflow-hidden animate-fade-in">
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-[#0f172a]/80 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <h3 className="text-white font-black tracking-widest uppercase text-xs">
              Curriculum Vitae
            </h3>
            <span className="hidden sm:inline-block px-2 py-0.5 bg-teal-500/10 text-teal-400 text-[10px] rounded border border-teal-500/20 font-black">
              PDF
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/Ashok_Lama.pdf"
              download
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-[10px] font-black transition-colors border border-slate-700 uppercase tracking-widest"
            >
              <Download size={14} />
              <span className="hidden sm:inline">Download</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white transition-colors hover:bg-slate-800 rounded-lg"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-[#0b1120] relative">
          <iframe
            src="/Ashok_Lama.pdf#toolbar=0&zoom=page-fit&page=1"
            className="w-full h-full bg-[#0b1120]"
            title="CV Viewer"
          />
        </div>
      </div>
    </div>
  );
};

export default CVViewer;
