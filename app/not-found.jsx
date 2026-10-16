'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section
      className="texture-wood-dark"
      style={{
        minHeight: '72vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 1.5rem',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '620px',
          padding: '2.75rem',
          background: 'rgba(21, 32, 26, 0.88)',
          border: '2px solid var(--primary)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-carved), var(--glow-gold)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono-price)',
            fontSize: '0.78rem',
            letterSpacing: '0.2em',
            color: 'var(--primary)',
          }}
        >
          404 • UNCHARTED GALLERY WING
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
            color: 'var(--dark-text)',
            margin: '0.5rem 0 1rem',
          }}
        >
          This Joinery Blueprint Was Not Found
        </h1>
        <p style={{ color: 'var(--dark-muted)', marginBottom: '1.75rem' }}>
          The gallery room or piece you are looking for may have been commissioned
          by a private collector or moved to a new wing.
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <Link href="/" className="btn-wood-polish">
            <Home size={16} />
            <span>Return to Atelier Home</span>
          </Link>
          <Link href="/shop" className="btn-wood-outline">
            <Compass size={16} />
            <span>Explore All Collections</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
