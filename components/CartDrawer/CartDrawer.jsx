'use client';

import React from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { formatPrice } from '@/lib/formatPrice';
import './CartDrawer.css';

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    removeItem,
    updateQuantity,
    getSubtotal,
    getTotalMrp,
    appliedCoupon,
    getCouponDiscount,
    getGrandTotal,
  } = useCartStore();

  const subtotal = getSubtotal();
  const totalMrp = getTotalMrp();
  const mrpSavings = Math.max(0, totalMrp - subtotal);
  const couponDiscount = getCouponDiscount();
  const grandTotal = getGrandTotal();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="cart-drawer" role="dialog" aria-modal="true">
          <motion.div
            className="cart-drawer__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          <motion.aside
            className="cart-drawer__panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className="cart-drawer__header">
              <div className="cart-drawer__title-group">
                <ShoppingBag size={20} className="cart-drawer__bag-icon" />
                <div>
                  <h2 className="cart-drawer__title">Your Guild Cart</h2>
                  <p className="cart-drawer__subtitle">
                    {items.reduce((s, i) => s + i.quantity, 0)} Heirloom Piece(s) Selected
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="cart-drawer__close"
                aria-label="Close cart drawer"
              >
                <X size={20} />
              </button>
            </header>

            <div className="cart-drawer__perk-strip">
              <Sparkles size={14} />
              <span>
                Complimentary White-Glove Installation & 0% EMI Unlocked!
              </span>
            </div>

            <div className="cart-drawer__body">
              {items.length === 0 ? (
                <div className="cart-drawer__empty">
                  <ShoppingBag size={42} />
                  <h3>Your Guild Cart is Empty</h3>
                  <p>
                    Explore our kiln-dried Burmese Teak sofas, four-poster beds, and
                    bespoke smart appliances.
                  </p>
                  <Link
                    href="/shop"
                    onClick={closeCart}
                    className="btn-wood-polish"
                  >
                    Browse Heritage Catalog
                  </Link>
                </div>
              ) : (
                <ul className="cart-drawer__list">
                  {items.map((item) => (
                    <li
                      key={`${item.id}-${item.selectedColor}`}
                      className="cart-drawer__item"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-drawer__item-img"
                      />
                      <div className="cart-drawer__item-info">
                        <Link
                          href={`/product/${item.slug}`}
                          onClick={closeCart}
                          className="cart-drawer__item-name"
                        >
                          {item.name}
                        </Link>
                        <span className="cart-drawer__item-variant">
                          Finish: {item.selectedColor}
                        </span>
                        <div className="cart-drawer__item-bottom">
                          <div className="cart-drawer__stepper">
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

                          <div className="cart-drawer__item-price">
                            {formatPrice(item.price * item.quantity)}
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              removeItem(item.id, item.selectedColor)
                            }
                            className="cart-drawer__remove"
                            aria-label="Remove item"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <footer className="cart-drawer__footer">
                <div className="cart-drawer__summary">
                  <div className="cart-drawer__row">
                    <span>Total MRP</span>
                    <span>{formatPrice(totalMrp)}</span>
                  </div>
                  {mrpSavings > 0 && (
                    <div className="cart-drawer__row cart-drawer__row--save">
                      <span>Guild MRP Savings</span>
                      <span>−{formatPrice(mrpSavings)}</span>
                    </div>
                  )}
                  {appliedCoupon && couponDiscount > 0 && (
                    <div className="cart-drawer__row cart-drawer__row--save">
                      <span>Coupon ({appliedCoupon.code})</span>
                      <span>−{formatPrice(couponDiscount)}</span>
                    </div>
                  )}
                  <div className="cart-drawer__row cart-drawer__row--total">
                    <span>Payable Total</span>
                    <span>{formatPrice(grandTotal)}</span>
                  </div>
                </div>

                <div className="cart-drawer__actions">
                  <Link
                    href="/cart"
                    onClick={closeCart}
                    className="btn-wood-outline cart-drawer__btn"
                  >
                    Inspect Cart & Coupons
                  </Link>
                  <Link
                    href="/checkout"
                    onClick={closeCart}
                    className="btn-wood-polish cart-drawer__btn"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="cart-drawer__guarantee">
                  <ShieldCheck size={14} />
                  <span>10-Year Solid Timber Warranty • 256-Bit Encrypted Checkout</span>
                </div>
              </footer>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
