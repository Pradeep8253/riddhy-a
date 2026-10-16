'use client';

import { create } from 'zustand';

const initialState = {
  searchQuery: '',
  category: 'all',
  selectedSubType: 'all',
  priceRange: [0, 350000],
  brands: [],
  materials: [],
  colors: [],
  minRating: 0,
  minDiscount: 0,
  inStockOnly: false,
  sortBy: 'featured',
  viewMode: 'grid-3',
  currentPage: 1,
  itemsPerPage: 9,
  isMobileFilterOpen: false,
  quickViewProduct: null,
};

export const useFilterStore = create((set) => ({
  ...initialState,

  setSearchQuery: (searchQuery) => set({ searchQuery, currentPage: 1 }),
  setCategory: (category) =>
    set({ category, selectedSubType: 'all', currentPage: 1 }),
  setSubType: (selectedSubType) => set({ selectedSubType, currentPage: 1 }),
  setPriceRange: (priceRange) => set({ priceRange, currentPage: 1 }),

  toggleBrand: (brand) =>
    set((state) => {
      const exists = state.brands.includes(brand);
      return {
        brands: exists
          ? state.brands.filter((b) => b !== brand)
          : [...state.brands, brand],
        currentPage: 1,
      };
    }),

  toggleMaterial: (material) =>
    set((state) => {
      const exists = state.materials.includes(material);
      return {
        materials: exists
          ? state.materials.filter((m) => m !== material)
          : [...state.materials, material],
        currentPage: 1,
      };
    }),

  toggleColor: (color) =>
    set((state) => {
      const exists = state.colors.includes(color);
      return {
        colors: exists
          ? state.colors.filter((c) => c !== color)
          : [...state.colors, color],
        currentPage: 1,
      };
    }),

  setMinRating: (minRating) => set({ minRating, currentPage: 1 }),
  setMinDiscount: (minDiscount) => set({ minDiscount, currentPage: 1 }),
  setInStockOnly: (inStockOnly) => set({ inStockOnly, currentPage: 1 }),
  setSortBy: (sortBy) => set({ sortBy, currentPage: 1 }),
  setViewMode: (viewMode) => set({ viewMode }),
  setPage: (currentPage) => set({ currentPage }),
  setMobileFilterOpen: (isMobileFilterOpen) => set({ isMobileFilterOpen }),
  openQuickView: (quickViewProduct) => set({ quickViewProduct }),
  closeQuickView: () => set({ quickViewProduct: null }),

  resetFilters: () =>
    set({
      ...initialState,
    }),
}));
