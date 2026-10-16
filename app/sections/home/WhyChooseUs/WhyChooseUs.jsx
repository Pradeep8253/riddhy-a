'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Trees,
  Hammer,
  Truck,
  ShieldCheck,
  Sparkles,
  Award,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import WoodDivider from '@/components/WoodDivider/WoodDivider';
import './WhyChooseUs.css';

const PILLARS = [
  {
    id: 'pil-1',
    num: '01',
    stat: '100%',
    title: 'Kiln-Dried Grade-A Timber',
    desc: 'Seasoned in solar kilns to 8% moisture—guaranteed never to warp, crack, or attract borers across Indian monsoons.',
    icon: Trees,
  },
  {
    id: 'pil-2',
    num: '02',
    stat: '140h',
    title: 'Mortise, Tenon & Brass Joinery',
    desc: 'Hand-interlocked wooden joints & molten Moradabad brass butterfly keys—zero staples or weak cam-locks.',
    icon: Hammer,
  },
  {
    id: 'pil-3',
    num: '03',
    stat: '₹0',
    title: 'White-Glove Floor Installation',
    desc: 'Delivered in wooden crates, carried up to your apartment, assembled with cotton gloves & leveled on-site.',
    icon: Truck,
  },
  {
    id: 'pil-4',
    num: '04',
    stat: '10Yr',
    title: 'Signed Brass Warranty Plaque',
    desc: 'Every sofa, bed, and dining table bears a serialized brass plate with a 10-year structural replacement promise.',
    icon: ShieldCheck,
  },
  {
    id: 'pil-5',
    num: '05',
    stat: '40+',
    title: 'Bespoke Velvets & Wood Stains',
    desc: 'Customize upholstery in Italian stain-guard velvet, Belgian bouclé, or saddle leather at no bespoke surcharge.',
    icon: Sparkles,
  },
  {
    id: 'pil-6',
    num: '06',
    stat: '20Yr',
    title: 'Cabinet-Matched Smart Tech',
    desc: 'India’s only appliance line with genuine Burmese teak & walnut bezels backed by a 20-year inverter guarantee.',
    icon: Award,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us why-choose-us--dark texture-emerald-dark">
      <WoodDivider variant="dovetail" />

      <div className="site-container why-choose-us__inner">
        <SectionHeading
          eyebrow="THE RIDDHY GUILD STANDARD • ZERO COMPROMISE"
          titlePart1="Why 38,400+ Patrons"
          italicWord="Commission"
          titlePart2="Our Atelier"
          subtitle="We don’t mass-produce disposable flat-pack boxes. We engineer generations-old timber & brass heirlooms."
          dark
        />

        {/* Honeycomb / Hex-Offset Asymmetric 6-Plaque Bento Grid */}
        <div className="why-choose-us__honeycomb">
          {PILLARS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 26, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  stiffness: 220,
                  damping: 20,
                  delay: idx * 0.07,
                }}
                className={`why-choose-us__plaque ${
                  idx % 2 === 1 ? 'why-choose-us__plaque--offset' : ''
                }`}
              >
                <div className="why-choose-us__plaque-top">
                  <div className="why-choose-us__icon-hex">
                    <Icon size={24} />
                  </div>
                  <span className="why-choose-us__huge-stat">{item.stat}</span>
                </div>

                <div className="why-choose-us__plaque-body">
                  <span className="why-choose-us__index">GUILD PILLAR #{item.num}</span>
                  <h3 className="why-choose-us__title">{item.title}</h3>
                  <p className="why-choose-us__desc">{item.desc}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <WoodDivider variant="dovetail" flip dark />
    </section>
  );
}
