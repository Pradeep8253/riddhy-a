'use client';

import React from 'react';
import { Copy, Ticket } from 'lucide-react';
import { toast } from 'sonner';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import { coupons } from '@/data/offers';
import './CouponShowcase.css';

export default function CouponShowcase() {
  const copy = (code) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(code);
    }
    toast.success(`Copied coupon "${code}"! Paste in your Guild Cart.`);
  };

  return (
    <section className="coupon-showcase texture-emerald-dark">
      <div className="site-container coupon-showcase__inner">
        <SectionHeading
          eyebrow="ENGRAVED PRIVILEGE KEYS"
          titlePart1="Active Guild"
          italicWord="Coupons"
          titlePart2="& Bank Vouchers"
          dark
        />

        <div className="coupon-showcase__grid">
          {coupons.map((c) => (
            <article key={c.code} className="coupon-showcase__ticket">
              <div className="coupon-showcase__top">
                <span className="coupon-showcase__badge">{c.badge}</span>
                <span className="coupon-showcase__exp">Valid till {c.expiry}</span>
              </div>

              <h3>{c.title}</h3>
              <p>{c.description}</p>

              <div className="coupon-showcase__foot">
                <div className="coupon-showcase__code">
                  <Ticket size={15} />
                  <strong>{c.code}</strong>
                </div>
                <button
                  type="button"
                  onClick={() => copy(c.code)}
                  className="btn-wood-polish coupon-showcase__copy"
                >
                  <Copy size={14} />
                  <span>Copy Code</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
