'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { ShieldCheck, Truck, CreditCard, RefreshCw, Crown } from 'lucide-react';
import ShopHeroHeader from '../sections/ShopHeroHeader/ShopHeroHeader';
import FilterSidebar from '../sections/FilterSidebar/FilterSidebar';
import FilterChips from '../sections/FilterChips/FilterChips';
import ProductToolbar from '../sections/ProductToolbar/ProductToolbar';
import ProductGrid from '../sections/ProductGrid/ProductGrid';
import Pagination from '../sections/Pagination/Pagination';
import RecommendedCrossSell from '../sections/RecommendedCrossSell/RecommendedCrossSell';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import { marriagePackages } from '@/data/offers';
import { useFilterStore } from '@/store/useFilterStore';
import { formatPrice } from '@/lib/formatPrice';
import '../ShopPage.css';

export default function CategoryShopPage({ params }) {
  const categoryObj = categories.find((c) => c.slug === params.category);
  const {
    priceRange,
    selectedSubType,
    setSubType,
    minRating,
    inStockOnly,
    sortBy,
    viewMode,
    currentPage,
    itemsPerPage,
    setPage,
  } = useFilterStore();

  const filteredProducts = useMemo(() => {
    let list = products.filter((p) => p.category === params.category);
    if (selectedSubType && selectedSubType !== 'all') {
      list = list.filter((p) => p.subType === selectedSubType);
    }
    list = list.filter((p) => p.price <= priceRange[1]);
    if (minRating > 0) list = list.filter((p) => p.rating >= minRating);
    if (inStockOnly) list = list.filter((p) => p.inStock);

    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') list.sort((a, b) => b.rating - a.rating);
    if (sortBy === 'discount')
      list.sort((a, b) => b.discountPercent - a.discountPercent);

    return list;
  }, [
    params.category,
    selectedSubType,
    priceRange,
    minRating,
    inStockOnly,
    sortBy,
  ]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / itemsPerPage)
  );
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="shop-page">
      {/* Section 1: Category Hero */}
      <ShopHeroHeader activeCategoryObj={categoryObj} />

      {/* Section 2: Appliance Sub-Category Bar or Department Switcher */}
      <section className="shop-page__quick-bar">
        <div className="site-container">
          <div className="shop-page__quick-pills">
            {params.category === 'home-appliances'
              ? [
                  'all',
                  'Fridge',
                  'AC',
                  'Washing Machine',
                  'Cooler',
                  'Oven',
                  'Smart TV',
                ].map((sub) => (
                  <button
                    key={sub}
                    type="button"
                    onClick={() => setSubType(sub)}
                    className={`shop-page__quick-pill ${
                      selectedSubType === sub
                        ? 'shop-page__quick-pill--active'
                        : ''
                    }`}
                  >
                    {sub === 'all' ? 'All Home Appliances' : sub}
                  </button>
                ))
              : categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/shop/${cat.slug}`}
                    className={`shop-page__quick-pill ${
                      params.category === cat.slug
                        ? 'shop-page__quick-pill--active'
                        : ''
                    }`}
                  >
                    {cat.name}
                  </Link>
                ))}
          </div>
        </div>
      </section>

      {/* Section 3: Filter Sidebar + Toolbar + Active Tags + Grid + Pagination */}
      <div className="site-container shop-page__layout">
        <FilterSidebar lockedCategory={params.category} />
        <div>
          <ProductToolbar totalCount={filteredProducts.length} />
          <FilterChips />
          <ProductGrid products={paginatedProducts} viewMode={viewMode} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </div>

      {/* Section 4: Marriage Packages Spotlight */}
      <section className="shop-page__marriage-strip texture-wood-dark">
        <div className="site-container">
          <div className="shop-page__marriage-head">
            <div>
              <span className="shop-page__marriage-eyebrow">
                <Crown size={14} /> COMPLETE WEDDING TROUSSEAU BUNDLES
              </span>
              <h2>All-In-One Marriage Packages (₹1.5L • ₹2.5L • ₹3.0L)</h2>
              <p>
                Every package includes Solid Wood Bed, Bridal Almira, Sofa,
                Dining Table + Fridge, Washing Machine, AC, Cooler &amp; Oven.
              </p>
            </div>
            <Link href="/offers" className="btn-wood-polish">
              <span>Compare All 3 Packages</span>
            </Link>
          </div>

          <div className="shop-page__marriage-cards">
            {marriagePackages.map((pkg) => (
              <div key={pkg.id} className="shop-page__marriage-card">
                <span className="shop-page__marriage-tier">{pkg.tier}</span>
                <h3>
                  {pkg.name} ({pkg.priceLabel})
                </h3>
                <p>{pkg.itemCount} Complete Items Included</p>
                <div className="shop-page__marriage-price">
                  <strong>{formatPrice(pkg.bundlePrice)}</strong>
                  <s>{formatPrice(pkg.totalMrp)}</s>
                </div>
                <Link href="/offers" className="btn-wood-outline">
                  <span>View Itemized Checklist</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Buying Assurance Strip */}
      <section className="shop-page__assurance">
        <div className="site-container shop-page__assurance-grid">
          <div className="shop-page__assurance-card">
            <ShieldCheck size={24} />
            <div>
              <h4>10-Year Timber &amp; Inverter Warranty</h4>
              <p>
                Kiln-dried Burmese Teak &amp; Sheesham plus brand-authorized
                10–20 year compressor warranties.
              </p>
            </div>
          </div>
          <div className="shop-page__assurance-card">
            <Truck size={24} />
            <div>
              <h4>White-Glove Assembly &amp; Demo</h4>
              <p>
                Free room-of-choice furniture assembly and brand-engineer
                installation.
              </p>
            </div>
          </div>
          <div className="shop-page__assurance-card">
            <CreditCard size={24} />
            <div>
              <h4>0% No-Cost EMI up to 24 Months</h4>
              <p>
                Instant approval on HDFC, ICICI, SBI, Axis &amp; Bajaj Finserv
                cards.
              </p>
            </div>
          </div>
          <div className="shop-page__assurance-card">
            <RefreshCw size={24} />
            <div>
              <h4>Up to ₹30,000 Old Exchange Bonus</h4>
              <p>
                Trade in your old wooden almirah, bed, refrigerator, or washing
                machine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Recommended Cross-Sell */}
      <RecommendedCrossSell />
    </div>
  );
}
