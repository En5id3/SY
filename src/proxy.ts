import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';

  // Match seva.sochyeah.com or seva.localhost
  if (host.startsWith('seva.') || host.includes('seva.localhost')) {
    // Prevent infinite loop if already rewritten
    if (url.pathname === '/') {
      url.pathname = '/seva';
      return NextResponse.rewrite(url);
    } else if (!url.pathname.startsWith('/seva') && !url.pathname.includes('.')) {
      url.pathname = `/seva${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static files, assets, and APIs
     */
    '/((?!api|_next/static|_next/image|images|favicon.ico|.*\\..*).*)',
  ],
};
