'use client';

import { useState, useEffect, useRef } from 'react';

export function useCountUp(endValue, duration = 1800, startWhen = true) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!startWhen || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime = null;
    let rafId = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * endValue));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [endValue, duration, startWhen]);

  return count;
}
