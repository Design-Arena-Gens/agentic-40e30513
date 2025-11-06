export function BackgroundGlow() {
  return (
    <div
      aria-hidden="true"
      className="glow"
      style={{
        position: "absolute",
        inset: 0,
        filter: "blur(140px)",
        opacity: 0.45,
        background:
          "radial-gradient(circle at 20% 20%, rgba(116, 235, 213, 0.8), transparent 55%), radial-gradient(circle at 80% 80%, rgba(159, 172, 230, 0.65), transparent 55%)",
        pointerEvents: "none"
      }}
    />
  );
}
