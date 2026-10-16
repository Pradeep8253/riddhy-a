'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { formatPrice } from '@/lib/formatPrice';
import './CategoryCard.css';

export default function CategoryCard({ category, variant = 'orb' }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty('--mx', '0px');
    el.style.setProperty('--my', '0px');
  };

  return (
    <Link
      ref={cardRef}
      href={`/shop/${category.slug}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`category-card category-card--${variant}`}
    >
      <div className="category-card__media">
        <img
          src={category.image}
          alt={category.name}
          className="category-card__img"
          loading="lazy"
        />
        <span className="category-card__ring" />
        <span className="category-card__discount">{category.discountText}</span>
      </div>

      <div className="category-card__content">
        <div className="category-card__meta">
          <span className="category-card__count">{category.itemCount} Designs</span>
          <span className="category-card__start">
            From {formatPrice(category.startingFrom)}
          </span>
        </div>
        <h3 className="category-card__title">{category.name}</h3>
        {variant === 'hero' && (
          <p className="category-card__tagline">{category.tagline}</p>
        )}
        <span className="category-card__cta">
          Explore Guild <ArrowUpRight size={15} />
        </span>
      </div>
    </Link>
  );
}
