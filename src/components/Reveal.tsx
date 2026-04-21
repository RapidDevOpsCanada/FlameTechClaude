import type { ReactNode } from "react";

/**
 * Passthrough wrapper — previously ran an IntersectionObserver-driven
 * fade-and-rise on scroll, but the site now ships content visible up
 * front. Left as a no-op component so existing `<Reveal>` usages keep
 * compiling without an edit at every call site.
 *
 * The `delay` prop is accepted for back-compat and ignored.
 */
export default function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
