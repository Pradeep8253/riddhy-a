'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Compass } from 'lucide-react';
import './EmptyWishlistState.css';

export default function EmptyWishlistState() {
  return (
    <div className="empty-wishlist">
      <div className="empty-wishlist__orb">
        <Heart size={36} />
      </div>
      <h2>Your Private Guild Wishlist is Empty</h2>
      <p>
        Tap the carved heart icon on any Burmese Teak sofa, four-poster bed, or
        smart appliance to curate your dream residence moodboard.
      </p>
      <Link href="/shop" className="btn-wood-polish">
        <Compass size={16} />
        <span>Explore 240+ Heirloom Designs</span>
      </Link>
    </div>
  );
}
