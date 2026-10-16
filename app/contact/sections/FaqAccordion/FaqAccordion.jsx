'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import { faqs } from '@/data/faqs';
import './FaqAccordion.css';

export default function FaqAccordion() {
  const [openId, setOpenId] = useState('faq-1');

  return (
    <section className="faq-accordion">
      <SectionHeading
        eyebrow="GUILD KNOWLEDGE BASE"
        titlePart1="Frequently Asked"
        italicWord="Patron"
        titlePart2="Questions"
      />

      <div className="faq-accordion__list">
        {faqs.map((f) => {
          const isOpen = openId === f.id;
          return (
            <div key={f.id} className="faq-accordion__item">
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : f.id)}
                className="faq-accordion__question"
              >
                <div>
                  <span className="faq-accordion__cat">{f.category}</span>
                  <h4>{f.question}</h4>
                </div>
                <ChevronDown
                  size={18}
                  className={isOpen ? 'faq-accordion__icon--open' : ''}
                />
              </button>
              {isOpen && (
                <div className="faq-accordion__answer">
                  <p>{f.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
