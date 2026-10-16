'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ShoppingBag, ShieldCheck, Truck, Sparkles, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { useFilterStore } from '@/store/useFilterStore';
import { useCartStore } from '@/store/useCartStore';
import Badge from '@/components/Badge/Badge';
import RatingStars from '@/components/RatingStars/RatingStars';
import PriceDisplay from '@/components/PriceDisplay/PriceDisplay';
import './QuickViewModal.css';

export default function QuickViewModal() {
  const { quickViewProduct, closeQuickView } = useFilterStore();
  const { addItem, openCart } = useCartStore();
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [qty, setQty] = useState(1);

  if (!quickViewProduct) return null;

  const images = quickViewProduct.images || [];
  const currentImg = images[activeImageIdx] || images[0];

  const handleAdd = () => {
    addItem(quickViewProduct, qty);
    toast.success(`Added ${qty}× "${quickViewProduct.name}" to your Guild Cart`);
    closeQuickView();
    openCart();
  };

  return (
    <AnimatePresence>
      <div className="quick-modal" role="dialog" aria-modal="true">
        <motion.div
          className="quick-modal__backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeQuickView}
        />

        <motion.div
          className="quick-modal__dialog"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            type="button"
            onClick={closeQuickView}
            className="quick-modal__close"
            aria-label="Close quick view"
          >
            <X size={20} />
          </button>

          <div className="quick-modal__grid">
            <div className="quick-modal__gallery">
              <div className="quick-modal__main-img-wrap">
                <Badge text={quickViewProduct.badge} />
                <img
                  src={currentImg}
                  alt={quickViewProduct.name}
                  className="quick-modal__main-img"
                />
              </div>

              {images.length > 1 && (
                <div className="quick-modal__thumbs">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveImageIdx(i)}
                      className={`quick-modal__thumb ${
                        activeImageIdx === i ? 'quick-modal__thumb--active' : ''
                      }`}
                    >
                      <img src={img} alt="" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="quick-modal__info">
              <span className="quick-modal__brand">
                <Sparkles size={13} /> {quickViewProduct.brand} • SKU: {quickViewProduct.sku}
              </span>
              <h2 className="quick-modal__title">{quickViewProduct.name}</h2>
              <RatingStars
                rating={quickViewProduct.rating}
                count={quickViewProduct.reviewCount}
              />

              <div className="quick-modal__price-box">
                <PriceDisplay
                  price={quickViewProduct.price}
                  mrp={quickViewProduct.mrp}
                  size="lg"
                />
              </div>

              <p className="quick-modal__desc">{quickViewProduct.description}</p>

              <div className="quick-modal__specs-mini">
                <div>
                  <strong>Dimensions:</strong> {quickViewProduct.dimensions}
                </div>
                <div>
                  <strong>Crafted From:</strong>{' '}
                  {quickViewProduct.materials?.join(' • ')}
                </div>
              </div>

              <div className="quick-modal__cta-row">
                <div className="quick-modal__qty">
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                  >
                    −
                  </button>
                  <span>{qty}</span>
                  <button type="button" onClick={() => setQty((q) => q + 1)}>
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAdd}
                  disabled={!quickViewProduct.inStock}
                  className="btn-wood-polish quick-modal__add"
                >
                  <ShoppingBag size={18} />
                  <span>
                    {quickViewProduct.inStock ? 'Add to Guild Cart' : 'Out of Stock'}
                  </span>
                </button>
              </div>

              <div className="quick-modal__trust">
                <span>
                  <ShieldCheck size={15} /> {quickViewProduct.warranty}
                </span>
                <span>
                  <Truck size={15} /> Free White-Glove Installation
                </span>
              </div>

              <Link
                href={`/product/${quickViewProduct.slug}`}
                onClick={closeQuickView}
                className="quick-modal__full-link"
              >
                Inspect Full Joinery & 360° Specifications <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
