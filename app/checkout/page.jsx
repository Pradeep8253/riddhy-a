'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { ShieldCheck, Lock, CheckCircle2, X } from 'lucide-react';
import StepIndicator from './sections/StepIndicator/StepIndicator';
import AddressForm from './sections/AddressForm/AddressForm';
import PaymentTabs from './sections/PaymentTabs/PaymentTabs';
import OrderReviewSummary from './sections/OrderReviewSummary/OrderReviewSummary';
import { useCartStore } from '@/store/useCartStore';
import { formatPrice } from '@/lib/formatPrice';
import './CheckoutPage.css';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getGrandTotal, clearCart } = useCartStore();
  const [step, setStep] = useState(2);
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [gatewayOpen, setGatewayOpen] = useState(false);
  const [otpCode, setOtpCode] = useState('4829');
  const [authorizing, setAuthorizing] = useState(false);

  const [paymentDetails, setPaymentDetails] = useState({
    upiApp: 'Google Pay',
    upiId: 'arjun.singhania@okhdfcbank',
    cardNumber: '4532 7190 3842 8894',
    cardName: 'ARJUN SINGHANIA',
    cardExpiry: '08 / 29',
    emiBank: 'HDFC Bank',
    emiTenure: 12,
    netbankName: 'HDFC Bank NetBanking',
  });

  const [address, setAddress] = useState({
    fullName: 'Arjun Singhania',
    phone: '9839012345',
    email: 'arjun.singhania@guildmail.in',
    pincode: '208001',
    city: 'Kanpur',
    state: 'Uttar Pradesh',
    addressLine1: 'Bungalow 14, Mall Road, Civil Lines',
    addressLine: 'Bungalow 14, Mall Road, Civil Lines',
    landmark: 'Near Kanpur Club',
    addressType: 'Home',
  });

  const rawTotal = getGrandTotal ? getGrandTotal() : 0;
  const grandTotal = rawTotal > 0 ? rawTotal : 78990;

  const handleAddressSubmit = (data) => {
    setAddress({
      ...data,
      addressLine: data.addressLine1 || data.addressLine,
    });
    setStep(2);
    toast.success('White-Glove Delivery Residence confirmed!');
  };

  const handleOpenGateway = () => {
    setStep(3);
    setGatewayOpen(true);
  };

  const handleFinalizePayment = () => {
    setAuthorizing(true);
    const orderId = `RDY-2026-${Math.floor(10000 + Math.random() * 89999)}`;
    const txnId = `TXN-${Date.now().toString().slice(-8)}`;

    const savedOrder = {
      orderId,
      txnId,
      date: new Date().toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      address: {
        ...address,
        addressLine1: address.addressLine1 || address.addressLine,
      },
      customer: {
        ...address,
        addressLine: address.addressLine1 || address.addressLine,
      },
      paymentMethod: paymentMethod.toUpperCase(),
      paymentDetails,
      total: grandTotal,
      grandTotal,
      items:
        items.length > 0
          ? items
          : [
              {
                name: 'Maharaja Burmese Teak Chesterfield Sofa',
                price: 78990,
                quantity: 1,
                selectedColor: 'Royal Burmese Teak',
              },
            ],
    };

    if (typeof window !== 'undefined') {
      localStorage.setItem('riddhy-last-order', JSON.stringify(savedOrder));
    }

    setTimeout(() => {
      clearCart();
      toast.success(`Payment Authorized (${txnId})! Order ${orderId} Placed.`);
      router.push('/order-success');
    }, 650);
  };

  return (
    <div className="site-container checkout-page">
      <StepIndicator currentStep={step} />

      <div className="checkout-page__layout">
        <div className="checkout-page__steps">
          <AddressForm
            defaultValues={address}
            onSubmitAddress={handleAddressSubmit}
          />
          <PaymentTabs
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            grandTotal={grandTotal}
            paymentDetails={paymentDetails}
            setPaymentDetails={setPaymentDetails}
          />

          <button
            type="button"
            onClick={handleOpenGateway}
            className="btn-wood-polish checkout-page__place-btn"
          >
            <ShieldCheck size={18} />
            <span>
              Proceed to 256-Bit Payment Gateway ({formatPrice(grandTotal)})
            </span>
          </button>
        </div>

        <OrderReviewSummary address={address} />
      </div>

      {/* Interactive End-to-End Payment Gateway Modal */}
      {gatewayOpen && (
        <div className="checkout-gateway-backdrop">
          <div className="checkout-gateway-modal">
            <div className="checkout-gateway-modal__header texture-wood-dark">
              <div>
                <span className="checkout-gateway-modal__eyebrow">
                  <Lock size={12} /> RIDDHY PAY • 256-BIT RBI COMPLIANT GATEWAY
                </span>
                <h3>Authorize Payment of {formatPrice(grandTotal)}</h3>
              </div>
              <button
                type="button"
                onClick={() => setGatewayOpen(false)}
                className="checkout-gateway-modal__close"
                aria-label="Close Gateway"
              >
                <X size={18} />
              </button>
            </div>

            <div className="checkout-gateway-modal__body">
              <div className="checkout-gateway-modal__summary">
                <div>
                  <span>Merchant</span>
                  <strong>Riddhy Furniture &amp; Home Appliances</strong>
                </div>
                <div>
                  <span>Payment Mode</span>
                  <strong>{paymentMethod.toUpperCase()}</strong>
                </div>
                <div>
                  <span>Delivering To</span>
                  <strong>
                    {address.fullName} ({address.city})
                  </strong>
                </div>
              </div>

              <div className="checkout-gateway-modal__otp-box">
                <label>
                  Enter 4-Digit Bank / UPI Security PIN (Demo Pre-Filled: 4829)
                </label>
                <div className="checkout-gateway-modal__otp-row">
                  <input
                    type="text"
                    maxLength={6}
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setOtpCode('4829')}
                    className="btn-wood-outline"
                  >
                    Auto-Fill OTP
                  </button>
                </div>
                <small>
                  <CheckCircle2 size={13} /> Instant GST Invoice &amp; 10-Year
                  Warranty Certificate will be generated on the next screen.
                </small>
              </div>

              <button
                type="button"
                disabled={authorizing}
                onClick={handleFinalizePayment}
                className="btn-wood-polish checkout-gateway-modal__pay-btn"
              >
                <ShieldCheck size={18} />
                <span>
                  {authorizing
                    ? 'Verifying with Bank & Generating GST Invoice...'
                    : `Confirm & Pay ${formatPrice(grandTotal)} Now`}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
