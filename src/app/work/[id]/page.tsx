import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
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
  if (!item) return { title: 'Case Study | DigitalBroom' };
  return {
    title: `${item.title} | DigitalBroom`,
    description: item.overview || item.result,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { id } = await params;
  const item = portfolioItems.find((p) => p.id === id);
  if (!item) notFound();
  return <CaseStudyContent item={item} />;
}
