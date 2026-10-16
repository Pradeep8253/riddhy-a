'use client';

import React from 'react';
import { X } from 'lucide-react';
import { useFilterStore } from '@/store/useFilterStore';
import { formatPrice } from '@/lib/formatPrice';
import './FilterChips.css';

export default function FilterChips() {
  const {
    category,
    setCategory,
    priceRange,
    setPriceRange,
    brands,
    toggleBrand,
    materials,
    toggleMaterial,
    minRating,
    setMinRating,
    inStockOnly,
    setInStockOnly,
    searchQuery,
    setSearchQuery,
    resetFilters,
  } = useFilterStore();

  const chips = [];
  if (category !== 'all') {
    chips.push({
      label: `Guild: ${category}`,
      onRemove: () => setCategory('all'),
    });
  }
  if (priceRange[1] < 150000) {
    chips.push({
      label: `Max ${formatPrice(priceRange[1])}`,
      onRemove: () => setPriceRange([0, 150000]),
    });
  }
  brands.forEach((b) =>
    chips.push({ label: b, onRemove: () => toggleBrand(b) })
  );
  materials.forEach((m) =>
    chips.push({ label: m, onRemove: () => toggleMaterial(m) })
  );
  if (minRating > 0) {
    chips.push({
      label: `${minRating}+ Stars`,
      onRemove: () => setMinRating(0),
    });
  }
  if (inStockOnly) {
    chips.push({
      label: 'In Stock Only',
      onRemove: () => setInStockOnly(false),
    });
  }
  if (searchQuery.trim()) {
    chips.push({
      label: `Search: "${searchQuery}"`,
      onRemove: () => setSearchQuery(''),
    });
  }

  if (chips.length === 0) return null;

  return (
    <div className="filter-chips">
      <span className="filter-chips__label">Active Filters:</span>
      <div className="filter-chips__list">
        {chips.map((c, idx) => (
          <button
            key={idx}
            type="button"
            onClick={c.onRemove}
            className="filter-chips__chip"
          >
            <span>{c.label}</span>
            <X size={13} />
          </button>
        ))}
        <button
          type="button"
          onClick={resetFilters}
          className="filter-chips__clear"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}
