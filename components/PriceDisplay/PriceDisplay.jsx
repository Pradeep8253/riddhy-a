'use client';

import React from 'react';
import { formatPrice, calcDiscountPercent, calcSavings } from '@/lib/formatPrice';
import './PriceDisplay.css';

export default function PriceDisplay({
  price,
  mrp,
  size = 'md',
  showSavings = true,
  dark = false,
}) {
  const discount = calcDiscountPercent(mrp, price);
  const savings = calcSavings(mrp, price);

  return (
    <div
      className={`price-display price-display--${size} ${
        dark ? 'price-display--dark' : ''
      }`}
    >
      <div className="price-display__main">
        <span className="price-display__current">{formatPrice(price)}</span>
        {mrp > price && (
          <span className="price-display__mrp">{formatPrice(mrp)}</span>
        )}
        {discount > 0 && (
          <span className="price-display__percent">{discount}% OFF</span>
        )}
      </div>
      {showSavings && savings > 0 && (
        <div className="price-display__savings">
          You Save {formatPrice(savings)} • Inclusive of all taxes
        </div>
      )}
    </div>
  );
}
