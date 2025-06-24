import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/_lib/auth";
import { filters } from "@/app/_utils/constants";
import { gameLists } from "@/app/_utils/gameLists";
import { convertStringIntoLink } from "@/app/_utils/helpers";

export async function middleware(request: NextRequest) {
  // Match /boards/:path*
  if (request.nextUrl.pathname.startsWith("/boards/"))
    return NextResponse.next();

  if (request.nextUrl.pathname.startsWith("/boards")) {
    const defaultBoardPath = convertStringIntoLink(gameLists[0].name);
    const defaultFilter = filters[0];

    return NextResponse.redirect(
      new URL(
        `/boards/0-${defaultBoardPath}?filter=${defaultFilter}`,
        request.url
      )
    );
  }

  const session = await auth();

  if (!session?.user && request.nextUrl.pathname === "/")
    return NextResponse.next();

  if (!session?.user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (session.user && request.nextUrl.pathname === "/")
    return NextResponse.redirect(new URL("/games", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/boards",
    "/boards/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico|icon.png|$|signup|login).*)",
  ],
};
