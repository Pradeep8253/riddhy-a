'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { coupons } from '@/data/offers';

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [
        {
          id: 'prod-5',
          slug: 'travancore-carved-walnut-lounge-armchair',
          name: 'Travancore Cane & Walnut Lounge Chair',
          price: 24990,
          mrp: 36990,
          image:
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=85',
          selectedColor: 'Ivory Bouclé + Walnut',
          selectedMaterial: 'Solid Walnut',
          quantity: 1,
          warranty: '5 Years Structural Warranty',
        },
      ],
      isCartOpen: false,
      appliedCoupon: null,
      flyingItem: null,
      lastOrder: null,

      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),

      triggerFlyToCart: (payload) => {
        set({ flyingItem: { ...payload, id: Date.now() } });
        setTimeout(() => {
          set({ flyingItem: null });
        }, 850);
      },

      addItem: (product, quantity = 1, variant = {}) => {
        const items = get().items;
        const selectedColor =
          variant.color || product.colors?.[0]?.name || 'Signature Finish';
        const selectedMaterial =
          variant.material || product.materials?.[0] || 'Solid Burmese Teak';
        const existingIndex = items.findIndex(
          (i) => i.id === product.id && i.selectedColor === selectedColor
        );

        if (existingIndex > -1) {
          const updated = [...items];
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: updated[existingIndex].quantity + quantity,
          };
          set({ items: updated });
        } else {
          set({
            items: [
              ...items,
              {
                id: product.id,
                slug: product.slug,
                name: product.name,
                price: product.price,
                mrp: product.mrp,
                image: product.images?.[0] || product.image,
                selectedColor,
                selectedMaterial,
                quantity,
                warranty: product.warranty || '5 Years Warranty',
              },
            ],
          });
        }
      },

      removeItem: (id, selectedColor) => {
        set({
          items: get().items.filter(
            (i) => !(i.id === id && (!selectedColor || i.selectedColor === selectedColor))
          ),
        });
      },

      updateQuantity: (id, selectedColor, delta) => {
        const updated = get()
          .items.map((item) => {
            if (item.id === id && (!selectedColor || item.selectedColor === selectedColor)) {
              const nextQty = item.quantity + delta;
              return nextQty > 0 ? { ...item, quantity: nextQty } : null;
            }
            return item;
          })
          .filter(Boolean);
        set({ items: updated });
      },

      clearCart: () => set({ items: [], appliedCoupon: null }),

      applyCoupon: (codeInput) => {
        const clean = (codeInput || '').trim().toUpperCase();
        const found = coupons.find((c) => c.code === clean);
        if (!found) {
          return { ok: false, message: 'Invalid guild coupon code. Try RIDDHY15 or ROYAL5000.' };
        }
        const subtotal = get().getSubtotal();
        if (subtotal < found.minOrder) {
          return {
            ok: false,
            message: `Minimum order of ₹${found.minOrder.toLocaleString('en-IN')} required for ${found.code}.`,
          };
        }
        set({ appliedCoupon: found });
        return { ok: true, coupon: found, message: `Coupon ${found.code} applied!` };
      },

      removeCoupon: () => set({ appliedCoupon: null }),

      getSubtotal: () =>
        get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),

      getTotalMrp: () =>
        get().items.reduce((sum, item) => sum + (item.mrp || item.price) * item.quantity, 0),

      getCouponDiscount: () => {
        const coupon = get().appliedCoupon;
        const subtotal = get().getSubtotal();
        if (!coupon || subtotal < coupon.minOrder) return 0;
        if (coupon.discountType === 'flat') return coupon.discountValue;
        const raw = Math.round((subtotal * coupon.discountValue) / 100);
        return Math.min(raw, coupon.maxDiscount || raw);
      },

      getGrandTotal: () => {
        const subtotal = get().getSubtotal();
        const discount = get().getCouponDiscount();
        return Math.max(0, subtotal - discount);
      },

      saveOrder: (orderDetails) => {
        set({
          lastOrder: {
            ...orderDetails,
            orderId: `RDF-${Math.floor(100000 + Math.random() * 900000)}`,
            date: new Date().toLocaleDateString('en-IN', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            }),
          },
          items: [],
          appliedCoupon: null,
        });
      },
    }),
    {
      name: 'riddhy-cart-storage',
      partialize: (state) => ({
        items: state.items,
        appliedCoupon: state.appliedCoupon,
        lastOrder: state.lastOrder,
      }),
    }
  )
);
