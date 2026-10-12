# Phone Manager Pro — Official Product Website

Official marketing and informational website for **Phone Manager Pro**, a Windows desktop ERP application designed specifically for mobile phone shops, smartphone retailers, and electronics stores.

Built with React 19, TypeScript, Vite, and Tailwind CSS. Designed for instantaneous, zero-cost static hosting deployment (Cloudflare Pages, Netlify, Vercel, GitHub Pages) without mandatory server dependencies.

---

## 📱 About Phone Manager Pro

Phone Manager Pro is an offline-first Windows desktop ERP software project engineered using **Flutter**, **Dart**, and an embedded **SQLite** local database engine. It consolidates daily phone shop retail workflows into a single workstation:

- **Sales & POS**: Fast barcode and IMEI search, item discounts, and direct ESC/POS thermal printing.
- **Inventory & Stock**: Unit-level smartphone IMEI and serial number tracking with low-stock alerts.
- **Purchase Invoices**: Supplier shipments intake, batch barcode entry, and unit cost margin tracking.
- **Accounts & Ledgers**: Customer credit ledgers, supplier payables, and account statements.
- **Expenses & Cash**: Till and safe cash balancing, inter-account transfers, and end-of-shift audits.
- **Business Reports**: Real-time sales volume, gross margins, and inventory asset valuation calculated directly from the local database without cloud latency.

---

## 🚀 Quick Start (Local Development)

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The site will be accessible at `http://localhost:3000`.

### 3. Production Build

```bash
npm run build
```

This generates an optimized, production-ready static bundle in the `dist/` directory.

---

## ⚙️ Configuration Guide

All branding details, contact channels, and website text can be customized in one central configuration file:

📁 **`src/config/site.ts`**

```typescript
export const siteConfig = {
  productName: "Phone Manager Pro",
  tagline: "Your Business, Under Control.",
  companyName: "Phone Manager Pro Team",
  websiteUrl: "https://phonemanagerpro.com",

  // Real contact information
  contactEmail: "inquiries@phonemanagerpro.com",
  whatsappNumber: "+1234567890", // Set to "" to hide the WhatsApp link

  // Contact form submission endpoint
  formEndpoint: "", // Insert your Formspree/Formspark/custom webhook URL

  // Tech Specs
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
```

### Safe Fallback & Honest Submissions

- If `contactEmail` or `whatsappNumber` are set to empty strings (`""`), the corresponding links in the footer and contact page will automatically adapt or hide gracefully to prevent displaying fake contact details.
- If `formEndpoint` is left empty (`""`), the contact form performs complete client-side validation and provides an honest explanation to the user with a pre-filled `mailto:` client opener and an instant "Copy Message Draft" button.
- If a form endpoint like Formspree is provided, submissions are sent via `fetch(formEndpoint, ...)`.

---

## 🌐 Free Static Hosting Deployment

The compiled output in `dist/` is 100% static HTML, CSS, and JavaScript.

### Option 1: Cloudflare Pages (Recommended)

1. Connect your Git repository in the **Cloudflare Dashboard** under **Workers & Pages**.
2. Select **Create application** &rarr; **Pages**.
3. Set the build settings:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Deploy.

### Option 2: Netlify

1. In the Netlify dashboard, choose **Add new site** &rarr; **Import an existing project**.
2. Set build parameters:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Click **Deploy Site**.

### Option 3: Vercel

1. Import the Git repository in Vercel.
2. Vercel automatically detects Vite:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Deploy.

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg             # Brand logo SVG favicon
│   ├── robots.txt              # Search engine directives
│   ├── sitemap.xml             # XML sitemap for SEO
│   └── images/
│       └── og-image.svg        # OpenGraph social share card
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Top bar contract + accessible mobile drawer
│   │   │   └── Footer.tsx      # Multi-column footer with legal and contact links
│   │   ├── home/
│   │   │   ├── Hero.tsx        # Hero section with benefit markers
│   │   │   ├── HeroMockup.tsx  # High-fidelity Windows desktop ERP interactive mockup
│   │   │   ├── TrustPositioning.tsx # 3 retail positioning benefit cards
│   │   │   ├── FeaturesGrid.tsx     # 10 core modules grid
│   │   │   ├── OfflineSection.tsx   # Offline SQLite architecture and diagram
│   │   │   ├── HowItWorks.tsx       # 3-step retail store operational flow
│   │   │   ├── ProductShowcase.tsx  # 5 interactive module tabs (Sales, Stock, etc.)
│   │   │   ├── ProductPhilosophy.tsx# 3 core principles (Simplicity, Visibility, Control)
│   │   │   ├── FAQSection.tsx       # Accessible 8-item FAQ accordion
│   │   │   └── FinalCTA.tsx         # Conversion call to action
│   │   └── ui/
│   │       ├── Logo.tsx        # Geometric smartphone + ERP management symbol
│   │       └── ThemeToggle.tsx # Dark / Light mode toggle
│   ├── config/
│   │   └── site.ts             # Central site configuration
│   ├── data/
│   │   ├── faq.ts              # 8 official FAQ questions and answers
│   │   └── features.ts         # Feature modules and detailed category specs
│   ├── pages/
│   │   ├── Home.tsx            # Main homepage
│   │   ├── Features.tsx        # Detailed 4-category capability breakdown
│   │   ├── About.tsx           # Technical architecture & project mission
│   │   ├── Contact.tsx         # Responsive inquiry page & honest form
│   │   ├── PrivacyPolicy.tsx   # Comprehensive privacy disclosure
│   │   ├── TermsOfUse.tsx      # Website terms of service
│   │   └── NotFound.tsx        # 404 handler
│   ├── App.tsx                 # Main layout and client-side router
│   ├── index.css               # Tailwind CSS and theme styles
│   └── main.tsx                # React root mount
├── index.html                  # HTML entry point with Schema.org & SEO metadata
├── metadata.json               # AI Studio project metadata
├── package.json
└── tsconfig.json
```

---

## 🔒 License & Intellectual Property

&copy; Phone Manager Pro. All rights reserved.
Windows is a registered trademark of Microsoft Corporation.
