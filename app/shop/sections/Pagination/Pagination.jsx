'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useFilterStore } from '@/store/useFilterStore';
import './Pagination.css';

export default function Pagination({ totalPages = 1 }) {
  const { currentPage, setCurrentPage } = useFilterStore();

  if (totalPages <= 1) return null;

  const go = (page) => {
    setCurrentPage(page);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 240, behavior: 'smooth' });
    }
  };

  return (
    <nav className="rf-pagination" aria-label="Catalog Pagination">
      <button
        type="button"
        disabled={currentPage <= 1}
        onClick={() => go(currentPage - 1)}
        className="rf-pagination__nav"
      >
        <ChevronLeft size={16} />
        <span>Prev</span>
      </button>

      <div className="rf-pagination__pages">
        {Array.from({ length: totalPages }).map((_, idx) => {
          const p = idx + 1;
          return (
            <button
              key={p}
              type="button"
              onClick={() => go(p)}
              className={`rf-pagination__page ${
                currentPage === p ? 'rf-pagination__page--active' : ''
              }`}
            >
              {p}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        disabled={currentPage >= totalPages}
        onClick={() => go(currentPage + 1)}
        className="rf-pagination__nav"
      >
        <span>Next</span>
        <ChevronRight size={16} />
      </button>
    </nav>
  );
}
