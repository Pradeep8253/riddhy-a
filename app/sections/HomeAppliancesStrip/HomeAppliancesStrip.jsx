'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Snowflake, Wind, Sparkles, Flame, Tv, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import ProductCard from '@/components/ProductCard/ProductCard';
import { products } from '@/data/products';
import './HomeAppliancesStrip.css';

const applianceCategories = [
  { id: 'All', label: 'All Appliances', icon: Sparkles },
  { id: 'Fridge', label: 'Refrigerators (Fridge)', icon: Snowflake },
  { id: 'AC', label: 'Inverter Split ACs', icon: Wind },
  { id: 'Washing Machine', label: 'Washing Machines', icon: Sparkles },
  { id: 'Cooler', label: 'Desert & Tower Coolers', icon: Wind },
  { id: 'Oven', label: 'Convection & Air-Fry Ovens', icon: Flame },
  { id: 'Smart TV', label: '4K QLED Smart TVs', icon: Tv },
];

export default function HomeAppliancesStrip() {
  const [selectedType, setSelectedType] = useState('All');

  const applianceProducts = products.filter(
    (p) =>
      p.category === 'home-appliances' &&
      (selectedType === 'All' || p.subType === selectedType)
  );

  return (
    <section className="appliances-strip">
      <div className="site-container">
        <SectionHeading
          eyebrow="5-STAR SMART HOME APPLIANCE GALLERY"
          titlePart1="Fridge, AC, Washing Machine,"
          italicWord="Cooler"
          titlePart2="& Convection Ovens"
          subtitle="Authorized flagship showroom for 5-Star Invertor Refrigerators, 55°C Heavy-Duty Split ACs, AI Direct-Drive Front & Top Load Washing Machines, 95L Honeycomb Desert Coolers, and Air-Fry Microwave Ovens."
          rightSlot={
            <Link href="/shop/home-appliances" className="btn-wood-outline">
              <span>View All Appliances</span>
              <ArrowRight size={15} />
            </Link>
          }
        />

        <div className="appliances-strip__pills">
          {applianceCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedType(cat.id)}
                className={`appliances-strip__pill ${
                  selectedType === cat.id
                    ? 'appliances-strip__pill--active'
                    : ''
                }`}
              >
                <Icon size={15} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        <div className="appliances-strip__grid">
          {applianceProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
