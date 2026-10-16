'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useRecentlyViewedStore = create(
  persist(
    (set, get) => ({
      items: [],

      addRecentlyViewed: (product) => {
        if (!product || !product.id) return;
        const filtered = get().items.filter((item) => item.id !== product.id);
        set({
          items: [product, ...filtered].slice(0, 8),
        });
      },
    }),
    {
      name: 'riddhy-recently-viewed-storage',
    }
  )
);
