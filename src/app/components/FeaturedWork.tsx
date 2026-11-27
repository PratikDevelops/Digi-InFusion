'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import SectionReveal from '@/components/SectionReveal';
import { portfolioItems } from '@/data/portfolio';

// LAYOUT: 2 cards per row (2x2 for 4 items), all equal size.
// Images use object-contain inside a fixed-ratio box, so the WHOLE image is
// always visible (nothing cropped). Change IMAGE_RATIO to match your banners
// and the empty side bars disappear.
const IMAGE_RATIO = 'aspect-[16/9]';

// Where a project card links to. Change if your case-study route differs.
const projectHref = (id: string) => `/work/${id}`;

const featuredItems = portfolioItems?.filter((p) => p?.featured)?.slice(0, 4) ?? [];

export default function FeaturedWork() {
  return (
    <section className="py-20 px-6 bg-paper">
      <div className="max-w-page mx-auto">
        <SectionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="section-label mb-3">Selected work</p>
              <h2
                className="font-display font-normal text-jet-ink"
                style={{
                  fontSize: 'var(--text-section-heading)',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.1,
                }}
              >
                Results we&apos;re proud of
              </h2>
            </div>
            <Link href="/work" className="btn-ghost text-sm shrink-0">
              View all work
              <Icon name="ArrowRightIcon" size={14} />
            </Link>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10">
          {featuredItems.map((item, i) => (
            <SectionReveal key={item.id} delay={(i % 2) * 80}>
              <Link
                href={projectHref(item.id)}
                aria-label={`View project: ${item.title}`}
                className="group block h-full cursor-pointer"
              >
                <div
                  className={`relative w-full overflow-hidden rounded-2xl bg-jet-ink/5 ${IMAGE_RATIO}`}
                >
                  <AppImage
                    src={item.image || ''}
                    alt={item.alt || item.title || ''}
                    fill
                    className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={i < 2}
                  />
                </div>

                <div className="pt-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-jet-ink/15 text-jet-ink/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-jet-ink font-medium text-lg leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-jet-ink/60 text-sm">{item.result}</p>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
