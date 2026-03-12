"use client";

export default function Home() {
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      {/* Keyframe animations */}
      <style>{`
        @keyframes drift {
          0%   { background-position: 0px 0px; }
          25%  { background-position: 8px -10px; }
          50%  { background-position: 14px 6px; }
          75%  { background-position: 4px 14px; }
          100% { background-position: 0px 0px; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50%       { opacity: 1; }
        }
      `}</style>

      {/* Pure CSS dot grid background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          backgroundImage: "radial-gradient(circle, rgba(200,220,255,0.55) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          animation: "drift 20s ease-in-out infinite, pulse 6s ease-in-out infinite",
        }}
      />

      {/* Vignette */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.85) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 1.5rem",
          textAlign: "center",
        }}
      >
        <img
          src="/logo.png"
          alt="Yarro&Co"
          style={{
            marginBottom: "0rem",
            width: "clamp(280px, 45vw, 550px)",
            height: "auto",
          }}
        />
        <p
          style={{
            marginBottom: "2.5rem",
            maxWidth: "48rem",
            fontSize: "clamp(1.1rem, 2.5vw, 1.75rem)",
            lineHeight: 1.6,
            color: "#d1d5db",
          }}
        >
          We create content that captivates, websites that convert, mobile apps
          that engage, and SaaS that scales.
        </p>
        <p style={{ fontSize: "1.25rem", fontWeight: 500, color: "#60fbdc" }}>
          Coming Soon
        </p>
      </div>
    </main>
  );
}