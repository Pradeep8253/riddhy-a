'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  PhoneCall,
  MapPin,
  ChevronDown,
  Truck,
  Crown,
} from 'lucide-react';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';
import { useFilterStore } from '@/store/useFilterStore';
import { formatPrice } from '@/lib/formatPrice';
import MegaMenu from './MegaMenu';
import './Navbar.css';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const searchRef = useRef(null);

  const { items: cartItems, openCart } = useCartStore();
  const { items: wishlistItems } = useWishlistStore();
  const { setSearchQuery } = useFilterStore();

  const totalCartQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const suggestions = searchInput.trim()
    ? products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            p.categoryLabel.toLowerCase().includes(searchInput.toLowerCase()) ||
            (p.subType &&
              p.subType.toLowerCase().includes(searchInput.toLowerCase()))
        )
        .slice(0, 5)
    : [];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    setSearchOpen(false);
    router.push('/shop');
  };

  return (
    <header className={`rf-navbar ${scrolled ? 'rf-navbar--scrolled' : ''}`}>
      {/* Top Announcement Ribbon */}
      <div className="rf-navbar__topbar">
        <div className="site-container rf-navbar__topbar-inner">
          <div className="rf-navbar__topbar-left">
            <span>
              <Crown size={13} />
              <strong>MARRIAGE PACKAGES:</strong> ₹1.5L • ₹2.5L • ₹3.0L (Bed,
              Almira, Sofa, Dining + Fridge, AC, Washing Machine, Cooler &amp;
              Oven)
            </span>
            <span className="rf-navbar__divider">|</span>
            <span>
              Code: <strong>VIVAH25000</strong>
            </span>
          </div>

          <div className="rf-navbar__topbar-right">
            <Link href="/track-order" className="rf-navbar__toplink">
              <Truck size={13} />
              <span>Track Order</span>
            </Link>
            <Link href="/contact" className="rf-navbar__toplink">
              <MapPin size={13} />
              <span>Kanpur • Lucknow • Jodhpur</span>
            </Link>
            <a href="tel:+919839012345" className="rf-navbar__toplink">
              <PhoneCall size={13} />
              <span>+91 98390 12345</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <div className="rf-navbar__main">
        <div className="site-container rf-navbar__main-inner">
          <button
            type="button"
            className="rf-navbar__hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open Navigation Menu"
          >
            <Menu size={21} />
          </button>

          {/* Brand Plaque */}
          <Link href="/" className="rf-navbar__brand">
            <span className="rf-navbar__logo-wordmark">RIDDHY</span>
            <span className="rf-navbar__logo-sub">
              FURNITURE &amp; HOME APPLIANCES
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="rf-navbar__nav" aria-label="Main Navigation">
            <Link
              href="/"
              className={`rf-navbar__link ${
                pathname === '/' ? 'rf-navbar__link--active' : ''
              }`}
            >
              Home
            </Link>

            <div
              onMouseEnter={() => setMegaOpen(true)}
              style={{ position: 'relative' }}
            >
              <Link
                href="/shop"
                className={`rf-navbar__link ${
                  pathname?.startsWith('/shop') || pathname === '/collections'
                    ? 'rf-navbar__link--active'
                    : ''
                }`}
              >
                <span>Collections</span>
                <ChevronDown size={14} />
              </Link>
            </div>

            <Link
              href="/shop/home-appliances"
              className={`rf-navbar__link ${
                pathname?.includes('/shop/home-appliances')
                  ? 'rf-navbar__link--active'
                  : ''
              }`}
            >
              Appliances
            </Link>

            <Link
              href="/offers"
              className={`rf-navbar__link rf-navbar__link--gold ${
                pathname === '/offers' ? 'rf-navbar__link--active' : ''
              }`}
            >
              💍 Marriage Packages
            </Link>

            <Link
              href="/about"
              className={`rf-navbar__link ${
                pathname === '/about' ? 'rf-navbar__link--active' : ''
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`rf-navbar__link ${
                pathname === '/contact' ? 'rf-navbar__link--active' : ''
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Actions + Live Search */}
          <div className="rf-navbar__actions">
            <div className="rf-navbar__search-wrap" ref={searchRef}>
              <form
                onSubmit={handleSearchSubmit}
                className="rf-navbar__search-form"
              >
                <Search size={15} className="rf-navbar__search-icon" />
                <input
                  type="text"
                  value={searchInput}
                  onFocus={() => setSearchOpen(true)}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                    setSearchOpen(true);
                  }}
                  placeholder="Sofa, Bed, Almira, Fridge, AC..."
                  className="rf-navbar__search-input"
                />
              </form>

              {searchOpen && (
                <div className="rf-navbar__search-dropdown">
                  {searchInput.trim() ? (
                    <>
                      <span className="rf-navbar__dropdown-heading">
                        Instant Catalog Matches
                      </span>
                      {suggestions.length > 0 ? (
                        <div className="rf-navbar__suggestions">
                          {suggestions.map((item) => (
                            <Link
                              key={item.id}
                              href={`/product/${item.slug}`}
                              onClick={() => setSearchOpen(false)}
                              className="rf-navbar__suggestion-item"
                            >
                              <img src={item.images?.[0]} alt={item.name} />
                              <div>
                                <h5>{item.name}</h5>
                                <span>{formatPrice(item.price)}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <p className="rf-navbar__no-results">
                          No exact match—press Enter to search all collections.
                        </p>
                      )}
                    </>
                  ) : (
                    <>
                      <span className="rf-navbar__dropdown-heading">
                        Popular Furniture &amp; Appliance Searches
                      </span>
                      <div className="rf-navbar__recent-tags">
                        {[
                          'Sofa',
                          'King Bed',
                          'Bridal Almira',
                          'Dining Table',
                          'Chair',
                          'Fridge',
                          'Split AC',
                          'Washing Machine',
                          'Cooler',
                          'Oven',
                          'Marriage Package',
                        ].map((tag) => (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => {
                              setSearchInput(tag);
                              setSearchQuery(tag);
                              setSearchOpen(false);
                              router.push('/shop');
                            }}
                            className="rf-navbar__recent-chip"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            <Link
              href="/wishlist"
              className="rf-navbar__icon-btn"
              aria-label="Wishlist"
            >
              <Heart size={18} />
              {wishlistItems.length > 0 && (
                <span className="rf-navbar__badge">{wishlistItems.length}</span>
              )}
            </Link>

            <Link
              href="/account"
              className="rf-navbar__icon-btn rf-navbar__icon-btn--hide-sm"
              aria-label="Account"
            >
              <User size={18} />
            </Link>

            <button
              type="button"
              onClick={openCart}
              className="rf-navbar__cart-btn"
              aria-label="Open Cart Drawer"
            >
              <ShoppingBag size={17} />
              <span className="rf-navbar__cart-label">Cart</span>
              <span className="rf-navbar__cart-count">{totalCartQty}</span>
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <MegaMenu isOpen={megaOpen} onClose={() => setMegaOpen(false)} />
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="rf-navbar__mobile-drawer">
          <div
            className="rf-navbar__mobile-backdrop"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="rf-navbar__mobile-panel texture-wood-dark">
            <div className="rf-navbar__mobile-head">
              <div>
                <div className="rf-navbar__logo-wordmark">RIDDHY</div>
                <div className="rf-navbar__logo-sub">
                  FURNITURE &amp; HOME APPLIANCES
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="rf-navbar__mobile-close"
                aria-label="Close Mobile Menu"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="rf-navbar__mobile-links">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <Link href="/shop" onClick={() => setMobileOpen(false)}>
                All Collections
              </Link>
              <Link href="/offers" onClick={() => setMobileOpen(false)}>
                💍 Marriage Packages (₹1.5L • ₹2.5L • ₹3.0L)
              </Link>
              <Link
                href="/shop/home-appliances"
                onClick={() => setMobileOpen(false)}
              >
                5-Star Home Appliances
              </Link>
              <Link href="/about" onClick={() => setMobileOpen(false)}>
                About Our Craft
              </Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Showrooms &amp; Contact
              </Link>
              <Link href="/track-order" onClick={() => setMobileOpen(false)}>
                Track Live Order
              </Link>
            </nav>

            <div className="rf-navbar__mobile-cats">
              <h4>Shop by Department</h4>
              <div className="rf-navbar__mobile-cat-grid">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/shop/${cat.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="rf-navbar__mobile-cat-chip"
                  >
                    {cat.shortName}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
