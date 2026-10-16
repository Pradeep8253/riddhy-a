'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  ShoppingBag,
  Zap,
  MapPin,
  CheckCircle2,
  Sparkles,
  Ruler,
} from 'lucide-react';
import { toast } from 'sonner';
import RatingStars from '@/components/RatingStars/RatingStars';
import PriceDisplay from '@/components/PriceDisplay/PriceDisplay';
import { useCartStore } from '@/store/useCartStore';
import { formatPrice } from '@/lib/formatPrice';
import './ProductInfoPanel.css';

export default function ProductInfoPanel({ product }) {
  const router = useRouter();
  const { addItem, triggerFlyToCart, openCart } = useCartStore();

  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0]?.name || 'Signature Finish'
  );
  const [selectedMaterial, setSelectedMaterial] = useState(
    product.materials?.[0] || 'Solid Burmese Teak'
  );
  const [qty, setQty] = useState(1);
  const [pincode, setPincode] = useState('208001');
  const [pinStatus, setPinStatus] = useState({
    checked: true,
    valid: true,
    text: 'Free White-Glove Delivery & Floor Setup by Tuesday, 20 Oct (Kanpur / Metro Priority)',
  });
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowStickyBar(window.scrollY > 520);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleCheckPin = (e) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(pincode.trim())) {
      setPinStatus({
        checked: true,
        valid: false,
        text: 'Please enter a valid 6-digit Indian pincode.',
      });
      return;
    }
    setPinStatus({
      checked: true,
      valid: true,
      text: `White-Glove Crated Delivery available to ${pincode} in 4–6 Days • ₹0 Assembly Fee`,
    });
  };

  const handleAddToCart = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    triggerFlyToCart({
      image: product.images?.[0],
      startX: rect.left,
      startY: rect.top,
    });
    addItem(product, qty, {
      color: selectedColor,
      material: selectedMaterial,
    });
    toast.success(`Added ${qty}× "${product.name}" to your Guild Cart`);
    openCart();
  };

  const handleBuyNow = () => {
    addItem(product, qty, {
      color: selectedColor,
      material: selectedMaterial,
    });
    router.push('/checkout');
  };

  return (
    <div className="product-info">
      <div className="product-info__meta-top">
        <span className="product-info__brand">
          <Sparkles size={13} /> {product.brand}
        </span>
        <span className="product-info__sku">SKU: {product.sku}</span>
      </div>

      <h1 className="product-info__title">{product.name}</h1>
      <p className="product-info__subtitle">{product.subtitle}</p>

      <div className="product-info__rating-row">
        <RatingStars
          rating={product.rating}
          count={product.reviewCount}
          size={16}
        />
        <span className="product-info__stock-pill">
          {product.inStock
            ? `In Stock (${product.stockCount} Ready in Vault)`
            : 'Currently Out of Stock'}
        </span>
      </div>

      <div className="product-info__price-plaque">
        <PriceDisplay price={product.price} mrp={product.mrp} size="lg" />
        <div className="product-info__emi-badge">
          No-Cost EMI from{' '}
          <strong>{formatPrice(Math.round(product.price / 12))}/mo</strong>
        </div>
      </div>

      {/* Finish / Color Selector */}
      {product.colors?.length > 0 && (
        <div className="product-info__option-block">
          <div className="product-info__option-head">
            <span>Wood &amp; Upholstery Finish:</span>
            <strong>{selectedColor}</strong>
          </div>
          <div className="product-info__color-grid">
            {product.colors.map((c) => (
              <button
                key={c.name}
                type="button"
                onClick={() => setSelectedColor(c.name)}
                className={`product-info__color-chip ${
                  selectedColor === c.name
                    ? 'product-info__color-chip--active'
                    : ''
                }`}
              >
                <span
                  className="product-info__color-dot"
                  style={{ backgroundColor: c.hex }}
                />
                <span>{c.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Material / Spec Pills */}
      {product.materials?.length > 0 && (
        <div className="product-info__option-block">
          <div className="product-info__option-head">
            <span>Primary Craft Specification:</span>
            <strong>{selectedMaterial}</strong>
          </div>
          <div className="product-info__mat-pills">
            {product.materials.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setSelectedMaterial(m)}
                className={`product-info__mat-pill ${
                  selectedMaterial === m ? 'product-info__mat-pill--active' : ''
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Dimensions Banner */}
      <div className="product-info__dim-bar">
        <Ruler size={16} />
        <span>
          <strong>Architectural Dimensions:</strong> {product.dimensions} • Weight:{' '}
          {product.weight}
        </span>
      </div>

      {/* Quantity + Primary CTAs */}
      <div className="product-info__cta-row">
        <div className="product-info__qty">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span>{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => q + 1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="btn-wood-polish product-info__add-btn"
        >
          <ShoppingBag size={18} />
          <span>{product.inStock ? 'Add to Guild Cart' : 'Out of Stock'}</span>
        </button>

        <button
          type="button"
          onClick={handleBuyNow}
          disabled={!product.inStock}
          className="btn-wood-outline product-info__buy-btn"
        >
          <Zap size={17} />
          <span>Commission Now</span>
        </button>
      </div>

      {/* Pincode Delivery Checker */}
      <div className="product-info__pincode">
        <form onSubmit={handleCheckPin} className="product-info__pincode-form">
          <MapPin size={16} className="product-info__pin-icon" />
          <input
            type="text"
            maxLength={6}
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            placeholder="Enter 6-digit Pincode"
            aria-label="Delivery Pincode"
          />
          <button type="submit">Verify Dispatch</button>
        </form>
        {pinStatus.checked && (
          <p
            className={`product-info__pin-msg ${
              pinStatus.valid ? 'product-info__pin-msg--ok' : 'product-info__pin-msg--err'
            }`}
          >
            <CheckCircle2 size={14} />
            <span>{pinStatus.text}</span>
          </p>
        )}
      </div>

      {/* Key Artisan Highlights */}
      <ul className="product-info__highlights">
        {product.highlights?.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

      {/* Sticky Mobile / Scroll "Add to Cart" Bar */}
      {showStickyBar && (
        <div className="product-info__sticky-bar">
          <div className="site-container product-info__sticky-inner">
            <div className="product-info__sticky-left">
              <img src={product.images?.[0]} alt="" />
              <div>
                <h4>{product.name}</h4>
                <span>
                  {formatPrice(product.price)} • {selectedColor}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="btn-wood-polish"
            >
              <ShoppingBag size={16} />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
