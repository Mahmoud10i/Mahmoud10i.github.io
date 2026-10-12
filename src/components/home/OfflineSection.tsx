import React from "react";
import { Database, Monitor, WifiOff, HardDrive, Cpu, ShieldAlert } from "lucide-react";
import { siteConfig } from "../../config/site";

export const OfflineSection: React.FC = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#0B1020] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-800 bg-[#10172A] p-8 sm:p-10 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Context & 3 Core Points */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/70 text-emerald-400 border border-emerald-800/50 mb-3">
                  <WifiOff className="w-3.5 h-3.5" />
                  <span>LOCAL-FIRST ARCHITECTURE</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight text-balance">
                  Your Business Tools, Ready Offline.
                </h2>
                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  Phone Manager Pro is designed as an offline-first Windows desktop application using a local SQLite database, allowing its core workflows to operate without a continuous internet connection.
                </p>
              </div>

              {/* 3 Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-indigo-950 text-indigo-400 flex items-center justify-center mb-3">
                    <Database className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-100">Local Data Storage</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Embedded SQLite database resides locally on your computer hard drive.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-sky-950 text-sky-400 flex items-center justify-center mb-3">
                    <Monitor className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-100">Desktop-Focused Workflows</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Built natively for Windows with fast keyboard shortcuts and barcode reader support.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center mb-3">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-100">Access to Core Functions Offline</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Register sales, search stock, and print customer bills regardless of internet outages.
                  </p>
                </div>
              </div>

              {/* Small Technical Note */}
              <div className="p-3.5 rounded-lg bg-slate-900/50 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-400">
                <ShieldAlert className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Technical note:</strong> Availability of individual functions may depend on the application&apos;s configuration. Because data is stored locally, regular computer backups should be maintained in accordance with standard store IT procedures.
                </span>
              </div>
            </div>

            {/* Right Column: Architectural Diagram / Spec Card */}
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-slate-700 bg-[#0B1020] p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs font-bold text-slate-200">Local Architecture Overview</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                    Standalone PC
                  </span>
                </div>

                {/* Stack Diagram */}
                <div className="space-y-2.5 text-xs">
                  {/* Layer 1: App UI */}
                  <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-800/60">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-indigo-200">Desktop User Interface</span>
                      <span className="text-[10px] font-mono text-indigo-400">Flutter / Dart Engine</span>
                    </div>
                    <p className="text-[11px] text-indigo-300/80 mt-1">
                      POS counter, inventory search, billing views &amp; cashier ledger controls.
                    </p>
                  </div>

                  {/* Arrow Down */}
                  <div className="flex justify-center text-slate-600 text-xs">
                    &darr; Native C interop / direct execution
                  </div>

                  {/* Layer 2: SQLite Engine */}
                  <div className="p-3 rounded-lg bg-sky-950/40 border border-sky-800/60">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-sky-200">Embedded SQLite Database</span>
                      <span className="text-[10px] font-mono text-sky-400">Zero Cloud Dependency</span>
                    </div>
                    <p className="text-[11px] text-sky-300/80 mt-1">
                      ACID transactions, indexed IMEI queries, ledger journals &amp; shift logs.
                    </p>
                  </div>

                  {/* Arrow Down */}
                  <div className="flex justify-center text-slate-600 text-xs">
                    &darr; Local file system storage
                  </div>

                  {/* Layer 3: Windows Disk */}
                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-slate-300">Windows File System</span>
                      <span className="text-[10px] font-mono text-slate-400">Win 10 / 11 64-bit</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Secure local file storage on the store workstation disk.
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[11px] text-slate-400">
                    No web hosting dependency required for day-to-day store operations.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
