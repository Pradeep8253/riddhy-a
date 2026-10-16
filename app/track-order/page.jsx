'use client';

import React, { useState } from 'react';
import { Search, Truck, ShieldCheck } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import OrderSummary from '../order-success/sections/OrderSummary/OrderSummary';
import TrackingSteps from '../order-success/sections/TrackingSteps/TrackingSteps';
import { useCartStore } from '@/store/useCartStore';

export default function TrackOrderPage() {
  const { lastOrder } = useCartStore();
  const [orderInput, setOrderInput] = useState(
    lastOrder?.orderId || 'RDF-849210'
  );
  const [phoneInput, setPhoneInput] = useState('9839044210');
  const [searched, setSearched] = useState(true);

  const handleTrack = (e) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <div className="texture-paper" style={{ padding: '1.5rem 0 4.5rem' }}>
      <div className="site-container" style={{ maxWidth: '940px' }}>
        <Breadcrumb items={[{ label: 'White-Glove Order Tracker' }]} />

        <SectionHeading
          eyebrow="AIR-RIDE CRATE TELEMETRY"
          titlePart1="Track Your"
          italicWord="Heirloom"
          titlePart2="Shipment"
          subtitle="Enter your RDF Commission ID to inspect workshop seasoning, beeswax polishing, and white-glove delivery ETA."
        />

        <form
          onSubmit={handleTrack}
          style={{
            padding: '1.35rem',
            background: 'var(--wood-dark)',
            border: '2px solid var(--primary)',
            borderRadius: 'var(--radius-md)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '0.85rem',
            marginBottom: '1.75rem',
          }}
        >
          <input
            type="text"
            value={orderInput}
            onChange={(e) => setOrderInput(e.target.value)}
            placeholder="Order ID (e.g. RDF-849210)"
            style={{
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid var(--primary)',
              background: 'var(--surface)',
              fontFamily: 'var(--font-mono-price)',
            }}
            required
          />
          <input
            type="tel"
            value={phoneInput}
            onChange={(e) => setPhoneInput(e.target.value)}
            placeholder="Registered Mobile Number"
            style={{
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid var(--primary)',
              background: 'var(--surface)',
              fontFamily: 'var(--font-mono-price)',
            }}
            required
          />
          <button type="submit" className="btn-wood-polish">
            <Search size={16} />
            <span>Locate Wooden Crate</span>
          </button>
        </form>

        {searched && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <OrderSummary
              order={{
                ...(lastOrder || {}),
                orderId: orderInput,
              }}
            />
            <TrackingSteps />
          </div>
        )}
      </div>
    </div>
  );
}
