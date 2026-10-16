'use client';

import React from 'react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import ProductCard from '@/components/ProductCard/ProductCard';
import { products } from '@/data/products';
import './RecommendedAddOns.css';

export default function RecommendedAddOns() {
  const addons = products.filter((p) => p.price < 35000).slice(0, 3);

  return (
    <section className="recommended-addons">
      <SectionHeading
        eyebrow="FREQUENTLY COMMISSIONED TOGETHER"
        titlePart1="Finishing"
        italicWord="Accents"
        titlePart2="& Lighting"
      />
      <div className="recommended-addons__grid">
        {addons.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
