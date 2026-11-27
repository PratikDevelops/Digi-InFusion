'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import SectionReveal from '@/components/SectionReveal';
import { portfolioItems } from '@/data/portfolio';

// Shape of the image box. object-contain keeps the WHOLE image visible (no crop).
// Set this to your banners' real ratio (e.g. 'aspect-[2/1]') to remove side bars.
const IMAGE_RATIO = 'aspect-[16/9]';

const filterTabs = [
  { label: 'All work', value: 'all' },
  { label: 'Web & App', value: 'web-app' },
  { label: 'Marketing', value: 'marketing' },
  { label: 'Content', value: 'content' },
  { label: 'Automation', value: 'automation' },
];

const tagGroupMap: Record<string, string[]> = {
  all: [],
  'web-app': ['web', 'app', 'design', 'ecommerce', 'wordpress'],
  marketing: ['seo', 'ads', 'marketing', 'social'],
  content: ['video', 'content'],
  automation: ['automation', 'tech'],
};

const tagLabelMap: Record<string, string> = {
  web: 'Web Dev',
  app: 'App Dev',
  design: 'Design',
  seo: 'SEO',
  ads: 'Paid Ads',
  marketing: 'Marketing',
  video: 'Video',
  content: 'Content',
  automation: 'Automation',
  tech: 'Tech',
  social: 'Social Media',
  ecommerce: 'E-commerce',
  wordpress: 'WordPress',
};

export default function WorkContent() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) =>
          item.tags.some((tag) => tagGroupMap[activeFilter]?.includes(tag))
        );

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-paper">
        <div className="max-w-page mx-auto">
          <SectionReveal>
            <p className="section-label mb-4">Our work</p>
          </SectionReveal>
          <SectionReveal delay={80}>
            <h1
              className="font-display font-normal text-jet-ink mb-6"
              style={{
                fontSize: 'var(--text-page-heading)',
                letterSpacing: '-0.025em',
                lineHeight: 1.05,
              }}
            >
              Results that speak
              <br />
              <span className="text-fog">for themselves</span>
            </h1>
          </SectionReveal>
          <SectionReveal delay={140}>
            <p className="text-fog text-lg leading-relaxed max-w-xl">
              Every project starts with a clear goal and ends with a measurable outcome. Here&apos;s
              a selection of work we&apos;re proud of.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-16 z-30 bg-paper/90 backdrop-blur-[12px] border-b border-dove px-6 py-3">
        <div className="max-w-page mx-auto">
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeFilter === tab.value
                    ? 'bg-jet-ink text-paper'
                    : 'bg-cream text-fog hover:text-jet-ink hover:bg-sand'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case study grid */}
      <section className="py-16 px-6 bg-paper">
        <div className="max-w-page mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-fog">No projects found for this filter.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((item, i) => (
                <SectionReveal key={item.id} delay={i * 60}>
                  <Link href={`/work/${item.id}`} className="group block h-full">
                    <div
                      className="h-full rounded-2xl overflow-hidden bg-cream"
                      style={{ boxShadow: 'var(--shadow-subtle)' }}
                    >
                      {/* Image: ratio box + object-contain = nothing cropped or overflowing */}
                      <div className={`relative w-full overflow-hidden bg-sand ${IMAGE_RATIO}`}>
                        <AppImage
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-jet-ink/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="flex items-center gap-2 bg-paper text-jet-ink font-medium text-sm rounded-full px-5 py-2.5 shadow-lg">
                            View case study
                            <Icon name="ArrowRightIcon" size={14} />
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {item.tags.map((tag) => (
                            <span key={tag} className="tag-pill text-xs">
                              {tagLabelMap[tag] || tag}
                            </span>
                          ))}
                          {item.year && (
                            <span className="tag-pill text-xs text-fog">{item.year}</span>
                          )}
                        </div>

                        <h2
                          className="text-jet-ink font-medium mb-2 leading-snug group-hover:text-slate transition-colors duration-200"
                          style={{
                            fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                            letterSpacing: '-0.015em',
                          }}
                        >
                          {item.title}
                        </h2>

                        <p className="text-pewter text-xs font-mono-custom mb-4">{item.client}</p>

                        <div className="flex items-start gap-3 bg-sand rounded-xl p-4">
                          <div className="w-1 h-full min-h-[20px] rounded-full bg-jet-ink shrink-0 mt-0.5" />
                          <p className="text-jet-ink text-sm leading-relaxed font-medium">
                            {item.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-page mx-auto">
          <SectionReveal>
            <div className="rounded-2xl bg-jet-ink p-12 md:p-16 text-center relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, #ff5f57 0%, transparent 70%)',
                  filter: 'blur(60px)',
                  transform: 'translate(30%, -30%)',
                }}
              />
              <p className="section-label text-pewter mb-4">Ready to start?</p>
              <h2
                className="font-display font-normal text-paper mb-6"
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.1,
                }}
              >
                Let&apos;s build something
                <br />
                worth showing off
              </h2>
              <p className="text-fog text-base mb-8 max-w-md mx-auto leading-relaxed">
                Tell us about your project and we&apos;ll put together a tailored proposal within 48
                hours.
              </p>
              <Link href="/contact" className="btn-primary text-sm inline-flex">
                Start a project
                <Icon name="ArrowRightIcon" size={14} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
