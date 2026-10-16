'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ShoppingBag,
  Check,
  Sparkles,
  ShieldCheck,
  Truck,
  Calculator,
  Crown,
} from 'lucide-react';
import { toast } from 'sonner';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import { marriagePackages } from '@/data/offers';
import { products } from '@/data/products';
import { useCartStore } from '@/store/useCartStore';
import { formatPrice } from '@/lib/formatPrice';
import './ComboBundles.css';

export default function ComboBundles({ showCalculator = true }) {
  const router = useRouter();
  const { addItem, openCart } = useCartStore();
  const [selectedWood, setSelectedWood] = useState('Royal Burmese Teak Finish');
  const [selectedTenure, setSelectedTenure] = useState(12);
  const [exchangeValue, setExchangeValue] = useState(0);

  const handleBookPackage = (pkg, isTokenOnly = false) => {
    const catalogPkg = products.find((p) =>
      p.sku?.toLowerCase().includes(pkg.id.replace('pkg-', ''))
    );

    const itemToAdd = catalogPkg || {
      id: pkg.id,
      slug: 'gold-royal-vivah-marriage-package-250k',
      name: isTokenOnly
        ? `${pkg.name} (Token Booking Reservation)`
        : `${pkg.name} (${pkg.itemCount} Items Complete Suite)`,
      price: isTokenOnly ? pkg.tokenAmount : pkg.bundlePrice,
      mrp: isTokenOnly ? pkg.tokenAmount : pkg.totalMrp,
      images: [pkg.image],
      warranty: pkg.warrantySummary,
    };

    const finalItem = isTokenOnly
      ? {
          ...itemToAdd,
          id: `${pkg.id}-token`,
          name: `${pkg.name} — Token Reservation (${pkg.priceLabel} Suite)`,
          price: pkg.tokenAmount,
          mrp: pkg.tokenAmount,
        }
      : itemToAdd;

    addItem(finalItem, 1, {
      color: selectedWood,
      material: `${pkg.itemCount} Complete Items (Furniture + Appliances)`,
    });

    toast.success(
      isTokenOnly
        ? `Added ${formatPrice(pkg.tokenAmount)} Token Booking for ${pkg.name}`
        : `Added ${pkg.name} (${pkg.priceLabel}) to your Guild Cart!`
    );

    if (isTokenOnly) {
      router.push('/checkout');
    } else {
      openCart();
    }
  };

  return (
    <section className="combo-bundles texture-paper" id="marriage-packages">
      <div className="site-container">
        <SectionHeading
          eyebrow="ALL-IN-ONE WEDDING TROUSSEAU • FURNITURE + HOME APPLIANCES"
          titlePart1="Royal"
          italicWord="Marriage"
          titlePart2="Packages (₹1.5L • ₹2.5L • ₹3.0L)"
          subtitle="Complete bedroom, living room & dining solid-wood furniture paired with 5-Star Refrigerator, Washing Machine, Split AC, Desert Cooler, Smart LED TV & Microwave Oven."
          rightSlot={
            <div className="combo-bundles__wood-picker">
              <span>Select Suite Finish:</span>
              <select
                value={selectedWood}
                onChange={(e) => setSelectedWood(e.target.value)}
              >
                <option value="Royal Burmese Teak Finish">
                  Royal Burmese Teak Finish
                </option>
                <option value="Smoked Dark Walnut & Gold">
                  Smoked Dark Walnut &amp; Gold
                </option>
                <option value="Honey Sheesham & Emerald Velvet">
                  Honey Sheesham &amp; Emerald Velvet
                </option>
              </select>
            </div>
          }
        />

        {/* 3 Marriage Package Tier Cards */}
        <div className="combo-bundles__grid">
          {marriagePackages.map((pkg) => (
            <article
              key={pkg.id}
              className={`combo-bundles__card ${
                pkg.featured ? 'combo-bundles__card--featured' : ''
              }`}
            >
              {pkg.featured && (
                <div className="combo-bundles__ribbon">
                  <Crown size={14} /> MOST BOOKED BY FAMILIES
                </div>
              )}

              <div className="combo-bundles__media">
                <img src={pkg.image} alt={pkg.name} />
                <span className="combo-bundles__tag">{pkg.tag}</span>
                <div className="combo-bundles__price-overlay">
                  <div>
                    <small>{pkg.tier}</small>
                    <h3>{pkg.priceLabel}</h3>
                  </div>
                  <div className="combo-bundles__count-badge">
                    <strong>{pkg.itemCount}</strong>
                    <span>ITEMS</span>
                  </div>
                </div>
              </div>

              <div className="combo-bundles__body">
                <h4 className="combo-bundles__title">{pkg.name}</h4>
                <p className="combo-bundles__sub">{pkg.subtitle}</p>

                <div className="combo-bundles__columns">
                  <div className="combo-bundles__list-group">
                    <span className="combo-bundles__group-title">
                      🪑 Solid Wood Furniture ({pkg.furnitureItems.length} Items)
                    </span>
                    <ul className="combo-bundles__list">
                      {pkg.furnitureItems.map((item, i) => (
                        <li key={i}>
                          <Check size={14} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="combo-bundles__list-group">
                    <span className="combo-bundles__group-title">
                      ❄️ Home Appliances Included ({pkg.applianceItems.length}{' '}
                      Items)
                    </span>
                    <ul className="combo-bundles__list">
                      {pkg.applianceItems.map((item, i) => (
                        <li key={i}>
                          <Sparkles size={13} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="combo-bundles__warranty-bar">
                  <ShieldCheck size={15} />
                  <span>{pkg.warrantySummary}</span>
                </div>

                <div className="combo-bundles__foot">
                  <div className="combo-bundles__prices">
                    <span>ALL-INCLUSIVE PACKAGE PRICE</span>
                    <strong>{formatPrice(pkg.bundlePrice)}</strong>
                    <s>Individual MRP: {formatPrice(pkg.totalMrp)}</s>
                    <small>
                      0% EMI from {formatPrice(pkg.emiPerMonth)}/mo • Free Truck
                      Delivery
                    </small>
                  </div>

                  <div className="combo-bundles__btn-stack">
                    <button
                      type="button"
                      onClick={() => handleBookPackage(pkg, false)}
                      className="btn-wood-polish combo-bundles__full-btn"
                    >
                      <ShoppingBag size={16} />
                      <span>Add {pkg.priceLabel} Package to Cart</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleBookPackage(pkg, true)}
                      className="btn-wood-outline combo-bundles__token-btn"
                    >
                      <span>
                        Book Wedding Date with {formatPrice(pkg.tokenAmount)}{' '}
                        Token
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Interactive EMI & Old Furniture Exchange Estimator */}
        {showCalculator && (
          <div className="combo-bundles__calculator texture-wood-dark">
            <div className="combo-bundles__calc-left">
              <span className="combo-bundles__calc-eyebrow">
                <Calculator size={14} /> WEDDING BUDGET &amp; EXCHANGE PLANNER
              </span>
              <h3>
                0% No-Cost EMI &amp; Old Furniture / Appliance Trade-In Calculator
              </h3>
              <p>
                Exchange your old almirah, bed, fridge, or cooler and combine it
                with up to 24-month 0% interest EMI on any Marriage Package.
              </p>

              <div className="combo-bundles__calc-controls">
                <div>
                  <label>Select EMI Tenure:</label>
                  <div className="combo-bundles__tenure-pills">
                    {[6, 12, 18, 24].map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setSelectedTenure(m)}
                        className={
                          selectedTenure === m
                            ? 'combo-bundles__tenure--active'
                            : ''
                        }
                      >
                        {m} Months (0% Interest)
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label>Old Furniture / Appliance Trade-In Bonus:</label>
                  <div className="combo-bundles__tenure-pills">
                    {[
                      { label: 'No Exchange', val: 0 },
                      { label: 'Old Fridge/WM (₹8,000)', val: 8000 },
                      { label: 'Old Bed + Almira (₹18,000)', val: 18000 },
                      { label: 'Full Old Room Set (₹30,000)', val: 30000 },
                    ].map((ex) => (
                      <button
                        key={ex.val}
                        type="button"
                        onClick={() => setExchangeValue(ex.val)}
                        className={
                          exchangeValue === ex.val
                            ? 'combo-bundles__tenure--active'
                            : ''
                        }
                      >
                        {ex.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="combo-bundles__calc-right">
              {marriagePackages.map((pkg) => {
                const netAfterExchange = Math.max(
                  0,
                  pkg.bundlePrice - exchangeValue
                );
                const monthly = Math.round(netAfterExchange / selectedTenure);
                return (
                  <div key={pkg.id} className="combo-bundles__calc-row">
                    <div>
                      <strong>{pkg.name}</strong>
                      <span>
                        Net Price: {formatPrice(netAfterExchange)} (after{' '}
                        {formatPrice(exchangeValue)} exchange)
                      </span>
                    </div>
                    <div className="combo-bundles__calc-emi">
                      <strong>{formatPrice(monthly)}/mo</strong>
                      <small>for {selectedTenure} months</small>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
