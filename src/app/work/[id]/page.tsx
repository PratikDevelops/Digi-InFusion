import React from 'react'
import { site } from '@/config/site';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { portfolioItems } from '@/data/portfolio';
import CaseStudyContent from './components/CaseStudyContent';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const item = portfolioItems.find((p) => p.id === id);
  if (!item) return { title: 'Case Study | Digi InFusion' };
  return {
    title: `${item.title} | Digi InFusion`,
    description: item.overview || item.result,
    openGraph: {
      title: `${item.title} | Digi InFusion`,
      description: item.overview || item.result,
      images: [
        {
          url: `${site.url}${item.image}`,
          width: 1200,
          height: 630,
          alt: item.alt || item.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${item.title} | Digi InFusion`,
      description: item.overview || item.result,
      images: [
        {
          url: `${site.url}${item.image}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
};

export default async function CaseStudyPage({ params }: Props) {
  const { id } = await params;
  const item = portfolioItems.find((p) => p.id === id);
  if (!item) notFound();
  return (
    <>
      <Header />
      <main>
        <CaseStudyContent item={item} />
      </main>
      <Footer />
    </>
  );
}
