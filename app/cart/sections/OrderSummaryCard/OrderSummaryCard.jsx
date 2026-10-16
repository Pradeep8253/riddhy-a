'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { formatPrice } from '@/lib/formatPrice';
import './OrderSummaryCard.css';

export default function OrderSummaryCard() {
  const {
    items,
    getSubtotal,
    getTotalMrp,
    appliedCoupon,
    getCouponDiscount,
    getGrandTotal,
  } = useCartStore();

  const subtotal = getSubtotal();
  const totalMrp = getTotalMrp();
  const mrpDiscount = Math.max(0, totalMrp - subtotal);
  const couponSave = getCouponDiscount();
  const grandTotal = getGrandTotal();

  if (items.length === 0) return null;

  return (
    <div className="order-summary-card texture-wood-dark">
      <h3 className="order-summary-card__title">Guild Investment Ledger</h3>

      <div className="order-summary-card__rows">
        <div className="order-summary-card__row">
          <span>Total Catalog MRP</span>
          <span>{formatPrice(totalMrp)}</span>
        </div>
        <div className="order-summary-card__row order-summary-card__row--save">
          <span>Direct Atelier Privilege</span>
          <span>−{formatPrice(mrpDiscount)}</span>
        </div>
        {appliedCoupon && couponSave > 0 && (
          <div className="order-summary-card__row order-summary-card__row--save">
            <span>Coupon ({appliedCoupon.code})</span>
            <span>−{formatPrice(couponSave)}</span>
          </div>
        )}
        <div className="order-summary-card__row">
          <span>Wooden-Crated White-Glove Delivery</span>
          <strong className="order-summary-card__free">FREE</strong>
        </div>
        <div className="order-summary-card__row order-summary-card__row--grand">
          <span>Net Payable (Incl. GST)</span>
          <span>{formatPrice(grandTotal)}</span>
        </div>
      </div>

      <div className="order-summary-card__emi">
        Or pay <strong>{formatPrice(Math.round(grandTotal / 12))}/month</strong>{' '}
        with 12-Month 0% No-Cost EMI
      </div>

      <Link href="/checkout" className="btn-wood-polish order-summary-card__cta">
        <span>Proceed to Royal Checkout</span>
        <ArrowRight size={17} />
      </Link>

      <div className="order-summary-card__badges">
        <span>
          <ShieldCheck size={14} /> 10-Yr Timber &amp; Joinery Warranty
        </span>
        <span>
          <Truck size={14} /> Free Floor Carry &amp; Assembly
        </span>
      </div>
    </div>
  );
}
