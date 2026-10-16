'use client';

import React from 'react';
import { PhoneCall, Sparkles } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import './ContactHero.css';

export default function ContactHero() {
  return (
    <section className="contact-hero texture-wood-dark">
      <div className="site-container contact-hero__inner">
        <Breadcrumb dark items={[{ label: 'Showrooms & Concierge' }]} />

        <div className="contact-hero__bento">
          <div>
            <span className="contact-hero__eyebrow">
              <Sparkles size={14} /> PRIVATE ARCHITECT &amp; PATRON CONCIERGE
            </span>
            <h1 className="contact-hero__title">
              Commission a Bespoke Piece or Visit Our <em>Experience Palaces</em>
            </h1>
            <p className="contact-hero__sub">
              Whether you need wood-stain sample boxes Couriered to your home or
              a complete 4-BHK villa specification, our master joiners and
              interior architects are at your service 7 days a week.
            </p>
          </div>

          <div className="contact-hero__hotline">
            <PhoneCall size={22} />
            <div>
              <span>DIRECT ATELIER HOTLINE (10:30 AM – 9:00 PM)</span>
              <strong>+91 98390 44210</strong>
              <small>Civil Lines, Kanpur Flagship • Pan-India Desk</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
