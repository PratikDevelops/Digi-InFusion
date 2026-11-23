import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQContent from './components/FAQContent';

export const metadata: Metadata = {
  title: 'FAQ | DigitalBroom',
  description: 'Find answers about DigitalBroom services, process, timelines, and working together.',
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        <FAQContent />
      </main>
      <Footer />
    </>
  );
}
