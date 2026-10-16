'use client';

import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  Truck,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import WoodDivider from '@/components/WoodDivider/WoodDivider';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="rf-footer texture-wood-dark">
      <WoodDivider variant="dovetail" />

      <div className="site-container rf-footer__inner">
        {/* Top Heritage Assurance Grid */}
        <div className="rf-footer__trust-grid">
          <div className="rf-footer__trust-item">
            <Award size={24} />
            <div>
              <h4>100% Kiln-Dried Solid Timber</h4>
              <p>
                Certified Burmese Teak, Sheesham &amp; Live-Edge Acacia tested to
                8% moisture content.
              </p>
            </div>
          </div>

          <div className="rf-footer__trust-item">
            <ShieldCheck size={24} />
            <div>
              <h4>10-Yr Timber &amp; 20-Yr Inverter Warranty</h4>
              <p>
                Termite-proof furniture guarantee plus brand-authorized
                warranties on Fridge, AC, WM, Cooler &amp; Oven.
              </p>
            </div>
          </div>

          <div className="rf-footer__trust-item">
            <Truck size={24} />
            <div>
              <h4>Marriage Packages (₹1.5L • ₹2.5L • ₹3.0L)</h4>
              <p>
                All-in-one wedding packages delivered in dedicated air-ride
                trucks with free white-glove setup across 42 cities.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Column Main Footer */}
        <div className="rf-footer__columns">
          {/* Column 1: Brand Story */}
          <div className="rf-footer__col">
            <Link href="/" className="rf-footer__logo">
              <span className="rf-footer__logo-word">RIDDHY</span>
              <span className="rf-footer__logo-tag">
                FURNITURE &amp; HOME APPLIANCES
              </span>
            </Link>
            <p className="rf-footer__bio">
              Crafted in our Jodhpur &amp; Kanpur timber workshops since 2010.
              We pair heirloom solid-wood Sofas, Beds, Bridal Almirahs, Dining
              Tables &amp; Chairs with 5-Star Home Appliances (Fridge, AC,
              Washing Machine, Cooler, Oven) and All-In-One Marriage Packages.
            </p>
            <div className="rf-footer__contact-list">
              <span>
                <MapPin size={15} /> 14/88 Mall Road, Civil Lines, Kanpur —
                208001
              </span>
              <span>
                <Phone size={15} /> +91 98390 12345 • Toll-Free: 1800-120-7433
              </span>
              <span>
                <Mail size={15} /> concierge@riddhyfurniture.in
              </span>
            </div>
          </div>

          {/* Column 2: Furniture & Appliances */}
          <div className="rf-footer__col">
            <h4 className="rf-footer__heading">Furniture &amp; Appliances</h4>
            <div className="rf-footer__links">
              <Link href="/shop/sofa">Sofas &amp; Chesterfield Loungers</Link>
              <Link href="/shop/beds">King, Queen &amp; Hydraulic Beds</Link>
              <Link href="/shop/almira">Bridal Almirahs &amp; Wardrobes</Link>
              <Link href="/shop/dining-table">6 &amp; 8 Seater Dining Sets</Link>
              <Link href="/shop/chair">Lounge, Dining &amp; Study Chairs</Link>
              <Link href="/shop/home-appliances">
                Fridge, AC, Washing Machine, Cooler &amp; Oven
              </Link>
            </div>
          </div>

          {/* Column 3: Marriage Packages & Pages */}
          <div className="rf-footer__col">
            <h4 className="rf-footer__heading">Marriage Packages &amp; Studio</h4>
            <div className="rf-footer__links">
              <Link href="/offers">₹1.50 Lakhs Silver Shagun Package</Link>
              <Link href="/offers">₹2.50 Lakhs Gold Royal Vivah Package</Link>
              <Link href="/offers">₹3.00 Lakhs Platinum Maharaja Package</Link>
              <Link href="/collections">All Collections &amp; Catalog</Link>
              <Link href="/about">Our Timber Craft &amp; Story</Link>
              <Link href="/contact">Showrooms &amp; Private Consultation</Link>
            </div>
          </div>

          {/* Column 4: Patron Concierge */}
          <div className="rf-footer__col">
            <h4 className="rf-footer__heading">Patron Concierge</h4>
            <div className="rf-footer__links">
              <Link href="/track-order">Live Consignment Tracker</Link>
              <Link href="/account">My Account &amp; GST Invoices</Link>
              <Link href="/wishlist">Saved Wishlist</Link>
              <Link href="/cart">Guild Shopping Cart</Link>
              <Link href="/checkout">256-Bit Encrypted Checkout</Link>
            </div>
            <div className="rf-footer__plaque">
              <Sparkles size={15} />
              <span>0% No-Cost EMI up to 24 Months Available</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Payment Strip */}
        <div className="rf-footer__bottom">
          <p className="rf-footer__copy">
            © {new Date().getFullYear()} Riddhy Furniture &amp; Home Appliances
            Pvt. Ltd. All Rights Reserved.
          </p>

          <div className="rf-footer__payments">
            <span>UPI / BHIM</span>
            <span>VISA / MASTERCARD</span>
            <span>RUPAY</span>
            <span>0% NO-COST EMI</span>
            <span>BAJAJ FINSERV</span>
          </div>

          <div className="rf-footer__socials">
            <Link href="/offers" className="rf-footer__social-pill">
              <span>Marriage Packages</span>
              <ArrowUpRight size={13} />
            </Link>
            <Link href="/contact" className="rf-footer__social-pill">
              <span>Book Showroom Visit</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
