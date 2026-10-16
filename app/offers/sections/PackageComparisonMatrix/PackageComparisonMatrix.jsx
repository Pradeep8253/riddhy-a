'use client';

import React from 'react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import './PackageComparisonMatrix.css';

const matrixRows = [
  {
    category: 'Solid Wood Bed & Mattress',
    pkg150: 'Queen Hydraulic Sheesham Bed + 6" Ortho Mattress',
    pkg250: 'King Four-Poster Teak Hydraulic Bed + 8" Memory Mattress',
    pkg300: 'Maharaja Hand-Carved Burmese Teak Bed + 10" Latex Mattress',
  },
  {
    category: 'Bridal Almira (Wardrobe)',
    pkg150: '3-Door Solid Sheesham Bridal Almira with Safe Locker',
    pkg250: '4-Door Arched Bridal Almira with Mirror & Digital Locker',
    pkg300: '4-Door Heirloom Carved Almira + Separate Steel Godrej Safe',
  },
  {
    category: 'Sofa & Lounge Chairs',
    pkg150: '5-Seater L-Shaped Velvet Sofa + Center Table',
    pkg250: '6-Seater Chesterfield Teak Sofa + 2 Accent Lounge Chairs',
    pkg300: '7-Seater Maharaja Carved Sofa Set + 2 Cane Lounge Chairs',
  },
  {
    category: 'Dining Table Set',
    pkg150: '4-Seater Compact Sheesham Dining Table Set',
    pkg250: '6-Seater Italian Marble-Top Solid Teak Dining Set',
    pkg300: '8-Seater Live-Edge Acacia Banquet Dining Table Set',
  },
  {
    category: 'Refrigerator (Fridge)',
    pkg150: '265L Frost-Free Convertible Double-Door Fridge',
    pkg250: '345L 5-Star Convertible Glass-Finish Double-Door Fridge',
    pkg300: '680L Bespoke French-Door Matte-Brass Refrigerator',
  },
  {
    category: 'Air Conditioner (AC) & Cooler',
    pkg150: '85L Heavy-Duty Desert Air Cooler (Honeycomb Pads)',
    pkg250: '1.5 Ton 5-Star Hot & Cold Split AC + 75L Tower Cooler',
    pkg300: '2.0 Ton 5-Star AI Split AC + 95L Commercial Desert Cooler',
  },
  {
    category: 'Washing Machine',
    pkg150: '7.5 kg Fully Automatic Top-Load Washing Machine',
    pkg250: '8.0 kg AI Direct-Drive Front-Load Steam Washer',
    pkg300: '9.0 kg Washer-Dryer Combo with Steam Refresh',
  },
  {
    category: 'Microwave Oven & Smart TV',
    pkg150: '23L Convection Oven + 43" 4K UHD Smart LED TV',
    pkg250: '32L Air-Fry Convection Oven + 55" 4K QLED Dolby TV',
    pkg300: '32L Rotisserie Oven + 65" 4K OLED/QLED Smart Cinema TV',
  },
];

export default function PackageComparisonMatrix() {
  return (
    <section className="pkg-matrix">
      <div className="site-container">
        <SectionHeading
          eyebrow="ITEM-BY-ITEM TRANSPARENCY"
          titlePart1="Side-by-Side"
          italicWord="Marriage Package"
          titlePart2="Comparison Matrix"
          subtitle="Compare every single furniture piece (Bed, Almira, Sofa, Chair, Dining Table) and home appliance (Fridge, AC, Cooler, Washing Machine, Oven, Smart TV) across our 3 tiers."
          align="center"
        />

        <div className="pkg-matrix__table-wrap">
          <table className="pkg-matrix__table">
            <thead>
              <tr>
                <th>Included Category</th>
                <th>
                  <span className="pkg-matrix__tier">TIER 01 • 11 ITEMS</span>
                  <strong>₹1.50 Lakhs</strong>
                  <small>Silver Shagun Package</small>
                </th>
                <th className="pkg-matrix__highlight">
                  <span className="pkg-matrix__tier">
                    MOST POPULAR • 14 ITEMS
                  </span>
                  <strong>₹2.50 Lakhs</strong>
                  <small>Gold Royal Vivah Package</small>
                </th>
                <th>
                  <span className="pkg-matrix__tier">FLAGSHIP • 17 ITEMS</span>
                  <strong>₹3.00 Lakhs</strong>
                  <small>Platinum Maharaja Package</small>
                </th>
              </tr>
            </thead>
            <tbody>
              {matrixRows.map((row) => (
                <tr key={row.category}>
                  <td className="pkg-matrix__cat">{row.category}</td>
                  <td>{row.pkg150}</td>
                  <td className="pkg-matrix__highlight">{row.pkg250}</td>
                  <td>{row.pkg300}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
