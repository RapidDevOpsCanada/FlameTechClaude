/**
 * Thin gradient stripe used at major dark↔cream section handoffs as a
 * softer alternative to a hard `border-t`. Uses the `.section-rule`
 * utility from globals.css (3px, primary→emergency→primary gradient,
 * 65% opacity).
 *
 * Mount at the seam between two sections — typically directly after a
 * dark hero/section that's followed by cream content, or vice versa.
 */
export default function SectionRule({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`section-rule ${className}`} />;
}
