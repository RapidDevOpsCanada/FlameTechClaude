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
  type LucideProps,
} from "lucide-react";

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
  | "science";

const map: Record<IconName, React.ComponentType<LucideProps>> = {
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
};

export default function Icon({
  name,
  className,
  size,
  strokeWidth = 2,
}: {
  name: IconName | string;
  className?: string;
  size?: number | string;
  strokeWidth?: number;
}) {
  const Cmp = (map as Record<string, React.ComponentType<LucideProps>>)[name];
  if (!Cmp) return null;
  // size="1em" makes Tailwind text-* classes actually control icon size
  return (
    <Cmp
      className={className}
      size={size ?? "1em"}
      strokeWidth={strokeWidth}
    />
  );
}
