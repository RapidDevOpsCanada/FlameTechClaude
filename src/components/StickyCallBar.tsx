/**
 * Mobile sticky call bar — intentionally a no-op stub.
 *
 * Was implemented as a slide-in CTA at the bottom of mobile viewports
 * but pulled at the owner's request: the always-visible utility-bar
 * phone link in the nav is sufficient, and a second persistent call
 * surface competed with the chat launcher for tap area on small
 * screens. Imports of this component are left in place across pages
 * so re-enabling later is a one-file change.
 */
export default function StickyCallBar() {
  return null;
}
