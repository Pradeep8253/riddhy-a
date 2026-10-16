'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './SectionHeading.css';

export default function SectionHeading({
  eyebrow,
  titlePart1,
  italicWord,
  titlePart2,
  subtitle,
  align = 'left',
  dark = false,
  rightSlot = null,
}) {
  return (
    <div
      className={`section-heading section-heading--${align} ${
        dark ? 'section-heading--dark' : ''
      }`}
    >
      <div className="section-heading__left">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="section-heading__eyebrow"
          >
            <span className="section-heading__rule" />
            <span>{eyebrow}</span>
          </motion.span>
        )}

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="section-heading__title"
        >
          {titlePart1}{' '}
          {italicWord && <em className="section-heading__italic">{italicWord}</em>}{' '}
          {titlePart2}
        </motion.h2>

        <div className="section-heading__inlay" aria-hidden="true">
          <span className="section-heading__inlay-bar" />
          <span className="section-heading__inlay-gem" />
          <span className="section-heading__inlay-bar section-heading__inlay-bar--short" />
        </div>

        {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
      </div>

      {rightSlot && <div className="section-heading__right">{rightSlot}</div>}
    </div>
  );
}
