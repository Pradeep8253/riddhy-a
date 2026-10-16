'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { formatPrice } from '@/lib/formatPrice';
import './OrderReviewSummary.css';

export default function OrderReviewSummary({ address }) {
  const { items, getSubtotal, getCouponDiscount, getGrandTotal, appliedCoupon } =
    useCartStore();

  const subtotal = getSubtotal();
  const discount = getCouponDiscount();
  const grandTotal = getGrandTotal();

  return (
    <aside className="checkout-review texture-wood-dark">
      <h3 className="checkout-review__title">Commission Summary</h3>

      <ul className="checkout-review__items">
        {items.map((item) => (
          <li
            key={`${item.id}-${item.selectedColor}`}
            className="checkout-review__item"
          >
            <img src={item.image} alt={item.name} />
            <div>
              <h5>{item.name}</h5>
              <span>
                Qty: {item.quantity} • {item.selectedColor}
              </span>
            </div>
            <strong>{formatPrice(item.price * item.quantity)}</strong>
          </li>
        ))}
      </ul>

      {address && (
        <div className="checkout-review__addr">
          <span>Delivering To:</span>
          <strong>{address.fullName}</strong>
          <p>
            {address.addressLine1}, {address.city}, {address.state} -{' '}
            {address.pincode}
          </p>
        </div>
      )}

      <div className="checkout-review__totals">
        <div className="checkout-review__row">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        {discount > 0 && (
          <div className="checkout-review__row checkout-review__row--save">
            <span>Coupon ({appliedCoupon?.code})</span>
            <span>−{formatPrice(discount)}</span>
          </div>
        )}
        <div className="checkout-review__row">
          <span>White-Glove Crated Delivery</span>
          <span className="checkout-review__save">FREE</span>
        </div>
        <div className="checkout-review__row checkout-review__row--grand">
          <span>Total Payable</span>
          <span>{formatPrice(grandTotal)}</span>
        </div>
      </div>

      <div className="checkout-review__trust">
        <ShieldCheck size={15} />
        <span>Serialized Brass Warranty Plaque Included</span>
      </div>
    </aside>
  );
}
