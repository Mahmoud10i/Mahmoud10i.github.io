import React from "react";
import { Shield, Lock, HardDrive, Info } from "lucide-react";
import { siteConfig } from "../config/site";

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="w-full py-12 lg:py-20 bg-[#0B1020]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-950/80 text-indigo-400 border border-indigo-800/60 mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>LEGAL &amp; PRIVACY DOCUMENTATION</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            Last updated: October 2026 · Scope: Official website and product inquiry handling
          </p>
        </div>

        {/* Advisory Callout */}
        <div className="mb-10 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 space-y-1">
          <div className="flex items-center gap-2 font-semibold text-slate-200">
            <Info className="w-4 h-4 text-indigo-400" />
            <span>Notice for Website Visitors &amp; Software Licensees</span>
          </div>
          <p className="leading-relaxed">
            This document outlines the privacy principles for the marketing website of <strong>{siteConfig.productName}</strong>. Please note that exact legal entity registrations and jurisdictional reviews should be finalized prior to formal commercial distribution.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-sm text-slate-300 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">1. Scope of This Policy</h2>
            <p>
              This Privacy Policy applies to the official marketing website accessible at {siteConfig.websiteUrl} and direct email communications sent to the Phone Manager Pro product team.
            </p>
            <p>
              It is critical to distinguish between:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-400">
              <li>
                <strong className="text-slate-300">Website Inquiries:</strong> Voluntary contact requests sent by potential clients or partners.
              </li>
              <li>
                <strong className="text-slate-300">Desktop ERP Software Data:</strong> Commercial store records, customer names, sales invoices, and inventory IMEIs entered into the Phone Manager Pro Windows application.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">
              2. Distinction Regarding Desktop ERP Data (Offline-First)
            </h2>
            <div className="p-4 rounded-xl bg-[#111827] border border-slate-800 flex items-start gap-3">
              <HardDrive className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs sm:text-sm">
                <span className="font-bold text-slate-200">Local-First Architecture Guarantee</span>
                <p className="text-slate-400">
                  Phone Manager Pro is engineered as an offline-first Windows desktop application utilizing a local SQLite database file stored on your computer. The software does not transmit, aggregate, or sell your internal store sales, supplier prices, or client balances to any central cloud server. Your operational retail records remain under your physical possession and control.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">3. Information Collected on the Website</h2>
            <p>
              When you submit a contact or demonstration request form through this website, we may collect:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-400">
              <li>Your Full Name</li>
              <li>Work or Business Contact Email</li>
              <li>Store or Company Name (if voluntarily provided)</li>
              <li>Inquiry category and message details provided in the inquiry text</li>
            </ul>
            <p className="pt-1">
              We do not collect sensitive personal attributes, credit card details, or social security identifiers through this marketing website.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">4. Purpose of Information Use</h2>
            <p>
              Information voluntarily provided via the contact form or email is utilized solely to:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-400">
              <li>Respond directly to your pricing questions and licensing inquiries</li>
              <li>Provide software demonstrations and technical compatibility assessments</li>
              <li>Deliver official updates regarding product release milestones if explicitly requested</li>
            </ul>
            <p className="pt-1">
              We do not sell, rent, or trade your inquiry details with third-party marketing brokers.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">5. Cookies and Web Analytics</h2>
            <p>
              This marketing website is designed as a clean, static frontend web presentation. We do not use third-party behavioral advertising trackers, invasive profiling cookies, or third-party pixel beacons. A basic local storage flag may be utilized solely to remember your chosen theme preference (dark or light mode).
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">6. Data Retention and Security</h2>
            <p>
              Inquiry correspondence received via email is maintained in our business inbox only as long as necessary to facilitate ongoing communication or customer service. While we apply standard security protocols to safeguard digital communications, transmission over the public internet cannot be guaranteed to be 100% impenetrable.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">7. Your Rights and Contact Options</h2>
            <p>
              You may request review, modification, or deletion of any email correspondence you have sent us by emailing our product team directly at:
            </p>
            <p className="font-mono text-indigo-400">
              {siteConfig.contactEmail || "inquiries@phonemanagerpro.com"}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
