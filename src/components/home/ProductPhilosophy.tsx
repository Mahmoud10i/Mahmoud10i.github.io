import React from "react";
import { Sparkles, Eye, ShieldCheck } from "lucide-react";

export const ProductPhilosophy: React.FC = () => {
  const principles = [
    {
      title: "Simplicity",
      icon: Sparkles,
      desc: "Software designed for the fast-paced retail counter. Keyboard-first operations and clear views without complex nested configurations.",
    },
    {
      title: "Visibility",
      icon: Eye,
      desc: "Knowing where your inventory sits, which customers owe balances, and what expenses were logged during each shift.",
    },
    {
      title: "Operational Control",
      icon: ShieldCheck,
      desc: "Shift closing reconciliation, IMEI tracking, and auditable cash transactions so your store accounts stay balanced.",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-[#0B1020] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400">
            Product Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight mt-2 text-balance">
            Practical Software. Clearer Workflows.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            Phone Manager Pro is built around a straightforward idea: essential store operations should be organized, accessible, and practical to manage from one desktop application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#111827] border border-slate-800 text-center flex flex-col items-center"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-950/80 border border-indigo-800/70 flex items-center justify-center text-indigo-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-100 mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
