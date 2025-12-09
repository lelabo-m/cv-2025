import { Technology } from "@/app/config";
import { cn } from "@/lib/utils";

export default function SkillPills({
  name,
  mastery,
  rusty,
  max = 6,
}: Technology) {
  const score = Math.max(0, Math.min(max, Math.round(mastery)));

  return (
    <div className="flex items-center justify-between">
      <span className="text-foreground mr-2 text-base font-medium">{name}</span>
      <div
        className="flex items-center gap-1"
        title={`${name}: ${score}/${max}`}
        aria-label={`${name} skill ${score} out of ${max}`}
      >
        {Array.from({ length: max }).map((_, i) => (
          <span key={i} role="presentation" className="inline-block size-4">
            <span
              className={cn(
                "block size-full rounded-full",
                i < score ? "bg-accent-light" : "bg-background",
              )}
            />
          </span>
        ))}

        {/* <Clock className={cn("size-4", rusty ? "visible" : "invisible")} /> */}
      </div>
    </div>
  );
}
