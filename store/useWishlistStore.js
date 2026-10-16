'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useWishlistStore = create(
  persist(
    (set, get) => ({
      items: [],

      toggleWishlist: (product) => {
        const current = get().items;
        const exists = current.some((p) => p.id === product.id);
        if (exists) {
          set({ items: current.filter((p) => p.id !== product.id) });
          return false;
        } else {
          set({ items: [...current, product] });
          return true;
        }
      },

      isInWishlist: (productId) => get().items.some((p) => p.id === productId),

      removeFromWishlist: (productId) =>
        set({ items: get().items.filter((p) => p.id !== productId) }),

      clearWishlist: () => set({ items: [] }),
    }),
    {
      name: 'riddhy-wishlist-storage',
    }
  )
);
