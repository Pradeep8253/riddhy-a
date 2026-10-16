'use client';

import React from 'react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import './CraftsmanshipShowcase.css';

const STEPS = [
  {
    step: 'STAGE 01',
    title: 'Solar-Kiln Timber Seasoning (8% Moisture)',
    desc: 'Every Burmese Teak and Sheesham log rests for 21 days in our solar-heated dehumidification chambers so it never warps or cracks.',
    image:
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=85',
  },
  {
    step: 'STAGE 02',
    title: 'Hand-Cut Dovetail & Brass Butterfly Joinery',
    desc: 'Our master joiners interlock solid wood slabs using traditional Japanese-Indian butterfly keys cast in molten Moradabad brass.',
    image:
      'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=85',
  },
  {
    step: 'STAGE 03',
    title: '6-Coat Organic Beeswax & Linseed Hand-Rub',
    desc: 'Zero toxic chemical lacquer fumes—each surface is hand-buffed with warm beeswax and raw linseed oil for a velvety heirloom patina.',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=85',
  },
];

export default function CraftsmanshipShowcase() {
  return (
    <section className="craft-showcase texture-paper">
      <div className="site-container craft-showcase__inner">
        <SectionHeading
          eyebrow="INSIDE THE 85,000 SQ.FT WORKSHOP"
          titlePart1="Three Stages of"
          italicWord="Heirloom"
          titlePart2="Joinery"
        />

        <div className="craft-showcase__grid">
          {STEPS.map((s) => (
            <article key={s.step} className="craft-showcase__card">
              <div className="craft-showcase__media">
                <img src={s.image} alt={s.title} />
                <span>{s.step}</span>
              </div>
              <div className="craft-showcase__body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
