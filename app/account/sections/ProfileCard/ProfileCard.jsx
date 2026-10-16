'use client';

import React from 'react';
import { Award, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import './ProfileCard.css';

export default function ProfileCard() {
  return (
    <aside className="profile-card texture-wood-dark">
      <div className="profile-card__top">
        <div className="profile-card__avatar">AS</div>
        <div>
          <span className="profile-card__tier">
            <Award size={13} /> ROYAL TIMBER PATRON • SINCE 2022
          </span>
          <h2>Aarav Singhania</h2>
        </div>
      </div>

      <div className="profile-card__info">
        <span>
          <Mail size={14} /> aarav.singhania@royalpatron.in
        </span>
        <span>
          <Phone size={14} /> +91 98390 44210
        </span>
        <span>
          <MapPin size={14} /> Civil Lines, Kanpur, UP 208001
        </span>
      </div>

      <div className="profile-card__plaque">
        <ShieldCheck size={18} />
        <div>
          <strong>3 Active Brass Warranty Plaques</strong>
          <p>10-Year Structural &amp; 20-Yr Inverter Protection Active</p>
        </div>
      </div>
    </aside>
  );
}
