import React from "react";
import { Package, ShoppingBag, LineChart } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Organize Your Products",
      description: "Maintain your product catalog and inventory records with brand, model, storage, color, and unique device IMEIs.",
      icon: Package,
    },
    {
      num: "02",
      title: "Manage Your Daily Activity",
      description: "Record sales, purchases, expenses, and cash movements through clear, responsive cashier and billing screens.",
      icon: ShoppingBag,
    },
    {
      num: "03",
      title: "Review Your Business",
      description: "Use available dashboards and reports to understand recorded activity, inventory valuations, and shift cash balances.",
      icon: LineChart,
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#0E1526] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400">
            Store Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight mt-2 text-balance">
            A Simpler Way to Manage Daily Operations.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            From morning opening to evening till reconciliation, keep your store processes structured and consistent.
          </p>
        </div>

        {/* 3 Steps: Horizontal on Desktop, Vertical on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative rounded-xl border border-slate-800 bg-[#121A2D] p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-bold text-indigo-400/90">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 text-xs font-mono text-slate-400 flex items-center justify-between">
                  <span>Step {idx + 1} of 3</span>
                  <span className="text-indigo-400">Windows Ready</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
