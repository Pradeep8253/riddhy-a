'use client';

import React from 'react';
import { Compass, Eye, Shield } from 'lucide-react';
import './MissionVisionValues.css';

export default function MissionVisionValues() {
  return (
    <section className="mvv-section texture-emerald-dark">
      <div className="site-container mvv-section__grid">
        <div className="mvv-section__card">
          <Compass size={26} />
          <span>OUR MISSION</span>
          <h3>Reviving India’s Royal Joinery &amp; Tarkashi Guilds</h3>
          <p>
            To provide direct patronage to 180+ hereditary woodcarvers in
            Saharanpur, Jodhpur, and Mainpuri while delivering heirloom-grade
            solid wood furniture directly to Indian homes.
          </p>
        </div>

        <div className="mvv-section__card">
          <Eye size={26} />
          <span>OUR VISION</span>
          <h3>Harmonizing Solid Timber with Smart Living</h3>
          <p>
            Pioneering a new category of bespoke home appliances—QLED TVs,
            French-door refrigerators, and espresso stations—clad in genuine
            teak, walnut, and brushed brass.
          </p>
        </div>

        <div className="mvv-section__card">
          <Shield size={26} />
          <span>OUR COVENANT</span>
          <h3>Zero MDF. Zero Veneer Substitutes.</h3>
          <p>
            Every creation carries a signed brass authenticity plaque guaranteeing
            100% solar-kiln-seasoned hardwood and a 10-year structural replacement
            promise.
          </p>
        </div>
      </div>
    </section>
  );
}
