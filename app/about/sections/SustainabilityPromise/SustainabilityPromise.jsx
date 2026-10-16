'use client';

import React from 'react';
import { Trees, Sun, Recycle } from 'lucide-react';
import './SustainabilityPromise.css';

export default function SustainabilityPromise() {
  return (
    <section className="sustainability-promise">
      <div className="site-container">
        <div className="sustainability-promise__banner texture-emerald-dark">
          <div className="sustainability-promise__head">
            <span>ECOLOGICAL STEWARDSHIP</span>
            <h2>The 2-Saplings-Per-Commission Sacred Pledge</h2>
          </div>

          <div className="sustainability-promise__pillars">
            <div>
              <Trees size={24} />
              <h4>100% FSC Plantation Timber</h4>
              <p>
                Every log is legally harvested from managed government forest
                corporations with 2 native teak saplings planted per order.
              </p>
            </div>
            <div>
              <Sun size={24} />
              <h4>100% Solar Kiln Seasoning</h4>
              <p>
                Our 85,000 sq.ft Kanpur seasoning facility operates entirely on
                450 kW rooftop solar arrays.
              </p>
            </div>
            <div>
              <Recycle size={24} />
              <h4>Zero-Plastic Wooden Crating</h4>
              <p>
                We ship in reusable pinewood crates lined with quilted cotton
                blankets instead of single-use styrofoam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
