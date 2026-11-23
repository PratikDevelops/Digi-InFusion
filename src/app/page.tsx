import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ServicesStrip from './components/ServicesStrip';
import StatsSection from './components/StatsSection';
import FeaturedWork from './components/FeaturedWork';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';

export const metadata: Metadata = {
  title: 'DigitalBroom | Digital Agency for Ambitious Brands',
  description: 'DigitalBroom is a newly established digital agency helping businesses with strategy, design, development, and growth-focused digital experiences.',
  openGraph: {
    title: 'DigitalBroom | Digital Agency for Ambitious Brands',
    description: 'A newly established digital agency focused on strategy, design, digital experiences, and thoughtful growth.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesStrip />
        <StatsSection />
        <FeaturedWork />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}