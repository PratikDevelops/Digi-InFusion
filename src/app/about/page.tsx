import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutContent from './components/AboutContent';

export const metadata: Metadata = {
  title: 'About | DigitalBroom',
  description:
    'Learn about DigitalBroom, a newly established digital agency focused on strategy, design, and digital growth for ambitious brands.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
