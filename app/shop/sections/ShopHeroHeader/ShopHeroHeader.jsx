'use client';

import React from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { categories } from '@/data/categories';
import { useFilterStore } from '@/store/useFilterStore';
import './ShopHeroHeader.css';

export default function ShopHeroHeader({ activeCategoryObj = null }) {
  const { category, setCategory } = useFilterStore();

  const currentCat =
    activeCategoryObj || categories.find((c) => c.slug === category) || null;

  return (
    <section className="shop-hero texture-wood-dark">
      <div className="site-container shop-hero__inner">
        <Breadcrumb
          dark
          items={
            currentCat
              ? [
                  { label: 'Collections', href: '/shop' },
                  { label: currentCat.name },
                ]
              : [{ label: 'All Heritage Collections' }]
          }
        />

        <div className="shop-hero__bento">
          <div className="shop-hero__copy">
            <span className="shop-hero__eyebrow">
              {currentCat
                ? `${currentCat.itemCount} ARTISAN DESIGNS • ${currentCat.discountText}`
                : '240+ KILN-SEASONED CREATIONS • 7 MASTER GUILDS'}
            </span>
            <h1 className="shop-hero__title">
              {currentCat ? (
                <>
                  {currentCat.name} <em>Collection</em>
                </>
              ) : (
                <>
                  The Complete <em>Heirloom</em> &amp; Bespoke Catalog
                </>
              )}
            </h1>
            <p className="shop-hero__desc">
              {currentCat
                ? currentCat.tagline
                : 'Filter by solid Burmese teak, Indian rosewood, Italian velvet, or smart appliance specification—every creation ships in a protective wooden crate with complimentary floor assembly.'}
            </p>
          </div>

          <div className="shop-hero__cat-pills">
            <Link
              href="/shop"
              onClick={() => setCategory('all')}
              className={`shop-hero__pill ${
                !currentCat && category === 'all' ? 'shop-hero__pill--active' : ''
              }`}
            >
              All Guilds
            </Link>
            {categories.map((cat) => {
              const isSelected =
                currentCat?.slug === cat.slug || category === cat.slug;
              return (
                <Link
                  key={cat.id}
                  href={`/shop/${cat.slug}`}
                  onClick={() => setCategory(cat.slug)}
                  className={`shop-hero__pill ${
                    isSelected ? 'shop-hero__pill--active' : ''
                  }`}
                >
                  {cat.shortName}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
