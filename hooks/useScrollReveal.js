'use client';

import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(options = { threshold: 0.15, once: true }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.once) observer.unobserve(node);
        } else if (!options.once) {
          setIsVisible(false);
        }
      },
      { threshold: options.threshold || 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options.threshold, options.once]);

  return [ref, isVisible];
}
