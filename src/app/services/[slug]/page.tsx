import React from 'react'
import { site } from '@/config/site';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { services } from '@/data/services';
import ServiceDetailContent from './components/ServiceDetailContent';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Digi InFusion`,
    description: service.valueProp,
    openGraph: {
      title: `${service.title} | Digi InFusion`,
      description: service.valueProp,
      images: [
        {
          url: `${site.url}/opengraph-image`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Digi InFusion`,
      description: service.valueProp,
      images: [
        {
          url: `${site.url}/opengraph-image`,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
};

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <>
      <Header />
      <main>
        <ServiceDetailContent service={service} />
      </main>
      <Footer />
    </>
  );
}
