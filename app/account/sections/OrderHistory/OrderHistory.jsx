'use client';

import React from 'react';
import Link from 'next/link';
import { Truck, ShieldCheck } from 'lucide-react';
import { formatPrice } from '@/lib/formatPrice';
import './OrderHistory.css';

const ORDERS = [
  {
    id: 'RDF-849210',
    date: '15 Oct 2026',
    status: 'In Kiln Polishing & Crating',
    total: 78990,
    item: 'Maharaja Burmese Teak Velvet Sofa (Emerald Forest)',
    plaqueNo: 'BRASS-2026-0918',
  },
  {
    id: 'RDF-710482',
    date: '12 Aug 2026',
    status: 'Delivered & Installed',
    total: 104990,
    item: 'Kumaon Live-Edge Acacia 8-Seater Dining Table Set',
    plaqueNo: 'BRASS-2026-0442',
  },
  {
    id: 'RDF-609114',
    date: '04 Mar 2026',
    status: 'Delivered & Installed',
    total: 118990,
    item: 'Riddhy × Lumina 680L Bespoke Glass & Brass Refrigerator',
    plaqueNo: 'BRASS-2026-0109',
  },
];

export default function OrderHistory() {
  return (
    <div className="order-history">
      <h3>Commission &amp; Warranty Ledger</h3>

      <div className="order-history__list">
        {ORDERS.map((o) => (
          <article key={o.id} className="order-history__card">
            <div className="order-history__top">
              <div>
                <strong>Order #{o.id}</strong>
                <span> • {o.date}</span>
              </div>
              <span className="order-history__status">{o.status}</span>
            </div>

            <h4>{o.item}</h4>

            <div className="order-history__foot">
              <div className="order-history__meta">
                <span>
                  <ShieldCheck size={14} /> Plaque #{o.plaqueNo}
                </span>
                <strong>{formatPrice(o.total)}</strong>
              </div>

              <Link href="/track-order" className="btn-wood-outline">
                <Truck size={14} />
                <span>Track Crate</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
