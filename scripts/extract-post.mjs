// Extract a single WP post from All-in-One WP Migration SQL dump.
// Usage: node scripts/extract-post.mjs <slug>
//
// Parses INSERT INTO `SERVMASK_PREFIX_posts` VALUES (...) rows, decodes the
// SQL-escaped values, and prints the matching post's ID, title, post_status,
// and post_content to stdout so we can copy the HTML body into services.ts.

import fs from "node:fs";

const SQL = "/Users/danielshuttleworth/Downloads/flametech-extracted/database.sql";
const slug = process.argv[2];
if (!slug) {
  console.error("Usage: node scripts/extract-post.mjs <slug>");
  process.exit(1);
}

const raw = fs.readFileSync(SQL, "utf8");

// Split into lines; each INSERT INTO is on its own line
const posts = [];
const lines = raw.split("\n");
let current = "";
for (const line of lines) {
  if (line.startsWith("INSERT INTO `SERVMASK_PREFIX_posts`")) {
    if (current) posts.push(current);
    current = line;
  } else if (current) {
    current += "\n" + line;
    if (line.trimEnd().endsWith(";")) {
      posts.push(current);
      current = "";
    }
  }
}
if (current) posts.push(current);

// Parse each INSERT. Each row is enclosed in (...),(...),(...). Values inside
// are separated by commas, strings are quoted with single-quote and escaped.
function parseValues(s) {
  // Return array of value strings (as raw SQL) for a single row
  const values = [];
  let i = 0;
  let depth = 0;
  let buf = "";
  while (i < s.length) {
    const c = s[i];
    if (c === "'") {
      // Consume quoted string
      buf += c;
      i++;
      while (i < s.length) {
        const d = s[i];
        if (d === "\\") {
          buf += d + s[i + 1];
          i += 2;
          continue;
        }
        if (d === "'") {
          buf += d;
          i++;
          break;
        }
        buf += d;
        i++;
      }
      continue;
    }
    if (c === "(" && depth === 0) {
      depth++;
      i++;
      continue;
    }
    if (c === ")" && depth === 1) {
      depth--;
      values.push(buf);
      buf = "";
      i++;
      continue;
    }
    if (c === "," && depth === 1 && buf.trim().length > 0) {
      values.push(buf);
      buf = "";
      i++;
      continue;
    }
    if (depth === 1) buf += c;
    i++;
  }
  return values;
}

function sqlUnquote(v) {
  v = v.trim();
  if (v === "NULL") return null;
  if (v.startsWith("'") && v.endsWith("'")) {
    let s = v.slice(1, -1);
    // Decode common escapes
    s = s
      .replace(/\\'/g, "'")
      .replace(/\\"/g, '"')
      .replace(/\\n/g, "\n")
      .replace(/\\r/g, "\r")
      .replace(/\\t/g, "\t")
      .replace(/\\\\/g, "\\")
      .replace(/\\0/g, "\0");
    return s;
  }
  return v;
}

// wp_posts column order:
// ID, post_author, post_date, post_date_gmt, post_content, post_title,
// post_excerpt, post_status, comment_status, ping_status, post_password,
// post_name, to_ping, pinged, post_modified, post_modified_gmt,
// post_content_filtered, post_parent, post_type, post_mime_type, comment_count

for (const stmt of posts) {
  // Strip the INSERT header
  const body = stmt.replace(/^INSERT INTO `SERVMASK_PREFIX_posts` VALUES\s*/s, "").replace(/;\s*$/, "");
  // Split rows at "),(" but careful about quoted content — simpler: walk the string
  // We iterate top-level parens.
  let i = 0;
  while (i < body.length) {
    // Find next "("
    const start = body.indexOf("(", i);
    if (start < 0) break;
    // Walk to matching ")"
    let j = start + 1;
    let inStr = false;
    while (j < body.length) {
      const ch = body[j];
      if (inStr) {
        if (ch === "\\") {
          j += 2;
          continue;
        }
        if (ch === "'") inStr = false;
        j++;
        continue;
      }
      if (ch === "'") {
        inStr = true;
        j++;
        continue;
      }
      if (ch === ")") break;
      j++;
    }
    const rowSql = body.slice(start, j + 1);
    const values = parseValues(rowSql);
    if (values.length >= 21) {
      const post = {
        ID: sqlUnquote(values[0]),
        post_content: sqlUnquote(values[4]),
        post_title: sqlUnquote(values[5]),
        post_excerpt: sqlUnquote(values[6]),
        post_status: sqlUnquote(values[7]),
        post_name: sqlUnquote(values[11]),
        post_type: sqlUnquote(values[18]),
      };
      if (post.post_name === slug) {
        console.log("==== MATCH ====");
        console.log("ID:", post.ID);
        console.log("post_type:", post.post_type);
        console.log("post_status:", post.post_status);
        console.log("post_title:", post.post_title);
        console.log("post_excerpt:", post.post_excerpt);
        console.log("---- post_content ----");
        console.log(post.post_content);
        console.log("---- end ----");
      }
    }
    i = j + 1;
  }
}
