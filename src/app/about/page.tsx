import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutContent from './components/AboutContent';

export const metadata: Metadata = {
  title: 'About | Digi InFusion',
  description:
    'Learn about Digi InFusion, a full-service digital agency helping ambitious brands grow through strategy, design, and digital experiences.',
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
