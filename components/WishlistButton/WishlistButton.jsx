'use client';

import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { toast } from 'sonner';
import { useWishlistStore } from '@/store/useWishlistStore';
import './WishlistButton.css';

export default function WishlistButton({ product, className = '' }) {
  const { items, toggleWishlist } = useWishlistStore();
  const [burst, setBurst] = useState(false);

  const isSaved = items.some((i) => i.id === product?.id);

  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product) return;

    const added = toggleWishlist(product);
    if (added) {
      setBurst(true);
      setTimeout(() => setBurst(false), 650);
      toast.success(`Saved "${product.name}" to your Guild Wishlist`);
    } else {
      toast('Removed from Wishlist');
    }
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isSaved ? 'Remove from wishlist' : 'Add to wishlist'}
      className={`wishlist-btn ${isSaved ? 'wishlist-btn--active' : ''} ${
        burst ? 'wishlist-btn--burst' : ''
      } ${className}`}
    >
      <Heart size={18} className="wishlist-btn__icon" />
      {burst && (
        <span className="wishlist-btn__sparks" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </span>
      )}
    </button>
  );
}
