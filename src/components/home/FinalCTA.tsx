import React from "react";
import { ArrowRight, Monitor, ShieldCheck, Mail } from "lucide-react";

interface FinalCTAProps {
  onContactClick: () => void;
  onFeaturesClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onContactClick, onFeaturesClick }) => {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#0B1020] border-t border-slate-800/80 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-[#131C31] to-[#0E1527] p-8 sm:p-12 lg:p-16 text-center shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-800/60 mb-4">
            <Monitor className="w-3.5 h-3.5" />
            <span>WINDOWS DESKTOP APPLICATION</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight text-balance">
            Ready to Get Your Shop Organized?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discover how Phone Manager Pro can support your everyday retail operations with integrated sales, inventory, and cash management.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg shadow-indigo-950/60 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
            </button>

            <button
              onClick={onFeaturesClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <span>Explore Features</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Offline-First SQLite Architecture</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Monitor className="w-4 h-4 text-sky-400" />
              <span>Standalone Windows Workstation</span>
            </span>
            <span>·</span>
            <span>Direct Vendor Inquiries</span>
          </div>
        </div>
      </div>
    </section>
  );
};
