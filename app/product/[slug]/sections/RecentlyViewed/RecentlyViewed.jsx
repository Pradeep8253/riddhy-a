'use client';

import React from 'react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import ProductCard from '@/components/ProductCard/ProductCard';
import { useRecentlyViewedStore } from '@/store/useRecentlyViewedStore';
import './RecentlyViewed.css';

export default function RecentlyViewed({ currentId }) {
  const { items } = useRecentlyViewedStore();
  const list = items.filter((i) => i.id !== currentId).slice(0, 3);

  if (list.length === 0) return null;

  return (
    <section className="recently-viewed">
      <SectionHeading
        eyebrow="YOUR PRIVATE ARCHIVE"
        titlePart1="Recently"
        italicWord="Inspected"
        titlePart2="Creations"
      />
      <div className="recently-viewed__grid">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
