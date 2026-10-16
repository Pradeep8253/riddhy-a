'use client';

import React from 'react';
import { Award } from 'lucide-react';
import { formatPrice } from '@/lib/formatPrice';
import './OrderSummary.css';

export default function OrderSummary({ order }) {
  const displayOrder = order || {
    orderId: 'RDF-849210',
    date: '15 Oct 2026',
    total: 78990,
    paymentMethod: 'Luxury Credit Card (0% EMI)',
    address: {
      fullName: 'Aarav Singhania',
      addressLine1: 'Bungalow 14, Tilak Nagar, Civil Lines',
      city: 'Kanpur',
      state: 'Uttar Pradesh',
      pincode: '208001',
    },
  };

  return (
    <div className="success-summary">
      <div className="success-summary__certificate">
        <Award size={22} />
        <div>
          <span>SERIALIZED TIMBER AUTHENTICITY CERTIFICATE</span>
          <h4>Order #{displayOrder.orderId}</h4>
        </div>
      </div>

      <div className="success-summary__grid">
        <div>
          <small>DATE SEALED</small>
          <strong>{displayOrder.date}</strong>
        </div>
        <div>
          <small>TOTAL INVESTMENT</small>
          <strong>{formatPrice(displayOrder.total || 78990)}</strong>
        </div>
        <div>
          <small>PAYMENT MODE</small>
          <strong>{displayOrder.paymentMethod}</strong>
        </div>
        <div>
          <small>DESTINATION</small>
          <strong>
            {displayOrder.address?.city || 'Kanpur'},{' '}
            {displayOrder.address?.pincode || '208001'}
          </strong>
        </div>
      </div>
    </div>
  );
}
