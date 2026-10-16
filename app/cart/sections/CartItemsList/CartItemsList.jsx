'use client';

import React from 'react';
import Link from 'next/link';
import { Trash2, ShieldCheck, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { formatPrice } from '@/lib/formatPrice';
import './CartItemsList.css';

export default function CartItemsList() {
  const { items, updateQuantity, removeItem, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="cart-items__empty">
        <ShoppingBag size={46} />
        <h2>Your Guild Cart is Currently Empty</h2>
        <p>
          Discover our kiln-seasoned Burmese Teak sofas, carved Sheesham beds,
          and bespoke walnut-framed appliances.
        </p>
        <Link href="/shop" className="btn-wood-polish">
          Explore Heritage Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-items">
      <div className="cart-items__head">
        <h3>Selected Heirloom Pieces ({items.length})</h3>
        <button type="button" onClick={clearCart} className="cart-items__clear">
          Clear Cart
        </button>
      </div>

      <div className="cart-items__list">
        {items.map((item) => (
          <article
            key={`${item.id}-${item.selectedColor}`}
            className="cart-items__card"
          >
            <img
              src={item.image}
              alt={item.name}
              className="cart-items__img"
            />

            <div className="cart-items__details">
              <Link
                href={`/product/${item.slug}`}
                className="cart-items__title"
              >
                {item.name}
              </Link>
              <div className="cart-items__specs">
                <span>Finish: {item.selectedColor}</span>
                <span>•</span>
                <span>Material: {item.selectedMaterial}</span>
              </div>
              <div className="cart-items__warranty">
                <ShieldCheck size={14} />
                <span>{item.warranty} • Free White-Glove Setup</span>
              </div>
            </div>

            <div className="cart-items__right">
              <div className="cart-items__price-group">
                <strong className="cart-items__price">
                  {formatPrice(item.price * item.quantity)}
                </strong>
                {item.mrp > item.price && (
                  <s className="cart-items__mrp">
                    {formatPrice(item.mrp * item.quantity)}
                  </s>
                )}
              </div>

              <div className="cart-items__controls">
                <div className="cart-items__stepper">
                  <button
                    type="button"
                    onClick={() =>
                      updateQuantity(item.id, item.selectedColor, -1)
                    }
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() =>
                      updateQuantity(item.id, item.selectedColor, 1)
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => removeItem(item.id, item.selectedColor)}
                  className="cart-items__remove"
                  aria-label="Remove item"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
