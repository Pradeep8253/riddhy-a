'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import CountdownTimer from '@/components/CountdownTimer/CountdownTimer';
import './OffersHero.css';

export default function OffersHero() {
  return (
    <section className="offers-hero texture-wood-dark">
      <div className="site-container offers-hero__inner">
        <Breadcrumb dark items={[{ label: 'Festive Guild Offers' }]} />

        <div className="offers-hero__bento">
          <div>
            <span className="offers-hero__eyebrow">
              <Sparkles size={14} /> GRAND ROYAL TROUSSEAU &amp; DIWALI VAULT 2026
            </span>
            <h1 className="offers-hero__title">
              Up to 42% Off <em>Burmese Teak</em> Suites &amp; Bespoke Appliances
            </h1>
            <p className="offers-hero__desc">
              Combine direct-from-kiln seasonal reductions with guild privilege
              coupons and 24-month 0% No-Cost EMI across our entire catalog.
            </p>
          </div>

          <CountdownTimer hoursOffset={14} label="FESTIVE VAULT CLOSES IN" />
        </div>
      </div>
    </section>
  );
}
