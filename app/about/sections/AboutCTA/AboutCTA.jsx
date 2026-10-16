'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, MapPin } from 'lucide-react';
import './AboutCTA.css';

export default function AboutCTA() {
  return (
    <section className="about-cta texture-wood-dark">
      <div className="site-container about-cta__inner">
        <h2>Ready to Commission Your Family’s Next Heirloom?</h2>
        <p>
          Visit our 28,000 sq.ft Flagship Mansion in Kanpur or browse all 240+
          creations online with complimentary pan-India white-glove delivery.
        </p>
        <div className="about-cta__btns">
          <Link href="/shop" className="btn-wood-polish">
            <Compass size={16} />
            <span>Explore Complete Catalog</span>
          </Link>
          <Link href="/contact" className="btn-wood-outline">
            <MapPin size={16} />
            <span>Book Private Showroom Tour</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
