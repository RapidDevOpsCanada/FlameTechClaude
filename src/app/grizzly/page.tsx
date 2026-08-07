import { isAuthed, isConfigured } from "@/lib/admin-auth";
import { getImageInventory, formatBytes } from "@/lib/image-inventory";
import ImageBrowser from "./ImageBrowser";

// Reads cookies and the filesystem — must never be statically cached.
export const dynamic = "force-dynamic";

function Login({ error }: { error?: string }) {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <h1 className="font-display text-3xl font-extrabold mb-1">Grizzly</h1>
        <p className="text-cream-50/50 text-sm mb-8">
          FlameTech media admin
        </p>

        {error === "bad" && (
          <p className="mb-5 rounded-lg bg-emergency/15 border border-emergency/40 text-cream-50 text-sm px-4 py-3">
            Incorrect username or password.
          </p>
        )}
        {error === "config" && (
          <p className="mb-5 rounded-lg bg-primary/15 border border-primary/40 text-cream-50 text-sm px-4 py-3 leading-relaxed">
            Admin credentials are not configured on this deploy. Set{" "}
            <code className="text-primary">GRIZZLY_USER</code>,{" "}
            <code className="text-primary">GRIZZLY_PASSWORD</code> and{" "}
            <code className="text-primary">AUTH_SECRET</code> in the Vercel
            project environment variables, then redeploy.
          </p>
        )}

        <form action="/grizzly/api/login/" method="POST" className="space-y-3">
          <input
            name="user"
            autoComplete="username"
            placeholder="Username"
            required
            className="w-full rounded-lg bg-ink-800 border border-line-dark px-4 py-3 text-sm outline-none focus:border-primary"
          />
          <input
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            required
            className="w-full rounded-lg bg-ink-800 border border-line-dark px-4 py-3 text-sm outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-emergency hover:bg-emergency-deep transition-colors font-extrabold text-sm py-3"
          >
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}

export default async function GrizzlyPage({
  searchParams,
}: {
  searchParams: Promise<{ e?: string }>;
}) {
  const { e } = await searchParams;

  if (!(await isAuthed())) {
    return <Login error={isConfigured() ? e : e ?? undefined} />;
  }

  const { categories, totals } = getImageInventory();

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-10 py-10">
      <header className="flex flex-wrap items-end justify-between gap-4 mb-8 pb-6 border-b border-line-dark">
        <div>
          <h1 className="font-display text-3xl font-extrabold leading-none">
            Grizzly
          </h1>
          <p className="text-cream-50/50 text-sm mt-1.5">
            {totals.count} images · {formatBytes(totals.bytes)} ·{" "}
            <span className={totals.unused ? "text-primary" : ""}>
              {totals.unused} unused
            </span>
          </p>
        </div>
        <form action="/grizzly/api/logout/" method="POST">
          <button className="rounded-full border border-line-dark hover:border-cream-50/50 transition-colors px-4 py-2 text-xs font-bold">
            Sign out
          </button>
        </form>
      </header>

      <ImageBrowser categories={categories} />
    </main>
  );
}
