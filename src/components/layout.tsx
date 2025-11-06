import { cn } from "@/lib/utils";

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
        "bg-background flex h-[29.7cm] w-[21cm] flex-col items-start",
        className,
      )}
    >
      {children}
    </main>
  );
}
