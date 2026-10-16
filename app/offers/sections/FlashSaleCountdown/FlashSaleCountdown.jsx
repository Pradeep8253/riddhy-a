'use client';

import React from 'react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import ProductCard from '@/components/ProductCard/ProductCard';
import { products } from '@/data/products';
import './FlashSaleCountdown.css';

export default function FlashSaleCountdown() {
  const flashItems = products.filter((p) => p.isFlashDeal);

  return (
    <section className="flash-sale-countdown">
      <div className="site-container">
        <SectionHeading
          eyebrow="LIMITED WORKSHOP BATCH"
          titlePart1="Ready-to-Crate"
          italicWord="Flash"
          titlePart2="Specials"
        />
        <div className="flash-sale-countdown__grid">
          {flashItems.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
