'use client';

import React from 'react';
import './Badge.css';

export default function Badge({ text, variant = 'default', className = '' }) {
  if (!text) return null;

  let resolvedVariant = variant;
  const lower = text.toLowerCase();
  if (variant === 'default') {
    if (lower.includes('out of stock')) resolvedVariant = 'out';
    else if (lower.includes('bestseller')) resolvedVariant = 'bestseller';
    else if (lower.includes('new')) resolvedVariant = 'new';
    else if (lower.includes('off') || lower.includes('%')) resolvedVariant = 'discount';
    else if (lower.includes('handcrafted')) resolvedVariant = 'craft';
  }

  return (
    <span className={`rf-badge rf-badge--${resolvedVariant} ${className}`}>
      <span className="rf-badge__pin" />
      <span className="rf-badge__label">{text}</span>
    </span>
  );
}
