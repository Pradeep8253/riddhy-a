'use client';

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ProductGallery from './sections/ProductGallery/ProductGallery';
import ProductInfoPanel from './sections/ProductInfoPanel/ProductInfoPanel';
import DeliveryEmiAccordion from './sections/DeliveryEmiAccordion/DeliveryEmiAccordion';
import WarrantyServiceTabs from './sections/WarrantyServiceTabs/WarrantyServiceTabs';
import DescriptionSpecsReviewsTabs from './sections/DescriptionSpecsReviewsTabs/DescriptionSpecsReviewsTabs';
import RatingsReviewSection from './sections/RatingsReviewSection/RatingsReviewSection';
import RelatedProducts from './sections/RelatedProducts/RelatedProducts';
import RecentlyViewed from './sections/RecentlyViewed/RecentlyViewed';
import { products } from '@/data/products';
import { useRecentlyViewedStore } from '@/store/useRecentlyViewedStore';
import './ProductPage.css';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug;
  const product = products.find((p) => p.slug === slug) || products[0];

  const { addRecentlyViewed } = useRecentlyViewedStore();

  useEffect(() => {
    if (product) {
      addRecentlyViewed(product);
    }
  }, [product, addRecentlyViewed]);

  const related = products.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  );

  return (
    <div className="product-detail-page texture-paper">
      <div className="site-container product-detail-page__container">
        <Breadcrumb
          items={[
            { label: 'Collections', href: '/shop' },
            {
              label: product.category,
              href: `/shop/${product.categorySlug}`,
            },
            { label: product.name },
          ]}
        />

        <div className="product-detail-page__hero-grid">
          <ProductGallery product={product} />

          <div>
            <ProductInfoPanel product={product} />
            <WarrantyServiceTabs warrantyText={product.warranty} />
            <DeliveryEmiAccordion />
          </div>
        </div>

        <DescriptionSpecsReviewsTabs product={product} />
        <RatingsReviewSection product={product} />
        <RelatedProducts
          products={related.length ? related : products.slice(0, 3)}
        />
        <RecentlyViewed currentId={product.id} />
      </div>
    </div>
  );
}
