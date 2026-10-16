'use client';

import React, { useState } from 'react';
import { CheckCircle2, ThumbsUp, Camera } from 'lucide-react';
import { toast } from 'sonner';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import RatingStars from '@/components/RatingStars/RatingStars';
import { productReviews, ratingBreakdown } from '@/data/reviews';
import './RatingsReviewSection.css';

export default function RatingsReviewSection({ product }) {
  const [reviews, setReviews] = useState(productReviews);
  const [helpfulMap, setHelpfulMap] = useState({});

  const markHelpful = (id) => {
    if (helpfulMap[id]) return;
    setHelpfulMap((p) => ({ ...p, [id]: true }));
    setReviews((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r
      )
    );
    toast.success('Thank you for endorsing this patron review!');
  };

  return (
    <section className="ratings-reviews">
      <SectionHeading
        eyebrow="VERIFIED PATRON LEDGER"
        titlePart1="Guild"
        italicWord="Reviews"
        titlePart2="& Residence Photos"
      />

      <div className="ratings-reviews__bento">
        {/* Left: Star Breakdown Chart */}
        <div className="ratings-reviews__summary-card">
          <div className="ratings-reviews__big-score">
            <span className="ratings-reviews__num">{product.rating}</span>
            <div>
              <RatingStars rating={product.rating} showNumber={false} size={18} />
              <p>Based on {product.reviewCount} Verified Commissions</p>
            </div>
          </div>

          <div className="ratings-reviews__bars">
            {ratingBreakdown.map((row) => (
              <div key={row.stars} className="ratings-reviews__bar-row">
                <span className="ratings-reviews__star-label">{row.stars} ★</span>
                <div className="ratings-reviews__track">
                  <div
                    className="ratings-reviews__fill"
                    style={{ width: `${row.percent}%` }}
                  />
                </div>
                <span className="ratings-reviews__pct">{row.percent}%</span>
              </div>
            ))}
          </div>

          <div className="ratings-reviews__photo-strip">
            <span className="ratings-reviews__photo-title">
              <Camera size={14} /> Patron Residence Snapshots
            </span>
            <div className="ratings-reviews__photo-row">
              {product.images?.map((img, i) => (
                <img key={i} src={img} alt="Patron residence" />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Review Cards */}
        <div className="ratings-reviews__list">
          {reviews.map((rev) => (
            <article key={rev.id} className="ratings-reviews__card">
              <div className="ratings-reviews__card-head">
                <div>
                  <RatingStars rating={rev.rating} showNumber={false} />
                  <h4>{rev.title}</h4>
                </div>
                <span className="ratings-reviews__date">{rev.date}</span>
              </div>

              <p className="ratings-reviews__comment">{rev.comment}</p>

              {rev.photos?.length > 0 && (
                <div className="ratings-reviews__rev-photos">
                  {rev.photos.map((ph, i) => (
                    <img key={i} src={ph} alt="Review snapshot" />
                  ))}
                </div>
              )}

              <div className="ratings-reviews__card-foot">
                <div className="ratings-reviews__author">
                  <strong>{rev.author}</strong> • {rev.city}
                  {rev.verified && (
                    <span className="ratings-reviews__verified">
                      <CheckCircle2 size={13} /> Verified Buyer ({rev.variant})
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => markHelpful(rev.id)}
                  className="ratings-reviews__helpful"
                >
                  <ThumbsUp size={13} />
                  <span>Helpful ({rev.helpfulCount})</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
