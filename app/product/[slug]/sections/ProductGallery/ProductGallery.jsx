'use client';

import React, { useState } from 'react';
import { Sparkles, ZoomIn } from 'lucide-react';
import Badge from '@/components/Badge/Badge';
import WishlistButton from '@/components/WishlistButton/WishlistButton';
import './ProductGallery.css';

export default function ProductGallery({ product }) {
  const images = product?.images || [];
  const [activeIdx, setActiveIdx] = useState(0);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y, active: true });
  };

  return (
    <div className="product-gallery">
      <div
        className="product-gallery__stage"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setZoomPos((p) => ({ ...p, active: false }))}
      >
        <div className="product-gallery__top-badges">
          <Badge text={product.badge} />
          <WishlistButton product={product} />
        </div>

        <img
          src={images[activeIdx] || images[0]}
          alt={product.name}
          className="product-gallery__main-img"
          style={
            zoomPos.active
              ? {
                  transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                  transform: 'scale(1.55)',
                }
              : undefined
          }
        />

        <div className="product-gallery__bottom-bar">
          <span className="product-gallery__craft-tag">
            <Sparkles size={13} /> Hand-Rubbed Beeswax &amp; Dovetail Joinery
          </span>
          <span className="product-gallery__zoom-hint">
            <ZoomIn size={13} /> Hover to Inspect Timber Grain
          </span>
        </div>
      </div>

      {images.length > 1 && (
        <div className="product-gallery__thumbs">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`product-gallery__thumb ${
                activeIdx === idx ? 'product-gallery__thumb--active' : ''
              }`}
            >
              <img src={img} alt={`${product.name} view ${idx + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
