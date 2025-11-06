import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const headingVariants = cva(
  "text-foreground scroll-m-20 tracking-tight text-pretty font-heading",
  {
    variants: {
      level: {
        h1: "text-3xl font-extrabold text-macadamia-beige text-shadow-sm text-shadow-fence-green/50 italic",
        h2: "text-5xl font-black italic text-accent text-shadow-sm text-shadow-fence-green/50 ",
        h3: "text-xl text-accent-light font-semibold text-shadow-sm text-shadow-fence-green/50 italic",
        h4: "text-xl font-semibold underline text-fence-green ",
        h5: "text-xs font-semibold text-accent ",
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
