'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Compass, ShoppingBag, Heart, User } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';
import './MobileBottomNav.css';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { items: cartItems, openCart } = useCartStore();
  const { items: wishlistItems } = useWishlistStore();

  const cartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);
  const wishCount = wishlistItems.length;

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile Bottom Navigation">
      <Link
        href="/"
        className={`mobile-bottom-nav__item ${
          pathname === '/' ? 'mobile-bottom-nav__item--active' : ''
        }`}
      >
        <Home size={19} />
        <span>Home</span>
      </Link>

      <Link
        href="/shop"
        className={`mobile-bottom-nav__item ${
          pathname.startsWith('/shop') ? 'mobile-bottom-nav__item--active' : ''
        }`}
      >
        <Compass size={19} />
        <span>Shop</span>
      </Link>

      <button
        type="button"
        onClick={openCart}
        className="mobile-bottom-nav__item mobile-bottom-nav__item--cart"
      >
        <div className="mobile-bottom-nav__cart-orb">
          <ShoppingBag size={19} />
          {cartCount > 0 && (
            <span className="mobile-bottom-nav__badge">{cartCount}</span>
          )}
        </div>
        <span>Cart</span>
      </button>

      <Link
        href="/wishlist"
        className={`mobile-bottom-nav__item ${
          pathname === '/wishlist' ? 'mobile-bottom-nav__item--active' : ''
        }`}
      >
        <div className="mobile-bottom-nav__icon-wrap">
          <Heart size={19} />
          {wishCount > 0 && (
            <span className="mobile-bottom-nav__badge">{wishCount}</span>
          )}
        </div>
        <span>Wishlist</span>
      </Link>

      <Link
        href="/account"
        className={`mobile-bottom-nav__item ${
          pathname === '/account' ? 'mobile-bottom-nav__item--active' : ''
        }`}
      >
        <User size={19} />
        <span>Account</span>
      </Link>
    </nav>
  );
}
