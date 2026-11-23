'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import SectionReveal from '@/components/SectionReveal';
import { services, Service } from '@/data/services';

const categoryConfig = {
  'design-dev': {
    label: 'Design & Development',
    description: 'We design and build digital products that look premium and perform.',
  },
  'marketing-growth': {
    label: 'Marketing & Growth',
    description: 'Data-driven strategies that bring in leads, grow audiences, and scale revenue.',
  },
  'content-production': {
    label: 'Content & Production',
    description: 'Professional video and content that makes your brand impossible to ignore.',
  },
};

const iconMap: Record<string, any> = {
  'CodeBracketIcon': 'CodeBracketIcon',
  'DevicePhoneMobileIcon': 'DevicePhoneMobileIcon',
  'MagnifyingGlassIcon': 'MagnifyingGlassIcon',
  'ChatBubbleLeftRightIcon': 'ChatBubbleLeftRightIcon',
  'CursorArrowRaysIcon': 'CursorArrowRaysIcon',
  'BoltIcon': 'BoltIcon',
  'FilmIcon': 'FilmIcon',
  'VideoCameraIcon': 'VideoCameraIcon',
};

const categories = ['design-dev', 'marketing-growth', 'content-production'] as const;

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <SectionReveal delay={index * 60}>
      <Link href={`/services/${service.slug}`} className="block h-full group">
        <div className="h-full bg-cream-surface rounded-cards p-8 flex flex-col gap-5 transition-all duration-300 hover:shadow-[var(--shadow-subtle-2)] hover:-translate-y-1">
          <div className="flex items-start justify-between">
            <div className="w-11 h-11 rounded-xl bg-sand flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-jet-ink">
              <Icon
                name={iconMap[service.icon] || 'BoltIcon'}
                size={20}
                className="text-jet-ink group-hover:text-paper transition-colors duration-200"
              />
            </div>
            <Icon name="ArrowUpRightIcon" size={16} className="text-dove group-hover:text-jet-ink transition-colors duration-200 mt-1" />
          </div>

          <div className="flex-1">
            <h3 className="text-jet-ink font-medium text-lg mb-2" style={{ letterSpacing: '-0.015em' }}>
              {service.title}
            </h3>
            <p className="text-fog text-sm leading-relaxed">{service.shortDescription}</p>
          </div>

          <div className="pt-4 border-t border-dove">
            <p className="text-pewter text-xs font-mono-custom">
              {service.deliverables.length} deliverables included
            </p>
          </div>
        </div>
      </Link>
    </SectionReveal>
  );
}

export default function ServicesOverviewContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-paper">
        <div className="max-w-page mx-auto">
          <SectionReveal>
            <p className="section-label mb-4">Our services</p>
          </SectionReveal>
          <SectionReveal delay={80}>
            <h1 className="font-display font-normal text-jet-ink mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.025em', lineHeight: 1.0 }}>
              Everything your brand needs<br className="hidden md:block" /> to grow in house.
            </h1>
          </SectionReveal>
          <SectionReveal delay={160}>
            <p className="text-steel text-lg leading-relaxed max-w-xl">
              Eight specialist services. One team. No briefing multiple agencies, no coordination overhead, no version mismatches. Just results.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Services by category */}
      {categories.map((cat) => {
        const catServices = services.filter(s => s.category === cat);
        const config = categoryConfig[cat];
        return (
          <section key={cat} className="py-16 px-6 border-t border-dove">
            <div className="max-w-page mx-auto">
              <SectionReveal>
                <div className="mb-10">
                  <p className="section-label mb-2">{config.label}</p>
                  <p className="text-steel text-base max-w-md">{config.description}</p>
                </div>
              </SectionReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {catServices.map((service, i) => (
                  <ServiceCard key={service.slug} service={service} index={i} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-sand">
        <div className="max-w-page mx-auto">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div>
                <h2 className="font-display font-normal text-jet-ink mb-3" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
                  Not sure which service you need?
                </h2>
                <p className="text-steel text-base max-w-lg">
                  Book a free 30-minute strategy call. We&apos;ll diagnose your situation and recommend the right mix honestly.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link href="/contact" className="btn-primary">
                  Book a free call
                  <Icon name="ArrowRightIcon" size={14} />
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}