import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = '', light = false }: LogoProps) {
  const textColor = light ? 'text-white' : 'text-[#0B1B3D]';
  const lineColor = light ? 'bg-white' : 'bg-[#0B1B3D]';

  return (
    <div className={`flex flex-col items-center justify-center font-serif select-none ${textColor} ${className}`} id="midtown-logo">
      {/* MIDTOWN - Main Heading */}
      <span className="text-[28px] md:text-[34px] font-semibold tracking-[0.18em] leading-none mb-1.5 uppercase font-serif">
        MIDTOWN
      </span>
      
      {/* LAW GROUP - Sub-heading flanked by sharp, classic lines */}
      <div className="flex items-center w-full max-w-[280px] gap-3 py-1">
        <div className={`h-[1px] ${lineColor} flex-1 opacity-80`} />
        <span className="text-[11px] md:text-[12px] uppercase tracking-[0.22em] font-medium whitespace-nowrap leading-none">
          LAW GROUP
        </span>
        <div className={`h-[1px] ${lineColor} flex-1 opacity-80`} />
      </div>
      
      {/* LLP - Small footer flanked by thin tapered-looking lines */}
      <div className="flex items-center w-[72%] max-w-[180px] gap-2 mt-0.5">
        <div className={`h-[0.5px] ${lineColor} flex-1 opacity-40`} />
        <span className="text-[8px] md:text-[9px] uppercase tracking-[0.25em] font-medium leading-none">
          LLP
        </span>
        <div className={`h-[0.5px] ${lineColor} flex-1 opacity-40`} />
      </div>
    </div>
  );
}
