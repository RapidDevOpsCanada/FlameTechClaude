import GithubSlugger from "github-slugger";

/**
 * Extract a table of contents from an MDX article body. Returns the
 * ordered list of H2/H3 headings with stable id slugs (matching the
 * ids that rehype-slug injects into the rendered output, so the TOC
 * links anchor correctly).
 */

export type TocEntry = {
  id: string;
  text: string;
  level: 2 | 3;
};

export function extractToc(mdx: string): TocEntry[] {
  const slugger = new GithubSlugger();
  const toc: TocEntry[] = [];
  // Markdown headings: line starting with ## or ### (but not ####+).
  // Multiline flag so ^ matches each line. The trailing capture goes
  // to end-of-line.
  const re = /^(#{2,3})\s+(.+?)\s*$/gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(mdx)) !== null) {
    const level = m[1].length === 2 ? 2 : 3;
    // Strip basic inline markdown so the displayed TOC text and slug
    // match the rendered heading.
    const text = m[2]
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // [link text](href) -> link text
      .replace(/[*_`]+/g, "")
      .trim();
    if (!text) continue;
    const id = slugger.slug(text);
    toc.push({ id, text, level: level as 2 | 3 });
  }
  return toc;
}
