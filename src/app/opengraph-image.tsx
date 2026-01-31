import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Star Wars API - BFF Edition";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        backgroundImage:
          "radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)",
        backgroundSize: "100px 100px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
        }}
      >
        <h1
          style={{
            fontSize: 80,
            fontWeight: "bold",
            color: "#fff",
            textAlign: "center",
            margin: 0,
          }}
        >
          Star Wars API
        </h1>
        <p
          style={{
            fontSize: 40,
            color: "#60a5fa",
            textAlign: "center",
            margin: 0,
          }}
        >
          BFF Edition
        </p>
        <p
          style={{
            fontSize: 24,
            color: "#9ca3af",
            textAlign: "center",
            margin: 0,
            maxWidth: 800,
          }}
        >
          Modern, frontend-friendly Star Wars API with aggregation, expand,
          filtering and pagination
        </p>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
