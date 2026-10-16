'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy } from 'lucide-react';
import { toast } from 'sonner';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import { promoSplitBanners } from '@/data/banners';
import './PromoBannerSplit.css';

export default function PromoBannerSplit() {
  const copyCode = (e, code) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(code);
    }
    toast.success(`Copied Guild Coupon "${code}" to clipboard!`);
  };

  return (
    <section className="promo-split texture-paper">
      <div className="site-container promo-split__inner">
        <SectionHeading
          eyebrow="SEASONAL ATELIER PRIVILEGES"
          titlePart1="Curated"
          italicWord="Sanctuary"
          titlePart2="Edits"
        />

        <div className="promo-split__deck">
          {promoSplitBanners.map((banner, idx) => (
            <motion.div
              key={banner.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className={`promo-split__card promo-split__card--${banner.theme}`}
            >
              <div className="promo-split__media">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="promo-split__img"
                />
                <div className="promo-split__overlay" />
              </div>

              <div className="promo-split__content">
                <span className="promo-split__tag">{banner.tag}</span>
                <h3 className="promo-split__title">{banner.title}</h3>
                <p className="promo-split__sub">{banner.subtitle}</p>

                <div className="promo-split__bottom">
                  <button
                    type="button"
                    onClick={(e) => copyCode(e, banner.discountCode)}
                    className="promo-split__code-btn"
                  >
                    <Copy size={13} />
                    <span>CODE: {banner.discountCode}</span>
                  </button>

                  <Link href={banner.href} className="promo-split__link">
                    <span>Explore Edit</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
