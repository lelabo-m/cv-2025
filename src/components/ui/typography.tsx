import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const headingVariants = cva(
  "text-foreground scroll-m-20  tracking-tight text-pretty",
  {
    variants: {
      level: {
        h1: "text-3xl font-semibold text-macadamia-beige text-shadow-sm text-shadow-accent/50",
        h2: "text-5xl font-semibold text-accent-light text-shadow-sm text-shadow-venetian-lace/50",
        h3: "text-xl font-semibold underline",
        h4: "",
        h5: "",
        h6: "",
      },
    },
  },
);

export const TypographyHeading = ({
  as,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  }) => {
  const Component = as;
  return (
    <Component
      className={cn(headingVariants({ level: as, className }))}
      {...props}
    >
      {children}
    </Component>
  );
};

export function TypographyBlockquote({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className={cn(
        "border-foreground/50 mt-2 border-l-2 pl-6 italic",
        className,
      )}
      {...props}
    >
      {children}
    </blockquote>
  );
}
