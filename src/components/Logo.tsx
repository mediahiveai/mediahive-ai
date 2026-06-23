import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  theme?: "dark" | "light";
}

export function Logo({ className, showText = true, theme = "dark" }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="mhGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066FF" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#9333EA" />
          </linearGradient>
        </defs>
        <path d="M24 4L40 13V35L24 44L8 35V13L24 4Z" stroke="url(#mhGrad)" strokeWidth="1.5" fill="none" />
        <path d="M24 12L32 17V27L24 32L16 27V17L24 12Z" fill="url(#mhGrad)" opacity="0.85" />
        <circle cx="24" cy="22" r="2.5" fill="#0066FF" />
        {[17, 31].map((x) =>
          [18, 28].map((y) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" fill="#9333EA" opacity="0.6" />
          ))
        )}
      </svg>
      {showText && (
        <span
          className={cn(
            "font-display text-lg font-bold tracking-tight",
            theme === "light" ? "text-zinc-900" : "text-white"
          )}
        >
          Media<span className="gradient-text">Hive</span>
          <span
            className={cn(
              "ml-1 text-[10px] font-semibold uppercase tracking-[0.25em]",
              theme === "light" ? "text-zinc-400" : "text-zinc-500"
            )}
          >
            AI
          </span>
        </span>
      )}
    </div>
  );
}
