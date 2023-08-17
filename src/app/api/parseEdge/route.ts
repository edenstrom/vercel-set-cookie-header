import { NextRequest, NextResponse } from "next/server";
import { splitCookiesString, parseSetCookie } from "@edge-runtime/cookies";

export const runtime = "edge";

export const GET = async (req: NextRequest) => {
  const url = `${req.nextUrl.origin}/api/cookie`;
  const sessionResponse = await fetch(url, {
    credentials: "include",
  });

  const setCookieHeader = sessionResponse.headers.get("set-cookie");

  const response = NextResponse.json({
    route: "success. Returns multiple Set-Cookie headers",
  });

  if (setCookieHeader) {
    const splitCookie = splitCookiesString(setCookieHeader);
    const parsedCookie = splitCookie.map((cookie) => parseSetCookie(cookie));
    parsedCookie.forEach((cookie) => {
      if (!cookie) return;
      response.cookies.set(cookie);
    });
  }

  return response;
};
