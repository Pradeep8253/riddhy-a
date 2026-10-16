'use client';

import React from 'react';
import './WoodDivider.css';

export default function WoodDivider({ flip = false, dark = false }) {
  return (
    <div
      className={`wood-divider ${flip ? 'wood-divider--flip' : ''} ${
        dark ? 'wood-divider--dark' : ''
      }`}
      aria-hidden="true"
    >
      <div className="wood-divider__rail">
        <span className="wood-divider__line" />
        <span className="wood-divider__medallion">
          <i className="wood-divider__diamond" />
          <span className="wood-divider__label">BURMESE TEAK &amp; BRASS JOINERY</span>
          <i className="wood-divider__diamond" />
        </span>
        <span className="wood-divider__line" />
      </div>
    </div>
  );
}
