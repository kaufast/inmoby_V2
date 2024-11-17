import { NextResponse } from "next/server";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Redirect "/" to "/es"
  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/es`, request.url));
  }

  return NextResponse.next();
}
