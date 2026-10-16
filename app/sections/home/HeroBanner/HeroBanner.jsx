'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Compass,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { heroSlides, heroStats } from '@/data/banners';
import { formatPrice } from '@/lib/formatPrice';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './HeroBanner.css';

export default function HeroBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="hero-banner">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={950}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        loop
        className="hero-banner__swiper"
      >
        {heroSlides.map((slide, idx) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-banner__slide texture-emerald-dark">
              <div className="hero-banner__bg-media">
                <img
                  src={slide.image}
                  alt={slide.featuredProductName}
                  className="hero-banner__bg-img"
                />
                <div className="hero-banner__scrim" />
              </div>

              <div className="site-container hero-banner__bento">
                {/* Left Column: Refined Architectural Typography */}
                <div className="hero-banner__copy-col">
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hero-banner__eyebrow"
                  >
                    <Sparkles size={13} />
                    <span>{slide.eyebrow}</span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.08 }}
                    className="hero-banner__headline"
                  >
                    {slide.headlinePart1}{' '}
                    <em className="hero-banner__headline-italic">
                      {slide.headlineItalic}
                    </em>{' '}
                    {slide.headlinePart2}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.16 }}
                    className="hero-banner__subcopy"
                  >
                    {slide.subcopy}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.24 }}
                    className="hero-banner__cta-group"
                  >
                    <Link href={slide.ctaPrimary.href} className="btn-wood-polish">
                      <span>{slide.ctaPrimary.label}</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link href={slide.ctaSecondary.href} className="btn-wood-outline">
                      <Compass size={16} />
                      <span>{slide.ctaSecondary.label}</span>
                    </Link>
                  </motion.div>

                  <div className="hero-banner__trust-pills">
                    <span>
                      <ShieldCheck size={14} /> 10-Yr Structural Guarantee
                    </span>
                    <span>
                      <Award size={14} /> 100% Kiln-Dried Timber
                    </span>
                    <span className="hero-banner__slide-num">
                      0{activeIndex + 1} / 0{heroSlides.length}
                    </span>
                  </div>
                </div>

                {/* Right Column: Architectural Framed Showcase */}
                <div className="hero-banner__visual-col">
                  <div className="hero-banner__carved-frame">
                    <span className="hero-banner__stamp">{slide.badgeText}</span>
                    <img
                      src={slide.image}
                      alt={slide.featuredProductName}
                      className="hero-banner__main-photo"
                    />

                    {/* Secondary Joinery Detail Inset */}
                    <div className="hero-banner__inset-photo">
                      <img src={slide.detailImage} alt="Joinery detail" />
                      <span>Hand-Rubbed Teak &amp; Brass</span>
                    </div>

                    {/* Floating Product Specification Card */}
                    <Link
                      href={`/product/${slide.featuredProductSlug}`}
                      className="hero-banner__floating-tag"
                    >
                      <div className="hero-banner__floating-dot" />
                      <div>
                        <span className="hero-banner__floating-label">
                          FEATURED COMMISSION
                        </span>
                        <h4>{slide.featuredProductName}</h4>
                        <div className="hero-banner__floating-price">
                          <strong>{formatPrice(slide.featuredPrice)}</strong>
                          <s>{formatPrice(slide.featuredMrp)}</s>
                        </div>
                      </div>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Architectural Ledger Overlap Bar */}
      <div className="site-container hero-banner__stats-overlap">
        <div className="hero-banner__stats-grid">
          {heroStats.map((st, idx) => (
            <motion.div
              key={st.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              className="hero-banner__stat-card"
            >
              <span className="hero-banner__stat-num">{st.value}</span>
              <div className="hero-banner__stat-text">
                <strong>{st.label}</strong>
                <span>{st.detail}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
