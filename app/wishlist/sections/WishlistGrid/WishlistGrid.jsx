'use client';

import React from 'react';
import ProductCard from '@/components/ProductCard/ProductCard';
import './WishlistGrid.css';

export default function WishlistGrid({ items = [] }) {
  return (
    <div className="wishlist-grid">
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
