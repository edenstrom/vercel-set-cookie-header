import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export const GET = async (req: NextRequest) => {
  const url = `${req.nextUrl.origin}/api/cookie`;

  const sessionResponse = await fetch(url, {
    credentials: "include",
  });

  const hasSupport =
    "getSetCookie" in sessionResponse.headers &&
    typeof (sessionResponse.headers as any).getSetCookie === "function";

  return NextResponse.json({ hasSupport });
};
