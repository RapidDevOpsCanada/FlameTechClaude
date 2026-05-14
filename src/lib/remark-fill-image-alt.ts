import { visit } from "unist-util-visit";
import type { Root, Image } from "mdast";

/**
 * remark plugin: when a Markdown image (`![alt](url)`) has empty alt
 * text, fill it in from the URL's filename. "/images/2026/05/frozen-
 * pipe-calgary.jpg" becomes "Frozen pipe calgary".
 *
 * Better than nothing for accessibility + image-search. Authors should
 * still hand-write descriptive alt for any image that benefits from
 * it; this just stops empty-alt from shipping.
 */
function deriveAltFromUrl(url: string): string {
  // Strip directory + extension, then humanize hyphens/underscores.
  const base = url.split("/").pop() ?? "";
  const stem = base.replace(/\.[a-z0-9]+$/i, "");
  if (!stem) return "";
  // Remove WP-style size suffixes ("-768x431", "-e1759898415398") and
  // trailing -<digits> noise.
  const cleaned = stem
    .replace(/-\d+x\d+$/i, "")
    .replace(/-e\d{8,}/i, "")
    .replace(/[-_]+/g, " ")
    .trim();
  if (!cleaned) return "";
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

export default function remarkFillImageAlt() {
  return (tree: Root) => {
    visit(tree, "image", (node: Image) => {
      if (node.alt && node.alt.trim().length > 0) return;
      const derived = deriveAltFromUrl(node.url);
      if (derived) node.alt = derived;
    });
  };
}
