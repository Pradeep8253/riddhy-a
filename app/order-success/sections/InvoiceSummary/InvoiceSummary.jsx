'use client';

import React from 'react';
import Link from 'next/link';
import { Printer, Truck, ShoppingBag, ShieldCheck } from 'lucide-react';
import { formatPrice } from '@/lib/formatPrice';
import './InvoiceSummary.css';

export default function InvoiceSummary({ order }) {
  return (
    <div className="invoice-summary">
      <div className="invoice-summary__header">
        <div>
          <span className="invoice-summary__gst">
            GSTIN: 09AABCR7482K1Z4 • OFFICIAL TAX INVOICE &amp; WARRANTY DEED
          </span>
          <h3>Order &amp; Payment Receipt</h3>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="btn-wood-outline invoice-summary__print-btn"
        >
          <Printer size={15} />
          <span>Print GST Invoice</span>
        </button>
      </div>

      <div className="invoice-summary__grid">
        <div>
          <span className="invoice-summary__label">Delivering To</span>
          <strong>{order?.customer?.fullName || 'Arjun Singhania'}</strong>
          <p>
            {order?.customer?.addressLine || 'Bungalow 14, Civil Lines'},{' '}
            {order?.customer?.city || 'Kanpur'} -{' '}
            {order?.customer?.pincode || '208001'}
          </p>
          <p>{order?.customer?.phone || '+91 98390 12345'}</p>
        </div>
        <div>
          <span className="invoice-summary__label">
            Payment &amp; Gateway Reference
          </span>
          <strong>
            Method: {(order?.paymentMethod || 'UPI').toUpperCase()}
          </strong>
          <p>Transaction ID: {order?.txnId || 'TXN-89421048'}</p>
          <p>Status: Paid &amp; Verified (18% GST Included)</p>
        </div>
      </div>

      {/* Itemized Order Table */}
      {order?.items && order.items.length > 0 && (
        <div className="invoice-summary__items">
          <span className="invoice-summary__label">
            Itemized Furniture &amp; Home Appliances Ordered
          </span>
          {order.items.map((item, idx) => (
            <div key={idx} className="invoice-summary__item-row">
              <div>
                <strong>{item.name}</strong>
                <small>
                  Qty: {item.quantity || 1} • Finish:{' '}
                  {item.selectedColor || 'Burmese Teak'}
                </small>
              </div>
              <span>{formatPrice(item.price * (item.quantity || 1))}</span>
            </div>
          ))}
        </div>
      )}

      <div className="invoice-summary__warranty-box">
        <ShieldCheck size={18} />
        <span>
          10-Year Solid Timber &amp; Brand Inverter Warranty Certificate
          automatically activated against Order ID{' '}
          <strong>{order?.orderId || 'RDY-2026-84920'}</strong>.
        </span>
      </div>

      <div className="invoice-summary__total-bar">
        <span>Total Amount Settled (Incl. 18% GST &amp; White-Glove Setup)</span>
        <strong>{formatPrice(order?.grandTotal || 78990)}</strong>
      </div>

      <div className="invoice-summary__actions">
        <Link href="/track-order" className="btn-wood-polish">
          <Truck size={16} />
          <span>Track Live Consignment</span>
        </Link>
        <Link href="/shop" className="btn-wood-outline">
          <ShoppingBag size={16} />
          <span>Continue Exploring Catalog</span>
        </Link>
      </div>
    </div>
  );
}
