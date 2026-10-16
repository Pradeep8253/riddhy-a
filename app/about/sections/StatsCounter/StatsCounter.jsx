'use client';

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import './StatsCounter.css';

function StatItem({ end, suffix, label }) {
  const [ref, visible] = useScrollReveal();
  const val = useCountUp(end, 1600, visible);

  return (
    <div ref={ref} className="stats-counter__item">
      <span className="stats-counter__num">
        {val.toLocaleString('en-IN')}
        {suffix}
      </span>
      <span className="stats-counter__label">{label}</span>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="stats-counter texture-wood-dark">
      <div className="site-container stats-counter__grid">
        <StatItem end={38400} suffix="+" label="Indian Residences Furnished" />
        <StatItem end={185} suffix="" label="Hereditary Master Woodcarvers" />
        <StatItem end={85000} suffix=" sq.ft" label="Solar-Powered Joinery Campus" />
        <StatItem end={76800} suffix="+" label="Saplings Planted (2-For-1 Pledge)" />
      </div>
    </section>
  );
}
