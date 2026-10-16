'use client';

import React from 'react';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import WishlistGrid from './sections/WishlistGrid/WishlistGrid';
import EmptyWishlistState from './sections/EmptyWishlistState/EmptyWishlistState';
import { useWishlistStore } from '@/store/useWishlistStore';

export default function WishlistPage() {
  const { items, clearWishlist } = useWishlistStore();

  return (
    <div className="texture-paper" style={{ padding: '1.5rem 0 4.5rem' }}>
      <div className="site-container">
        <Breadcrumb items={[{ label: 'Saved Guild Wishlist' }]} />

        <SectionHeading
          eyebrow="YOUR RESIDENCE MOODBOARD"
          titlePart1="Saved"
          italicWord="Heirlooms"
          titlePart2={`(${items.length})`}
          rightSlot={
            items.length > 0 && (
              <button
                type="button"
                onClick={clearWishlist}
                className="btn-wood-outline"
              >
                Clear All Saved
              </button>
            )
          }
        />

        {items.length === 0 ? (
          <EmptyWishlistState />
        ) : (
          <WishlistGrid items={items} />
        )}
      </div>
    </div>
  );
}
