'use client';

import React from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';
import './AddressBook.css';

const SAVED_ADDRESSES = [
  {
    id: 'addr-1',
    type: 'Primary Villa Residence',
    name: 'Aarav Singhania',
    line: 'Bungalow 14, Tilak Nagar, Civil Lines, Kanpur, Uttar Pradesh - 208001',
    phone: '+91 98390 44210',
    default: true,
  },
  {
    id: 'addr-2',
    type: 'Architect Studio / Farmhouse',
    name: 'Aarav Singhania',
    line: 'Plot 88, Sultanpur MG Road, New Delhi - 110030',
    phone: '+91 98112 77890',
    default: false,
  },
];

export default function AddressBook() {
  return (
    <div className="address-book">
      <h3>Saved White-Glove Delivery Residences</h3>
      <div className="address-book__grid">
        {SAVED_ADDRESSES.map((a) => (
          <div key={a.id} className="address-book__card">
            <div className="address-book__top">
              <span className="address-book__type">
                <MapPin size={14} /> {a.type}
              </span>
              {a.default && (
                <span className="address-book__default">
                  <CheckCircle2 size={13} /> Default
                </span>
              )}
            </div>
            <h4>{a.name}</h4>
            <p>{a.line}</p>
            <small>{a.phone}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
