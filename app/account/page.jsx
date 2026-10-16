'use client';

import React, { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import ProfileCard from './sections/ProfileCard/ProfileCard';
import OrderHistory from './sections/OrderHistory/OrderHistory';
import AddressBook from './sections/AddressBook/AddressBook';
import AccountWishlistTab from './sections/AccountWishlistTab/AccountWishlistTab';
import './AccountPage.css';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="account-page texture-paper">
      <div className="site-container">
        <Breadcrumb items={[{ label: 'Patron Account & Warranty Vault' }]} />

        <SectionHeading
          eyebrow="PRIVATE PATRON DASHBOARD"
          titlePart1="Your Heirloom"
          italicWord="Vault"
          titlePart2="& Commissions"
        />

        <div className="account-page__grid">
          <div className="account-page__left">
            <ProfileCard />

            <div className="account-page__tabs">
              {[
                { id: 'orders', label: 'Commissions & Brass Plaques' },
                { id: 'addresses', label: 'Saved Delivery Residences' },
                { id: 'wishlist', label: 'Saved Guild Moodboard' },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveTab(t.id)}
                  className={`account-page__tab ${
                    activeTab === t.id ? 'account-page__tab--active' : ''
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            {activeTab === 'orders' && <OrderHistory />}
            {activeTab === 'addresses' && <AddressBook />}
            {activeTab === 'wishlist' && <AccountWishlistTab />}
          </div>
        </div>
      </div>
    </div>
  );
}
