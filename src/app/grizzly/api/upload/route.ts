import { NextResponse } from "next/server";
import { isAuthed } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp"]);
const ALLOWED_FOLDERS = new Set(["uploads", "team", "reviews", "portfolio"]);

/**
 * Image upload for the /grizzly panel.
 *
 * Storage note — this is the part that needs a decision. On Vercel the
 * runtime filesystem is read-only and ephemeral, so writing into
 * /public/images at request time does not work: the file would vanish on
 * the next invocation and would never be served. A real backing store is
 * required. Two sensible options:
 *
 *   1. Vercel Blob — add `@vercel/blob`, set BLOB_READ_WRITE_TOKEN, and
 *      files are served instantly from a blob URL. No redeploy. The URL
 *      is not /images/… so referencing it in services.ts means pasting a
 *      full blob URL.
 *
 *   2. Commit to the repo via the GitHub API — the file lands in
 *      public/images/… exactly like every existing asset, keeping one URL
 *      convention and keeping images in version control. Costs a redeploy
 *      (a minute or two) per upload and needs a fine-grained PAT with
 *      contents:write on this repo.
 *
 * Until one is configured this endpoint validates the upload fully and
 * then reports that storage is not wired up, rather than silently
 * accepting a file it cannot persist.
 */
export async function POST(req: Request) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Malformed upload" }, { status: 400 });
  }

  const file = form.get("file");
  const folderRaw = String(form.get("folder") ?? "uploads");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }
  if (!ALLOWED.has(file.type)) {
    return NextResponse.json(
      { error: `Unsupported type ${file.type || "unknown"} — JPG, PNG or WebP only` },
      { status: 415 }
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: `Too large (${Math.round(file.size / 1024 / 1024)} MB) — 5 MB maximum` },
      { status: 413 }
    );
  }
  if (!ALLOWED_FOLDERS.has(folderRaw)) {
    return NextResponse.json({ error: "Unknown folder" }, { status: 400 });
  }

  // Normalise the filename: lowercase, hyphenated, extension from the
  // declared MIME type rather than whatever the client sent. Prevents
  // path traversal and double-extension tricks.
  const ext =
    file.type === "image/png" ? "png" : file.type === "image/webp" ? "webp" : "jpg";
  const base =
    file.name
      .replace(/\.[^.]+$/, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60) || "image";
  const filename = `${base}.${ext}`;
  const target = `/images/${folderRaw}/${filename}`;

  const hasBlob = !!process.env.BLOB_READ_WRITE_TOKEN;
  const hasGithub = !!process.env.GITHUB_TOKEN;

  if (!hasBlob && !hasGithub) {
    return NextResponse.json(
      {
        error:
          `File validated (${filename}, ${Math.round(file.size / 1024)} KB) but no storage backend is configured. ` +
          `Vercel's runtime filesystem is read-only, so uploads need either Vercel Blob (set BLOB_READ_WRITE_TOKEN) ` +
          `or GitHub commits (set GITHUB_TOKEN). Nothing was saved.`,
      },
      { status: 501 }
    );
  }

  return NextResponse.json(
    {
      error:
        "A storage token is present but the adapter has not been implemented yet — " +
        "confirm which backend you want and it will be wired to this endpoint.",
      intendedPath: target,
    },
    { status: 501 }
  );
}
