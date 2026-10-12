import React from "react";
import { ArrowRight, Monitor, Layers, WifiOff, Eye } from "lucide-react";
import { HeroMockup } from "./HeroMockup";

interface HeroProps {
  onExploreFeatures: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreFeatures, onContactClick }) => {
  return (
    <section className="relative w-full pt-12 pb-16 lg:pt-20 lg:pb-24 bg-[#0B1020] bg-grid-pattern overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-indigo-900/15 via-sky-900/10 to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Text Content */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          {/* Supporting Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-950/80 text-indigo-400 border border-indigo-800/60 shadow-sm">
            <Monitor className="w-3.5 h-3.5" />
            <span className="tracking-wide">WINDOWS DESKTOP SOFTWARE</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight text-balance leading-[1.12]">
            Run Your Phone Shop Smarter.
          </h1>

          {/* Supporting Headline */}
          <p className="text-lg sm:text-xl font-medium text-indigo-200/90 max-w-3xl mx-auto text-balance">
            One powerful desktop solution for sales, inventory, purchasing, expenses, and everyday business management.
          </p>

          {/* Additional Description */}
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Phone Manager Pro brings your essential retail workflows together in one practical Windows application, designed to help you stay organized and make better-informed business decisions.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onExploreFeatures}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg shadow-indigo-950/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <span>Explore Features</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onContactClick}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-[#111827] hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Contact Us
            </button>
          </div>

          {/* Three Concise Benefit Indicators */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>Integrated Retail Management</span>
            </div>
            <div className="flex items-center gap-2">
              <WifiOff className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Offline-First Operation</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Sales &amp; Inventory Visibility</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <div className="mt-12 sm:mt-16">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
};
