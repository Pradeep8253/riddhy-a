'use client';

import React from 'react';
import './Skeleton.css';

export default function Skeleton({ count = 4, height = '340px' }) {
  return (
    <div className="rf-skeleton-grid">
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="rf-skeleton" style={{ height }}>
          <div className="rf-skeleton__img" />
          <div className="rf-skeleton__body">
            <div className="rf-skeleton__line rf-skeleton__line--short" />
            <div className="rf-skeleton__line rf-skeleton__line--title" />
            <div className="rf-skeleton__line rf-skeleton__line--price" />
          </div>
        </div>
      ))}
    </div>
  );
}
