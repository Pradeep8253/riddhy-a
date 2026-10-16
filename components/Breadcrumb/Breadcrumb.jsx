'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import './Breadcrumb.css';

export default function Breadcrumb({ items = [], dark = false }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`rf-breadcrumb ${dark ? 'rf-breadcrumb--dark' : ''}`}
    >
      <ol className="rf-breadcrumb__list">
        <li className="rf-breadcrumb__item">
          <Link href="/" className="rf-breadcrumb__link">
            <Home size={14} />
            <span>Atelier Home</span>
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="rf-breadcrumb__item">
              <ChevronRight size={14} className="rf-breadcrumb__sep" />
              {item.href && !isLast ? (
                <Link href={item.href} className="rf-breadcrumb__link">
                  {item.label}
                </Link>
              ) : (
                <span className="rf-breadcrumb__current" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
