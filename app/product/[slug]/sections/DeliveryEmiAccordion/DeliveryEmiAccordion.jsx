'use client';

import React, { useState } from 'react';
import { ChevronDown, CreditCard, Truck } from 'lucide-react';
import { bankOffers } from '@/data/offers';
import './DeliveryEmiAccordion.css';

export default function DeliveryEmiAccordion() {
  const [openKey, setOpenKey] = useState('emi');

  return (
    <div className="delivery-emi">
      <div className="delivery-emi__item">
        <button
          type="button"
          onClick={() => setOpenKey(openKey === 'emi' ? null : 'emi')}
          className="delivery-emi__trigger"
        >
          <div className="delivery-emi__trigger-left">
            <CreditCard size={17} />
            <span>0% No-Cost EMI &amp; Luxury Card Privileges (3 Offers)</span>
          </div>
          <ChevronDown
            size={17}
            className={openKey === 'emi' ? 'delivery-emi__chev--open' : ''}
          />
        </button>

        {openKey === 'emi' && (
          <div className="delivery-emi__body">
            {bankOffers.map((b) => (
              <div key={b.id} className="delivery-emi__offer">
                <div>
                  <strong>{b.bank}</strong>
                  <p>{b.offer}</p>
                </div>
                <span className="delivery-emi__code">{b.code}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="delivery-emi__item">
        <button
          type="button"
          onClick={() => setOpenKey(openKey === 'ship' ? null : 'ship')}
          className="delivery-emi__trigger"
        >
          <div className="delivery-emi__trigger-left">
            <Truck size={17} />
            <span>Wooden-Crated White-Glove Delivery &amp; Care Protocol</span>
          </div>
          <ChevronDown
            size={17}
            className={openKey === 'ship' ? 'delivery-emi__chev--open' : ''}
          />
        </button>

        {openKey === 'ship' && (
          <div className="delivery-emi__body">
            <p className="delivery-emi__ship-note">
              Every Riddhy creation is sealed in a moisture-barrier blanket inside
              a custom pinewood crate. Our 2-person artisan crew carries it to
              your room of choice, installs brass hardware, and polishes the
              timber with natural beeswax at ₹0 extra charge.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
