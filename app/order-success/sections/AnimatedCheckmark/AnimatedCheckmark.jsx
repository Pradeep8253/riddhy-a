'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedCheckmark.css';

export default function AnimatedCheckmark() {
  return (
    <div className="animated-checkmark">
      <div className="animated-checkmark__confetti" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <i key={i} />
        ))}
      </div>

      <motion.svg
        viewBox="0 0 100 100"
        className="animated-checkmark__svg"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.circle
          cx="50"
          cy="50"
          r="44"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7 }}
        />
        <motion.path
          d="M30 52L44 66L72 36"
          fill="none"
          stroke="var(--primary-light)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.55, delay: 0.35 }}
        />
      </motion.svg>
    </div>
  );
}
