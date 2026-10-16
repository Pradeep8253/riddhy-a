'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import ProductCard from '@/components/ProductCard/ProductCard';
import { products } from '@/data/products';
import './BestsellerTabs.css';

const TABS = [
  { id: 'all', label: 'All Flagship Pieces' },
  { id: 'furniture', label: 'Furniture (Sofa • Bed • Almira • Dining • Chair)' },
  { id: 'appliances', label: 'Appliances (Fridge • AC • WM • Cooler • Oven)' },
  { id: 'marriage', label: 'Marriage Sets (₹1.5L–₹3L)' },
];

export default function BestsellerTabs() {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = useMemo(() => {
    if (activeTab === 'furniture') {
      return products.filter((p) =>
        ['sofa', 'beds', 'almira', 'dining-table', 'chair'].includes(p.category)
      );
    }
    if (activeTab === 'appliances') {
      return products.filter((p) => p.category === 'home-appliances');
    }
    if (activeTab === 'marriage') {
      return products.filter((p) => p.category === 'marriage-packages');
    }
    return products;
  }, [activeTab]);

  const featuredProduct = filtered[0] || products[0];
  const gridProducts = filtered.slice(1, 5);

  return (
    <section className="bestseller-tabs texture-paper">
      <div className="site-container bestseller-tabs__inner">
        <SectionHeading
          eyebrow="PATRON FAVORITES & TROUSSEAU PICKS"
          titlePart1="Most Loved"
          italicWord="Craft"
          titlePart2="& Smart Appliances"
          subtitle="Filter seamlessly between our kiln-dried Solid Wood Furniture (Sofas, Beds, Almirahs, Dining Sets, Chairs), 5-Star Home Appliances (Fridge, AC, Washing Machine, Cooler, Oven), and Complete Marriage Packages."
          rightSlot={
            <div className="bestseller-tabs__switcher" role="tablist">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.id)}
                    className={`bestseller-tabs__tab ${
                      isActive ? 'bestseller-tabs__tab--active' : ''
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="bestseller-tab-pill"
                        className="bestseller-tabs__underline"
                        transition={{
                          type: 'spring',
                          stiffness: 360,
                          damping: 30,
                        }}
                      />
                    )}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          }
        />

        <div className="bestseller-tabs__bento">
          <div className="bestseller-tabs__featured-slot">
            <ProductCard product={featuredProduct} featured />
          </div>

          <div className="bestseller-tabs__compact-grid">
            {gridProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
