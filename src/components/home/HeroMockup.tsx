import React, { useState } from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  Boxes,
  FileSpreadsheet,
  Wallet,
  Receipt,
  BarChart3,
  Settings,
  Search,
  Plus,
  RefreshCw,
  Minus,
  Square,
  X,
  Smartphone,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
} from "lucide-react";

export const HeroMockup: React.FC = () => {
  const [activeNav, setActiveNav] = useState("dashboard");
  const [chartPeriod, setChartPeriod] = useState<"daily" | "weekly">("daily");

  return (
    <div className="relative mx-auto w-full max-w-5xl rounded-xl border border-slate-700/80 bg-[#0B1020] shadow-2xl shadow-indigo-950/40 overflow-hidden text-slate-200 select-none">
      {/* Windows Application Titlebar */}
      <div className="flex items-center justify-between px-3 py-2 bg-[#10172A] border-b border-slate-800 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          {/* Windows desktop app icon */}
          <div className="w-4 h-4 rounded bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
            <Smartphone className="w-2.5 h-2.5" />
          </div>
          <span className="font-medium text-slate-300">Phone Manager Pro — Store Register 01 (Offline Local DB)</span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-400 border border-slate-700">
            v1.2.0-win64
          </span>
        </div>

        {/* Windows titlebar control buttons */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="w-7 h-5 inline-flex items-center justify-center hover:bg-slate-700/50 text-slate-400 hover:text-slate-200 rounded transition-colors"
            aria-label="Minimize"
          >
            <Minus className="w-3 h-3" />
          </button>
          <button
            type="button"
            className="w-7 h-5 inline-flex items-center justify-center hover:bg-slate-700/50 text-slate-400 hover:text-slate-200 rounded transition-colors"
            aria-label="Maximize"
          >
            <Square className="w-2.5 h-2.5" />
          </button>
          <button
            type="button"
            className="w-7 h-5 inline-flex items-center justify-center hover:bg-red-600/80 text-slate-400 hover:text-white rounded transition-colors"
            aria-label="Close"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Application Window Grid: Sidebar + Workspace */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[520px] bg-[#0E1526]">
        {/* Left ERP Sidebar */}
        <div className="md:col-span-3 lg:col-span-2.5 bg-[#0A0F1D] border-r border-slate-800/80 p-3 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Store Profile in App */}
            <div className="px-2 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Terminal</div>
              <div className="text-xs font-bold text-slate-200 truncate">Galaxy Cellular — Lane 1</div>
              <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>SQLite: Connected</span>
              </div>
            </div>

            {/* Nav Menu Items */}
            <div className="space-y-0.5">
              {[
                { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
                { id: "pos", label: "Point of Sale", icon: ShoppingCart },
                { id: "inventory", label: "Stock & IMEIs", icon: Boxes },
                { id: "purchases", label: "Purchases", icon: FileSpreadsheet },
                { id: "cash", label: "Cash & Safe", icon: Wallet },
                { id: "expenses", label: "Expenses", icon: Receipt },
                { id: "reports", label: "Store Reports", icon: BarChart3 },
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveNav(item.id)}
                    className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all text-left ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-sm shadow-indigo-900/50"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Shift Status */}
          <div className="pt-3 border-t border-slate-800/80 px-2 space-y-1">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>Shift 04</span>
              <span className="font-mono text-indigo-400">Active</span>
            </div>
            <div className="text-[10px] text-slate-400">Till: Reg-A · Cashier 01</div>
          </div>
        </div>

        {/* Right Main Dashboard Canvas */}
        <div className="md:col-span-9 lg:col-span-9.5 p-4 lg:p-5 flex flex-col justify-between overflow-x-hidden">
          {/* Top internal action row */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-slate-100">Store Executive Dashboard</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-indigo-950/80 text-indigo-300 border border-indigo-800/60">
                    Illustrative Preview · Sample Data
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Shift started at 09:00 AM · Current local offline session
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 border border-slate-700 transition-colors"
                >
                  <RefreshCw className="w-3 h-3 text-slate-400" />
                  <span>Sync DB</span>
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white shadow-sm transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>New Sale (F1)</span>
                </button>
              </div>
            </div>

            {/* 4 Summary Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-4">
              {/* Card 1 */}
              <div className="p-3 rounded-lg bg-[#141C30] border border-slate-800 shadow-sm">
                <div className="text-[11px] text-slate-400 font-medium">Today Sales</div>
                <div className="text-lg font-bold font-mono tabular-nums text-slate-100 mt-0.5">
                  $3,840.50
                </div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1 font-mono">
                  <TrendingUp className="w-3 h-3" />
                  <span>28 transactions</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-3 rounded-lg bg-[#141C30] border border-slate-800 shadow-sm">
                <div className="text-[11px] text-slate-400 font-medium">Inventory Asset</div>
                <div className="text-lg font-bold font-mono tabular-nums text-slate-100 mt-0.5">
                  $48,290.00
                </div>
                <div className="text-[10px] text-sky-400 flex items-center gap-1 mt-1">
                  <span>214 units in stock</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-3 rounded-lg bg-[#141C30] border border-slate-800 shadow-sm">
                <div className="text-[11px] text-slate-400 font-medium">Cash in Drawer</div>
                <div className="text-lg font-bold font-mono tabular-nums text-emerald-300 mt-0.5">
                  $1,420.00
                </div>
                <div className="text-[10px] text-slate-400 flex items-center gap-1 mt-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Balanced with ledger</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="p-3 rounded-lg bg-[#141C30] border border-slate-800 shadow-sm">
                <div className="text-[11px] text-slate-400 font-medium">Supplier Payables</div>
                <div className="text-lg font-bold font-mono tabular-nums text-amber-300 mt-0.5">
                  $2,150.00
                </div>
                <div className="text-[10px] text-amber-400/90 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>2 open purchase inv.</span>
                </div>
              </div>
            </div>

            {/* Split Section: Mini Sales Chart + Recent POS Ledger */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">
              {/* Mini Sales Chart (SVG Vector) */}
              <div className="lg:col-span-5 p-3.5 rounded-lg bg-[#12192B] border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-200">Daily Hourly Volume</span>
                  <div className="flex items-center gap-1 bg-slate-900/80 p-0.5 rounded text-[10px]">
                    <button
                      type="button"
                      onClick={() => setChartPeriod("daily")}
                      className={`px-1.5 py-0.5 rounded ${chartPeriod === "daily" ? "bg-indigo-600 text-white" : "text-slate-400"}`}
                    >
                      Hourly
                    </button>
                    <button
                      type="button"
                      onClick={() => setChartPeriod("weekly")}
                      className={`px-1.5 py-0.5 rounded ${chartPeriod === "weekly" ? "bg-indigo-600 text-white" : "text-slate-400"}`}
                    >
                      7 Days
                    </button>
                  </div>
                </div>

                {/* SVG Visual Chart */}
                <div className="h-32 w-full mt-2">
                  <svg viewBox="0 0 320 120" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="barGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#6366F1" />
                        <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>

                    {/* Guidelines */}
                    <line x1="0" y1="30" x2="320" y2="30" stroke="#1E293B" strokeDasharray="3 3" />
                    <line x1="0" y1="70" x2="320" y2="70" stroke="#1E293B" strokeDasharray="3 3" />
                    <line x1="0" y1="110" x2="320" y2="110" stroke="#334155" />

                    {/* Bar columns */}
                    {[
                      { x: 15, h: 42, label: "10am", val: "$340" },
                      { x: 55, h: 68, label: "12pm", val: "$620" },
                      { x: 95, h: 54, label: "2pm", val: "$480" },
                      { x: 135, h: 92, label: "4pm", val: "$890" },
                      { x: 175, h: 78, label: "6pm", val: "$740" },
                      { x: 215, h: 48, label: "8pm", val: "$410" },
                      { x: 255, h: 36, label: "9pm", val: "$360" },
                    ].map((bar, i) => (
                      <g key={i}>
                        <rect
                          x={bar.x}
                          y={110 - bar.h}
                          width="24"
                          height={bar.h}
                          rx="3"
                          fill="url(#barGrad)"
                          className="hover:opacity-80 transition-opacity cursor-pointer"
                        />
                        <text
                          x={bar.x + 12}
                          y={110 - bar.h - 4}
                          textAnchor="middle"
                          fill="#94A3B8"
                          fontSize="8"
                          fontFamily="monospace"
                        >
                          {bar.val}
                        </text>
                        <text
                          x={bar.x + 12}
                          y="120"
                          textAnchor="middle"
                          fill="#64748B"
                          fontSize="8"
                          fontFamily="sans-serif"
                        >
                          {bar.label}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Peak: 4:00 PM ($890)</span>
                  <span className="text-emerald-400 font-mono">Gross Margin: 23.4%</span>
                </div>
              </div>

              {/* Recent Retail Transactions Table */}
              <div className="lg:col-span-7 p-3.5 rounded-lg bg-[#12192B] border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-200">Recent Sales & Serial Records</span>
                  <span className="text-[10px] text-slate-400 font-mono">Local Journal</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-800 text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                        <th className="pb-1.5 font-medium">Inv #</th>
                        <th className="pb-1.5 font-medium">Item & Model</th>
                        <th className="pb-1.5 font-medium">Serial / IMEI</th>
                        <th className="pb-1.5 font-medium text-right">Amount</th>
                        <th className="pb-1.5 font-medium text-right">Method</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {[
                        {
                          inv: "#1084",
                          item: "Galaxy S24 Ultra 256GB",
                          imei: "356789...102",
                          amt: "$1,199.00",
                          method: "Cash",
                          badgeColor: "text-emerald-400",
                        },
                        {
                          inv: "#1083",
                          item: "iPhone 15 Pro 128GB",
                          imei: "354210...884",
                          amt: "$999.00",
                          method: "Card",
                          badgeColor: "text-indigo-400",
                        },
                        {
                          inv: "#1082",
                          item: "65W GaN Fast Charger",
                          imei: "SKU-CHG-65W",
                          amt: "$35.00",
                          method: "Cash",
                          badgeColor: "text-emerald-400",
                        },
                        {
                          inv: "#1081",
                          item: "Silicone Case + Tempered",
                          imei: "SKU-ACC-402",
                          amt: "$24.00",
                          method: "Cash",
                          badgeColor: "text-emerald-400",
                        },
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                          <td className="py-1.5 font-mono text-[11px] text-slate-400">{row.inv}</td>
                          <td className="py-1.5 font-medium text-slate-200 truncate max-w-[140px]">
                            {row.item}
                          </td>
                          <td className="py-1.5 font-mono text-[10px] text-slate-400">{row.imei}</td>
                          <td className="py-1.5 font-mono text-right tabular-nums text-slate-100 font-semibold">
                            {row.amt}
                          </td>
                          <td className={`py-1.5 text-right text-[11px] font-medium ${row.badgeColor}`}>
                            {row.method}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    <span>Direct ESC/POS receipt generation ready</span>
                  </span>
                  <span className="text-[10px] text-slate-400 hover:text-slate-300 cursor-pointer">
                    View Journal &rarr;
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar inside Application Mockup */}
          <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[10px] text-slate-400">
            <div className="flex items-center gap-3">
              <span>Database: C:\AppData\PhoneManagerPro\store.db</span>
              <span>·</span>
              <span>Encrypted Local Storage</span>
            </div>
            <div className="font-mono text-indigo-300">
              [Shift Active: 7h 24m] · Auto-backup to local disk enabled
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
