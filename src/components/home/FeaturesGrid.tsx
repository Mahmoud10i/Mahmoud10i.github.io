import React from "react";
import {
  ShoppingCart,
  Boxes,
  FileSpreadsheet,
  BookOpen,
  Receipt,
  Wallet,
  Tags,
  Clock,
  BarChart3,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";
import { overviewModules, FeatureModule } from "../../data/features";

interface FeaturesGridProps {
  onModuleClick?: (moduleId: string) => void;
}

export const FeaturesGrid: React.FC<FeaturesGridProps> = ({ onModuleClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShoppingCart":
        return <ShoppingCart className="w-5 h-5 text-indigo-400" />;
      case "Boxes":
        return <Boxes className="w-5 h-5 text-sky-400" />;
      case "FileSpreadsheet":
        return <FileSpreadsheet className="w-5 h-5 text-emerald-400" />;
      case "BookOpen":
        return <BookOpen className="w-5 h-5 text-amber-400" />;
      case "Receipt":
        return <Receipt className="w-5 h-5 text-rose-400" />;
      case "Wallet":
        return <Wallet className="w-5 h-5 text-teal-400" />;
      case "Tags":
        return <Tags className="w-5 h-5 text-purple-400" />;
      case "Clock":
        return <Clock className="w-5 h-5 text-blue-400" />;
      case "BarChart3":
        return <BarChart3 className="w-5 h-5 text-orange-400" />;
      case "LayoutDashboard":
        return <LayoutDashboard className="w-5 h-5 text-indigo-400" />;
      default:
        return <ShoppingCart className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-[#0E1526] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400">
            Integrated Modules
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight mt-2 text-balance">
            Everything Your Shop Needs. In One Place.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            Bring your essential retail workflows together with purpose-built tools for everyday store management.
          </p>
        </div>

        {/* 10 Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
          {overviewModules.map((item: FeatureModule) => (
            <div
              key={item.id}
              onClick={() => onModuleClick && onModuleClick(item.id)}
              className="group rounded-xl border border-slate-800 bg-[#131B2E] p-5 transition-all duration-200 hover:border-slate-700 hover:bg-[#16213A] hover:-translate-y-0.5 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:border-slate-700 transition-colors">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-sm font-bold text-slate-100 group-hover:text-white transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-indigo-300 transition-colors">
                <span>View Details</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
