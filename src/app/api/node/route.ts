import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const url = `${req.nextUrl.origin}/api/cookie`;
  const sessionResponse = await fetch(url, {
    credentials: "include",
  });

  const setCookieHeader = sessionResponse.headers.get("set-cookie");

  const response = NextResponse.json({
    route: "??????",
  });

  if (setCookieHeader) {
    response.headers.set("set-cookie", setCookieHeader);
  }

  return response;
};
