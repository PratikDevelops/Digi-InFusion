import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesOverviewContent from './components/ServicesOverviewContent';

export const metadata: Metadata = {
  title: 'Services | DigitalBroom',
  description: 'Explore DigitalBroom services for web design, digital experiences, strategy, and delivery support.',
  openGraph: {
    title: 'Services | DigitalBroom',
    description: 'A focused digital agency offering web design, strategy, digital experience, and growth support.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
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