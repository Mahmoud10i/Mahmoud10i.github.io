import React from "react";
import { Mail, MessageCircle, Shield, Monitor } from "lucide-react";
import { siteConfig } from "../../config/site";
import { Logo } from "../ui/Logo";

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#080C17] border-t border-slate-800/80 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Overview Column */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleLinkClick("/")}
              className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
            >
              <Logo size="md" />
            </button>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              An offline-first Windows desktop ERP software tailored for mobile phone retailers, smartphone shops, and electronics stores to organize sales, inventory, purchasing, expenses, and cash operations.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                <Monitor className="w-3.5 h-3.5 text-indigo-400" />
                Windows 10 & 11 Desktop
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                <Shield className="w-3.5 h-3.5 text-sky-400" />
                Local SQLite Database
              </span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick("/features")}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  Features Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/features#sales-operations")}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  POS & Sales
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/features#inventory-purchasing")}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  IMEI Inventory
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/features#financial-operations")}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  Cash & Ledgers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/features#visibility-reporting")}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  Business Reports
                </button>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick("/about")}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  About the Project
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/contact")}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  Contact & Inquiries
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/privacy-policy")}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/terms-of-use")}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  Terms of Use
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Verification Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">Direct Inquiries</h4>
            <div className="space-y-3 text-sm">
              {siteConfig.contactEmail ? (
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="flex items-center gap-2 hover:text-white transition-colors focus:outline-none focus-visible:underline break-all"
                >
                  <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>{siteConfig.contactEmail}</span>
                </a>
              ) : (
                <p className="text-xs text-slate-500 italic">
                  Email channel configured upon request.
                </p>
              )}

              {siteConfig.whatsappNumber ? (
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{siteConfig.whatsappNumber}</span>
                </a>
              ) : null}

              <div className="pt-2">
                <button
                  onClick={() => handleLinkClick("/contact")}
                  className="inline-flex items-center justify-center w-full px-3 py-2 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
                >
                  Request Information
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Declarations */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} {siteConfig.copyrightOwner}. All rights reserved. Windows is a registered trademark of Microsoft Corporation.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleLinkClick("/privacy-policy")}
              className="hover:text-slate-400 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleLinkClick("/terms-of-use")}
              className="hover:text-slate-400 transition-colors"
            >
              Terms of Use
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
