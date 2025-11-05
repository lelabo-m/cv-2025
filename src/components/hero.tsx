"use client";

import React from "react";

export function Hero({
  image,
  children,
}: { image: React.ReactNode } & React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <header className="relative flex w-full">
      <div className="relative z-10 size-full">
        <svg
          viewBox="0 0 110 20"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="fill-secondary absolute inset-y-0 right-0 size-full transform"
        >
          <polygon points="0,0 90,0 50,100 0,100" />
        </svg>

        <div className="relative">{children}</div>
      </div>

      <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
        {image}
      </div>
    </header>
  );
}

export function Body({ children }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="p-4">{children}</div>;
}

export function Footer() {
  return <div className="bg-secondary flex h-8 w-full"></div>;
}
