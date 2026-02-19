import { useState, useEffect, useRef } from "react";

/**
 * Hook para detectar visibilidade de seções via IntersectionObserver.
 * Retorna [isVisible, registerRef] onde registerRef é uma callback ref
 * para atribuir a cada seção.
 */
export function useIntersectionObserver(options = { threshold: 0.1 }) {
  const [isVisible, setIsVisible] = useState({});
  const refs = useRef({});
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible((prev) => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting,
        }));
      });
    }, options);

    Object.values(refs.current).forEach((ref) => {
      if (ref) observerRef.current.observe(ref);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const registerRef = (id) => (el) => {
    if (el) {
      refs.current[id] = el;
      observerRef.current?.observe(el);
    }
  };

  return [isVisible, registerRef];
}
