'use client';

import React, { useState } from 'react';
import './DescriptionSpecsReviewsTabs.css';

export default function DescriptionSpecsReviewsTabs({ product }) {
  const [tab, setTab] = useState('specs');
  const specsEntries = Object.entries(product.specs || {});

  return (
    <section className="desc-specs-tabs">
      <div className="desc-specs-tabs__header" role="tablist">
        <button
          type="button"
          onClick={() => setTab('specs')}
          className={`desc-specs-tabs__btn ${
            tab === 'specs' ? 'desc-specs-tabs__btn--active' : ''
          }`}
        >
          Joinery &amp; Technical Specifications
        </button>
        <button
          type="button"
          onClick={() => setTab('story')}
          className={`desc-specs-tabs__btn ${
            tab === 'story' ? 'desc-specs-tabs__btn--active' : ''
          }`}
        >
          Artisan Provenance &amp; Story
        </button>
        <button
          type="button"
          onClick={() => setTab('care')}
          className={`desc-specs-tabs__btn ${
            tab === 'care' ? 'desc-specs-tabs__btn--active' : ''
          }`}
        >
          Timber Care &amp; Beeswax Ritual
        </button>
      </div>

      <div className="desc-specs-tabs__panel">
        {tab === 'specs' && (
          <div className="desc-specs-tabs__table">
            <div className="desc-specs-tabs__row">
              <span>Dimensions</span>
              <strong>{product.dimensions}</strong>
            </div>
            <div className="desc-specs-tabs__row">
              <span>Net Weight</span>
              <strong>{product.weight}</strong>
            </div>
            <div className="desc-specs-tabs__row">
              <span>Warranty Coverage</span>
              <strong>{product.warranty}</strong>
            </div>
            {specsEntries.map(([k, v]) => (
              <div key={k} className="desc-specs-tabs__row">
                <span>{k.replace(/([A-Z])/g, ' $1').trim()}</span>
                <strong>{v}</strong>
              </div>
            ))}
          </div>
        )}

        {tab === 'story' && (
          <div className="desc-specs-tabs__prose">
            <p className="drop-cap">{product.description}</p>
            <p>
              Every plank is selected from FSC-certified plantations and kiln-dried
              in our Kanpur solar chambers before our master joiners cut
              interlocking mortise-and-tenon joints by hand.
            </p>
          </div>
        )}

        {tab === 'care' && (
          <div className="desc-specs-tabs__prose">
            <p>
              1. Wipe weekly with a dry, lint-free organic cotton cloth following
              the direction of the wood grain.
            </p>
            <p>
              2. Every 12 months, apply the complimentary Riddhy Organic Beeswax
              &amp; Linseed balm included in your welcome crate to nourish the
              timber.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
