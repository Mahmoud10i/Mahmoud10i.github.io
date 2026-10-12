import React from "react";
import { FileText, ShieldAlert, CheckCircle, Info } from "lucide-react";
import { siteConfig } from "../config/site";

export const TermsOfUse: React.FC = () => {
  return (
    <div className="w-full py-12 lg:py-20 bg-[#0B1020]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-950/80 text-indigo-400 border border-indigo-800/60 mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>TERMS OF SERVICE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Terms of Use
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            Last updated: October 2026 · Governing: Website access &amp; product informational content
          </p>
        </div>

        {/* Advisory Callout */}
        <div className="mb-10 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 space-y-1">
          <div className="flex items-center gap-2 font-semibold text-slate-200">
            <Info className="w-4 h-4 text-indigo-400" />
            <span>Website Terms vs. Software End-User License Agreement (EULA)</span>
          </div>
          <p className="leading-relaxed">
            These terms govern the use of this website. Use of the Phone Manager Pro Windows desktop application itself is governed by its respective End-User License Agreement (EULA) provided at the time of software installation and licensing.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-sm text-slate-300 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">1. Acceptance of Terms</h2>
            <p>
              By accessing, browsing, or using this website, you agree to comply with and be bound by these Terms of Use. If you do not agree with any portion of these terms, please refrain from using this website.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">2. Intellectual Property &amp; Website Content</h2>
            <p>
              All materials displayed on this website, including software mockups, brand assets, product descriptions, layouts, and logos, are the property of {siteConfig.copyrightOwner} unless otherwise attributed. You may not reproduce, redistribute, or reverse engineer any part of this site without prior written consent.
            </p>
            <p className="text-xs text-slate-400">
              * Note: Windows is a registered trademark of Microsoft Corporation in the United States and other countries. Use of the name is descriptive of operating system platform compatibility.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">3. Nature of Product Descriptions &amp; Mockups</h2>
            <p>
              The dashboard mockups and interactive module previews shown on this website represent conceptual illustrations and sample workflows designed to assist potential users in understanding the capabilities of the desktop application. Visual elements, color schemes, and exact layout arrangements may vary according to Windows version, screen resolution, and individual software releases.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">4. Accuracy of Information &amp; Availability</h2>
            <p>
              While we make diligent efforts to maintain accurate, up-to-date documentation on this website, we do not warrant that all feature specifications or pricing estimates will remain unchanged without prior notice. Product features are subject to continuous refinement.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">5. Acceptable Website Use</h2>
            <p>You agree to use this website only for legitimate commercial inquiries and review. You shall not:</p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-400">
              <li>Submit fraudulent, defamatory, or abusive inquiries through the contact interface</li>
              <li>Attempt to compromise the security, infrastructure, or accessibility of the site</li>
              <li>Scrape or harvest data from this site using automated bots in a manner that degrades service</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, {siteConfig.copyrightOwner} and its contributors shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your access to or inability to access this informational website.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">7. Changes to Terms</h2>
            <p>
              We reserve the right to revise these Terms of Use at any time. Any changes will be posted directly to this page with an updated timestamp.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">8. Contact &amp; Questions</h2>
            <p>
              For legal inquiries, commercial licensing queries, or clarification on these terms, please reach out to:
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
