import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { faqList, FAQItem } from "../../data/faq";

interface FAQSectionProps {
  onContactClick?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onContactClick }) => {
  const [openIds, setOpenIds] = useState<string[]>(["what-is-phone-manager-pro", "offline-operation"]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-[#0E1526] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-950/70 text-indigo-400 border border-indigo-800/50 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENT QUESTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Clear, straightforward answers regarding the desktop application and its capabilities.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-3" role="region" aria-label="Frequently Asked Questions">
          {faqList.map((item: FAQItem) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="rounded-xl border border-slate-800 bg-[#121A2D] overflow-hidden transition-colors hover:border-slate-700"
              >
                <button
                  type="button"
                  id={`faq-btn-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-100">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "transform rotate-180 text-indigo-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/40"
                  >
                    <p>{item.answer}</p>
                    {item.category && (
                      <div className="mt-3 text-[11px] font-mono text-slate-400">
                        Category: {item.category}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-10 p-6 rounded-xl bg-[#10172A] border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-100">Have a specific retail question?</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Contact our team directly for pricing, licensing details, or desktop requirements.
            </p>
          </div>
          {onContactClick && (
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Contact Team</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
