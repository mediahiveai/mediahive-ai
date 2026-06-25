import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  theme?: "dark" | "light";
  variant?: "full" | "mark";
}

export function Logo({
  className,
  showText = true,
  theme = "dark",
  variant = "full",
}: LogoProps) {
  if (variant === "mark" || !showText) {
    return (
      <div className={cn("flex items-center", className)}>
        <img
          src="/logo-mark.svg"
          alt="MediaHive AI"
          width={44}
          height={44}
          className="h-11 w-11 object-contain"
        />
      </div>
    );
  }

  const src = theme === "dark" ? "/logo-dark.svg" : "/logo.svg";

  return (
    <div className={cn("flex items-center", className)}>
      <img
        src={src}
        alt="MediaHive AI"
        width={260}
        height={48}
        className="h-11 w-auto object-contain object-left sm:h-12 md:h-[52px]"
        decoding="async"
      />
    </div>
  );
}
