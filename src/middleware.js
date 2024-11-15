import { NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/; // Ignore public files like images, styles, etc.
const DEFAULT_LOCALE = 'es'; // Default locale

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Ignore requests for public files or API routes
  if (PUBLIC_FILE.test(pathname) || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Extract locale from path
  const pathnameParts = pathname.split('/');
  const locale = pathnameParts[1];

  // Redirect to default locale if no locale is present
  if (!locale || locale.length !== 2) {
    return NextResponse.redirect(
      new URL(`/${DEFAULT_LOCALE}${pathname}`, request.url)
    );
  }

  // Continue to the requested route
  return NextResponse.next();
}
