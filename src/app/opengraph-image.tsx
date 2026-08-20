import { ImageResponse } from "next/og";

export const alt = "Alfonso Rodriguez — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Tarjeta que ve cualquiera que comparta el link en LinkedIn o WhatsApp. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#274546",
          color: "#EFEEE5",
          padding: 80,
          fontSize: 40,
        }}
      >
        <div style={{ display: "flex", fontSize: 34, letterSpacing: 2 }}>
          M. ALFONSO RODRÍGUEZ
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
            Full Stack Developer
          </div>
          <div style={{ fontSize: 38, color: "#F2A541" }}>
            Next.js · TypeScript · PostgreSQL · Producto
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#EFEEE5" }}>
          Montevideo, Uruguay
        </div>
      </div>
    ),
    size
  );
}
