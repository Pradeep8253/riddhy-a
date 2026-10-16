'use client';

import React from 'react';
import { Sparkles, Award } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import './AboutHero.css';

export default function AboutHero() {
  return (
    <section className="about-hero texture-wood-dark">
      <div className="site-container about-hero__inner">
        <Breadcrumb dark items={[{ label: 'Our Craft & Heritage' }]} />

        <div className="about-hero__bento">
          <div className="about-hero__copy">
            <span className="about-hero__eyebrow">
              <Sparkles size={14} /> EST. 2010 • KANPUR &amp; JODHPUR TIMBER GUILD
            </span>
            <h1 className="about-hero__title">
              Where Chiseled <em>Burmese Teak</em> Meets Architectural Precision
            </h1>
            <p className="about-hero__prose drop-cap">
              Born in a 1920s brick carriage house in Civil Lines, Kanpur, Riddhy
              Furniture &amp; Home Appliances began with a singular rebellion
              against disposable sawdust particle-board furniture: every piece
              that leaves our doors must survive three generations of Indian
              summers, monsoons, and family gatherings.
            </p>
          </div>

          <div className="about-hero__visual">
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85"
              alt="Riddhy Master Joinery Atelier"
              className="about-hero__img"
            />
            <div className="about-hero__badge">
              <Award size={20} />
              <div>
                <strong>180+ Master Artisans</strong>
                <span>3rd &amp; 4th Generation Woodcarvers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
