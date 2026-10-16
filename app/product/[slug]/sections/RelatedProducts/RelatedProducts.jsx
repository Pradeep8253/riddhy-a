'use client';

import React from 'react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import ProductCard from '@/components/ProductCard/ProductCard';
import './RelatedProducts.css';

export default function RelatedProducts({ products = [] }) {
  if (!products.length) return null;

  return (
    <section className="related-products">
      <SectionHeading
        eyebrow="MATCHING TIMBER & FINISH"
        titlePart1="Companion"
        italicWord="Heirlooms"
        titlePart2="From This Guild"
      />
      <div className="related-products__grid">
        {products.slice(0, 3).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
