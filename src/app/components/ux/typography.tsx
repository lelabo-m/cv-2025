import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const headingVariants = cva(
  "text-foreground scroll-m-20  tracking-tight text-pretty",
  {
    variants: {
      level: {
        h1: "text-3xl font-semibold text-macadamia-beige",
        h2: "text-5xl font-semibold text-accent-light",
        h3: "text-2xl font-semibold underline",
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
