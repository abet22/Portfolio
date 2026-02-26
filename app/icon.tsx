import { ImageResponse } from "next/og";
import { personalInfo } from "@/lib/data";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const initial = personalInfo.name.charAt(0).toUpperCase();
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "#6366f1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: 18,
          fontWeight: 700,
          fontFamily: "system-ui",
        }}
      >
        {initial}
      </div>
    ),
    { ...size }
  );
}
