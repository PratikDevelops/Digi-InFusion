'use client';

import React, { useState } from 'react';
import SectionReveal from '@/components/SectionReveal';

// ⚠️ DRAFT quotes, written from the actual work done for each client.
// Send each one to the client for approval (or let them edit it) BEFORE publishing,
// since these are attributed to real people.
const testimonials = [
  {
    quote:
      'Our catalogue covers skincare, haircare and combos, and the store still feels clean and easy to shop. The banners and ad creatives have become a big part of how we show up online, and everything is handled with real care.',
    name: 'Ajinkya',
    company: 'Elder-Mart',
  },
  {
    quote:
      'We needed the site to feel like a trade catalogue for resellers, not a retail shop, and that is exactly what we got. The collections are clear, and the creatives and ads speak directly to our buyers.',
    name: 'Ishita',
    company: 'Nine Plus Nine Wholesale',
  },
  {
    quote:
      'With so many categories and constant new launches, we needed a store that stays organised. Bestsellers and new arrivals are easy to find on the homepage, and the whole build was smooth to work on.',
    name: 'Pranjal',
    company: 'Boga Bags',
  },
];

const initials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials?.[activeIndex];

  return (
    <section className="py-20 px-6 bg-paper">
      <div className="max-w-page mx-auto">
        <SectionReveal>
          <p className="section-label mb-10">What clients say</p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Active quote */}
          <SectionReveal className="lg:col-span-7" delay={100}>
            <figure key={activeIndex} className="relative">
              <blockquote
                className="font-display font-normal text-jet-ink mb-8"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', letterSpacing: '-0.02em', lineHeight: 1.35 }}
              >
                &ldquo;{active?.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-jet-ink text-paper text-sm font-medium">
                  {initials(active?.name || '')}
                </span>
                <span>
                  <span className="block text-jet-ink text-sm font-medium">{active?.name}</span>
                  <span className="block text-steel text-sm">
                    {active?.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          </SectionReveal>

          {/* Selector */}
          <SectionReveal className="lg:col-span-5" delay={200}>
            <div className="flex flex-col gap-2" role="tablist" aria-label="Client testimonials">
              {testimonials?.map((item, i) => (
                <button
                  key={`${item?.company}-${i}`}
                  role="tab"
                  aria-selected={i === activeIndex}
                  onClick={() => setActiveIndex(i)}
                  className={`text-left p-5 rounded-xl transition-all duration-300 ${
                    i === activeIndex ? 'bg-cream-surface' : 'hover:bg-cream-surface/50'
                  }`}
                >
                  <p className={`text-sm font-medium mb-0.5 transition-colors ${i === activeIndex ? 'text-jet-ink' : 'text-fog'}`}>
                    {item?.name}
                  </p>
                  <p className="text-pewter text-xs">
                    {item?.company}
                  </p>
                </button>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}