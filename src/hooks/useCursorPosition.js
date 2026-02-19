import { useEffect, useRef, useCallback } from "react";

/**
 * Hook otimizado para rastrear posição do cursor.
 * Usa ref + CSS custom properties para evitar re-renders.
 */
export function useCursorPosition() {
  const containerRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--cursor-x", `${e.clientX}px`);
      containerRef.current.style.setProperty("--cursor-y", `${e.clientY}px`);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return containerRef;
}
