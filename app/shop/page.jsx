'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { ShieldCheck, Truck, CreditCard, RefreshCw, Crown } from 'lucide-react';
import ShopHeroHeader from './sections/ShopHeroHeader/ShopHeroHeader';
import FilterSidebar from './sections/FilterSidebar/FilterSidebar';
import FilterChips from './sections/FilterChips/FilterChips';
import ProductToolbar from './sections/ProductToolbar/ProductToolbar';
import ProductGrid from './sections/ProductGrid/ProductGrid';
import Pagination from './sections/Pagination/Pagination';
import RecommendedCrossSell from './sections/RecommendedCrossSell/RecommendedCrossSell';
import { products } from '@/data/products';
import { marriagePackages } from '@/data/offers';
import { useFilterStore } from '@/store/useFilterStore';
import { formatPrice } from '@/lib/formatPrice';
import './ShopPage.css';

const quickDepartments = [
  { label: 'All Collections', cat: 'all', sub: 'all' },
  { label: '🪑 Sofa Sets', cat: 'sofa', sub: 'all' },
  { label: '🛏️ King & Hydraulic Beds', cat: 'beds', sub: 'all' },
  { label: '🚪 Bridal Almirahs', cat: 'almira', sub: 'all' },
  { label: '🍽️ Dining Tables', cat: 'dining-table', sub: 'all' },
  { label: '💺 Lounge & Office Chairs', cat: 'chair', sub: 'all' },
  { label: '❄️ Refrigerators (Fridge)', cat: 'home-appliances', sub: 'Fridge' },
  { label: '🌬️ Inverter Split ACs', cat: 'home-appliances', sub: 'AC' },
  { label: '🫧 Washing Machines', cat: 'home-appliances', sub: 'Washing Machine' },
  { label: '💨 Air Coolers', cat: 'home-appliances', sub: 'Cooler' },
  { label: '🔥 Microwave Ovens', cat: 'home-appliances', sub: 'Oven' },
  { label: '💍 Marriage Packages (₹1.5L–₹3L)', cat: 'marriage-packages', sub: 'all' },
];

export default function ShopPage() {
  const {
    searchQuery,
    category,
    selectedSubType,
    priceRange,
    brands,
    materials,
    minRating,
    inStockOnly,
    sortBy,
    viewMode,
    currentPage,
    itemsPerPage,
    setCategory,
    setSubType,
    setPage,
  } = useFilterStore();

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (category !== 'all') {
      list = list.filter((p) => p.category === category);
    }
    if (selectedSubType && selectedSubType !== 'all') {
      list = list.filter((p) => p.subType === selectedSubType);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.woodType.toLowerCase().includes(q) ||
          (p.subType && p.subType.toLowerCase().includes(q))
      );
    }
    list = list.filter((p) => p.price <= priceRange[1]);

    if (brands.length > 0) {
      list = list.filter((p) => brands.includes(p.brand));
    }
    if (materials.length > 0) {
      list = list.filter((p) =>
        materials.some((m) =>
          p.woodType.toLowerCase().includes(m.split(' ')[0].toLowerCase())
        )
      );
    }
    if (minRating > 0) {
      list = list.filter((p) => p.rating >= minRating);
    }
    if (inStockOnly) {
      list = list.filter((p) => p.inStock);
    }

    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') list.sort((a, b) => b.rating - a.rating);
    if (sortBy === 'discount')
      list.sort((a, b) => b.discountPercent - a.discountPercent);

    return list;
  }, [
    searchQuery,
    category,
    selectedSubType,
    priceRange,
    brands,
    materials,
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

  const handleQuickFilter = (cat, sub) => {
    setCategory(cat);
    setSubType(sub);
  };

  return (
    <div className="shop-page">
      {/* Section 1: Collection Hero */}
      <ShopHeroHeader />

      {/* Section 2: Quick Furniture & Home Appliance Department Switcher */}
      <section className="shop-page__quick-bar">
        <div className="site-container">
          <div className="shop-page__quick-header">
            <span>QUICK FILTER BY FURNITURE &amp; APPLIANCE TYPE:</span>
            <Link href="/offers">
              View All 3 Marriage Packages (₹1.5L • ₹2.5L • ₹3.0L) →
            </Link>
          </div>
          <div className="shop-page__quick-pills">
            {quickDepartments.map((dept) => {
              const isActive =
                category === dept.cat && selectedSubType === dept.sub;
              return (
                <button
                  key={dept.label}
                  type="button"
                  onClick={() => handleQuickFilter(dept.cat, dept.sub)}
                  className={`shop-page__quick-pill ${
                    isActive ? 'shop-page__quick-pill--active' : ''
                  }`}
                >
                  {dept.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Filter Sidebar + Active Filter Chips + Toolbar + Product Grid + Pagination */}
      <div className="site-container shop-page__layout">
        <FilterSidebar />
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

      {/* Section 4: Marriage Packages Spotlight (₹1.5L, ₹2.5L, ₹3.0L) */}
      <section className="shop-page__marriage-strip texture-wood-dark">
        <div className="site-container">
          <div className="shop-page__marriage-head">
            <div>
              <span className="shop-page__marriage-eyebrow">
                <Crown size={14} /> COMPLETE WEDDING TROUSSEAU BUNDLES
              </span>
              <h2>All-In-One Marriage Packages: Furniture + Home Appliances</h2>
              <p>
                Includes Solid Wood Bed, Bridal Almira, Sofa Set, Dining Table +
                Fridge, Washing Machine, AC, Cooler, Oven &amp; Smart LED TV.
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
                <p>
                  {pkg.itemCount} Items Included ({pkg.furnitureItems.length}{' '}
                  Furniture + {pkg.applianceItems.length} Appliances)
                </p>
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

      {/* Section 5: Timber & Inverter Buying Assurance Strip */}
      <section className="shop-page__assurance">
        <div className="site-container shop-page__assurance-grid">
          <div className="shop-page__assurance-card">
            <ShieldCheck size={24} />
            <div>
              <h4>10-Year Timber &amp; Inverter Warranty</h4>
              <p>
                Kiln-dried Burmese Teak &amp; Sheesham plus brand-authorized
                10–20 year compressor warranties on Fridge, AC &amp; Washers.
              </p>
            </div>
          </div>
          <div className="shop-page__assurance-card">
            <Truck size={24} />
            <div>
              <h4>White-Glove Assembly &amp; Demo</h4>
              <p>
                Free room-of-choice furniture assembly and brand-engineer
                installation for Split ACs, Washing Machines &amp; Smart TVs.
              </p>
            </div>
          </div>
          <div className="shop-page__assurance-card">
            <CreditCard size={24} />
            <div>
              <h4>0% No-Cost EMI up to 24 Months</h4>
              <p>
                Instant approval on HDFC, ICICI, SBI, Axis &amp; Bajaj Finserv
                cards across individual items and ₹1.5L–₹3L Marriage Packages.
              </p>
            </div>
          </div>
          <div className="shop-page__assurance-card">
            <RefreshCw size={24} />
            <div>
              <h4>Up to ₹30,000 Old Exchange Bonus</h4>
              <p>
                Trade in your old wooden almirah, bed, refrigerator, or washing
                machine for an instant discount at delivery.
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
