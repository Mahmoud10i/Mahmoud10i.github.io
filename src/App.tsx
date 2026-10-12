import React, { useState, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import { Features } from "./pages/Features";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfUse } from "./pages/TermsOfUse";
import { NotFound } from "./pages/NotFound";
import { siteConfig } from "./config/site";

export default function App() {
  // Parse route from pathname or hash
  const getInitialRoute = () => {
    if (window.location.hash) {
      const cleanHash = window.location.hash.replace(/^#\/?/, "/");
      const pathOnly = cleanHash.split("#")[0];
      return pathOnly || "/";
    }
    const path = window.location.pathname;
    return path === "" ? "/" : path;
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialRoute);

  useEffect(() => {
    const handleLocationChange = () => {
      if (window.location.hash) {
        const cleanHash = window.location.hash.replace(/^#\/?/, "/");
        const pathOnly = cleanHash.split("#")[0];
        setCurrentPath(pathOnly || "/");
      } else {
        setCurrentPath(window.location.pathname || "/");
      }
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  // Update page title dynamically according to active view
  useEffect(() => {
    const baseTitle = `${siteConfig.productName} | Windows ERP for Phone Shops`;
    switch (currentPath) {
      case "/":
        document.title = baseTitle;
        break;
      case "/features":
        document.title = `Features & Modules | ${siteConfig.productName}`;
        break;
      case "/about":
        document.title = `About the Desktop ERP | ${siteConfig.productName}`;
        break;
      case "/contact":
        document.title = `Contact & Inquiries | ${siteConfig.productName}`;
        break;
      case "/privacy-policy":
        document.title = `Privacy Policy | ${siteConfig.productName}`;
        break;
      case "/terms-of-use":
        document.title = `Terms of Use | ${siteConfig.productName}`;
        break;
      default:
        document.title = `Not Found | ${siteConfig.productName}`;
        break;
    }
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    // If path has a hash anchor like /features#sales-operations
    const [routePath, anchor] = path.split("#");
    const targetRoute = routePath || "/";

    setCurrentPath(targetRoute);
    window.history.pushState({}, "", path);

    if (anchor) {
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Render current view
  const renderPage = () => {
    switch (currentPath) {
      case "/":
      case "":
        return <Home onNavigate={handleNavigate} />;
      case "/features":
        return <Features onNavigate={handleNavigate} />;
      case "/about":
        return <About onNavigate={handleNavigate} />;
      case "/contact":
        return <Contact />;
      case "/privacy-policy":
        return <PrivacyPolicy />;
      case "/terms-of-use":
        return <TermsOfUse />;
      default:
        return <NotFound onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0B1020] text-[#F8FAFC]">
      {/* Top Navbar */}
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-1 w-full" id="main-content">
        {renderPage()}
      </main>

      {/* Unified Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
