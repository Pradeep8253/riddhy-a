'use client';

import React from 'react';
import { Check, ShoppingBag, MapPin, CreditCard, Sparkles } from 'lucide-react';
import './StepIndicator.css';

const STEPS = [
  { id: 1, label: 'Guild Cart', icon: ShoppingBag },
  { id: 2, label: 'Residence Address', icon: MapPin },
  { id: 3, label: 'Royal Vault Payment', icon: CreditCard },
  { id: 4, label: 'Commission Sealed', icon: Sparkles },
];

export default function StepIndicator({ currentStep = 2, onSelectStep }) {
  return (
    <div className="step-indicator">
      {STEPS.map((st, idx) => {
        const Icon = st.icon;
        const done = currentStep > st.id;
        const active = currentStep === st.id;

        return (
          <React.Fragment key={st.id}>
            <button
              type="button"
              disabled={st.id > currentStep}
              onClick={() => onSelectStep && st.id < currentStep && onSelectStep(st.id)}
              className={`step-indicator__node ${
                active ? 'step-indicator__node--active' : ''
              } ${done ? 'step-indicator__node--done' : ''}`}
            >
              <span className="step-indicator__orb">
                {done ? <Check size={16} /> : <Icon size={16} />}
              </span>
              <span className="step-indicator__label">{st.label}</span>
            </button>

            {idx < STEPS.length - 1 && (
              <div
                className={`step-indicator__line ${
                  done ? 'step-indicator__line--filled' : ''
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
