'use client';

import React from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard/ProductCard';
import { useWishlistStore } from '@/store/useWishlistStore';
import { products } from '@/data/products';
import './AccountWishlistTab.css';

export default function AccountWishlistTab() {
  const { items } = useWishlistStore();
  const displayList = items.length > 0 ? items : products.slice(0, 2);

  return (
    <div className="account-wishlist">
      <div className="account-wishlist__head">
        <h3>Saved Guild Moodboard ({displayList.length})</h3>
        <Link href="/wishlist" className="btn-wood-outline">
          Open Full Wishlist
        </Link>
      </div>

      <div className="account-wishlist__grid">
        {displayList.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
