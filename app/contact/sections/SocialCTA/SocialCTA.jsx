'use client';

import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import './SocialCTA.css';

export default function SocialCTA() {
  return (
    <div className="social-cta texture-wood-dark">
      <div className="social-cta__left">
        <span className="social-cta__tag">
          <Sparkles size={13} /> @RIDDHYATELIER • 140K+ DESIGN PATRONS
        </span>
        <h3>Follow Our Daily Chisel &amp; Kiln Dispatches</h3>
      </div>

      <div className="social-cta__links">
        <a href="#top" className="btn-wood-polish">
          <span>Instagram Atelier</span>
          <ArrowUpRight size={15} />
        </a>
        <a href="#top" className="btn-wood-outline">
          <span>WhatsApp Concierge</span>
          <ArrowUpRight size={15} />
        </a>
      </div>
    </div>
  );
}
