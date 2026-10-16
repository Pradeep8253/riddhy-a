'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import RatingStars from '@/components/RatingStars/RatingStars';
import { testimonials } from '@/data/testimonials';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="testimonials texture-paper">
      <div className="site-container testimonials__inner">
        <SectionHeading
          eyebrow="ARCHITECTS, HOTELIERS & HOMEOWNERS"
          titlePart1="Words Carved in"
          italicWord="Trust"
          titlePart2="& Patronage"
          align="center"
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={22}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1150: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="testimonials__swiper"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <article className="testimonials__card">
                {/* Oversized Gold Quotation Mark SVG behind text */}
                <svg
                  className="testimonials__quote-svg"
                  viewBox="0 0 100 80"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M28 0C12.5 0 0 12.5 0 28C0 43.5 12.5 56 28 56C31.5 56 34.8 55.3 37.8 54.1C33.2 64.9 22.4 72 10 72V80C29.9 80 46 63.9 46 44V28C46 12.5 37.9 0 28 0ZM82 0C66.5 0 54 12.5 54 28C54 43.5 66.5 56 82 56C85.5 56 88.8 55.3 91.8 54.1C87.2 64.9 76.4 72 64 72V80C83.9 80 100 63.9 100 44V28C100 12.5 91.9 0 82 0Z" />
                </svg>

                <div className="testimonials__top">
                  <RatingStars rating={t.rating} showNumber={false} />
                  <span className="testimonials__verified">
                    <CheckCircle2 size={13} /> Verified Guild Patron
                  </span>
                </div>

                <p className="testimonials__quote">&ldquo;{t.quote}&rdquo;</p>

                <div className="testimonials__purchased">
                  <span>Commissioned:</span>
                  <strong>{t.purchasedItem}</strong>
                </div>

                <div className="testimonials__author">
                  <div className="testimonials__avatar-frame">
                    <img src={t.avatar} alt={t.name} />
                  </div>
                  <div>
                    <h4 className="testimonials__name">{t.name}</h4>
                    <p className="testimonials__role">{t.role}</p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
