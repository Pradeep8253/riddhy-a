'use client';

import React from 'react';
import Link from 'next/link';
import { X, Crown, ArrowRight } from 'lucide-react';
import { categories } from '@/data/categories';
import './MobileMenu.css';

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu-backdrop" onClick={onClose}>
      <aside
        className="mobile-menu"
        onClick={(e) => e.stopPropagation()}
        aria-label="Mobile Navigation Drawer"
      >
        <div className="mobile-menu__head texture-wood-dark">
          <div>
            <strong>RIDDHY</strong>
            <span>FURNITURE &amp; HOME APPLIANCES</span>
          </div>
          <button type="button" onClick={onClose} aria-label="Close Menu">
            <X size={20} />
          </button>
        </div>

        <div className="mobile-menu__body">
          <Link
            href="/offers"
            onClick={onClose}
            className="mobile-menu__wedding-cta"
          >
            <Crown size={16} />
            <div>
              <strong>3 Marriage Packages (₹1.5L • ₹2.5L • ₹3.0L)</strong>
              <small>Furniture + Fridge, AC, WM, Cooler &amp; Oven</small>
            </div>
            <ArrowRight size={16} />
          </Link>

          <div className="mobile-menu__section">
            <span className="mobile-menu__label">Main Pages</span>
            <ul className="mobile-menu__links">
              <li>
                <Link href="/" onClick={onClose}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" onClick={onClose}>
                  All Collections &amp; Catalog
                </Link>
              </li>
              <li>
                <Link href="/offers" onClick={onClose}>
                  Offers &amp; Marriage Packages
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={onClose}>
                  About Our Craft &amp; Workshops
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={onClose}>
                  Showroom Locator &amp; Contact
                </Link>
              </li>
              <li>
                <Link href="/track-order" onClick={onClose}>
                  Track Live Order
                </Link>
              </li>
            </ul>
          </div>

          <div className="mobile-menu__section">
            <span className="mobile-menu__label">
              Shop by Furniture &amp; Appliance Department
            </span>
            <ul className="mobile-menu__links">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={
                      cat.slug === 'marriage-packages'
                        ? '/offers'
                        : `/shop/${cat.slug}`
                    }
                    onClick={onClose}
                  >
                    <span>{cat.name}</span>
                    <small>{cat.startingPrice}</small>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}
