'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Toaster } from 'sonner';
import { useLenis } from '@/hooks/useLenis';
import { useCartStore } from '@/store/useCartStore';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import CartDrawer from '@/components/CartDrawer/CartDrawer';
import QuickViewModal from '@/components/QuickViewModal/QuickViewModal';
import MobileBottomNav from '@/components/MobileBottomNav/MobileBottomNav';

export default function LenisProvider({ children }) {
  const { scrollProgress, showBackTop, scrollToTop } = useLenis();
  const { flyingItem } = useCartStore();

  return (
    <>
      {/* Top Lenis Scroll Progress Brass Strip */}
      <div className="lenis-progress-bar" aria-hidden="true">
        <div
          className="lenis-progress-bar__fill"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      {/* Subtle Architectural Side Rails on Wide Desktop */}
      <div className="page-rail-label page-rail-label--left" aria-hidden="true">
        EST. 2010 • BURMESE TEAK ATELIER
      </div>
      <div className="page-rail-label page-rail-label--right" aria-hidden="true">
        SOLID WOOD JOINERY • 10 YR WARRANTY
      </div>

      <Navbar />

      <main className="main-content">{children}</main>

      <Footer />
      <CartDrawer />
      <QuickViewModal />
      <MobileBottomNav />

      {/* Lenis Smooth Scroll Back-To-Top Button with SVG Progress Ring */}
      <AnimatePresence>
        {showBackTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 12 }}
            onClick={scrollToTop}
            className="lenis-back-top"
            aria-label="Smooth scroll to top"
            title="Scroll to top"
          >
            <svg viewBox="0 0 48 48" className="lenis-back-top__ring">
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="rgba(217, 154, 50, 0.25)"
                strokeWidth="2.5"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2.5"
                strokeDasharray="125.6"
                strokeDashoffset={125.6 * (1 - scrollProgress)}
                strokeLinecap="round"
              />
            </svg>
            <ArrowUp size={17} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Flying-to-cart animated clone */}
      <AnimatePresence>
        {flyingItem && (
          <motion.img
            key={flyingItem.id}
            src={flyingItem.image}
            alt=""
            initial={{
              position: 'fixed',
              left: flyingItem.startX,
              top: flyingItem.startY,
              width: 72,
              height: 72,
              borderRadius: '10px',
              opacity: 1,
              scale: 1,
              zIndex: 999,
              border: '2px solid #D99A32',
              pointerEvents: 'none',
            }}
            animate={{
              left:
                typeof window !== 'undefined' ? window.innerWidth - 90 : 1200,
              top: 24,
              width: 24,
              height: 24,
              opacity: 0.2,
              scale: 0.35,
              rotate: 14,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </AnimatePresence>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#174D35',
            color: '#F7F3EA',
            border: '1px solid #D99A32',
            fontFamily: 'var(--font-body)',
          },
        }}
      />
    </>
  );
}
