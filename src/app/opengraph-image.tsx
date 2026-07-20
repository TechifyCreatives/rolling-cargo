import { ImageResponse } from "next/og";

// The Node build of @vercel/og resolves its bundled font via fileURLToPath,
// which throws "Invalid URL" on Windows. The edge runtime avoids that path.
export const runtime = "edge";

export const alt =
  "Rolling Cargo — air and sea freight forwarding to Kenya";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated at build time so every route inherits a correctly sized 1200x630
 * social card. The source photography is ultra-wide and too heavy to serve
 * directly to link unfurlers.
 */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f1031 0%, #1e2a63 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#8fa3ff",
          }}
        >
          Rolling Cargo
        </div>
        {/* Satori requires an explicit display on any node with >1 child,
            and has no <br /> support — hence two stacked flex rows. */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.15,
            marginTop: 24,
          }}
        >
          <div style={{ display: "flex" }}>Air &amp; Sea Freight</div>
          <div style={{ display: "flex" }}>Forwarding to Kenya</div>
        </div>
        <div style={{ fontSize: 30, marginTop: 32, color: "#c7cffb" }}>
          UK · Dubai · China · Turkey · Italy · Netherlands · South Africa
        </div>
        <div
          style={{
            marginTop: 40,
            height: 8,
            width: 180,
            background: "#640e0e",
            borderRadius: 999,
          }}
        />
      </div>
    ),
    size
  );
}
