import { cn } from "@/lib/cn";

/** Fades content up as it scrolls into view — CSS scroll timeline, see `.reveal` in globals.css. */
export function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("reveal", className)}>{children}</div>;
}
