import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kyle Guenter — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          backgroundColor: "#171717",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "#fafafa",
            marginBottom: 20,
          }}
        >
          Kyle Guenter
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#a3a3a3",
            marginBottom: 16,
          }}
        >
          Software Engineer
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#737373",
          }}
        >
          Web Development &bull; Full-Stack Applications &bull; React &bull; Angular &bull; C# &bull; Go
        </div>
      </div>
    ),
    { ...size }
  );
}
