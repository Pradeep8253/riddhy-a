'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Plus, MapPin } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import { roomInspirations } from '@/data/banners';
import { formatPrice } from '@/lib/formatPrice';
import './RoomInspirationGallery.css';

export default function RoomInspirationGallery() {
  const [activeHotspot, setActiveHotspot] = useState('hs-1');

  return (
    <section className="room-gallery texture-paper">
      <div className="site-container room-gallery__inner">
        <SectionHeading
          eyebrow="INTERACTIVE LOOKBOOK • TAP HOTSPOTS TO SHOP"
          titlePart1="Shop the"
          italicWord="Architectural"
          titlePart2="Room"
          subtitle="Click any pulsing gold pin on our completed client residences to inspect the exact furniture & appliance specification."
        />

        <div className="room-gallery__masonry">
          {roomInspirations.map((room) => (
            <div
              key={room.id}
              className={`room-gallery__tile ${room.spanClass}`}
            >
              <img
                src={room.image}
                alt={room.title}
                className="room-gallery__img"
              />
              <div className="room-gallery__scrim" />

              {/* Interactive Pulsing Hotspot Pins */}
              {room.hotspots.map((hs) => {
                const isOpen = activeHotspot === hs.id;
                return (
                  <div
                    key={hs.id}
                    className="room-gallery__hotspot-wrap"
                    style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveHotspot(isOpen ? null : hs.id)
                      }
                      aria-label={`Inspect ${hs.name}`}
                      className={`room-gallery__pin ${
                        isOpen ? 'room-gallery__pin--active' : ''
                      }`}
                    >
                      <Plus size={14} />
                    </button>

                    {isOpen && (
                      <div className="room-gallery__popover">
                        <span className="room-gallery__popover-cat">
                          {hs.category}
                        </span>
                        <h5>{hs.name}</h5>
                        <div className="room-gallery__popover-bottom">
                          <strong>{formatPrice(hs.price)}</strong>
                          <Link
                            href={`/product/${hs.productSlug}`}
                            className="room-gallery__popover-link"
                          >
                            View <ArrowUpRight size={13} />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="room-gallery__caption">
                <span>
                  <MapPin size={12} /> {room.location}
                </span>
                <h3>{room.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
