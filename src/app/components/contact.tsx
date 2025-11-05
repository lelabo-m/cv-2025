import { cn } from "@/lib/utils";
import React from "react";

export const ContactAnimatedText = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex items-center gap-2 text-sm", className)} {...props}>
    {children}
  </div>
);

export const ContactAnimatedPill = ({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="flex items-center">
      <div
        className={cn(
          "border-input inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};
