'use client';

import React from 'react';
import { LayoutGrid, List, Sparkles, SlidersHorizontal, Search } from 'lucide-react';
import { useFilterStore } from '@/store/useFilterStore';
import './ProductToolbar.css';

export default function ProductToolbar({ totalCount = 0 }) {
  const {
    sortBy,
    setSortBy,
    viewMode,
    setViewMode,
    searchQuery,
    setSearchQuery,
    setMobileFilterOpen,
  } = useFilterStore();

  return (
    <div className="product-toolbar">
      <div className="product-toolbar__left">
        <button
          type="button"
          onClick={() => setMobileFilterOpen(true)}
          className="product-toolbar__mobile-filter-btn"
        >
          <SlidersHorizontal size={16} />
          <span>Filters</span>
        </button>

        <span className="product-toolbar__count">
          Showing <strong>{totalCount}</strong> Handcrafted Pieces
        </span>
      </div>

      <div className="product-toolbar__search">
        <Search size={15} />
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Filter within results..."
          aria-label="Filter within catalog results"
        />
      </div>

      <div className="product-toolbar__right">
        <div className="product-toolbar__sort">
          <label htmlFor="rf-sort">Sort by:</label>
          <select
            id="rf-sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="popularity">Guild Popularity</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated (4.9★)</option>
            <option value="newest">Newest Commissions</option>
          </select>
        </div>

        <div className="product-toolbar__views" role="group" aria-label="View Mode">
          <button
            type="button"
            onClick={() => setViewMode('bento')}
            title="Asymmetric Bento Grid"
            className={`product-toolbar__view-btn ${
              viewMode === 'bento' ? 'product-toolbar__view-btn--active' : ''
            }`}
          >
            <Sparkles size={15} />
          </button>
          <button
            type="button"
            onClick={() => setViewMode('grid')}
            title="Uniform Grid"
            className={`product-toolbar__view-btn ${
              viewMode === 'grid' ? 'product-toolbar__view-btn--active' : ''
            }`}
          >
            <LayoutGrid size={15} />
          </button>
          <button
            type="button"
            onClick={() => setViewMode('list')}
            title="Editorial List"
            className={`product-toolbar__view-btn ${
              viewMode === 'list' ? 'product-toolbar__view-btn--active' : ''
            }`}
          >
            <List size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
