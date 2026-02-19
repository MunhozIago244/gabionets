/**
 * Efeito de luz que acompanha o cursor.
 * Usa CSS custom properties (--cursor-x, --cursor-y) definidas
 * pelo hook useCursorPosition no container pai — zero re-renders.
 */
const CursorEffect = () => (
  <div
    className="fixed w-96 h-96 rounded-full pointer-events-none z-0 transition-transform duration-300 ease-out"
    style={{
      left: "var(--cursor-x, -200px)",
      top: "var(--cursor-y, -200px)",
      transform: "translate(-50%, -50%)",
      background:
        "radial-gradient(circle, rgba(100,116,139,0.15) 0%, transparent 70%)",
      mixBlendMode: "soft-light",
    }}
  />
);

export default CursorEffect;
