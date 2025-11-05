"use client";

import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "./ui/pagination";

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

export const Footer = () => {
  const buildDate = new Date();
  const formattedDate = buildDate.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
  return (
    <footer className="bg-secondary flex w-full items-center justify-between p-2">
      <p className="text-accent-light text-sm">
        {"©"} {buildDate.getFullYear()}{" "}
        {"Marc Le Labourier. All rights reserved."}
      </p>
      <p className="text-accent-light text-sm">
        {"Last updated:"} {formattedDate}
      </p>

      <Pagination className="mx-0 w-fit">
        <PaginationContent>
          <PaginationItem>
            <PaginationLink
              className="bg-card border-accent text-primary"
              href="#"
              isActive
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="bg-background" href="#">
              2
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationNext className="text-background" href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </footer>
  );
};
