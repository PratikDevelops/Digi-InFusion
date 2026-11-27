'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import SectionReveal from '@/components/SectionReveal';
import { Service } from '@/data/services';
import { portfolioItems } from '@/data/portfolio';
import Image from 'next/image';

const iconMap: Record<string, string> = {
  CodeBracketIcon: 'CodeBracketIcon',
  DevicePhoneMobileIcon: 'DevicePhoneMobileIcon',
  MagnifyingGlassIcon: 'MagnifyingGlassIcon',
  ChatBubbleLeftRightIcon: 'ChatBubbleLeftRightIcon',
  CursorArrowRaysIcon: 'CursorArrowRaysIcon',
  BoltIcon: 'BoltIcon',
  FilmIcon: 'FilmIcon',
  VideoCameraIcon: 'VideoCameraIcon',
};

const categoryLabels: Record<string, string> = {
  'design-dev': 'Design & Development',
  'marketing-growth': 'Marketing & Growth',
  'content-production': 'Content & Production',
};

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <SectionReveal delay={index * 60}>
      <div className="border-b border-dove">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-5 text-left gap-4 group"
          aria-expanded={open}
        >
          <span className="text-jet-ink font-medium text-base leading-snug group-hover:text-steel transition-colors duration-200">
            {question}
          </span>
          <span
            className={`shrink-0 w-7 h-7 rounded-full border border-dove flex items-center justify-center transition-all duration-300 ${
              open ? 'bg-jet-ink border-jet-ink rotate-45' : 'bg-paper'
            }`}
          >
            <Icon name="PlusIcon" size={14} className={open ? 'text-paper' : 'text-jet-ink'} />
          </span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? 'max-h-96 pb-5' : 'max-h-0'
          }`}
        >
          <p className="text-steel text-base leading-relaxed pr-10">{answer}</p>
        </div>
      </div>
    </SectionReveal>
  );
}

interface ServiceDetailContentProps {
  service: Service;
}

export default function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const relatedPortfolio = portfolioItems.filter((item) =>
    item.tags.some((tag) => service.portfolioTags.includes(tag))
  );

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-paper overflow-hidden">
        <div className="max-w-page mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="max-w-2xl">
              <SectionReveal>
                <div className="flex items-center gap-3 mb-6">
                  <span className="tag-pill text-xs font-mono-custom">
                    {categoryLabels[service.category]}
                  </span>
                </div>
              </SectionReveal>
              <SectionReveal delay={80}>
                <h1
                  className="font-display font-normal text-jet-ink mb-6"
                  style={{
                    fontSize: 'clamp(2.25rem, 6vw, 4rem)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.0,
                  }}
                >
                  {service.title}
                </h1>
              </SectionReveal>
              <SectionReveal delay={140}>
                <p className="text-steel text-lg leading-relaxed mb-8 max-w-xl">
                  {service.valueProp}
                </p>
              </SectionReveal>
              <SectionReveal delay={200}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="btn-primary">
                    Get a custom quote
                    <Icon name="ArrowRightIcon" size={14} />
                  </Link>
                  <Link href="/contact" className="btn-ghost">
                    Book a free call
                  </Link>
                </div>
              </SectionReveal>
            </div>

            {/* Icon block — hidden entirely below md (768px) */}
            <div className="hidden md:block shrink-0">
              <SectionReveal delay={120} direction="fade">
                <div className="flex w-24 h-24 lg:w-32 lg:h-32 rounded-3xl bg-sand items-center justify-center">
                  <Icon
                    name={iconMap[service.icon] || 'BoltIcon'}
                    size={48}
                    className="text-jet-ink w-12 h-12"
                  />
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included + Process — side by side on desktop */}
      <section className="py-20 px-6 bg-cream-surface border-t border-dove">
        <div className="max-w-page mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* What's Included */}
            <div>
              <SectionReveal>
                <p className="section-label mb-3">What&apos;s included</p>
                <h2
                  className="font-display font-normal text-jet-ink mb-8"
                  style={{
                    fontSize: 'var(--text-detail-subheading)',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.1,
                  }}
                >
                  Every deliverable, spelled out.
                </h2>
              </SectionReveal>
              <ul className="space-y-3">
                {service.deliverables.map((item, i) => (
                  <SectionReveal key={i} delay={i * 50}>
                    <li className="flex items-start gap-3 group">
                      <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-jet-ink flex items-center justify-center">
                        <Icon name="CheckIcon" size={11} className="text-paper" />
                      </span>
                      <span className="text-steel text-sm leading-relaxed">{item}</span>
                    </li>
                  </SectionReveal>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div>
              <SectionReveal>
                <p className="section-label mb-3">Our approach</p>
                <h2
                  className="font-display font-normal text-jet-ink mb-8"
                  style={{
                    fontSize: 'var(--text-detail-subheading)',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.1,
                  }}
                >
                  How we work.
                </h2>
              </SectionReveal>
              <div className="space-y-0">
                {service.process.map((step, i) => (
                  <SectionReveal key={i} delay={i * 70}>
                    <div className="flex gap-5 pb-8 relative">
                      {/* Connector line */}
                      {i < service.process.length - 1 && (
                        <div className="absolute left-[18px] top-9 bottom-0 w-px bg-dove" />
                      )}
                      <div className="shrink-0 w-9 h-9 rounded-full bg-paper border border-dove flex items-center justify-center z-10">
                        <span className="font-mono-custom text-xs text-fog">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <div className="pt-1.5">
                        <h3 className="text-jet-ink font-medium text-sm mb-1">{step.step}</h3>
                        <p className="text-fog text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Portfolio */}
      {relatedPortfolio.length > 0 && (
        <section className="py-20 px-6 bg-paper border-t border-dove">
          <div className="max-w-page mx-auto">
            <SectionReveal>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                <div>
                  <p className="section-label mb-3">Related work</p>
                  <h2
                    className="font-display font-normal text-jet-ink"
                    style={{
                      fontSize: 'var(--text-detail-subheading)',
                      letterSpacing: '-0.025em',
                      lineHeight: 1.1,
                    }}
                  >
                    Projects like this one.
                  </h2>
                </div>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 text-sm text-fog hover:text-jet-ink transition-colors duration-200 shrink-0"
                >
                  View all work
                  <Icon name="ArrowRightIcon" size={14} />
                </Link>
              </div>
            </SectionReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedPortfolio.slice(0, 3).map((item, i) => (
                <SectionReveal key={item.id} delay={i * 80}>
                  <Link href={`/work/${item.id}`} className="block group">
                    <div className="rounded-cards overflow-hidden bg-cream-surface">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {item.tags.map((tag) => (
                            <span key={tag} className="tag-pill capitalize">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-jet-ink font-medium text-sm leading-snug mb-2 group-hover:text-steel transition-colors duration-200">
                          {item.title}
                        </h3>
                        <p className="text-fog text-xs leading-relaxed">{item.result}</p>
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 px-6 bg-sand border-t border-dove">
        <div className="max-w-page mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            <SectionReveal>
              <div className="lg:sticky lg:top-28">
                <p className="section-label mb-3">FAQ</p>
                <h2
                  className="font-display font-normal text-jet-ink mb-4"
                  style={{
                    fontSize: 'var(--text-detail-subheading)',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.1,
                  }}
                >
                  Common questions about {service.title}.
                </h2>
                <p className="text-steel text-sm leading-relaxed mb-6">
                  Still have questions? We&apos;re happy to walk you through anything.
                </p>
                <Link href="/contact" className="btn-ghost text-sm">
                  Ask us directly
                  <Icon name="ArrowRightIcon" size={14} />
                </Link>
              </div>
            </SectionReveal>

            <div className="border-t border-dove">
              {service.faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Block */}
      <section className="py-24 px-6 bg-jet-ink">
        <div className="max-w-page mx-auto">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="max-w-xl">
                <p className="section-label text-fog mb-4">Ready to get started?</p>
                <h2
                  className="font-display font-normal text-paper mb-4"
                  style={{
                    fontSize: 'var(--text-cta-heading)',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.05,
                  }}
                >
                  Let&apos;s talk about your {service.title.toLowerCase()} project.
                </h2>
                <p className="text-fog text-base leading-relaxed">
                  Book a free 30-minute strategy call. We&apos;ll review your goals, ask the right
                  questions, and give you an honest recommendation with no pressure.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-paper text-jet-ink rounded-full px-5 py-3 text-sm font-medium transition-all duration-200 hover:opacity-90"
                >
                  Get a custom quote
                  <Icon name="ArrowRightIcon" size={14} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-paper rounded-full px-5 py-3 text-sm font-medium border border-fog transition-all duration-200 hover:border-paper"
                >
                  Explore other services
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
