import React from "react";
import {
  Monitor,
  Code2,
  Database,
  Sparkles,
  Shield,
  Layers,
  CheckCircle,
  FileCode,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "../config/site";

interface AboutProps {
  onNavigate: (path: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const values = [
    {
      title: "Practicality",
      description:
        "Software should reflect how real retail employees operate during rush hours. Fast barcode entry, quick keyboard navigation, and streamlined workflows take precedence over unnecessary complexity.",
    },
    {
      title: "Clarity",
      description:
        "Store ledgers, shift balances, and unit inventory should be easy to understand at a glance. We prioritize intuitive terminology over confusing corporate accounting jargon.",
    },
    {
      title: "Reliability",
      description:
        "Retail stores cannot afford to halt sales when internet cables get cut or cloud servers encounter outages. An offline-first local database ensures uninterrupted counter operations.",
    },
    {
      title: "Responsible Data Handling",
      description:
        "Your business data remains on your physical hardware. We do not harvest or monetize your commercial transactions, customers, or supplier margins.",
    },
  ];

  return (
    <div className="w-full py-12 lg:py-20 bg-[#0B1020]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-950/80 text-indigo-400 border border-indigo-800/60 mb-4">
            <Monitor className="w-3.5 h-3.5" />
            <span>ABOUT THE PROJECT</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight text-balance">
            Purpose-Built for Retail Business Management.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            Phone Manager Pro is a Windows desktop ERP project focused on helping mobile phone and electronics retailers organize their daily business operations through an integrated set of tools for sales, inventory, purchasing, accounting, expenses, and cash management.
          </p>
        </div>

        {/* Mission Statement Box */}
        <div className="rounded-2xl border border-slate-800 bg-[#111827] p-8 sm:p-10 shadow-xl mb-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400">
              Our Mission
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mt-2 mb-4">
              &ldquo;Our goal is to make everyday retail management more organized and practical through focused desktop software.&rdquo;
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Many small and medium-sized electronics stores struggle between overly simplistic point-of-sale apps that lack serialized IMEI tracking, and bloated cloud ERP suites that require costly ongoing subscriptions and break during connection drops. Phone Manager Pro solves this by delivering dedicated retail depth right to your Windows workstation.
            </p>
          </div>
        </div>

        {/* Technical Architecture Section */}
        <div className="rounded-2xl border border-slate-800 bg-[#0E1526] p-8 sm:p-10 shadow-xl mb-12">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-800 mb-6">
            <Code2 className="w-6 h-6 text-indigo-400" />
            <div>
              <h3 className="text-lg font-bold text-slate-100">Technical Foundation</h3>
              <p className="text-xs text-slate-400">Desktop engineering and local database architecture</p>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Designed with Flutter and Dart, Phone Manager Pro uses SQLite for local data storage and is structured around offline-first desktop workflows. This modern engineering approach provides high UI rendering performance, predictable execution on Windows, and direct database queries without network round-trips.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-xs font-semibold text-slate-400">Core Framework</div>
              <div className="text-sm font-bold text-slate-200 mt-1">{siteConfig.techSpecs.framework}</div>
              <div className="text-[11px] text-slate-400 mt-1">Compiled natively for x86_64 Windows</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-xs font-semibold text-slate-400">Programming Language</div>
              <div className="text-sm font-bold text-slate-200 mt-1">{siteConfig.techSpecs.language}</div>
              <div className="text-[11px] text-slate-400 mt-1">Sound null safety and typed schemas</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-xs font-semibold text-slate-400">Embedded Engine</div>
              <div className="text-sm font-bold text-slate-200 mt-1">{siteConfig.techSpecs.database}</div>
              <div className="text-[11px] text-slate-400 mt-1">Zero configuration serverless file DB</div>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400">
              Guiding Principles
            </span>
            <h3 className="text-2xl font-bold text-slate-100 mt-2">
              Our Values
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              The fundamental standards that guide how Phone Manager Pro is architected and presented.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#111827] border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <h4 className="text-base font-bold text-slate-100 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{v.title}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Factual Disclaimer Card */}
        <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 leading-relaxed mb-12">
          <strong className="text-slate-300">Representation Notice:</strong> This website serves as the official product information hub and documentation reference for Phone Manager Pro. All information presented describes the Windows desktop application as designed. No independent corporate certifications or external manufacturer endorsements are implied.
        </div>

        {/* Contact CTA */}
        <div className="text-center pt-4">
          <button
            onClick={() => onNavigate("/contact")}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-lg shadow-indigo-950/60 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            <span>Have questions? Contact our team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
