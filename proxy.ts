import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// "Coming soon" gate. When COMING_SOON=true, every public route is rewritten
// to serve the /coming-soon page while the full site stays in place, hidden.
// Flip COMING_SOON=false (or remove it) to bring the full site back — no code
// changes needed.
//
// Note: in Next.js 16 the old `middleware` file convention was renamed to
// `proxy` (same functionality). This is that file.
export function proxy(request: NextRequest) {
  if (process.env.COMING_SOON !== "true") {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Let the coming-soon page (and its server action POST) through untouched.
  if (pathname === "/coming-soon") {
    return NextResponse.next();
  }

  // Rewrite (not redirect) so the visitor's URL is preserved but they see the
  // coming-soon page everywhere.
  const url = request.nextUrl.clone();
  url.pathname = "/coming-soon";
  return NextResponse.rewrite(url);
}

export const config = {
  // Run on everything except Next internals, the API routes, and static files.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/).*)"],
};
