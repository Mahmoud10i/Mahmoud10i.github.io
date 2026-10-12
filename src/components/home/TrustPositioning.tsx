import React from "react";
import { Store, Eye, ShieldCheck, ArrowRight } from "lucide-react";

export const TrustPositioning: React.FC<{ onExplore?: () => void }> = ({ onExplore }) => {
  const benefits = [
    {
      id: "daily-ops",
      icon: Store,
      title: "Clearer Daily Operations",
      description:
        "Run everyday retail transactions from an integrated point of sale. Handle walk-in phone purchases, customer account sales, and accessory add-ons without fragmented systems.",
      metric: "Consolidated Workflows",
    },
    {
      id: "inventory-visibility",
      icon: Eye,
      title: "Better Inventory Visibility",
      description:
        "Know exactly which phone models and serial numbers are on your shelves. Track stock intake from purchase invoices down to individual IMEI movement logs.",
      metric: "Unit-Level Serial Tracking",
    },
    {
      id: "cash-management",
      icon: ShieldCheck,
      title: "More Organized Cash Management",
      description:
        "Prevent unexplained drawer discrepancies. Track sales collections, petty cash shop expenses, safe transfers, and daily shift cash closing balances in one place.",
      metric: "Shift Balancing & Audits",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#0B1020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400">
            Core Retail Positioning
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight mt-2 text-balance">
            Built for the Way Retail Shops Work.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            Manage the moving parts of your business from a single desktop workspace, with essential operational information organized where you need it.
          </p>
        </div>

        {/* 3 Visual Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-xl border border-slate-800 bg-[#111827] p-6 lg:p-7 transition-all duration-200 hover:border-slate-700 hover:bg-[#141C30] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-indigo-950/70 border border-indigo-800/60 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">{item.metric}</span>
                  {onExplore && (
                    <button
                      onClick={onExplore}
                      className="inline-flex items-center gap-1 text-indigo-400 group-hover:text-indigo-300 font-medium"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
