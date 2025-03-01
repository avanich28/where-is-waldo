import { NextRequest, NextResponse } from "next/server";
import { gameLists } from "@/app/_utils/gameLists";
import { filters } from "@/app/_utils/constants";

// https://nextjs.org/docs/pages/building-your-application/routing/middleware

export function middleware(request: NextRequest) {
  const defaultBoardPath = gameLists[0].href;
  const defaultFilter = filters[0];

  return NextResponse.redirect(
    new URL(
      `/boards/0-${defaultBoardPath}?filter=${defaultFilter}`,
      request.url
    )
  );
}

export const config = {
  matcher: "/boards",
};
