import React, { useState } from "react";
import {
  Mail,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  Info,
} from "lucide-react";
import { siteConfig } from "../config/site";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    businessName: "",
    inquiryType: "Pricing Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "delivered" | "form-backend-not-configured" | "error"
  >("idle");
  const [copiedDraft, setCopiedDraft] = useState(false);

  const inquiryOptions = [
    "General Inquiry",
    "Pricing Inquiry",
    "Product Demonstration",
    "Technical Question",
    "Partnership",
    "Other",
  ];

  const validateForm = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name.";
    }

    if (!formData.workEmail.trim()) {
      errs.workEmail = "Please enter your work or contact email.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.workEmail.trim())
    ) {
      errs.workEmail = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      errs.message = "Please include your message or inquiry details.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus("idle");

    // If an external form endpoint is configured in siteConfig (e.g. Formspree/Formspark)
    if (siteConfig.formEndpoint && siteConfig.formEndpoint.trim() !== "") {
      try {
        const response = await fetch(siteConfig.formEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmissionStatus("delivered");
          setFormData({
            fullName: "",
            workEmail: "",
            businessName: "",
            inquiryType: "Pricing Inquiry",
            message: "",
          });
        } else {
          setSubmissionStatus("error");
        }
      } catch (err) {
        console.error("Submission failed:", err);
        setSubmissionStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Honest Static Architecture: Form endpoint is not connected yet
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmissionStatus("form-backend-not-configured");
      }, 400);
    }
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(
      `[${formData.inquiryType}] Phone Manager Pro Inquiry from ${formData.fullName}`
    );
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
        `Email: ${formData.workEmail}\n` +
        `Business Name: ${formData.businessName || "N/A"}\n` +
        `Inquiry Type: ${formData.inquiryType}\n\n` +
        `Message:\n${formData.message}`
    );
    return `mailto:${siteConfig.contactEmail || "inquiries@phonemanagerpro.com"}?subject=${subject}&body=${body}`;
  };

  const copyDraftToClipboard = () => {
    const draft =
      `To: ${siteConfig.contactEmail || "inquiries@phonemanagerpro.com"}\n` +
      `Subject: [${formData.inquiryType}] Phone Manager Pro Inquiry from ${formData.fullName}\n\n` +
      `Full Name: ${formData.fullName}\n` +
      `Email: ${formData.workEmail}\n` +
      `Business: ${formData.businessName || "N/A"}\n\n` +
      `Message:\n${formData.message}`;

    navigator.clipboard.writeText(draft);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 3000);
  };

  return (
    <div className="w-full py-12 lg:py-20 bg-[#0B1020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400">
            Official Inquiries
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight mt-2 text-balance">
            Contact the Phone Manager Pro Team
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Have questions about pricing, desktop software licensing, or want to schedule a demonstration? Get in touch directly with our product team.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Inquiries & Guidance */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-[#111827] p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-slate-100">Direct Inquiries</h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  We welcome questions from phone shop owners, multi-counter electronics retailers, and business consultants.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4 pt-2">
                {siteConfig.contactEmail ? (
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="w-9 h-9 rounded-lg bg-indigo-950/80 text-indigo-400 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-slate-400">Official Inquiries Email</div>
                      <a
                        href={`mailto:${siteConfig.contactEmail}`}
                        className="text-sm font-semibold text-slate-200 hover:text-indigo-300 transition-colors break-all"
                      >
                        {siteConfig.contactEmail}
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 text-xs text-slate-400">
                    Official email address is configurable in <code className="text-indigo-300 font-mono">src/config/site.ts</code>.
                  </div>
                )}

                {siteConfig.whatsappNumber ? (
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="w-9 h-9 rounded-lg bg-emerald-950/80 text-emerald-400 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-slate-400">Direct WhatsApp</div>
                      <a
                        href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-slate-200 hover:text-emerald-300 transition-colors"
                      >
                        {siteConfig.whatsappNumber}
                      </a>
                    </div>
                  </div>
                ) : null}

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="w-9 h-9 rounded-lg bg-sky-950/80 text-sky-400 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-400">Response Horizon</div>
                    <div className="text-xs sm:text-sm font-medium text-slate-300">
                      Typically within 1 to 2 business days
                    </div>
                  </div>
                </div>
              </div>

              {/* What to include box */}
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-xs text-slate-400 space-y-2">
                <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Helpful details to include:</span>
                </span>
                <ul className="list-disc list-inside space-y-1 text-slate-400 text-[11px]">
                  <li>Number of active sales counter registers in your store</li>
                  <li>Approximate inventory volume (smartphones & accessories)</li>
                  <li>Receipt printing requirements (ESC/POS 80mm or standard)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-[#0F172A] p-6 sm:p-8 lg:p-10 shadow-xl">
              <h2 className="text-xl font-bold text-slate-100 mb-1">Send an Inquiry</h2>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the form below with your details. Required fields are clearly indicated.
              </p>

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                      errors.fullName
                        ? "border-rose-500/80 focus:ring-rose-500/50"
                        : "border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/30"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Work Email */}
                <div>
                  <label htmlFor="workEmail" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Work Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="workEmail"
                    type="email"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="name@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                      errors.workEmail
                        ? "border-rose-500/80 focus:ring-rose-500/50"
                        : "border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/30"
                    }`}
                  />
                  {errors.workEmail && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.workEmail}</span>
                    </p>
                  )}
                </div>

                {/* Business Name (Optional) */}
                <div>
                  <label htmlFor="businessName" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Business / Store Name <span className="text-slate-500 text-[11px]">(Optional)</span>
                  </label>
                  <input
                    id="businessName"
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Apex Cellular Retail"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-colors"
                  />
                </div>

                {/* Inquiry Type */}
                <div>
                  <label htmlFor="inquiryType" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Inquiry Type <span className="text-rose-400">*</span>
                  </label>
                  <select
                    id="inquiryType"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-colors"
                  >
                    {inquiryOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-slate-900 text-slate-200">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your phone shop and what specific ERP features you would like to know more about..."
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                      errors.message
                        ? "border-rose-500/80 focus:ring-rose-500/50"
                        : "border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/30"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 disabled:opacity-60 rounded-lg shadow-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                  >
                    {isSubmitting ? (
                      <span>Validating &amp; Preparing...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Status Message Handling (Honest Implementation) */}
              {submissionStatus === "delivered" && (
                <div className="mt-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-200 text-xs sm:text-sm space-y-1">
                  <div className="flex items-center gap-2 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Inquiry Delivered</span>
                  </div>
                  <p className="text-emerald-300/90 text-xs">
                    Your inquiry has been successfully transmitted through the connected form gateway. We will review it shortly.
                  </p>
                </div>
              )}

              {submissionStatus === "form-backend-not-configured" && (
                <div className="mt-6 p-5 rounded-xl bg-slate-900 border border-indigo-900/60 text-slate-300 text-xs sm:text-sm space-y-3">
                  <div className="flex items-center gap-2 font-bold text-indigo-300">
                    <Info className="w-4 h-4 text-indigo-400" />
                    <span>Honest Submission Notice (Form Backend Unset)</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    This static website does not have an external server form endpoint configured yet (<code className="text-indigo-300 font-mono">formEndpoint</code> in <code className="text-indigo-300 font-mono">src/config/site.ts</code>). To ensure your message is not lost, your inquiry is ready to send through your email client or copied below.
                  </p>

                  <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
                    <a
                      href={getMailtoLink()}
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open in Email Client (Mailto)</span>
                    </a>

                    <button
                      type="button"
                      onClick={copyDraftToClipboard}
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedDraft ? "Draft Copied!" : "Copy Inquiry Draft"}</span>
                    </button>
                  </div>
                </div>
              )}

              {submissionStatus === "error" && (
                <div className="mt-6 p-4 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-200 text-xs sm:text-sm space-y-1">
                  <div className="flex items-center gap-2 font-bold">
                    <AlertCircle className="w-4 h-4 text-rose-400" />
                    <span>Submission Failed</span>
                  </div>
                  <p className="text-rose-300/90 text-xs">
                    Could not reach the configured endpoint. Please email us directly at {siteConfig.contactEmail || "our official contact address"}.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
