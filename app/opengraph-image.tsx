import { ImageResponse } from "next/og";
import { personalInfo } from "@/lib/data";

export const alt = `${personalInfo.name} — ${personalInfo.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 16,
            background: "#6366f1",
            marginBottom: 32,
            fontSize: 36,
            fontWeight: 700,
            color: "#fff",
          }}
        >
          {personalInfo.name.charAt(0)}
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#f5f5f5",
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          {personalInfo.name}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#818cf8",
            marginBottom: 24,
          }}
        >
          {personalInfo.tagline}
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#6b7280",
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          {personalInfo.bio}
        </div>
      </div>
    ),
    { ...size }
  );
}
