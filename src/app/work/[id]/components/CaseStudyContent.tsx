'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import SectionReveal from '@/components/SectionReveal';
import { PortfolioItem, portfolioItems } from '@/data/portfolio';

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
};

interface Props {
  item: PortfolioItem;
}

export default function CaseStudyContent({ item }: Props) {
  const related = portfolioItems
    .filter(p => p.id !== item.id && p.tags.some(t => item.tags.includes(t)))
    .slice(0, 2);

  return (
    <>
      {/* Back nav */}
      <div className="pt-24 pb-0 px-6 bg-paper">
        <div className="max-w-page mx-auto">
          <SectionReveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-fog text-sm hover:text-jet-ink transition-colors duration-200 group"
            >
              <Icon name="ArrowLeftIcon" size={14} className="group-hover:-translate-x-1 transition-transform duration-200" />
              All case studies
            </Link>
          </SectionReveal>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-16 px-6 bg-paper">
        <div className="max-w-page mx-auto">
          <SectionReveal delay={60}>
            <div className="flex flex-wrap gap-2 mb-5">
              {item.tags.map(tag => (
                <span key={tag} className="tag-pill">{tagLabelMap[tag] || tag}</span>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={100}>
            <h1
              className="font-display font-normal text-jet-ink mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.025em', lineHeight: 1.05 }}
            >
              {item.title}
            </h1>
          </SectionReveal>

          {/* Meta row */}
          <SectionReveal delay={140}>
            <div className="flex flex-wrap gap-6 mb-10 text-sm text-fog">
              <span className="flex items-center gap-2">
                <span className="font-mono-custom text-pewter text-xs uppercase tracking-wider">Client</span>
                <span className="text-jet-ink font-medium">{item.client}</span>
              </span>
              {item.year && (
                <span className="flex items-center gap-2">
                  <span className="font-mono-custom text-pewter text-xs uppercase tracking-wider">Year</span>
                  <span className="text-jet-ink font-medium">{item.year}</span>
                </span>
              )}
              {item.duration && (
                <span className="flex items-center gap-2">
                  <span className="font-mono-custom text-pewter text-xs uppercase tracking-wider">Duration</span>
                  <span className="text-jet-ink font-medium">{item.duration}</span>
                </span>
              )}
            </div>
          </SectionReveal>

          {/* Hero image */}
          <SectionReveal delay={160}>
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: 'clamp(280px, 45vw, 520px)' }}>
              <AppImage
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Results strip */}
      {item.results && item.results.length > 0 && (
        <section className="py-12 px-6 bg-jet-ink">
          <div className="max-w-page mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {item.results.map((r, i) => (
                <SectionReveal key={r.metric} delay={i * 60}>
                  <div className="text-center">
                    <p
                      className="font-display font-normal text-paper mb-1"
                      style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.025em', lineHeight: 1 }}
                    >
                      {r.value}
                    </p>
                    <p className="text-fog text-sm">{r.metric}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Body content */}
      <section className="py-20 px-6 bg-paper">
        <div className="max-w-page mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main content */}
            <div className="lg:col-span-7 space-y-12">
              {item.overview && (
                <SectionReveal>
                  <div>
                    <p className="section-label mb-4">Overview</p>
                    <p className="text-jet-ink text-lg leading-relaxed">{item.overview}</p>
                  </div>
                </SectionReveal>
              )}

              {item.challenge && (
                <SectionReveal delay={60}>
                  <div>
                    <p className="section-label mb-4">The challenge</p>
                    <p className="text-fog text-base leading-relaxed">{item.challenge}</p>
                  </div>
                </SectionReveal>
              )}

              {item.approach && item.approach.length > 0 && (
                <SectionReveal delay={100}>
                  <div>
                    <p className="section-label mb-5">Our approach</p>
                    <div className="space-y-4">
                      {item.approach.map((step, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full bg-sand flex items-center justify-center shrink-0 mt-0.5">
                            <span className="font-mono-custom text-jet-ink text-xs font-medium">{i + 1}</span>
                          </div>
                          <p className="text-fog text-base leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </SectionReveal>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              {/* Result highlight */}
              <SectionReveal delay={80}>
                <div className="rounded-2xl bg-cream p-8" style={{ boxShadow: 'var(--shadow-subtle)' }}>
                  <p className="section-label mb-4">Key result</p>
                  <p
                    className="font-display font-normal text-jet-ink leading-snug"
                    style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', letterSpacing: '-0.02em' }}
                  >
                    &ldquo;{item.result}&rdquo;
                  </p>
                </div>
              </SectionReveal>

              {/* Services used */}
              <SectionReveal delay={120}>
                <div className="rounded-2xl bg-sand p-8">
                  <p className="section-label mb-4">Services delivered</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="tag-pill-dark">{tagLabelMap[tag] || tag}</span>
                    ))}
                  </div>
                </div>
              </SectionReveal>

              {/* CTA */}
              <SectionReveal delay={160}>
                <div className="rounded-2xl bg-jet-ink p-8 relative overflow-hidden">
                  <div
                    className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none opacity-25"
                    style={{ background: 'radial-gradient(circle, #ff5f57 0%, transparent 70%)', filter: 'blur(40px)', transform: 'translate(30%, -30%)' }}
                  />
                  <p className="text-paper font-medium mb-2" style={{ letterSpacing: '-0.015em' }}>
                    Want results like this?
                  </p>
                  <p className="text-fog text-sm mb-6 leading-relaxed">
                    Tell us about your project and we&apos;ll put together a tailored proposal.
                  </p>
                  <Link href="/contact" className="btn-primary text-sm w-full justify-center">
                    Start a project
                    <Icon name="ArrowRightIcon" size={14} />
                  </Link>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Related work */}
      {related.length > 0 && (
        <section className="py-16 px-6 bg-cream">
          <div className="max-w-page mx-auto">
            <SectionReveal>
              <div className="flex items-end justify-between mb-8">
                <div>
                  <p className="section-label mb-2">More work</p>
                  <h2
                    className="font-display font-normal text-jet-ink"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
                  >
                    Related case studies
                  </h2>
                </div>
                <Link href="/work" className="btn-ghost text-sm shrink-0">
                  View all
                  <Icon name="ArrowRightIcon" size={14} />
                </Link>
              </div>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((rel, i) => (
                <SectionReveal key={rel.id} delay={i * 80}>
                  <Link href={`/work/${rel.id}`} className="group block">
                    <div className="rounded-2xl overflow-hidden bg-paper" style={{ boxShadow: 'var(--shadow-subtle)' }}>
                      <div className="relative h-[200px] overflow-hidden">
                        <AppImage
                          src={rel.image}
                          alt={rel.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex flex-wrap gap-2 mb-2">
                          {rel.tags.map(tag => (
                            <span key={tag} className="tag-pill text-xs">{tagLabelMap[tag] || tag}</span>
                          ))}
                        </div>
                        <h3 className="text-jet-ink font-medium text-base leading-snug mb-1" style={{ letterSpacing: '-0.015em' }}>
                          {rel.title}
                        </h3>
                        <p className="text-fog text-sm">{rel.result}</p>
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
