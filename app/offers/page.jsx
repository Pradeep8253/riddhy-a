import React from 'react';
import OffersHero from './sections/OffersHero/OffersHero';
import ComboBundles from './sections/ComboBundles/ComboBundles';
import PackageComparisonMatrix from './sections/PackageComparisonMatrix/PackageComparisonMatrix';
import CouponShowcase from './sections/CouponShowcase/CouponShowcase';
import CategoryOfferGrid from './sections/CategoryOfferGrid/CategoryOfferGrid';
import FlashSaleCountdown from './sections/FlashSaleCountdown/FlashSaleCountdown';

export default function OffersPage() {
  return (
    <div className="offers-page">
      {/* Section 1: Festive & Wedding Trousseau Hero */}
      <OffersHero />
      {/* Section 2: 3 Marriage Packages (₹1.5L, ₹2.5L, ₹3.0L) + Section 3: Interactive EMI & Exchange Calculator */}
      <ComboBundles showCalculator={true} />
      {/* Section 4: Side-by-Side Itemized Comparison Matrix */}
      <PackageComparisonMatrix />
      {/* Section 5: Interactive Scissor-Cut Coupons */}
      <CouponShowcase />
      {/* Section 6: Department Discount Grid (Sofas, Beds, Almirahs, Dining, Chairs, Appliances) */}
      <CategoryOfferGrid />
      {/* Section 7: Live Flash Countdown */}
      <FlashSaleCountdown />
    </div>
  );
}
