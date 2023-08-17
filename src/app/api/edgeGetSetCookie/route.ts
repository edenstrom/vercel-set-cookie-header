import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export const GET = async (req: NextRequest) => {
  const url = `${req.nextUrl.origin}/api/cookie`;
  const sessionResponse = await fetch(url, {
    credentials: "include",
  });

  const setCookies = (sessionResponse.headers as any).getSetCookie();

  const response = NextResponse.json({
    route: "????",
  });

  for (const cookie of setCookies) {
    response.headers.append("set-cookie", cookie);
  }

  return response;
};
