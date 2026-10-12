import React, { useState } from "react";
import {
  ShoppingCart,
  Boxes,
  FileSpreadsheet,
  BookOpen,
  BarChart3,
  CheckCircle2,
  Scan,
  Printer,
  ShieldCheck,
  FileText,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import { showcaseTabs, ShowcaseTab } from "../../data/features";

export const ProductShowcase: React.FC<{ onExploreFeatures?: () => void }> = ({ onExploreFeatures }) => {
  const [activeTabId, setActiveTabId] = useState<string>("sales");

  const currentTab = showcaseTabs.find((t) => t.id === activeTabId) || showcaseTabs[0];

  const getTabIcon = (id: string) => {
    switch (id) {
      case "sales":
        return <ShoppingCart className="w-4 h-4 shrink-0" />;
      case "inventory":
        return <Boxes className="w-4 h-4 shrink-0" />;
      case "purchasing":
        return <FileSpreadsheet className="w-4 h-4 shrink-0" />;
      case "accounting":
        return <BookOpen className="w-4 h-4 shrink-0" />;
      case "reports":
        return <BarChart3 className="w-4 h-4 shrink-0" />;
      default:
        return <ShoppingCart className="w-4 h-4 shrink-0" />;
    }
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-[#0B1020] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-950/70 text-indigo-400 border border-indigo-800/50 mb-3">
            <span>MODULAR DESKTOP WORKSPACE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight text-balance">
            Designed for Everyday Store Workflows
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            Switch between purpose-built modules inside one lightweight desktop application without cloud latency or disconnected spreadsheets.
          </p>
        </div>

        {/* Tab Buttons / Segmented Controls */}
        <div className="flex justify-center mb-8">
          <div
            className="inline-flex p-1.5 rounded-xl bg-[#111827] border border-slate-800/80 shadow-inner max-w-full overflow-x-auto"
            role="tablist"
            aria-label="Product Modules"
          >
            {showcaseTabs.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-950/50"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`}
                >
                  {getTabIcon(tab.id)}
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Panel Content: 2-Column Split */}
        <div
          role="tabpanel"
          id={`panel-${currentTab.id}`}
          aria-labelledby={`tab-${currentTab.id}`}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0F172A] border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl"
        >
          {/* Left Column: Description & Capabilities */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400">
                Module Showcase
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mt-1">
                {currentTab.title}
              </h3>
              <p className="text-xs sm:text-sm text-indigo-300/80 mt-1 font-medium">
                {currentTab.tagline}
              </p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {currentTab.description}
            </p>

            {/* Core Capability Checklist */}
            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Core Capabilities:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {currentTab.capabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Metrics Strip */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800">
              {currentTab.metrics.map((m, idx) => (
                <div key={idx} className="p-2 rounded bg-slate-900/80 border border-slate-800/80">
                  <div className="text-[10px] text-slate-400 truncate">{m.label}</div>
                  <div className="text-xs font-bold text-slate-200 truncate mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>

            {onExploreFeatures && (
              <div className="pt-2">
                <button
                  onClick={onExploreFeatures}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <span>Explore all module specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Custom Interactive CSS/SVG UI Mockup Illustration */}
          <div className="lg:col-span-7">
            <div className="relative rounded-xl border border-slate-700 bg-[#0B1020] p-4 sm:p-5 shadow-2xl">
              {/* Header inside illustration */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
                  <span className="font-semibold text-slate-200">
                    Phone Manager Pro — {currentTab.name} Interface
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                  Illustrative UI View
                </span>
              </div>

              {/* Dynamic Module UI Illustration depending on active tab */}
              <div className="mt-4 min-h-[340px]">
                {activeTabId === "sales" && (
                  <div className="space-y-3">
                    {/* POS Search Bar */}
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                      <Scan className="w-4 h-4 text-indigo-400 shrink-0" />
                      <input
                        type="text"
                        readOnly
                        value="Scan IMEI or type product name..."
                        className="bg-transparent text-xs text-slate-400 w-full focus:outline-none"
                      />
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">F2: Search</span>
                    </div>

                    {/* Active Basket Table */}
                    <div className="rounded-lg border border-slate-800/80 bg-slate-900/40 overflow-hidden">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-900/90 text-[10px] text-slate-400 uppercase font-semibold">
                          <tr>
                            <th className="p-2">Item Description</th>
                            <th className="p-2">IMEI</th>
                            <th className="p-2 text-center">Qty</th>
                            <th className="p-2 text-right">Unit Price</th>
                            <th className="p-2 text-right">Total</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 text-slate-200">
                          <tr>
                            <td className="p-2 font-medium">Apple iPhone 15 128GB Black</td>
                            <td className="p-2 font-mono text-[10px] text-slate-400">358941203948123</td>
                            <td className="p-2 text-center font-mono">1</td>
                            <td className="p-2 text-right font-mono">$799.00</td>
                            <td className="p-2 text-right font-mono font-bold">$799.00</td>
                          </tr>
                          <tr>
                            <td className="p-2 font-medium">9D Full Cover Glass Protector</td>
                            <td className="p-2 font-mono text-[10px] text-slate-400">SKU-GLS-15P</td>
                            <td className="p-2 text-center font-mono">2</td>
                            <td className="p-2 text-right font-mono">$12.50</td>
                            <td className="p-2 text-right font-mono font-bold">$25.00</td>
                          </tr>
                          <tr>
                            <td className="p-2 font-medium">20W USB-C Power Adapter</td>
                            <td className="p-2 font-mono text-[10px] text-slate-400">SKU-CHG-20W</td>
                            <td className="p-2 text-center font-mono">1</td>
                            <td className="p-2 text-right font-mono">$19.00</td>
                            <td className="p-2 text-right font-mono font-bold">$19.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Bottom Checkout & Receipt Totals */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1.5 text-xs">
                        <div className="text-[11px] font-semibold text-slate-300">Payment Breakdown</div>
                        <div className="flex justify-between text-slate-400 text-[11px]">
                          <span>Cash Tendered:</span>
                          <span className="font-mono text-emerald-400">$850.00</span>
                        </div>
                        <div className="flex justify-between text-slate-400 text-[11px]">
                          <span>Change Due:</span>
                          <span className="font-mono text-indigo-300">$7.00</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 pt-1">
                          <Printer className="w-3 h-3 text-slate-400" />
                          <span>Thermal 80mm receipt ready</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-800/60 flex flex-col justify-between">
                        <div>
                          <div className="text-[10px] uppercase font-semibold text-indigo-300">Grand Total</div>
                          <div className="text-xl sm:text-2xl font-black font-mono tabular-nums text-slate-100">
                            $843.00
                          </div>
                        </div>
                        <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Ready for Checkout (Enter)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTabId === "inventory" && (
                  <div className="space-y-3">
                    {/* Filter Strip */}
                    <div className="flex items-center justify-between text-xs pb-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 rounded bg-slate-800 text-indigo-300 font-medium text-[11px]">All Brands (148)</span>
                        <span className="px-2 py-1 rounded bg-slate-900 text-slate-400 hover:text-slate-300 text-[11px]">Apple (52)</span>
                        <span className="px-2 py-1 rounded bg-slate-900 text-slate-400 hover:text-slate-300 text-[11px]">Samsung (61)</span>
                      </div>
                      <span className="text-[11px] text-emerald-400 font-mono">SQLite Local Index: OK</span>
                    </div>

                    {/* Stock Inventory Table */}
                    <div className="rounded-lg border border-slate-800 bg-slate-900/40 overflow-hidden">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-900/90 text-[10px] text-slate-400 uppercase font-semibold">
                          <tr>
                            <th className="p-2">Model / Spec</th>
                            <th className="p-2">IMEI / Serial</th>
                            <th className="p-2 text-right">Cost</th>
                            <th className="p-2 text-right">Sell Price</th>
                            <th className="p-2 text-center">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 text-slate-200">
                          <tr>
                            <td className="p-2 font-medium">Galaxy S24 Ultra 512GB Grey</td>
                            <td className="p-2 font-mono text-[10px] text-slate-400">352109841249102</td>
                            <td className="p-2 text-right font-mono text-slate-400">$1,020.00</td>
                            <td className="p-2 text-right font-mono font-bold">$1,299.00</td>
                            <td className="p-2 text-center">
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800">In Stock</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 font-medium">iPhone 15 Pro Max 256GB Natural</td>
                            <td className="p-2 font-mono text-[10px] text-slate-400">354091283019482</td>
                            <td className="p-2 text-right font-mono text-slate-400">$980.00</td>
                            <td className="p-2 text-right font-mono font-bold">$1,199.00</td>
                            <td className="p-2 text-center">
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800">In Stock</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 font-medium">Redmi Note 13 Pro+ 256GB</td>
                            <td className="p-2 font-mono text-[10px] text-slate-400">863410293819231</td>
                            <td className="p-2 text-right font-mono text-slate-400">$295.00</td>
                            <td className="p-2 text-right font-mono font-bold">$379.00</td>
                            <td className="p-2 text-center">
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-950 text-amber-400 border border-amber-800">Low Stock (2)</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Stock Valuation Footer */}
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-4 text-slate-400">
                        <span>Total Items: <strong className="text-slate-200">214</strong></span>
                        <span>Tracked IMEIs: <strong className="text-slate-200">118</strong></span>
                      </div>
                      <div className="font-mono text-indigo-400 font-semibold">
                        Total Stock Cost Valuation: $48,290.00
                      </div>
                    </div>
                  </div>
                )}

                {activeTabId === "purchasing" && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="font-semibold text-slate-200">Supplier Purchase Invoice: #PINV-2026-44</span>
                        <span className="font-mono text-indigo-400 text-[11px]">Supplier: Al-Noor Telecom Wholesale</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-400">
                        <div>Invoice Date: <span className="text-slate-200">Today</span></div>
                        <div>Payment Terms: <span className="text-amber-400 font-medium">Partial (30 Days)</span></div>
                        <div>Intake Status: <span className="text-emerald-400 font-medium">Verified into Stock</span></div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-3 space-y-2">
                      <div className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                        <FileText className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Batch Scanned Devices Intake Log</span>
                      </div>
                      <div className="font-mono text-[11px] bg-slate-950/70 p-2 rounded border border-slate-800 text-slate-300 space-y-1">
                        <div className="flex justify-between">
                          <span>1. Galaxy A55 5G 128GB [IMEI: 351298410293811]</span>
                          <span className="text-emerald-400">Cost: $265.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>2. Galaxy A55 5G 128GB [IMEI: 351298410293812]</span>
                          <span className="text-emerald-400">Cost: $265.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>3. Galaxy A55 5G 128GB [IMEI: 351298410293813]</span>
                          <span className="text-emerald-400">Cost: $265.00</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 text-xs text-slate-400">
                      <span>Total Invoice: <strong className="text-slate-100">$2,150.00</strong></span>
                      <span>Paid From Safe: <strong className="text-emerald-400">$1,000.00</strong></span>
                      <span>Open Credit: <strong className="text-amber-400">$1,150.00</strong></span>
                    </div>
                  </div>
                )}

                {activeTabId === "accounting" && (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                        <div className="text-[11px] text-slate-400">Customer Credit Receivable</div>
                        <div className="text-lg font-bold font-mono text-sky-400 mt-1">$890.00</div>
                        <div className="text-[10px] text-slate-400 mt-1">3 customers with open balance</div>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                        <div className="text-[11px] text-slate-400">Drawer-to-Safe Reconciliation</div>
                        <div className="text-lg font-bold font-mono text-emerald-400 mt-1">$1,420.00</div>
                        <div className="text-[10px] text-slate-400 mt-1">Ready for shift closing drop</div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-slate-800 bg-slate-900/40 overflow-hidden">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-900/90 text-[10px] text-slate-400 uppercase font-semibold">
                          <tr>
                            <th className="p-2">Date/Time</th>
                            <th className="p-2">Ledger Description</th>
                            <th className="p-2 text-right">Debit</th>
                            <th className="p-2 text-right">Credit</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 text-slate-200">
                          <tr>
                            <td className="p-2 font-mono text-[10px] text-slate-400">11:15 AM</td>
                            <td className="p-2">Sale Invoice #1084 (Galaxy S24)</td>
                            <td className="p-2 text-right font-mono text-emerald-400">+$1,199.00</td>
                            <td className="p-2 text-right font-mono text-slate-400">-</td>
                          </tr>
                          <tr>
                            <td className="p-2 font-mono text-[10px] text-slate-400">01:30 PM</td>
                            <td className="p-2">Store Expense: Shop Fiber Internet</td>
                            <td className="p-2 text-right font-mono text-slate-400">-</td>
                            <td className="p-2 text-right font-mono text-red-400">-$45.00</td>
                          </tr>
                          <tr>
                            <td className="p-2 font-mono text-[10px] text-slate-400">03:00 PM</td>
                            <td className="p-2">Cash Drop: Drawer to Main Safe</td>
                            <td className="p-2 text-right font-mono text-slate-400">-</td>
                            <td className="p-2 text-right font-mono text-amber-400">-$1,000.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTabId === "reports" && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-semibold text-slate-200">Generated Financial Summary</div>
                        <div className="text-[11px] text-slate-400">Period: Current Working Day</div>
                      </div>
                      <span className="font-mono text-indigo-400 text-xs font-bold">Local SQL Query &lt; 4ms</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                        <div className="text-[10px] text-slate-400">Total Sales</div>
                        <div className="font-mono font-bold text-slate-100 text-sm mt-0.5">$3,840.50</div>
                      </div>
                      <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                        <div className="text-[10px] text-slate-400">COGS (Unit Cost)</div>
                        <div className="font-mono font-bold text-slate-400 text-sm mt-0.5">$2,940.00</div>
                      </div>
                      <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                        <div className="text-[10px] text-slate-400">Gross Margin</div>
                        <div className="font-mono font-bold text-emerald-400 text-sm mt-0.5">+$900.50 (23.4%)</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs space-y-1.5">
                      <div className="flex justify-between text-slate-300">
                        <span>Top Category: Smartphones</span>
                        <span className="font-mono font-medium">$3,198.00 (83%)</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Accessories & Glass Protectors</span>
                        <span className="font-mono font-medium">$642.50 (17%)</span>
                      </div>
                      <div className="flex justify-between text-slate-300 border-t border-slate-800 pt-1 text-[11px] text-slate-400">
                        <span>Recorded Shift Variance:</span>
                        <span className="text-emerald-400 font-bold">$0.00 (Reconciled)</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
