'use client';

import React, { useState } from 'react';
import {
  Smartphone,
  CreditCard,
  Building2,
  Banknote,
  ShieldCheck,
  CalendarClock,
  CheckCircle2,
  QrCode,
  Lock,
} from 'lucide-react';
import { formatPrice } from '@/lib/formatPrice';
import './PaymentTabs.css';

const methods = [
  {
    id: 'upi',
    label: 'UPI / QR Instant Pay (0% Fee)',
    badge: 'INSTANT ₹1,500 CASHBACK',
    icon: Smartphone,
  },
  {
    id: 'card',
    label: 'Credit / Debit Card (Visa • MasterCard • RuPay)',
    badge: 'FLAT ₹5,000 INSTANT OFF',
    icon: CreditCard,
  },
  {
    id: 'emi',
    label: '0% No-Cost EMI (3 to 24 Months)',
    badge: '0% INTEREST',
    icon: CalendarClock,
  },
  {
    id: 'netbanking',
    label: 'NetBanking (All 45+ Indian Banks)',
    badge: 'SECURE PORTAL',
    icon: Building2,
  },
  {
    id: 'cod',
    label: 'Pay on Delivery (20% Token + 80% on Arrival)',
    badge: 'DOORSTEP POS / UPI',
    icon: Banknote,
  },
];

const emiBanks = [
  { id: 'HDFC Bank', rate: 0, cashback: '₹5,000 Instant Discount' },
  { id: 'ICICI Bank', rate: 0, cashback: '₹4,500 Instant Discount' },
  { id: 'SBI Card', rate: 0, cashback: '₹4,000 Instant Discount' },
  { id: 'Axis Bank', rate: 0, cashback: '₹4,000 Instant Discount' },
  { id: 'Bajaj Finserv No-Cost EMI', rate: 0, cashback: 'Zero Downpayment' },
];

export default function PaymentTabs({
  paymentMethod,
  setPaymentMethod,
  grandTotal = 78990,
  paymentDetails,
  setPaymentDetails,
}) {
  const [upiVerified, setUpiVerified] = useState(true);

  const updateDetail = (key, value) => {
    if (setPaymentDetails) {
      setPaymentDetails((prev) => ({ ...prev, [key]: value }));
    }
  };

  const handleVerifyUpi = () => {
    setUpiVerified(true);
  };

  return (
    <div className="payment-tabs">
      <div className="payment-tabs__head">
        <div>
          <h3 className="payment-tabs__title">
            03. End-to-End Encrypted Payment Gateway
          </h3>
          <p className="payment-tabs__sub">
            Powered by 256-Bit PCI-DSS Level 1 Gateway • Instant GST Invoice &amp;
            10-Year Warranty Registration
          </p>
        </div>
        <span className="payment-tabs__secure-pill">
          <Lock size={13} /> 100% Buyer Protection
        </span>
      </div>

      {/* Method Selector Tabs */}
      <div className="payment-tabs__list">
        {methods.map((m) => {
          const Icon = m.icon;
          const active = paymentMethod === m.id;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => setPaymentMethod(m.id)}
              className={`payment-tabs__item ${
                active ? 'payment-tabs__item--active' : ''
              }`}
            >
              <div className="payment-tabs__item-left">
                <Icon size={18} />
                <span>{m.label}</span>
              </div>
              <span className="payment-tabs__item-badge">{m.badge}</span>
            </button>
          );
        })}
      </div>

      {/* 1. UPI Payment Panel */}
      {paymentMethod === 'upi' && (
        <div className="payment-tabs__panel">
          <div className="payment-tabs__upi-grid">
            <div className="payment-tabs__upi-left">
              <div className="payment-tabs__apps">
                {['Google Pay', 'PhonePe', 'Paytm', 'BHIM UPI', 'CRED Pay'].map(
                  (app) => (
                    <button
                      key={app}
                      type="button"
                      onClick={() => updateDetail('upiApp', app)}
                      className={`payment-tabs__app-chip ${
                        paymentDetails?.upiApp === app
                          ? 'payment-tabs__app-chip--active'
                          : ''
                      }`}
                    >
                      {app}
                    </button>
                  )
                )}
              </div>

              <label className="payment-tabs__field-label">
                Enter Virtual Payment Address (UPI ID / VPA)
              </label>
              <div className="payment-tabs__upi-input-row">
                <input
                  type="text"
                  value={paymentDetails?.upiId || 'arjun.singhania@okhdfcbank'}
                  onChange={(e) => {
                    updateDetail('upiId', e.target.value);
                    setUpiVerified(false);
                  }}
                  placeholder="yourname@okaxis / @ybl / @icici"
                  className="payment-tabs__input"
                />
                <button
                  type="button"
                  onClick={handleVerifyUpi}
                  className="btn-wood-outline payment-tabs__verify-btn"
                >
                  Verify VPA
                </button>
              </div>

              {upiVerified && (
                <p className="payment-tabs__verified">
                  <CheckCircle2 size={15} />
                  <span>
                    Verified Banking Name: <strong>ARJUN SINGHANIA</strong> (NPCI
                    Live Linked)
                  </span>
                </p>
              )}
            </div>

            {/* Simulated Scan & Pay QR Box */}
            <div className="payment-tabs__qr-box">
              <div className="payment-tabs__qr-frame">
                <QrCode size={84} />
              </div>
              <div>
                <strong>Scan &amp; Pay {formatPrice(grandTotal)}</strong>
                <p>Works with GPay, PhonePe, Paytm &amp; BHIM</p>
                <span className="payment-tabs__qr-merchant">
                  Merchant: RIDDHY FURNITURE &amp; APPLIANCES PVT LTD
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Credit / Debit Card Panel */}
      {paymentMethod === 'card' && (
        <div className="payment-tabs__panel">
          <div className="payment-tabs__card-preview texture-wood-dark">
            <div className="payment-tabs__card-top">
              <span>RIDDHY GUILD PRIVILEGE • 3D SECURE</span>
              <strong>VISA / RUPAY PLATINUM</strong>
            </div>
            <div className="payment-tabs__card-number">
              {paymentDetails?.cardNumber || '4532 •••• •••• 8894'}
            </div>
            <div className="payment-tabs__card-bottom">
              <div>
                <small>CARDHOLDER NAME</small>
                <strong>
                  {paymentDetails?.cardName || 'ARJUN SINGHANIA'}
                </strong>
              </div>
              <div>
                <small>VALID THRU</small>
                <strong>{paymentDetails?.cardExpiry || '08/29'}</strong>
              </div>
            </div>
          </div>

          <div className="payment-tabs__card-grid">
            <input
              type="text"
              value={paymentDetails?.cardNumber || '4532 7190 3842 8894'}
              onChange={(e) => updateDetail('cardNumber', e.target.value)}
              placeholder="Card Number (XXXX XXXX XXXX XXXX)"
              className="payment-tabs__input payment-tabs__input--full"
            />
            <input
              type="text"
              value={paymentDetails?.cardName || 'ARJUN SINGHANIA'}
              onChange={(e) => updateDetail('cardName', e.target.value)}
              placeholder="Name on Card"
              className="payment-tabs__input payment-tabs__input--full"
            />
            <input
              type="text"
              value={paymentDetails?.cardExpiry || '08 / 29'}
              onChange={(e) => updateDetail('cardExpiry', e.target.value)}
              placeholder="MM / YY"
              className="payment-tabs__input"
            />
            <input
              type="password"
              defaultValue="849"
              placeholder="CVV (3 Digits)"
              maxLength={4}
              className="payment-tabs__input"
            />
          </div>
        </div>
      )}

      {/* 3. 0% No-Cost EMI Panel */}
      {paymentMethod === 'emi' && (
        <div className="payment-tabs__panel">
          <label className="payment-tabs__field-label">
            1. Select Issuing Bank / Finserv Partner:
          </label>
          <div className="payment-tabs__apps">
            {emiBanks.map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => updateDetail('emiBank', b.id)}
                className={`payment-tabs__app-chip ${
                  (paymentDetails?.emiBank || 'HDFC Bank') === b.id
                    ? 'payment-tabs__app-chip--active'
                    : ''
                }`}
              >
                {b.id} ({b.cashback})
              </button>
            ))}
          </div>

          <label className="payment-tabs__field-label">
            2. Choose 0% No-Cost EMI Tenure (Total: {formatPrice(grandTotal)}):
          </label>
          <div className="payment-tabs__emi-plans">
            {[3, 6, 9, 12, 18, 24].map((months) => {
              const monthlyAmount = Math.round(grandTotal / months);
              const isSelected = (paymentDetails?.emiTenure || 12) === months;
              return (
                <button
                  key={months}
                  type="button"
                  onClick={() => updateDetail('emiTenure', months)}
                  className={`payment-tabs__emi-card ${
                    isSelected ? 'payment-tabs__emi-card--active' : ''
                  }`}
                >
                  <div>
                    <strong>
                      {months} Months × {formatPrice(monthlyAmount)}/mo
                    </strong>
                    <span>0% Interest • Zero Processing Fee</span>
                  </div>
                  <span className="payment-tabs__emi-tag">NO-COST EMI</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. NetBanking Panel */}
      {paymentMethod === 'netbanking' && (
        <div className="payment-tabs__panel">
          <label className="payment-tabs__field-label">
            Select Corporate or Retail NetBanking Portal:
          </label>
          <div className="payment-tabs__apps">
            {[
              'HDFC Bank NetBanking',
              'ICICI Infinity',
              'State Bank of India (YONOSBI)',
              'Axis Bank',
              'Kotak Mahindra Bank',
              'Punjab National Bank',
            ].map((bank) => (
              <button
                key={bank}
                type="button"
                onClick={() => updateDetail('netbankName', bank)}
                className={`payment-tabs__app-chip ${
                  (paymentDetails?.netbankName || 'HDFC Bank NetBanking') ===
                  bank
                    ? 'payment-tabs__app-chip--active'
                    : ''
                }`}
              >
                {bank}
              </button>
            ))}
          </div>
          <p className="payment-tabs__cod-note">
            You will complete instant two-factor authorization in our simulated
            bank window when you click Authorize Payment.
          </p>
        </div>
      )}

      {/* 5. Pay on Delivery Panel */}
      {paymentMethod === 'cod' && (
        <div className="payment-tabs__panel">
          <div className="payment-tabs__cod-breakdown">
            <div>
              <span>20% Booking Token Payable Today:</span>
              <strong>{formatPrice(Math.round(grandTotal * 0.2))}</strong>
            </div>
            <div>
              <span>80% Balance Payable at Doorstep After Inspection:</span>
              <strong>{formatPrice(Math.round(grandTotal * 0.8))}</strong>
            </div>
          </div>
          <p className="payment-tabs__cod-note">
            Our white-glove delivery team carries wireless PineLabs Card POS
            machines and BharatQR so you can pay the remaining 80% after
            inspecting your furniture &amp; appliances inside your home.
          </p>
        </div>
      )}

      <div className="payment-tabs__trust">
        <ShieldCheck size={16} />
        <span>
          256-Bit SSL Encrypted • RBI Compliant Tokenization • Official GST
          Tax Invoice Issued Instantly
        </span>
      </div>
    </div>
  );
}
