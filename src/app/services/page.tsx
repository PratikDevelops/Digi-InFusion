import React from 'react'
import type { Metadata } from 'next'
import { site } from '@/config/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesOverviewContent from './components/ServicesOverviewContent';

export const metadata: Metadata = {
  title: 'Digi InFusion Services',
  description:
    'Explore Digi InFusion services for web design, digital experiences, strategy, and delivery support.',
  openGraph: {
    title: 'Digi InFusion Services',
    description:
      'Explore Digi InFusion services for web design, digital experiences, strategy, and delivery support.',
    images: [
      {
        url: `${site.url}/assets/images/app_logo.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digi InFusion Services',
    description:
      'Explore Digi InFusion services for web design, digital experiences, strategy, and delivery support.',
    images: [
      {
        url: `${site.url}/assets/images/app_logo.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesOverviewContent />
      </main>
      <Footer />
    </>
  );
}