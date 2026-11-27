import React from 'react';
import type { Metadata } from 'next';
import { site } from '@/config/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQContent from './components/FAQContent';

export const metadata: Metadata = {
  title: 'FAQ | Digi InFusion',
  description:
    'Find answers about Digi InFusion services, process, timelines, and working together.',
  openGraph: {
    title: 'FAQ | Digi InFusion',
    description:
      'Find answers about Digi InFusion services, process, timelines, and working together.',
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
    title: 'FAQ | Digi InFusion',
    description:
      'Find answers about Digi InFusion services, process, timelines, and working together.',
    images: [
      {
        url: `${site.url}/assets/images/app_logo.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
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
