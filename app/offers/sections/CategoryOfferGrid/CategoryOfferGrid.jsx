'use client';

import React from 'react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import CategoryCard from '@/components/CategoryCard/CategoryCard';
import { categories } from '@/data/categories';
import './CategoryOfferGrid.css';

export default function CategoryOfferGrid() {
  return (
    <section className="category-offer-grid texture-paper">
      <div className="site-container">
        <SectionHeading
          eyebrow="DEPARTMENT MARKDOWNS"
          titlePart1="Savings by"
          italicWord="Department"
          titlePart2="& Appliance Suite"
          subtitle="Explore seasonal reductions across Sofas, King Hydraulic Beds, Bridal Almirahs, Live-Edge Dining Tables, Lounge Chairs, 5-Star Home Appliances, and All-In-One Marriage Packages."
        />

        <div className="category-offer-grid__bento">
          {categories.slice(0, 6).map((cat) => (
            <CategoryCard key={cat.id} category={cat} variant="orb" />
          ))}
        </div>
      </div>
    </section>
  );
}
