'use client';

import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import { stores } from '@/data/stores';
import './StoreLocator.css';

export default function StoreLocator({ onSelectStore, selectedStoreId }) {
  return (
    <section className="store-locator">
      <SectionHeading
        eyebrow="EXPERIENCE BURMESE TEAK IN PERSON"
        titlePart1="Our Flagship"
        italicWord="Showroom"
        titlePart2="Palaces"
      />

      <div className="store-locator__grid">
        {stores.map((st) => {
          const active = selectedStoreId === st.id;
          return (
            <article
              key={st.id}
              onClick={() => onSelectStore && onSelectStore(st)}
              className={`store-locator__card ${
                active ? 'store-locator__card--active' : ''
              }`}
            >
              <div className="store-locator__top">
                <span className="store-locator__badge">{st.badge}</span>
                <span className="store-locator__size">{st.size}</span>
              </div>

              <h3>{st.city}</h3>
              <h4>{st.name}</h4>

              <div className="store-locator__meta">
                <span>
                  <MapPin size={14} /> {st.address}
                </span>
                <span>
                  <Phone size={14} /> {st.phone}
                </span>
                <span>
                  <Clock size={14} /> {st.hours}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
