'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';
import ProductCard from '@/components/ProductCard/ProductCard';
import { useFilterStore } from '@/store/useFilterStore';
import './ProductGrid.css';

export default function ProductGrid({ products = [] }) {
  const { viewMode, resetFilters } = useFilterStore();

  if (products.length === 0) {
    return (
      <div className="product-grid__empty">
        <h3>No Heirloom Creations Match Your Exact Filter</h3>
        <p>
          Try expanding your investment slider or clearing material filters to
          inspect all 24 creations.
        </p>
        <button type="button" onClick={resetFilters} className="btn-wood-polish">
          <RotateCcw size={16} />
          <span>Reset All Guild Filters</span>
        </button>
      </div>
    );
  }

  return (
    <div className={`product-grid product-grid--${viewMode}`}>
      {products.map((product, idx) => {
        const isHeroBento = viewMode === 'bento' && idx === 0;
        return (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.35) }}
            className={`product-grid__cell ${
              isHeroBento ? 'product-grid__cell--hero' : ''
            }`}
          >
            <ProductCard
              product={product}
              featured={isHeroBento}
              layout={viewMode === 'list' ? 'list' : 'grid'}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
