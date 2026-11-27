import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactContent from './components/ContactContent';

export const metadata: Metadata = {
  title: 'Contact | Digi InFusion',
  description: 'Get in touch with Digi InFusion. We respond to every inquiry within one business day.',
  openGraph: {
    title: 'Contact Digi InFusion',
    description: 'Connect with Digi InFusion for thoughtful web design, digital experiences, and focused growth support.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}