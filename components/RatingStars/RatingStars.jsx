'use client';

import React from 'react';
import { Star } from 'lucide-react';
import './RatingStars.css';

export default function RatingStars({ rating = 4.9, count, size = 14, showNumber = true }) {
  const fullStars = Math.floor(rating);

  return (
    <div className="rating-stars" aria-label={`Rated ${rating} out of 5`}>
      <div className="rating-stars__icons">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={size}
            className={`rating-stars__star ${
              star <= fullStars ? 'rating-stars__star--filled' : 'rating-stars__star--half'
            }`}
          />
        ))}
      </div>
      {showNumber && <span className="rating-stars__score">{rating.toFixed(1)}</span>}
      {typeof count === 'number' && (
        <span className="rating-stars__count">({count})</span>
      )}
    </div>
  );
}
