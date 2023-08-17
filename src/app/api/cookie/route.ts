import { NextResponse } from "next/server";

export const runtime = "edge";

export const GET = async () => {
  const response = new NextResponse();
  const ts = Date.now().toString();

  const giantCookieValue = `${ts}_${"a".repeat(3800)}`;
  const mediumCookieValue = `${ts}_${"a".repeat(1000)}`;

  response.cookies
    .set("giant", giantCookieValue)
    .set("medium", mediumCookieValue)
    .set("current-date", ts);

  return response;
};
