import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WorkContent from './components/WorkContent';

export const metadata: Metadata = {
    title: 'Work & Portfolio | DigitalBroom',
    description: 'Explore DigitalBroom work and selected projects across strategy, design, digital experiences, and growth-focused delivery.',
};

export default function WorkPage() {
    return (
        <>
            <Header />
            <main>
                <WorkContent />
            </main>
            <Footer />
        </>
    );
}
