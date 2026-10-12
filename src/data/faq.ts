export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqList: FAQItem[] = [
  {
    id: "what-is-phone-manager-pro",
    question: "What is Phone Manager Pro?",
    answer: "Phone Manager Pro is a Windows desktop ERP application designed to help mobile phone and electronics retailers manage sales, inventory, purchases, expenses, cash operations, and other supported business workflows.",
    category: "General"
  },
  {
    id: "offline-operation",
    question: "Does Phone Manager Pro work offline?",
    answer: "The application is designed for offline-first operation using a local SQLite database. Core workflows can operate without a continuous internet connection.",
    category: "Technical & Data"
  },
  {
    id: "who-is-it-for",
    question: "Who is the software designed for?",
    answer: "It is designed primarily for mobile phone shops, smartphone retailers, electronics stores, and related retail businesses.",
    category: "General"
  },
  {
    id: "online-version",
    question: "Does the website provide an online version of the desktop application?",
    answer: "No. This website introduces the desktop product. It does not provide access to an online ERP application.",
    category: "Availability"
  },
  {
    id: "pricing-inquiry",
    question: "How can I ask about pricing?",
    answer: "Contact the Phone Manager Pro team for information about pricing, licensing, and product availability.",
    category: "Licensing & Sales"
  },
  {
    id: "product-demo",
    question: "Can I request a product demonstration?",
    answer: "Contact us to discuss the possibility of a product demonstration.",
    category: "Licensing & Sales"
  },
  {
    id: "data-storage",
    question: "Where is my business data stored?",
    answer: "The application is designed around local SQLite storage. Exact storage locations and backup procedures depend on the application's implementation and configuration.",
    category: "Technical & Data"
  },
  {
    id: "cloud-sync",
    question: "Does the product include cloud synchronization?",
    answer: "Cloud synchronization is not advertised as a supported feature on this website.",
    category: "Technical & Data"
  }
];
