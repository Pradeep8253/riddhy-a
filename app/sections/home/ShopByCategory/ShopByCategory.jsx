'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import CategoryCard from '@/components/CategoryCard/CategoryCard';
import { categories } from '@/data/categories';
import './ShopByCategory.css';

export default function ShopByCategory() {
  const heroCategory = categories[0];
  const orbitingCategories = categories.slice(1, 7);

  return (
    <section className="shop-by-category texture-paper">
      <div className="site-container shop-by-category__inner">
        <SectionHeading
          eyebrow="ARCHITECTURAL CURATION • 7 MASTER GUILDS"
          titlePart1="Commission by"
          italicWord="Sanctuary"
          titlePart2="& Room"
          subtitle="Every guild merges kiln-seasoned timber with heirloom brass hardware and bespoke smart home engineering."
          rightSlot={
            <Link href="/shop" className="btn-wood-outline">
              <span>View All 240+ Creations</span>
              <ArrowRight size={16} />
            </Link>
          }
        />

        <div className="shop-by-category__bento">
          {/* 1 Large Hero Category Tile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="shop-by-category__hero-slot"
          >
            <CategoryCard category={heroCategory} variant="hero" />
          </motion.div>

          {/* 6 Orbiting Category Tiles */}
          <div className="shop-by-category__orbit-grid">
            {orbitingCategories.map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="shop-by-category__orbit-item"
              >
                <CategoryCard category={cat} variant="orb" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
