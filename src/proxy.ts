import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';

  const isSeva = host.startsWith('seva.') || host.includes('seva.localhost') || url.pathname.startsWith('/seva');

  const requestHeaders = new Headers(request.headers);
  if (isSeva) {
    requestHeaders.set('x-seva-subdomain', 'true');
  }

  // Match seva.sochyeah.com or seva.localhost
  if (host.startsWith('seva.') || host.includes('seva.localhost')) {
    // Prevent infinite loop if already rewritten
    if (url.pathname === '/') {
      url.pathname = '/seva';
      return NextResponse.rewrite(url, {
        request: {
          headers: requestHeaders,
        }
      });
    } else if (!url.pathname.startsWith('/seva') && !url.pathname.includes('.')) {
      url.pathname = `/seva${url.pathname}`;
      return NextResponse.rewrite(url, {
        request: {
          headers: requestHeaders,
        }
      });
    }
  }

  if (isSeva) {
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      }
    });
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
