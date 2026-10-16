'use client';

import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

export default function CountdownTimer({ hoursOffset = 11, label = 'GUILD FLASH SALE ENDS IN' }) {
  const [timeLeft, setTimeLeft] = useState({
    hours: hoursOffset,
    minutes: 42,
    seconds: 19,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        } else {
          hours = hoursOffset;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [hoursOffset]);

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <div className="countdown-plank">
      <span className="countdown-plank__bolt countdown-plank__bolt--left" />
      {label && <span className="countdown-plank__label">{label}</span>}
      <div className="countdown-plank__digits">
        <div className="countdown-plank__unit">
          <span className="countdown-plank__num">{pad(timeLeft.hours)}</span>
          <span className="countdown-plank__sub">HRS</span>
        </div>
        <span className="countdown-plank__sep">:</span>
        <div className="countdown-plank__unit">
          <span className="countdown-plank__num">{pad(timeLeft.minutes)}</span>
          <span className="countdown-plank__sub">MIN</span>
        </div>
        <span className="countdown-plank__sep">:</span>
        <div className="countdown-plank__unit">
          <span className="countdown-plank__num">{pad(timeLeft.seconds)}</span>
          <span className="countdown-plank__sub">SEC</span>
        </div>
      </div>
      <span className="countdown-plank__bolt countdown-plank__bolt--right" />
    </div>
  );
}
