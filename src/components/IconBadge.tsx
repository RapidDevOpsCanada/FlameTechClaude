import Icon from "@/components/Icon";

export type IconTone = "heating" | "plumbing" | "air" | "water" | "neutral";

/** Map a `ServicePage.category` to an `IconTone`. Heating→orange,
 *  Plumbing→teal, Air→soft teal-cyan, Water→deeper teal-cyan. */
export function toneFromCategory(
  category: string | undefined,
): IconTone {
  switch (category) {
    case "Heating":
      return "heating";
    case "Plumbing":
      return "plumbing";
    case "Air":
      return "air";
    case "Water":
      return "water";
    default:
      return "neutral";
  }
}

const TONES: Record<
  IconTone,
  {
    /** Background tint for `outline` variant (e.g. bg-primary/15) */
    outlineBg: string;
    /** Foreground colour for the icon glyph in `outline` variant */
    outlineFg: string;
    /** Solid background for `filled` variant */
    filledBg: string;
    /** Foreground colour for the icon glyph in `filled` variant */
    filledFg: string;
  }
> = {
  heating: {
    outlineBg: "bg-primary/15",
    outlineFg: "text-primary-deep",
    filledBg: "bg-primary",
    filledFg: "text-cream-50",
  },
  plumbing: {
    outlineBg: "bg-emergency/15",
    outlineFg: "text-emergency-deep",
    filledBg: "bg-emergency",
    filledFg: "text-cream-50",
  },
  air: {
    outlineBg: "bg-emergency/10",
    outlineFg: "text-emergency",
    filledBg: "bg-emergency",
    filledFg: "text-cream-50",
  },
  water: {
    outlineBg: "bg-emergency/15",
    outlineFg: "text-emergency-deep",
    filledBg: "bg-emergency-deep",
    filledFg: "text-cream-50",
  },
  neutral: {
    outlineBg: "bg-primary/15",
    outlineFg: "text-primary-deep",
    filledBg: "bg-primary",
    filledFg: "text-cream-50",
  },
};

const SIZES: Record<
  "sm" | "md" | "lg",
  { container: string; icon: string }
> = {
  sm: { container: "w-9 h-9 rounded-lg", icon: "text-base" },
  md: { container: "w-11 h-11 rounded-xl", icon: "text-lg" },
  lg: { container: "w-12 h-12 rounded-xl", icon: "text-xl" },
};

/**
 * Coloured, rounded square holding an icon glyph. Designed to live
 * inside `group` cards — the icon nudges (rotate + scale) on group
 * hover to add tactile feel without being noisy.
 */
export default function IconBadge({
  name,
  tone = "neutral",
  variant = "outline",
  size = "md",
  animate = true,
  className = "",
}: {
  name: string;
  tone?: IconTone;
  variant?: "outline" | "filled";
  size?: "sm" | "md" | "lg";
  /** Disable the group-hover icon nudge (default: enabled). */
  animate?: boolean;
  className?: string;
}) {
  const palette = TONES[tone];
  const dims = SIZES[size];
  const bg = variant === "filled" ? palette.filledBg : palette.outlineBg;
  const fg = variant === "filled" ? palette.filledFg : palette.outlineFg;

  return (
    <div
      className={`${dims.container} ${bg} ${fg} flex items-center justify-center transition-colors ${className}`}
    >
      <Icon
        name={name}
        variant={variant}
        className={`${dims.icon} transition-transform ${
          animate ? "group-hover:rotate-6 group-hover:scale-110" : ""
        }`}
      />
    </div>
  );
}
