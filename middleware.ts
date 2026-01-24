import { NextResponse } from "next/server"

export function middleware() {
  // Set MAINTENANCE=true in your env to toggle. For now it's always on.
  if (true) {
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Temporarily unavailable</title>
          <style>
            * { box-sizing: border-box; }
            body {
              font-family: system-ui, -apple-system, sans-serif;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              margin: 0;
              background: #fafafa;
              color: #333;
            }
            .card {
              text-align: center;
              padding: 2.5rem;
              max-width: 380px;
            }
            h1 { font-size: 1.25rem; font-weight: 600; margin: 0 0 0.5rem; }
            p { color: #666; margin: 0; line-height: 1.5; }
          </style>
        </head>
        <body>
          <div class="card">
            <h1>🪩 Temporarily unavailable</h1>
            <p>This site is currently offline. Please check back later.</p>
          </div>
        </body>
      </html>
      `,
      {
        status: 503,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Retry-After": "3600",
        },
      }
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
