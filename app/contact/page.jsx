'use client';

import React, { useState } from 'react';
import ContactHero from './sections/ContactHero/ContactHero';
import ContactFormBlock from './sections/ContactFormBlock/ContactFormBlock';
import ContactInfoCards from './sections/ContactInfoCards/ContactInfoCards';
import MapEmbed from './sections/MapEmbed/MapEmbed';
import StoreLocator from './sections/StoreLocator/StoreLocator';
import FaqAccordion from './sections/FaqAccordion/FaqAccordion';
import SocialCTA from './sections/SocialCTA/SocialCTA';
import { stores } from '@/data/stores';

export default function ContactPage() {
  const [selectedStore, setSelectedStore] = useState(stores[0]);

  return (
    <div className="texture-paper" style={{ paddingBottom: '4.5rem' }}>
      <ContactHero />

      <div className="site-container" style={{ paddingTop: '2.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            alignItems: 'start',
          }}
        >
          <ContactFormBlock />
          <div>
            <ContactInfoCards />
            <MapEmbed activeStore={selectedStore} />
          </div>
        </div>

        <StoreLocator
          selectedStoreId={selectedStore?.id}
          onSelectStore={setSelectedStore}
        />
        <FaqAccordion />
        <SocialCTA />
      </div>
    </div>
  );
}
