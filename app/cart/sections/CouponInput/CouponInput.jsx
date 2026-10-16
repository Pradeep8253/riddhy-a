'use client';

import React, { useState } from 'react';
import { Ticket, CheckCircle2, X } from 'lucide-react';
import { toast } from 'sonner';
import { useCartStore } from '@/store/useCartStore';
import { coupons } from '@/data/offers';
import './CouponInput.css';

export default function CouponInput() {
  const { appliedCoupon, applyCoupon, removeCoupon } = useCartStore();
  const [code, setCode] = useState('');
  const [shake, setShake] = useState(false);

  const handleApply = (e) => {
    e.preventDefault();
    const res = applyCoupon(code);
    if (!res.ok) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      toast.error(res.message);
    } else {
      toast.success(res.message);
      setCode('');
    }
  };

  return (
    <div className={`coupon-box ${shake ? 'coupon-box--shake' : ''}`}>
      <div className="coupon-box__head">
        <Ticket size={16} />
        <span>Apply Guild Privilege Coupon</span>
      </div>

      {appliedCoupon ? (
        <div className="coupon-box__applied">
          <div>
            <strong>
              <CheckCircle2 size={15} /> {appliedCoupon.code} Applied!
            </strong>
            <p>{appliedCoupon.title}</p>
          </div>
          <button
            type="button"
            onClick={() => {
              removeCoupon();
              toast('Coupon removed');
            }}
            className="coupon-box__remove"
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <>
          <form onSubmit={handleApply} className="coupon-box__form">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="Enter RIDDHY15 or ROYAL5000"
            />
            <button type="submit">Apply</button>
          </form>

          <div className="coupon-box__quick-list">
            {coupons.slice(0, 3).map((c) => (
              <button
                key={c.code}
                type="button"
                onClick={() => {
                  const res = applyCoupon(c.code);
                  if (res.ok) toast.success(res.message);
                  else toast.error(res.message);
                }}
                className="coupon-box__pill"
              >
                <strong>{c.code}</strong>
                <span>{c.badge}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
