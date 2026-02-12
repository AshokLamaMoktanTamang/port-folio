import { X, Download } from "lucide-react";

interface CVViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVViewer = ({ isOpen, onClose }: CVViewerProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl h-[90vh] bg-[#0f172a] rounded-xl shadow-2xl border border-slate-800 flex flex-col overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-[#1e293b]/50">
          <div className="flex items-center gap-3">
            <h3 className="text-white font-bold tracking-wider uppercase text-sm">
              Professional CV
            </h3>
            <span className="px-2 py-0.5 bg-teal-500/10 text-teal-400 text-[10px] rounded border border-teal-500/20 font-bold">
              PDF
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/Ashok_Lama.pdf"
              download
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs font-bold transition-colors border border-slate-700"
            >
              <Download size={14} />
              Download
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white transition-colors hover:bg-slate-800 rounded"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-[#0f172a] p-2 md:p-4">
          <iframe
            src="/Ashok_Lama.pdf#toolbar=0"
            className="w-full h-full rounded shadow-inner bg-slate-900"
            title="CV Viewer"
          />
        </div>
      </div>
    </div>
  );
};

export default CVViewer;
