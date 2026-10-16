'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';
import { categories } from '@/data/categories';
import { formatPrice } from '@/lib/formatPrice';
import './MegaMenu.css';

export default function MegaMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="mega-menu"
      onMouseLeave={onClose}
      role="region"
      aria-label="Furniture & Appliances Categories"
    >
      <div className="site-container mega-menu__inner">
        <div className="mega-menu__grid">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/shop/${cat.slug}`}
              onClick={onClose}
              className="mega-menu__card"
            >
              <div className="mega-menu__img-wrap">
                <img src={cat.image} alt={cat.name} className="mega-menu__img" />
                <span className="mega-menu__badge">{cat.discountText}</span>
              </div>
              <div className="mega-menu__info">
                <div className="mega-menu__title-row">
                  <h4>{cat.shortName}</h4>
                  <ArrowUpRight size={14} />
                </div>
                <p className="mega-menu__meta">
                  {cat.itemCount} Pieces • From {formatPrice(cat.startingFrom)}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mega-menu__Highlight-bar">
          <div className="mega-menu__highlight-left">
            <Sparkles size={16} />
            <span>
              <strong>Bespoke Trousseau & Villa Concierge:</strong> Custom stain,
              Italian velvet swatches & 3D room layout at ₹0 design fee.
            </span>
          </div>
          <Link href="/offers" onClick={onClose} className="mega-menu__highlight-cta">
            <ShieldCheck size={15} />
            <span>Unlock Festive Coupons (RIDDHY15)</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
