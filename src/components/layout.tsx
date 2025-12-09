import { cn } from "@/lib/utils";
import React from "react";

export function PdfDocument({
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-zinc-50 font-sans dark:bg-black">
      {children}
    </div>
  );
}

export function PdfPage({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <main
      className={cn(
        "bg-background flex h-[29.7cm] w-[21cm] flex-col items-start justify-between p-4",
        className,
      )}
    >
      {children}
    </main>
  );
}

export function Copyright(props: React.HTMLAttributes<HTMLDivElement>) {
  const buildDate = new Date();
  const formattedDate = buildDate.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
  return (
    <div
      {...props}
      className={cn(
        "flex w-full items-center justify-between text-xs font-semibold",
        props.className,
      )}
    >
      <span>
        {"©"} {buildDate.getFullYear()}{" "}
        {"Marc Le Labourier. All rights reserved."}
      </span>
      <span>
        {"Last updated:"} {formattedDate}
      </span>
    </div>
  );
}
