'use client';

import React from 'react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import { timelineMilestones } from '@/data/team';
import './OurStoryTimeline.css';

export default function OurStoryTimeline() {
  return (
    <section className="story-timeline texture-paper">
      <div className="site-container story-timeline__inner">
        <SectionHeading
          eyebrow="CHRONICLE OF THE ATELIER"
          titlePart1="16 Years of"
          italicWord="Seasoned"
          titlePart2="Milestones"
        />

        <div className="story-timeline__grid">
          {timelineMilestones.map((m) => (
            <article key={m.year} className="story-timeline__card">
              <span className="story-timeline__year">{m.year}</span>
              <h3 className="story-timeline__title">{m.title}</h3>
              <p className="story-timeline__desc">{m.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
