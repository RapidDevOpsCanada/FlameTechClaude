/**
 * Extract a table of contents from an article's HTML body and inject
 * stable id slugs into the heading tags so the TOC entries can anchor
 * to them. Mutates the html string.
 */

export type TocEntry = {
  id: string;
  text: string;
  level: 2 | 3;
};

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/&[a-z]+;/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function extractToc(html: string): { html: string; toc: TocEntry[] } {
  const toc: TocEntry[] = [];
  const used = new Set<string>();

  const next = html.replace(
    /<(h2|h3)([^>]*)>([\s\S]*?)<\/\1>/gi,
    (match, tag: string, attrs: string, inner: string) => {
      const text = inner.replace(/<[^>]+>/g, "").trim();
      if (!text) return match;
      let id = slugify(text);
      if (!id) return match;
      // Ensure id uniqueness in case two headings slugify the same.
      let unique = id;
      let n = 2;
      while (used.has(unique)) {
        unique = `${id}-${n++}`;
      }
      used.add(unique);
      id = unique;
      toc.push({ id, text, level: tag.toLowerCase() === "h2" ? 2 : 3 });
      // Skip injecting if the tag already has an id.
      if (/\bid\s*=/.test(attrs)) return match;
      return `<${tag}${attrs} id="${id}">${inner}</${tag}>`;
    },
  );

  return { html: next, toc };
}
