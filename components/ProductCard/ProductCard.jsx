'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Eye, ShoppingBag, Sparkles, Check } from 'lucide-react';
import { toast } from 'sonner';
import Badge from '@/components/Badge/Badge';
import WishlistButton from '@/components/WishlistButton/WishlistButton';
import RatingStars from '@/components/RatingStars/RatingStars';
import PriceDisplay from '@/components/PriceDisplay/PriceDisplay';
import { useCartStore } from '@/store/useCartStore';
import { useFilterStore } from '@/store/useFilterStore';
import './ProductCard.css';

export default function ProductCard({
  product,
  featured = false,
  layout = 'grid',
  dark = false,
}) {
  const cardRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0]?.name || 'Signature Finish'
  );
  const [addedFlash, setAddedFlash] = useState(false);

  const { addItem, triggerFlyToCart, openCart } = useCartStore();
  const { openQuickView } = useFilterStore();

  if (!product) return null;

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el || window.innerWidth < 1024) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty('--rx', `${(-y * 5).toFixed(2)}deg`);
    el.style.setProperty('--ry', `${(x * 6).toFixed(2)}deg`);
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product.inStock) {
      toast.error('This artisan piece is currently out of stock.');
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    triggerFlyToCart({
      image: product.images?.[0],
      startX: rect.left,
      startY: rect.top,
    });

    addItem(product, 1, {
      color: selectedColor,
      material: product.materials?.[0],
    });

    setAddedFlash(true);
    setTimeout(() => setAddedFlash(false), 1200);

    toast.success(`Added "${product.name}" to your Guild Cart`, {
      description: `${selectedColor} • Free White-Glove Delivery`,
      action: {
        label: 'View Cart',
        onClick: () => openCart(),
      },
    });
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    openQuickView(product);
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`product-card ${featured ? 'product-card--featured' : ''} ${
        layout === 'list' ? 'product-card--list' : ''
      } ${dark ? 'product-card--dark' : ''} ${
        !product.inStock ? 'product-card--out' : ''
      }`}
    >
      <div className="product-card__media">
        <Link href={`/product/${product.slug}`} className="product-card__img-link">
          <img
            src={product.images?.[0]}
            alt={product.name}
            className="product-card__img"
            loading="lazy"
          />
          {product.images?.[1] && (
            <img
              src={product.images[1]}
              alt={`${product.name} alternate view`}
              className="product-card__img product-card__img--hover"
              loading="lazy"
            />
          )}
        </Link>

        <div className="product-card__top-bar">
          <Badge text={product.badge} />
          <div className="product-card__actions-float">
            <WishlistButton product={product} />
            <button
              type="button"
              onClick={handleQuickView}
              className="product-card__quick-btn"
              aria-label="Quick view product"
              title="Quick View"
            >
              <Eye size={17} />
            </button>
          </div>
        </div>

        <div className="product-card__material-chip">
          <Sparkles size={12} />
          <span>{product.materials?.[0] || 'Solid Burmese Teak'}</span>
        </div>
      </div>

      <div className="product-card__body">
        <div className="product-card__meta-row">
          <span className="product-card__category">{product.category}</span>
          <RatingStars rating={product.rating} count={product.reviewCount} />
        </div>

        <Link href={`/product/${product.slug}`} className="product-card__title-link">
          <h3 className="product-card__title">{product.name}</h3>
        </Link>

        {(featured || layout === 'list') && (
          <p className="product-card__subtitle">{product.subtitle}</p>
        )}

        {product.colors?.length > 0 && (
          <div className="product-card__swatches">
            <span className="product-card__swatch-label">Finish:</span>
            <div className="product-card__swatch-list">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedColor(c.name);
                  }}
                  title={c.name}
                  aria-label={`Select finish ${c.name}`}
                  className={`product-card__swatch ${
                    selectedColor === c.name ? 'product-card__swatch--active' : ''
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>
        )}

        <div className="product-card__footer">
          <PriceDisplay
            price={product.price}
            mrp={product.mrp}
            size={featured ? 'lg' : 'md'}
            dark={dark}
          />

          <button
            type="button"
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`product-card__add-btn ${
              addedFlash ? 'product-card__add-btn--added' : ''
            }`}
          >
            {addedFlash ? (
              <>
                <Check size={16} />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag size={16} />
                <span>{product.inStock ? 'Add to Cart' : 'Sold Out'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
