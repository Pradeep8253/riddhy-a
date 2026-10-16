import React from 'react';
import HeroBanner from './sections/home/HeroBanner/HeroBanner';
import ShopByCategory from './sections/home/ShopByCategory/ShopByCategory';
import BestsellerTabs from './sections/home/BestsellerTabs/BestsellerTabs';
import HomeAppliancesStrip from './sections/HomeAppliancesStrip/HomeAppliancesStrip';
import ComboBundles from './offers/sections/ComboBundles/ComboBundles';
import PromoBannerSplit from './sections/home/PromoBannerSplit/PromoBannerSplit';
import FlashDeals from './sections/home/FlashDeals/FlashDeals';
import WhyChooseUs from './sections/home/WhyChooseUs/WhyChooseUs';
import RoomInspirationGallery from './sections/home/RoomInspirationGallery/RoomInspirationGallery';
import Testimonials from './sections/home/Testimonials/Testimonials';
import NewsletterCTA from './sections/home/NewsletterCTA/NewsletterCTA';

export default function HomePage() {
  return (
    <div className="home-page">
      {/* 1. Hero Banner (3 Slides: Furniture, Marriage Packages ₹1.5L–₹3L, Home Appliances) */}
      <HeroBanner />
      {/* 2. Shop by Category (Sofa, Beds, Almira, Dining Table, Chair, Home Appliances, Marriage Packages) */}
      <ShopByCategory />
      {/* 3. Bestseller Tabs (All, Furniture, Appliances, Marriage Packages) */}
      <BestsellerTabs />
      {/* 4. 5-Star Home Appliances Showcase (Fridge, AC, Washing Machine, Cooler, Oven, Smart TV) */}
      <HomeAppliancesStrip />
      {/* 5. Complete Marriage Packages (₹1.5 Lakhs • ₹2.5 Lakhs • ₹3.0 Lakhs) */}
      <ComboBundles showCalculator={false} />
      {/* 6. Promotional Split Banners */}
      <PromoBannerSplit />
      {/* 7. Flash Deals Countdown */}
      <FlashDeals />
      {/* 8. Why Choose Riddhy Craft & Appliances */}
      <WhyChooseUs />
      {/* 9. Interactive Shop-the-Room Inspiration Gallery */}
      <RoomInspirationGallery />
      {/* 10. Verified Patron Testimonials */}
      <Testimonials />
      {/* 11. Guild Newsletter Subscription */}
      <NewsletterCTA />
    </div>
  );
}
