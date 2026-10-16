'use client';

import React from 'react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import { teamMembers } from '@/data/team';
import './MeetTheTeam.css';

export default function MeetTheTeam() {
  return (
    <section className="meet-team texture-paper">
      <div className="site-container">
        <SectionHeading
          eyebrow="CUSTODIANS OF THE GUILD"
          titlePart1="Meet the"
          italicWord="Master"
          titlePart2="Joiners & Designers"
        />

        <div className="meet-team__grid">
          {teamMembers.map((member) => (
            <article key={member.id} className="meet-team__card">
              <div className="meet-team__photo-wrap">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="meet-team__body">
                <span className="meet-team__exp">{member.experience}</span>
                <h3>{member.name}</h3>
                <strong className="meet-team__role">{member.role}</strong>
                <p>&ldquo;{member.quote}&rdquo;</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
