import React from "react";
import { ArrowLeft, Monitor } from "lucide-react";

interface NotFoundProps {
  onNavigate: (path: string) => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onNavigate }) => {
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center py-20 px-4 bg-[#0B1020]">
      <div className="text-center max-w-md">
        <div className="w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-800/60 flex items-center justify-center text-indigo-400 mx-auto mb-4">
          <Monitor className="w-6 h-6" />
        </div>
        <div className="font-mono text-3xl font-extrabold text-indigo-400">404</div>
        <h1 className="text-2xl font-bold text-slate-100 mt-2">Page Not Found</h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
          The requested page could not be located. You can navigate back to the main homepage or explore our software features.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => onNavigate("/")}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};
