'use client';

import React, { useEffect, useState } from 'react';
import AnimatedCheckmark from './sections/AnimatedCheckmark/AnimatedCheckmark';
import InvoiceSummary from './sections/InvoiceSummary/InvoiceSummary';
import OrderSummary from './sections/OrderSummary/OrderSummary';
import TrackingSteps from './sections/TrackingSteps/TrackingSteps';
import { useCartStore } from '@/store/useCartStore';
import './OrderSuccessPage.css';

export default function OrderSuccessPage() {
  const { lastOrder } = useCartStore();
  const [savedOrder, setSavedOrder] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('riddhy-last-order');
      if (raw) {
        setSavedOrder(JSON.parse(raw));
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const activeOrder = savedOrder || lastOrder;

  return (
    <div className="order-success-page texture-paper">
      <div className="site-container order-success-page__container">
        <div className="order-success-page__hero">
          <AnimatedCheckmark />
          <h1 className="order-success-page__title">
            Payment Authorized &amp; Commission Sealed!
          </h1>
          <p className="order-success-page__subtitle">
            Our Kanpur &amp; Jodhpur joinery and appliance concierge has
            generated your official GST Tax Invoice and 10-Year Warranty
            Certificate below.
          </p>
        </div>

        <InvoiceSummary order={activeOrder} />
        <OrderSummary order={activeOrder} />
        <TrackingSteps />
      </div>
    </div>
  );
}
