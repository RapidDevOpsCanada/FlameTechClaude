import Link from "next/link";
import Icon from "@/components/Icon";

export type Crumb = {
  label: string;
  href?: string;
};

/**
 * Visible breadcrumb trail. Mirrors the JSON-LD `BreadcrumbList`
 * schema rendered in metadata so the same hierarchy is communicated
 * to both users and crawlers. Last crumb has no href and is
 * rendered as plain text.
 */
export default function Breadcrumbs({
  items,
  variant = "dark",
}: {
  items: Crumb[];
  /** "dark" reads on the ink-900 hero background; "light" on cream content. */
  variant?: "dark" | "light";
}) {
  const isDark = variant === "dark";
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex flex-wrap items-center gap-2 text-[12px] uppercase tracking-[0.14em] font-semibold ${
        isDark ? "text-cream-50/55" : "text-ink-500"
      }`}
    >
      {items.map((c, i) => {
        const last = i === items.length - 1;
        return (
          <span key={`${c.label}-${i}`} className="flex items-center gap-2">
            {c.href && !last ? (
              <Link
                href={c.href}
                className={
                  isDark
                    ? "hover:text-emergency transition-colors"
                    : "hover:text-emergency-deep transition-colors"
                }
              >
                {c.label}
              </Link>
            ) : (
              <span
                aria-current={last ? "page" : undefined}
                className={
                  last
                    ? isDark
                      ? "text-primary"
                      : "text-primary-deep"
                    : ""
                }
              >
                {c.label}
              </span>
            )}
            {!last && (
              <Icon
                name="chevron_right"
                className={`text-base shrink-0 ${
                  isDark ? "text-cream-50/30" : "text-ink-500/60"
                }`}
              />
            )}
          </span>
        );
      })}
    </nav>
  );
}
