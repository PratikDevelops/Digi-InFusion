'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import SectionReveal from '@/components/SectionReveal';
import { services } from '@/data/services';

const categoryLabels: Record<string, string> = {
  'design-dev': 'Design & Development',
  'marketing-growth': 'Marketing & Growth',
  'content-production': 'Content & Production',
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

export default function ServicesStrip() {
  return (
    <section className="pt-10 sm:pt-12 pb-20 px-6 bg-paper">
      <div className="max-w-page mx-auto">
        <SectionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="section-label mb-3">What we do</p>
              <h2 className="font-display font-normal text-jet-ink" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
                Eight services.<br />One team.
              </h2>
            </div>
            <Link href="/services" className="btn-ghost text-sm shrink-0">
              All services
              <Icon name="ArrowRightIcon" size={14} />
            </Link>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((service, i) => (
            <SectionReveal key={service.slug} delay={i * 60}>
              <Link href={`/services/${service.slug}`} className="block h-full">
                <div className="card-service h-full flex flex-col gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-sand flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-jet-ink">
                    <Icon
                      name={iconMap[service.icon] || 'BoltIcon'}
                      size={18}
                      className="text-jet-ink group-hover:text-paper transition-colors duration-200"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-jet-ink font-medium text-base mb-2 leading-tight">{service.title}</h3>
                    <p className="text-fog text-sm leading-relaxed">{service.shortDescription}</p>
                  </div>
                  <div className="flex items-center gap-1 text-fog text-sm font-medium group-hover:text-jet-ink transition-colors duration-200">
                    Learn more
                    <Icon name="ArrowRightIcon" size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}