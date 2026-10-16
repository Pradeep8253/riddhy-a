'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './ContactInfoCards.css';

export default function ContactInfoCards() {
  return (
    <div className="contact-info-cards">
      <div className="contact-info-cards__card">
        <MapPin size={20} />
        <div>
          <h4>Kanpur Headquarters &amp; Joinery Campus</h4>
          <p>14/112, Near Tilak Hall, Civil Lines, Mall Road, Kanpur, UP 208001</p>
        </div>
      </div>

      <div className="contact-info-cards__card">
        <Phone size={20} />
        <div>
          <h4>Direct Patron &amp; Trade Numbers</h4>
          <p>+91 98390 44210 (Concierge) • +91 512 254 8890 (Landline)</p>
        </div>
      </div>

      <div className="contact-info-cards__card">
        <Mail size={20} />
        <div>
          <h4>Department Dispatches</h4>
          <p>concierge@riddhyfurniture.in • architects@riddhyfurniture.in</p>
        </div>
      </div>

      <div className="contact-info-cards__card">
        <Clock size={20} />
        <div>
          <h4>Showroom &amp; Live Joinery Hours</h4>
          <p>Monday – Sunday: 10:30 AM to 9:00 PM IST (Valet Parking Available)</p>
        </div>
      </div>
    </div>
  );
}
