import {
  Phone,
  PhoneCall,
  ChevronDown,
  Menu,
  X,
  BadgeCheck,
  ArrowRight,
  Share2,
  MapPin,
  Clock,
  ExternalLink,
  CheckCircle2,
  Plus,
  CalendarCheck,
  FileText,
  Wrench,
  Flame,
  Snowflake,
  Droplets,
  Droplet,
  Bath,
  ShowerHead,
  RefreshCw,
  Warehouse,
  ArrowLeftRight,
  SlidersHorizontal,
  FlaskConical,
  Pipette,
  Star,
  Award,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  type LucideProps,
} from "lucide-react";
import type { ReactElement } from "react";

type IconName =
  | "call"
  | "contact_emergency"
  | "expand_more"
  | "menu"
  | "close"
  | "verified"
  | "arrow_right_alt"
  | "share"
  | "location_on"
  | "schedule"
  | "open_in_new"
  | "check_circle"
  | "add"
  | "event_available"
  | "request_quote"
  | "handyman"
  | "build"
  | "tune"
  | "local_fire_department"
  | "whatshot"
  | "ac_unit"
  | "water_drop"
  | "plumbing"
  | "bathroom"
  | "shower"
  | "water_damage"
  | "swap_horiz"
  | "garage"
  | "propane_tank"
  | "sync"
  | "science"
  | "star"
  | "award"
  | "dollar"
  | "chevron_left"
  | "chevron_right"
  // Custom trade icons
  | "pipe_wrench"
  | "drain_camera"
  | "gas_valve"
  | "boiler_unit"
  | "hydronic_loop"
  | "softener_tank";

const lucideMap: Record<string, React.ComponentType<LucideProps>> = {
  call: Phone,
  contact_emergency: PhoneCall,
  expand_more: ChevronDown,
  menu: Menu,
  close: X,
  verified: BadgeCheck,
  arrow_right_alt: ArrowRight,
  share: Share2,
  location_on: MapPin,
  schedule: Clock,
  open_in_new: ExternalLink,
  check_circle: CheckCircle2,
  add: Plus,
  event_available: CalendarCheck,
  request_quote: FileText,
  handyman: Wrench,
  build: Wrench,
  tune: SlidersHorizontal,
  local_fire_department: Flame,
  whatshot: Flame,
  ac_unit: Snowflake,
  water_drop: Droplet,
  plumbing: Wrench,
  bathroom: Bath,
  shower: ShowerHead,
  water_damage: Droplets,
  swap_horiz: ArrowLeftRight,
  garage: Warehouse,
  propane_tank: FlaskConical,
  sync: RefreshCw,
  science: Pipette,
  star: Star,
  award: Award,
  dollar: DollarSign,
  chevron_left: ChevronLeft,
  chevron_right: ChevronRight,
};

// ──────────────────────────────────────────────────────────
// Custom trade icons — drawn to match Lucide's visual weight
// (24 viewBox, stroke=currentColor, stroke-width 2, rounded
// caps + joins). `filled` swaps stroke for a solid currentColor
// fill where it makes sense so cards can show an "active" state.
// ──────────────────────────────────────────────────────────

type CustomIconProps = {
  size?: number | string;
  strokeWidth?: number;
  variant?: "outline" | "filled";
  className?: string;
};

const baseSvg = (
  size: number | string,
  strokeWidth: number,
  variant: "outline" | "filled",
  className: string | undefined,
  paths: ReactElement,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={variant === "filled" ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {paths}
  </svg>
);

function PipeWrench({
  size = "1em",
  strokeWidth = 2,
  variant = "outline",
  className,
}: CustomIconProps) {
  return baseSvg(
    size,
    strokeWidth,
    variant,
    className,
    <>
      <path d="M4 20 L13 11" />
      <path d="M14 4 L20 10 L16 14 L10 8 Z" />
      <path d="M11 7 L13 9" />
      <path d="M13 5 L15 7" />
    </>,
  );
}

function DrainCamera({
  size = "1em",
  strokeWidth = 2,
  variant = "outline",
  className,
}: CustomIconProps) {
  return baseSvg(
    size,
    strokeWidth,
    variant,
    className,
    <>
      <path d="M3 12 H14" />
      <circle cx="17" cy="12" r="4" />
      <circle cx="17" cy="12" r="1.5" fill={variant === "filled" ? "currentColor" : undefined} />
      <path d="M3 8 V16" />
    </>,
  );
}

function GasValve({
  size = "1em",
  strokeWidth = 2,
  variant = "outline",
  className,
}: CustomIconProps) {
  return baseSvg(
    size,
    strokeWidth,
    variant,
    className,
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M9 8 H15" />
      <path d="M12 5 V11" />
      <path d="M12 12 V19" />
      <path d="M8 19 H16" />
      <path d="M7 22 H17" />
    </>,
  );
}

function BoilerUnit({
  size = "1em",
  strokeWidth = 2,
  variant = "outline",
  className,
}: CustomIconProps) {
  return baseSvg(
    size,
    strokeWidth,
    variant,
    className,
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <circle cx="9" cy="8" r="1" fill="currentColor" />
      <path d="M13 7 H16" />
      <path d="M13 10 H16" />
      <path d="M8 14 H16" />
      <path d="M11.5 18.5 L12 16.5 L12.5 18.5 Q12.5 19 12 19 Q11.5 19 11.5 18.5 Z" />
    </>,
  );
}

function HydronicLoop({
  size = "1em",
  strokeWidth = 2,
  variant = "outline",
  className,
}: CustomIconProps) {
  return baseSvg(
    size,
    strokeWidth,
    variant,
    className,
    <>
      <path d="M5 8 H16 A3 3 0 0 1 16 14 H8 A3 3 0 0 0 8 20 H19" />
      <path d="M16 5 L19 8 L16 11" />
      <path d="M8 17 L5 20 L8 23" />
    </>,
  );
}

function SoftenerTank({
  size = "1em",
  strokeWidth = 2,
  variant = "outline",
  className,
}: CustomIconProps) {
  return baseSvg(
    size,
    strokeWidth,
    variant,
    className,
    <>
      <ellipse cx="12" cy="5" rx="6" ry="2" />
      <path d="M6 5 V18 A6 2 0 0 0 18 18 V5" />
      <path d="M9 13 Q12 11 15 13 Q12 15 9 13 Z" />
      <path d="M10 9 Q12 8 14 9" />
    </>,
  );
}

const customMap: Record<string, React.ComponentType<CustomIconProps>> = {
  pipe_wrench: PipeWrench,
  drain_camera: DrainCamera,
  gas_valve: GasValve,
  boiler_unit: BoilerUnit,
  hydronic_loop: HydronicLoop,
  softener_tank: SoftenerTank,
};

// ──────────────────────────────────────────────────────────
// Icon — public API
// ──────────────────────────────────────────────────────────

export default function Icon({
  name,
  className,
  size,
  strokeWidth = 2,
  variant = "outline",
}: {
  name: IconName | string;
  className?: string;
  size?: number | string;
  strokeWidth?: number;
  /** "filled" swaps stroke for fill on the custom trade icons. Lucide
   *  icons fall back to outline regardless. */
  variant?: "outline" | "filled";
}) {
  const Custom = customMap[name];
  if (Custom) {
    return (
      <Custom
        size={size ?? "1em"}
        strokeWidth={strokeWidth}
        variant={variant}
        className={className}
      />
    );
  }
  const Cmp = lucideMap[name];
  if (!Cmp) return null;
  return (
    <Cmp className={className} size={size ?? "1em"} strokeWidth={strokeWidth} />
  );
}
