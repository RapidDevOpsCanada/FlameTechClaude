import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Send `X-Robots-Tag: noindex, nofollow` on any request whose host ends in
 * `.vercel.app`. This protects Vercel preview / staging URLs from getting
 * indexed alongside the production domain. The production host
 * (`flametechplumbing.ca`) is unaffected.
 */
export function proxy(req: NextRequest) {
  const host = req.headers.get("host") ?? "";
  const res = NextResponse.next();
  if (host.endsWith(".vercel.app")) {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
