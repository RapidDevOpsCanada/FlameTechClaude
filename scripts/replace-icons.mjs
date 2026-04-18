import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const files = [
  "src/app/page.tsx",
  "src/app/articles/[slug]/page.tsx",
  "src/app/categories/[slug]/page.tsx",
  "src/components/FinalCTA.tsx",
  "src/components/FAQ.tsx",
  "src/components/QuoteForm.tsx",
  "src/components/HowItWorks.tsx",
  "src/components/StickyCallBar.tsx",
  "src/components/Footer.tsx",
  "src/components/Nav.tsx",
  "src/components/ReviewsSection.tsx",
  "src/components/ArticleCard.tsx",
  "src/components/BlogStrip.tsx",
];

const pattern =
  /<span className="material-symbols-outlined([^"]*)">\s*([a-zA-Z_]+)\s*<\/span>/g;

function relativeImportPath(fromFile) {
  // All pages/components use the "@/..." path alias, so the import is stable.
  return '@/components/Icon';
}

for (const rel of files) {
  const p = path.join(root, rel);
  let content = fs.readFileSync(p, "utf8");
  let modified = false;

  const newContent = content.replace(pattern, (_m, classes, name) => {
    modified = true;
    const cleanClasses = classes.trim().replace(/\s+/g, " ");
    const attrs = cleanClasses ? ` className="${cleanClasses}"` : "";
    return `<Icon name="${name}"${attrs} />`;
  });

  if (!modified) continue;

  // Add import if not already present
  let final = newContent;
  const importPath = relativeImportPath(rel);
  if (!final.includes('from "@/components/Icon"')) {
    // Insert import after last import statement
    const importRegex = /(^import .+;$)/m;
    const lines = final.split("\n");
    let lastImportIdx = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith("import ")) lastImportIdx = i;
    }
    if (lastImportIdx >= 0) {
      lines.splice(lastImportIdx + 1, 0, `import Icon from "${importPath}";`);
      final = lines.join("\n");
    }
  }

  fs.writeFileSync(p, final);
  console.log("Updated", rel);
}
