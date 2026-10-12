/**
 * Phone Manager Pro — Central Website Configuration
 * 
 * Edit this file to customize branding, contact links, and site metadata.
 * If contactEmail or whatsappNumber are left empty (""), the corresponding
 * buttons/links in the interface will gracefully adapt or hide to prevent
 * displaying non-functioning or fake information.
 */

export interface SiteConfig {
  productName: string;
  tagline: string;
  companyName: string;
  websiteUrl: string;
  
  // Real contact information (leave empty if not configured yet)
  contactEmail: string;
  whatsappNumber: string; // e.g., "+1234567890" or empty
  
  // Form submission service endpoint (e.g. Formspree / Formspark endpoint, or "" for mailto/manual)
  formEndpoint: string;
  
  // Social Links (only populated links will be rendered)
  socialLinks: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
  };

  // Primary action buttons
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  
  // Windows desktop software tech specs
  techSpecs: {
    targetPlatform: string;
    framework: string;
    language: string;
    database: string;
    architecture: string;
    supportedWindows: string;
  };

  // Copyright details
  copyrightOwner: string;
}

export const siteConfig: SiteConfig = {
  productName: "Phone Manager Pro",
  tagline: "Your Business, Under Control.",
  companyName: "Phone Manager Pro Team",
  websiteUrl: "https://phonemanagerpro.com",

  // To configure real contact channels, provide your actual email and WhatsApp:
  contactEmail: "inquiries@phonemanagerpro.com",
  whatsappNumber: "", // Set e.g. "+1234567890" to enable direct WhatsApp inquiry button

  // Form backend endpoint: Leave empty to enable the built-in direct email drafting / configuration guidance
  formEndpoint: "", 

  socialLinks: {
    // Leave blank until official profiles are established
    github: "",
    twitter: "",
    linkedin: "",
    youtube: "",
  },

  primaryCtaText: "Explore Features",
  primaryCtaHref: "#/features",
  secondaryCtaText: "Get in Touch",
  secondaryCtaHref: "#/contact",

  techSpecs: {
    targetPlatform: "Windows Desktop",
    framework: "Flutter Desktop",
    language: "Dart",
    database: "SQLite (Embedded Local DB)",
    architecture: "Offline-First Local Storage",
    supportedWindows: "Windows 10 & Windows 11 (64-bit)",
  },

  copyrightOwner: "Phone Manager Pro",
};
