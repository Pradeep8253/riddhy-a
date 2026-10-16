'use client';

import React from 'react';
import { SlidersHorizontal, RotateCcw, X, Star } from 'lucide-react';
import { categories } from '@/data/categories';
import { useFilterStore } from '@/store/useFilterStore';
import { formatPrice } from '@/lib/formatPrice';
import './FilterSidebar.css';

const BRANDS = [
  'Riddhy Bespoke Atelier',
  'Riddhy Heritage Line',
  'Riddhy Luxe Appliances',
  'Riddhy Luminaires',
  'Riddhy Looms',
];

const MATERIALS = [
  'Burmese Teak',
  'Sheesham Wood',
  'Solid Walnut',
  'Live-Edge Acacia',
  'Italian Velvet',
  'Brushed Brass',
];

export default function FilterSidebar({ lockedCategory = null }) {
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
    isMobileFilterOpen,
    setMobileFilterOpen,
    resetFilters,
  } = useFilterStore();

  return (
    <>
      {isMobileFilterOpen && (
        <div
          className="filter-sidebar__backdrop"
          onClick={() => setMobileFilterOpen(false)}
        />
      )}

      <aside
        className={`filter-sidebar ${
          isMobileFilterOpen ? 'filter-sidebar--open' : ''
        }`}
      >
        <div className="filter-sidebar__head">
          <div className="filter-sidebar__title">
            <SlidersHorizontal size={17} />
            <span>Atelier Filters</span>
          </div>
          <div className="filter-sidebar__head-actions">
            <button
              type="button"
              onClick={resetFilters}
              className="filter-sidebar__reset"
            >
              <RotateCcw size={13} /> Reset
            </button>
            <button
              type="button"
              onClick={() => setMobileFilterOpen(false)}
              className="filter-sidebar__close-mobile"
              aria-label="Close filters"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Category Filter */}
        {!lockedCategory && (
          <div className="filter-sidebar__group">
            <h4 className="filter-sidebar__group-title">Sanctuary &amp; Guild</h4>
            <div className="filter-sidebar__radio-list">
              <label className="filter-sidebar__Option">
                <input
                  type="radio"
                  name="cat"
                  checked={category === 'all'}
                  onChange={() => setCategory('all')}
                />
                <span>All Collections (24)</span>
              </label>
              {categories.map((cat) => (
                <label key={cat.id} className="filter-sidebar__Option">
                  <input
                    type="radio"
                    name="cat"
                    checked={category === cat.slug}
                    onChange={() => setCategory(cat.slug)}
                  />
                  <span>{cat.shortName}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Price Slider */}
        <div className="filter-sidebar__group">
          <div className="filter-sidebar__price-head">
            <h4 className="filter-sidebar__group-title">Max Investment</h4>
            <span className="filter-sidebar__price-val">
              {formatPrice(priceRange[1])}
            </span>
          </div>
          <input
            type="range"
            min={15000}
            max={150000}
            step={5000}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="filter-sidebar__range"
          />
          <div className="filter-sidebar__range-labels">
            <span>₹15,000</span>
            <span>₹1,50,000</span>
          </div>
        </div>

        {/* Materials */}
        <div className="filter-sidebar__group">
          <h4 className="filter-sidebar__group-title">Timber &amp; Craft Material</h4>
          <div className="filter-sidebar__check-list">
            {MATERIALS.map((mat) => (
              <label key={mat} className="filter-sidebar__Option">
                <input
                  type="checkbox"
                  checked={materials.includes(mat)}
                  onChange={() => toggleMaterial(mat)}
                />
                <span>{mat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Brand / Atelier Line */}
        <div className="filter-sidebar__group">
          <h4 className="filter-sidebar__group-title">Atelier Division</h4>
          <div className="filter-sidebar__check-list">
            {BRANDS.map((br) => (
              <label key={br} className="filter-sidebar__Option">
                <input
                  type="checkbox"
                  checked={brands.includes(br)}
                  onChange={() => toggleBrand(br)}
                />
                <span>{br}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Minimum Rating */}
        <div className="filter-sidebar__group">
          <h4 className="filter-sidebar__group-title">Patron Rating</h4>
          <div className="filter-sidebar__rating-pills">
            {[0, 4.5, 4.8, 4.9].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setMinRating(r)}
                className={`filter-sidebar__rating-btn ${
                  minRating === r ? 'filter-sidebar__rating-btn--active' : ''
                }`}
              >
                {r === 0 ? (
                  'Any'
                ) : (
                  <>
                    {r}+ <Star size={12} />
                  </>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="filter-sidebar__group">
          <label className="filter-sidebar__Option">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => setInStockOnly(e.target.checked)}
            />
            <span>Ready for Immediate Dispatch Only</span>
          </label>
        </div>
      </aside>
    </>
  );
}
