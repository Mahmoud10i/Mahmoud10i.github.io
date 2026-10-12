import React from "react";
import {
  ShoppingBag,
  PackageSearch,
  Coins,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Monitor,
  Database,
  Printer,
  Barcode,
  Layers,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { detailedCategories, FeatureCategory } from "../data/features";

interface FeaturesPageProps {
  onNavigate: (path: string) => void;
}

export const Features: React.FC<FeaturesPageProps> = ({ onNavigate }) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "ShoppingBag":
        return <ShoppingBag className="w-6 h-6 text-indigo-400" />;
      case "PackageSearch":
        return <PackageSearch className="w-6 h-6 text-sky-400" />;
      case "Coins":
        return <Coins className="w-6 h-6 text-emerald-400" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-purple-400" />;
      default:
        return <Layers className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <div className="w-full py-12 lg:py-20 bg-[#0B1020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Page Hero */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-800/60 mb-4">
            <Monitor className="w-3.5 h-3.5" />
            <span>DESKTOP CAPABILITIES & MODULES</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight text-balance">
            Powerful Tools for Everyday Retail Management.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore the core modules that bring sales, inventory, purchasing, and cash operations together in a unified Windows workstation.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-sky-400" />
              <span>Offline SQLite DB</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Barcode className="w-3.5 h-3.5 text-indigo-400" />
              <span>Barcode &amp; IMEI Support</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Printer className="w-3.5 h-3.5 text-emerald-400" />
              <span>Thermal Receipt Output</span>
            </span>
          </div>
        </div>

        {/* 4 Deep-Dive Categories */}
        <div className="space-y-16 lg:space-y-24">
          {detailedCategories.map((category: FeatureCategory, catIdx) => (
            <div
              key={category.id}
              id={category.id}
              className="scroll-mt-24 p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-100">
                      {category.categoryTitle}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                      {category.categorySubtitle}
                    </p>
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-500 self-start sm:self-auto">
                  Category 0{catIdx + 1}
                </div>
              </div>

              {/* Items Grid within Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="rounded-xl border border-slate-800/80 bg-[#141D30] p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
                  >
                    <div>
                      <h3 className="text-base font-bold text-slate-100 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                        {item.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-slate-800/80">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                          Included capabilities:
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          {item.keyPoints.map((point, ptIdx) => (
                            <li key={ptIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                      <span>Module Part {itemIdx + 1}</span>
                      <span className="text-emerald-400">Desktop Verified</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Boundary Statement */}
        <div className="mt-16 p-6 rounded-xl bg-[#111827] border border-slate-800 text-xs text-slate-400 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 font-semibold text-slate-200 mb-1">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span>Product Positioning &amp; Scope Boundary</span>
          </div>
          <p className="leading-relaxed">
            Phone Manager Pro is dedicated solely to on-premises Windows desktop operations. To ensure total operational transparency, this product does not require or advertise multi-tenant cloud subscriptions, online consumer web shops, or third-party automated cloud sync. Store owners retain full custody of their local SQLite database files.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3">
            Interested in seeing how this fits your store?
          </h3>
          <p className="text-sm text-slate-400 mb-6 max-w-xl mx-auto">
            Get in touch with us to inquire about licensing options, hardware compatibility, or to schedule a product walkthrough.
          </p>
          <button
            onClick={() => onNavigate("/contact")}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-lg shadow-indigo-950/60 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            <span>Inquire About Phone Manager Pro</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
