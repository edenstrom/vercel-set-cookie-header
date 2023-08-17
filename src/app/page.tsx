"use client";

const fetchRoute = (url: string) => () => {
  fetch(url, { credentials: "include" });
};

export default function Home() {
  return (
    <main>
      <strong>Check devtools. Application panel -{">"} Cookies</strong>
      <p>Try each button. See how the cookies update</p>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={fetchRoute("/api/node")}>Node API Route</button>
        <button onClick={fetchRoute("/api/edge")}>Edge API Route</button>
        <button onClick={fetchRoute("/api/edgeGetSetCookie")}>
          Edge API Route (.getSetCookie)
        </button>
        <button onClick={fetchRoute("/api/parseEdge")}>
          Edge API Route with parsing
        </button>
      </div>
    </main>
  );
}
