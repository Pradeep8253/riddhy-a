'use client';

import React from 'react';
import { Flame, Sparkles } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import CountdownTimer from '@/components/CountdownTimer/CountdownTimer';
import ProductCard from '@/components/ProductCard/ProductCard';
import WoodDivider from '@/components/WoodDivider/WoodDivider';
import { products } from '@/data/products';
import './FlashDeals.css';

export default function FlashDeals() {
  const dealProducts = products.filter((p) => p.isFlashDeal);

  return (
    <section className="flash-deals texture-wood-dark">
      <WoodDivider variant="dovetail" />

      {/* Marquee "LIMITED STOCK" Ticker Tape */}
      <div className="flash-deals__ticker" aria-hidden="true">
        <div className="flash-deals__ticker-track">
          {Array.from({ length: 8 }).map((_, idx) => (
            <span key={idx} className="flash-deals__ticker-item">
              <Flame size={14} /> LIMITED WORKSHOP BATCH • KILN-DRIED BURMESE TEAK •
              EXTRA 15% OFF CODE: RIDDHY15 <Sparkles size={14} />
            </span>
          ))}
        </div>
      </div>

      <div className="site-container flash-deals__inner">
        <SectionHeading
          eyebrow="ARTISAN VAULT RELEASE • LIMITED QUANTITY"
          titlePart1="Guild"
          italicWord="Flash"
          titlePart2="Commissions"
          subtitle="Direct-from-kiln seasonal reductions on ready-to-dispatch Burmese Teak & Smart Bespoke pieces."
          dark
          rightSlot={<CountdownTimer hoursOffset={9} label="BATCH CLOSES IN" />}
        />

        <div className="flash-deals__grid">
          {dealProducts.map((product) => (
            <div key={product.id} className="flash-deals__card-wrap">
              <div className="flash-deals__stock-bar">
                <span>Only {product.stockCount} Left in Kanpur Vault</span>
                <div className="flash-deals__progress">
                  <div
                    className="flash-deals__progress-fill"
                    style={{
                      width: `${Math.min(92, 100 - product.stockCount * 8)}%`,
                    }}
                  />
                </div>
              </div>
              <ProductCard product={product} dark />
            </div>
          ))}
        </div>
      </div>

      <WoodDivider variant="dovetail" flip dark />
    </section>
  );
}
