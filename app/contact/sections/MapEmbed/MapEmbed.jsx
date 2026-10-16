'use client';

import React from 'react';
import { Compass, Navigation } from 'lucide-react';
import './MapEmbed.css';

export default function MapEmbed({ activeStore }) {
  const storeName =
    activeStore?.name || 'Riddhy Heritage Mansion • Civil Lines, Kanpur';
  const storeAddress =
    activeStore?.address ||
    '14/112, Near Tilak Hall, Civil Lines, Kanpur, Uttar Pradesh 208001';

  return (
    <div className="map-embed">
      <div className="map-embed__canvas">
        {/* Stylized Architectural Blueprint Map */}
        <svg
          viewBox="0 0 800 320"
          className="map-embed__svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="800" height="320" fill="#15201A" />
          <g stroke="rgba(217,154,50,0.18)" strokeWidth="1">
            <line x1="0" y1="60" x2="800" y2="60" />
            <line x1="0" y1="120" x2="800" y2="120" />
            <line x1="0" y1="180" x2="800" y2="180" />
            <line x1="0" y1="240" x2="800" y2="240" />
            <line x1="160" y1="0" x2="160" y2="320" />
            <line x1="320" y1="0" x2="320" y2="320" />
            <line x1="480" y1="0" x2="480" y2="320" />
            <line x1="640" y1="0" x2="640" y2="320" />
          </g>
          <path
            d="M0 210 Q 240 140 420 175 T 800 110"
            stroke="#D99A32"
            strokeWidth="3"
            fill="none"
            strokeDasharray="8 4"
          />
          <circle cx="420" cy="175" r="24" fill="rgba(217,154,50,0.22)" />
          <circle cx="420" cy="175" r="9" fill="#D99A32" />
        </svg>

        <div className="map-embed__overlay-card">
          <span className="map-embed__tag">
            <Compass size={13} /> ARCHITECTURAL SHOWROOM PIN
          </span>
          <h4>{storeName}</h4>
          <p>{storeAddress}</p>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(storeAddress)}`}
            target="_blank"
            rel="noreferrer"
            className="map-embed__dir-btn"
          >
            <Navigation size={13} /> Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
