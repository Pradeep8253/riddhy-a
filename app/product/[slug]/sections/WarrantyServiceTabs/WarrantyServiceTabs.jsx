'use client';

import React from 'react';
import { ShieldCheck, Wrench, RotateCcw } from 'lucide-react';
import './WarrantyServiceTabs.css';

export default function WarrantyServiceTabs({ warrantyText }) {
  return (
    <div className="warranty-tabs">
      <div className="warranty-tabs__card">
        <ShieldCheck size={22} />
        <div>
          <h5>{warrantyText || '10-Year Solid Wood Warranty'}</h5>
          <p>Covers structural joinery, seasoning &amp; borer protection</p>
        </div>
      </div>

      <div className="warranty-tabs__card">
        <Wrench size={22} />
        <div>
          <h5>Free Installation</h5>
          <p>On-site artisan assembly &amp; brass leveling included</p>
        </div>
      </div>

      <div className="warranty-tabs__card">
        <RotateCcw size={22} />
        <div>
          <h5>7-Day Trial Return</h5>
          <p>Hassle-free doorstep pickup or exchange guarantee</p>
        </div>
      </div>
    </div>
  );
}
