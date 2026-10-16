'use client';

import React, { useState } from 'react';
import { Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import './NewsletterCTA.css';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }
    setSubmitted(true);
    toast.success('Welcome to The Riddhy Patron Guild! Sent ₹5,000 voucher to your inbox.');
    setEmail('');
  };

  return (
    <section className="newsletter-cta texture-wood-dark">
      <div className="site-container newsletter-cta__inner">
        <div className="newsletter-cta__plaque">
          <div className="newsletter-cta__left">
            <span className="newsletter-cta__eyebrow">
              <Sparkles size={14} /> PRIVATE PATRON DISPATCH &amp; LOOKBOOK
            </span>
            <h2 className="newsletter-cta__title">
              Join the <em>Engraved</em> Timber Guild &amp; Unlock ₹5,000 Off
            </h2>
            <p className="newsletter-cta__desc">
              Receive early invitations to our single-slab Kumaon timber auctions,
              2026 Bridal Trousseau lookbooks, and a complimentary ₹5,000 welcome
              privilege code.
            </p>
          </div>

          <div className="newsletter-cta__right">
            <form onSubmit={handleSubmit} className="newsletter-cta__form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your royal patron email..."
                className="newsletter-cta__input"
                required
              />
              <button type="submit" className="btn-wood-polish newsletter-cta__btn">
                <span>Claim ₹5,000 Guild Key</span>
                <Send size={16} />
              </button>

              {submitted && (
                <div className="newsletter-cta__sawdust" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              )}
            </form>

            {submitted ? (
              <p className="newsletter-cta__success">
                <CheckCircle2 size={15} /> Privilege code <strong>ROYAL5000</strong>{' '}
                unlocked! Apply at checkout.
              </p>
            ) : (
              <p className="newsletter-cta__note">
                Zero spam • Unsubscribe anytime • Instant code delivery
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
