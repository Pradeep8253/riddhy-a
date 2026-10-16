'use client';

import React from 'react';
import { CheckCircle2, Hammer, PackageCheck, Truck, Home } from 'lucide-react';
import './TrackingSteps.css';

const TIMELINE = [
  {
    id: 'st-1',
    title: 'Commission Registered in Kanpur Atelier',
    time: 'Completed • Today, 15 Oct 2026',
    desc: 'Master Joiner assigned & serialized brass warranty plaque engraved.',
    status: 'done',
    icon: CheckCircle2,
  },
  {
    id: 'st-2',
    title: 'Final Beeswax Rub & Quality Inspection',
    time: 'In Progress • 16 Oct 2026',
    desc: '6-point moisture & dovetail tension verification before pinewood crating.',
    status: 'current',
    icon: Hammer,
  },
  {
    id: 'st-3',
    title: 'Wooden-Crated Air-Ride Dispatch',
    time: 'Estimated • 17 Oct 2026',
    desc: 'Shock-monitored air-suspension transit with live GPS concierge link.',
    status: 'upcoming',
    icon: PackageCheck,
  },
  {
    id: 'st-4',
    title: 'White-Glove Floor Carry & Assembly',
    time: 'Estimated • 19 Oct 2026',
    desc: '2-person cotton-gloved crew uncrates, levels brass feet & removes packaging.',
    status: 'upcoming',
    icon: Truck,
  },
  {
    id: 'st-5',
    title: 'Sanctuary Handover & 10-Yr Warranty Activation',
    time: 'Estimated • 19 Oct 2026',
    desc: 'Signed digital & brass certificate activated in your Patron Vault.',
    status: 'upcoming',
    icon: Home,
  },
];

export default function TrackingSteps() {
  return (
    <div className="tracking-steps">
      <h3 className="tracking-steps__heading">
        White-Glove Craft &amp; Delivery Timeline
      </h3>

      <div className="tracking-steps__list">
        {TIMELINE.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.id}
              className={`tracking-steps__item tracking-steps__item--${step.status}`}
            >
              <div className="tracking-steps__icon">
                <Icon size={18} />
              </div>
              <div className="tracking-steps__content">
                <div className="tracking-steps__top">
                  <h4>{step.title}</h4>
                  <span>{step.time}</span>
                </div>
                <p>{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
