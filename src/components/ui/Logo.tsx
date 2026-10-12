import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false, size = "md" }) => {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };

  const textSizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-2xl",
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Geometric Smartphone + Management Symbol SVG */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Outer Rounded Container */}
          <rect width="36" height="36" rx="9" fill="#151D2F" stroke="#334155" strokeWidth="1.2" />
          
          {/* Smartphone Frame */}
          <rect
            x="8.5"
            y="6.5"
            width="19"
            height="23"
            rx="3"
            fill="#0B1020"
            stroke="#6366F1"
            strokeWidth="1.6"
          />
          
          {/* Speaker notch */}
          <line x1="15.5" y1="9" x2="20.5" y2="9" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
          
          {/* Mini ERP dashboard elements on phone screen */}
          {/* Top metric row */}
          <rect x="11.5" y="12" width="6" height="4" rx="0.8" fill="#38BDF8" />
          <rect x="18.5" y="12" width="6" height="4" rx="0.8" fill="#6366F1" />
          
          {/* Mini growth bar chart */}
          <rect x="11.5" y="20.5" width="3" height="4.5" rx="0.6" fill="#38BDF8" />
          <rect x="16" y="18.5" width="3" height="6.5" rx="0.6" fill="#6366F1" />
          <rect x="20.5" y="17" width="3" height="8" rx="0.6" fill="#34D399" />
          
          {/* Bottom home bar */}
          <line x1="16" y1="27" x2="20" y2="27" stroke="#475569" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>

      {!iconOnly && (
        <span
          className={`font-bold tracking-tight text-slate-100 whitespace-nowrap shrink-0 ${textSizes[size]}`}
          style={{ fontFamily: "var(--font-sans, inherit)" }}
        >
          Phone Manager <span className="text-indigo-400 font-extrabold">Pro</span>
        </span>
      )}
    </div>
  );
};
