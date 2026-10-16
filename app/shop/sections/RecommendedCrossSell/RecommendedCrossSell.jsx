'use client';

import React from 'react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import ProductCard from '@/components/ProductCard/ProductCard';
import WoodDivider from '@/components/WoodDivider/WoodDivider';
import { products } from '@/data/products';
import './RecommendedCrossSell.css';

export default function RecommendedCrossSell() {
  const picks = products.slice(0, 3);

  return (
    <section className="recommended-cross texture-wood-dark">
      <WoodDivider variant="dovetail" />
      <div className="site-container recommended-cross__inner">
        <SectionHeading
          eyebrow="ARCHITECT PAIRING GUIDE"
          titlePart1="Complete the"
          italicWord="Sanctuary"
          titlePart2="With Paired Pieces"
          dark
        />
        <div className="recommended-cross__grid">
          {picks.map((p) => (
            <ProductCard key={p.id} product={p} dark />
          ))}
        </div>
      </div>
    </section>
  );
}
