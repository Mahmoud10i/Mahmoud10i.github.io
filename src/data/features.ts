export interface FeatureModule {
  id: string;
  name: string;
  description: string;
  iconName: string;
  badge?: string;
  highlights: string[];
}

export const overviewModules: FeatureModule[] = [
  {
    id: "sales-pos",
    name: "Sales & POS",
    description: "Manage retail sales through a dedicated point-of-sale workflow.",
    iconName: "ShoppingCart",
    highlights: ["Quick item scan", "Discount & tax handling", "Print retail receipts", "Customer balance linking"]
  },
  {
    id: "inventory",
    name: "Inventory Management",
    description: "Organize your product catalog and track inventory movements.",
    iconName: "Boxes",
    highlights: ["IMEI and serial tracking", "Category & brand grouping", "Low-stock visibility", "Item movement ledger"]
  },
  {
    id: "purchase-invoices",
    name: "Purchase Invoices",
    description: "Record supplier purchases and keep purchasing activity organized.",
    iconName: "FileSpreadsheet",
    highlights: ["Supplier invoice logging", "Cost tracking", "Automatic stock intake", "Payment status tracking"]
  },
  {
    id: "accounts-ledgers",
    name: "Accounts & Ledgers",
    description: "Maintain organized account records and review financial activity.",
    iconName: "BookOpen",
    highlights: ["Customer & supplier ledgers", "Debit/credit tracking", "Account balances", "Historical statements"]
  },
  {
    id: "expenses",
    name: "Expenses Management",
    description: "Record operating expenses and keep business costs visible.",
    iconName: "Receipt",
    highlights: ["Daily operational costs", "Expense category sorting", "Cash out tracking", "Clear cost breakdown"]
  },
  {
    id: "cash-management",
    name: "Cash Management",
    description: "Review cash accounts and track transfers between accounts.",
    iconName: "Wallet",
    highlights: ["Drawer vs. safe accounts", "Internal transfer logs", "Reconciled balance review", "Discrepancy prevention"]
  },
  {
    id: "pricing",
    name: "Pricing Management",
    description: "Organize product pricing for the workflows supported by the application.",
    iconName: "Tags",
    highlights: ["Wholesale & retail rates", "Bulk price updates", "Cost vs. selling margin", "Clear catalog pricing"]
  },
  {
    id: "shift-closing",
    name: "Shift Closing",
    description: "Review shift activity and reconcile recorded cash against the expected balance.",
    iconName: "Clock",
    highlights: ["Cash count input", "Expected vs. actual audit", "Variance logging", "Printed shift summary"]
  },
  {
    id: "reports",
    name: "Business Reports",
    description: "Review available operational and financial summaries.",
    iconName: "BarChart3",
    highlights: ["Daily sales summaries", "Inventory valuation", "Profit/loss estimation", "Supplier balance sheets"]
  },
  {
    id: "dashboard",
    name: "Executive Dashboard",
    description: "Access an overview of key business information from one workspace.",
    iconName: "LayoutDashboard",
    highlights: ["High-level daily metrics", "Quick shortcuts", "Immediate inventory alerts", "Single desktop view"]
  }
];

export interface FeatureCategory {
  id: string;
  categoryTitle: string;
  categorySubtitle: string;
  iconName: string;
  items: {
    title: string;
    description: string;
    keyPoints: string[];
  }[];
}

export const detailedCategories: FeatureCategory[] = [
  {
    id: "sales-operations",
    categoryTitle: "A. Sales Operations",
    categorySubtitle: "Designed for the fast-paced retail counter of mobile phone and gadget stores.",
    iconName: "ShoppingBag",
    items: [
      {
        title: "POS Terminal",
        description: "A fast, keyboard-friendly retail counter interface built to register sales with minimal delay.",
        keyPoints: [
          "Barcode scanner and fast item search",
          "Support for device IMEIs and accessory items",
          "Customer selection or anonymous walk-in counter sales",
          "Split cash/card or on-account transaction options"
        ]
      },
      {
        title: "Sales Records",
        description: "Maintain a complete audit log of all issued invoices, returns, and sales receipts.",
        keyPoints: [
          "Chronological sales transaction journal",
          "Invoice lookup by customer, receipt number, or date",
          "Item return and exchange handling with stock reversal",
          "Print and reprint receipts on standard POS thermal or A4 formats"
        ]
      },
      {
        title: "Shift Closing",
        description: "End-of-day and end-of-shift cash drawer audits to eliminate unaccounted cash variances.",
        keyPoints: [
          "Record starting till balance at shift opening",
          "Calculate expected cash based on cash sales and expenses",
          "Input manual cash count to reveal exact over/short variance",
          "Lock the shift and generate an end-of-day summary log"
        ]
      }
    ]
  },
  {
    id: "inventory-purchasing",
    categoryTitle: "B. Inventory & Purchasing",
    categorySubtitle: "Maintain strict visibility over high-value smartphones, accessories, and supplier shipments.",
    iconName: "PackageSearch",
    items: [
      {
        title: "Inventory Catalog",
        description: "Unified repository for phones, tablets, smart accessories, chargers, and replacement parts.",
        keyPoints: [
          "IMEI and serial number tracking for individual phone units",
          "Multi-attribute support: Brand, Model, Color, Storage, Condition",
          "Barcode generation and SKU assignment",
          "Minimum threshold indicators to flag reorder needs"
        ]
      },
      {
        title: "Inventory Movements",
        description: "Transparent log of every unit received, sold, returned, or adjusted.",
        keyPoints: [
          "Historical audit trail per item and per IMEI",
          "Manual adjustment records for damaged or tested units",
          "Stock level verification sheets for periodic inventory counts",
          "Exportable movement history for bookkeeping"
        ]
      },
      {
        title: "Purchase Invoices",
        description: "Record incoming supplier shipments and link them directly to accounts payable.",
        keyPoints: [
          "Batch IMEI entry on incoming phone shipments",
          "Supplier cost registration to maintain accurate unit margins",
          "Instant automatic stock quantity increment upon confirmation",
          "Payment terms (paid in full, partial cash, or on supplier credit)"
        ]
      },
      {
        title: "Pricing Tiers",
        description: "Define structured pricing rules suited for walk-in retail, repeat clients, and wholesale buyers.",
        keyPoints: [
          "Set standard retail price and trade/wholesale rates",
          "Prevent selling below defined minimum cost threshold",
          "Quick price adjustments across selected brands or models",
          "Transparent profit margin preview during price setup"
        ]
      }
    ]
  },
  {
    id: "financial-operations",
    categoryTitle: "C. Financial Operations",
    categorySubtitle: "Keep store cash, operational expenses, and partner balances orderly and transparent.",
    iconName: "Coins",
    items: [
      {
        title: "Accounts & Ledgers",
        description: "Double-entry bookkeeping concepts translated into practical retail customer and supplier ledgers.",
        keyPoints: [
          "Dedicated customer credit accounts with balance limits",
          "Supplier liability ledgers showing pending purchase invoices",
          "Transaction-by-transaction account statement generation",
          "Clear debit and credit balance views"
        ]
      },
      {
        title: "Operating Expenses",
        description: "Track shop operational expenditures to understand actual operational overhead.",
        keyPoints: [
          "Category tagging: Rent, Utilities, Shop Supplies, Salaries, Maintenance",
          "Immediate deduction from active cash drawer or main store safe",
          "Notes and invoice reference numbers for receipts",
          "Daily and monthly expense totals"
        ]
      },
      {
        title: "Cash Transfers",
        description: "Safely document internal cash movements between registers, petty cash, and main safes.",
        keyPoints: [
          "Drawer-to-safe cash drop logging",
          "Source and destination account balance adjustments",
          "Timestamped transfer records with optional cashier verification",
          "Prevents confusion during final end-of-day bank deposits"
        ]
      },
      {
        title: "Account Payments",
        description: "Record collections from credit customers and debt settlements made to suppliers.",
        keyPoints: [
          "Partial or full payment settlement against open invoices",
          "Payment receipts with remaining balance reminders",
          "Cash, card, or check payment method selection",
          "Synchronized balance updates across debtor/creditor ledgers"
        ]
      }
    ]
  },
  {
    id: "visibility-reporting",
    categoryTitle: "D. Visibility & Reporting",
    categorySubtitle: "Review store health, revenue trends, and stock valuation whenever you need them.",
    iconName: "TrendingUp",
    items: [
      {
        title: "Executive Dashboard",
        description: "The primary command center showing real-time operational status at a single glance.",
        keyPoints: [
          "Today's total sales volume and transaction count",
          "Active cash balance currently in the register drawer",
          "Fast-moving items and low-stock warning banners",
          "Immediate access buttons to jump into sales, purchases, or expenses"
        ]
      },
      {
        title: "Available Business Reports",
        description: "Comprehensive financial and operational reporting built from local database records.",
        keyPoints: [
          "Periodic sales summary (daily, weekly, monthly custom ranges)",
          "Current inventory asset valuation report",
          "Gross profit estimation by item category or brand",
          "Supplier purchasing volume and expense category breakdown"
        ]
      },
      {
        title: "Cash Reconciliation",
        description: "Verify that recorded cash inflows match physical cash in the till and bank deposits.",
        keyPoints: [
          "Cross-checks recorded sales against recorded cash collections",
          "Flags uncollected credit amounts or unexpected cash gaps",
          "Audit logs for manager review and shift approvals",
          "Historical reconciliation archive stored safely on local disk"
        ]
      }
    ]
  }
];

export interface ShowcaseTab {
  id: string;
  name: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  metrics: { label: string; value: string }[];
}

export const showcaseTabs: ShowcaseTab[] = [
  {
    id: "sales",
    name: "Sales",
    title: "Fast, Resilient Point of Sale",
    tagline: "Process transactions smoothly at your retail counter, even when offline.",
    description: "Designed specifically for phone shops, the POS module handles barcode scanning, individual device IMEI lookup, accessory multi-buys, and instant invoice printing without needing an active internet connection.",
    capabilities: [
      "Rapid product & IMEI search bar",
      "Multiple receipt templates for thermal & standard printers",
      "Customer credit verification & walk-in sale modes",
      "Instant discount and return management"
    ],
    metrics: [
      { label: "Execution", value: "Offline-First" },
      { label: "Hardware Support", value: "ESC/POS & Laser" },
      { label: "Identifier", value: "IMEI / Serial / SKU" }
    ]
  },
  {
    id: "inventory",
    name: "Inventory",
    title: "Granular Stock & IMEI Control",
    tagline: "Track individual phone units and bulk accessories with precision.",
    description: "Maintain clear visibility over both serialized hardware (smartphones, tablets, smartwatches) and non-serialized bulk accessories (cables, cases, screen protectors) stored in local SQLite tables.",
    capabilities: [
      "Unique IMEI history tracking from purchase to sale",
      "Automated stock level reorder alerts",
      "Brand, model, color, and storage categorization",
      "Item movement ledger for loss prevention"
    ],
    metrics: [
      { label: "Tracking Level", value: "Unit-Level Serial/IMEI" },
      { label: "Database Engine", value: "Local SQLite" },
      { label: "Catalog Types", value: "Serialized & Bulk" }
    ]
  },
  {
    id: "purchasing",
    name: "Purchasing",
    title: "Supplier Invoices & Intake Logistics",
    tagline: "Keep incoming stock costs and supplier liabilities organized.",
    description: "Register supplier shipments quickly. As new phones arrive, scan IMEIs in batch, assign purchase costs, and have inventory quantities updated in the local database immediately.",
    capabilities: [
      "Bulk barcode/IMEI entry scanner input",
      "Cost averaging and pricing margin setup",
      "Supplier account balance integration",
      "Historical purchase invoice archive"
    ],
    metrics: [
      { label: "Intake Mode", value: "Batch IMEI Intake" },
      { label: "Cost Accounting", value: "Unit Cost History" },
      { label: "Payables", value: "Integrated Ledgers" }
    ]
  },
  {
    id: "accounting",
    name: "Accounting",
    title: "Practical Retail Accounts & Ledgers",
    tagline: "Know exactly who owes what and where every dollar went.",
    description: "No bloated accounting jargon — just practical, everyday retail ledgers for customer credit, supplier debts, store expenses, and inter-account cash movements.",
    capabilities: [
      "Customer and vendor account statement generation",
      "Itemized store expense logging with category tagging",
      "Till-to-safe transfer tracking with reconciliation logs",
      "Payment receipts and debt settlement records"
    ],
    metrics: [
      { label: "System", value: "Double-Entry Concept" },
      { label: "Cash Points", value: "Register, Safe & Bank" },
      { label: "Statements", value: "Exportable Logs" }
    ]
  },
  {
    id: "reports",
    name: "Reports",
    title: "Clear Operational & Financial Summaries",
    tagline: "Review your store's sales and margins whenever you need.",
    description: "Access instant summaries of sales volume, inventory asset valuation, and operating expenses calculated directly from your local SQLite database without cloud latency.",
    capabilities: [
      "Custom date range sales and transaction analysis",
      "Total inventory valuation by brand and category",
      "Expense breakdown by department or category",
      "Shift closing audit and variance history"
    ],
    metrics: [
      { label: "Latency", value: "Instant (Local DB)" },
      { label: "Summaries", value: "Sales, Stock & Costs" },
      { label: "Auditing", value: "Shift Cash Variance" }
    ]
  }
];
