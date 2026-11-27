import React from 'react';
import type { Metadata } from 'next';
import { site } from '@/config/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutContent from './components/AboutContent';

export const metadata: Metadata = {
  title: 'About Digi InFusion',
  description:
    'Learn about Digi InFusion, a full-service digital agency helping ambitious brands grow through strategy, design, and digital experiences.',
  openGraph: {
    title: 'About Digi InFusion',
    description:
      'Learn about Digi InFusion, a full-service digital agency helping ambitious brands grow through strategy, design, and digital experiences.',
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
    title: 'About Digi InFusion',
    description:
      'Learn about Digi InFusion, a full-service digital agency helping ambitious brands grow through strategy, design, and digital experiences.',
    images: [
      {
        url: `${site.url}/assets/images/app_logo.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
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
