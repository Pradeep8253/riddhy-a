'use client';

import React from 'react';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import CartItemsList from './sections/CartItemsList/CartItemsList';
import CouponInput from './sections/CouponInput/CouponInput';
import OrderSummaryCard from './sections/OrderSummaryCard/OrderSummaryCard';
import RecommendedAddOns from './sections/RecommendedAddOns/RecommendedAddOns';
import './CartPage.css';

export default function CartPage() {
  return (
    <div className="cart-page texture-paper">
      <div className="site-container">
        <Breadcrumb items={[{ label: 'Your Guild Cart' }]} />

        <SectionHeading
          eyebrow="PRIVATE ATELIER RESERVATION"
          titlePart1="Review Your"
          italicWord="Heirloom"
          titlePart2="Cart"
        />

        <div className="cart-page__grid">
          <div>
            <CartItemsList />
          </div>

          <div className="cart-page__sidebar">
            <CouponInput />
            <OrderSummaryCard />
          </div>
        </div>

        <RecommendedAddOns />
      </div>
    </div>
  );
}
