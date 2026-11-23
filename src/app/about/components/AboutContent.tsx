'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import SectionReveal from '@/components/SectionReveal';
import StatsSection from '@/app/components/StatsSection';
import CTASection from '@/app/components/CTASection';

const coreValues = [
  {
    icon: 'BoltIcon',
    title: 'Clear direction',
    description:
      'We start with the goal, not the guesswork, so the work has a stronger foundation from the beginning.',
  },
  {
    icon: 'ChartBarIcon',
    title: 'Thoughtful design',
    description: 'The experience should feel polished and useful, not just visually impressive.',
  },
  {
    icon: 'ChatBubbleLeftRightIcon',
    title: 'Honest communication',
    description:
      'Progress, trade-offs, and next steps are discussed openly so decisions stay informed and aligned.',
  },
  {
    icon: 'ArrowPathIcon',
    title: 'Long term thinking',
    description:
      'We build digital experiences that can support ongoing growth rather than short-term surface level fixes.',
  },
];

const differentiators = [
  {
    number: '01',
    title: 'Strategy led thinking',
    description:
      'We start with the business context, target audience, and opportunity before the design and build work begins.',
  },
  {
    number: '02',
    title: 'Design with purpose',
    description:
      'Visual direction and user experience are shaped around clarity, trust, and the way people actually engage online.',
  },
  {
    number: '03',
    title: 'Clear collaborative process',
    description:
      'The work stays straightforward and transparent, with practical feedback and consistent momentum across deliverables.',
  },
  {
    number: '04',
    title: 'Focused launch support',
    description:
      'We help bring a good idea into a ready-to-use experience and build a stronger foundation for what comes next.',
  },
];

export default function AboutContent() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-paper">
        <div className="max-w-page mx-auto">
          <SectionReveal>
            <p className="section-label mb-4">About DigitalBroom</p>
          </SectionReveal>
          <SectionReveal delay={80}>
            <h1
              className="font-display font-normal text-jet-ink mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                letterSpacing: '-0.025em',
                lineHeight: 1.05,
              }}
            >
              We make brands
              <br />
              <span className="text-fog">impossible to ignore.</span>
            </h1>
          </SectionReveal>
          <SectionReveal delay={140}>
            <p className="text-fog text-lg leading-relaxed max-w-xl">
              DigitalBroom is a newly established digital agency focused on thoughtful strategy,
              digital experiences, and growth-minded execution for ambitious businesses.
            </p>
          </SectionReveal>
        </div>
      </section>
      <section className="py-20 px-6 bg-cream-surface">
        <div className="max-w-page mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <SectionReveal>
                <p className="section-label mb-6">Our story</p>
                <h2
                  className="font-display font-normal text-jet-ink mb-8"
                  style={{
                    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.1,
                  }}
                >
                  Built by practitioners, not account managers.
                </h2>
                <div className="space-y-5 text-steel text-base leading-relaxed">
                  <p>
                    DigitalBroom was built for the kind of work that benefits from clarity,
                    intention, and a stronger digital presence. We focus on honest strategy and
                    thoughtful execution rather than inflated claims or generic agency language.
                  </p>
                  <p>
                    We believe the strongest digital work starts with a clear understanding of the
                    audience, the business goal, and the message that needs to land with confidence.
                  </p>
                  <p>
                    Our mission is simple: help ambitious businesses look more professional,
                    communicate more clearly, and move forward with more confidence.
                  </p>
                </div>
              </SectionReveal>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { value: 'Clear', label: 'positioning' },
                { value: 'Smart', label: 'design' },
                { value: 'Focused', label: 'execution' },
                { value: 'Practical', label: 'growth' },
              ].map((item, i) => (
                <SectionReveal key={item.label} delay={i * 80}>
                  <div
                    className="rounded-2xl p-6 flex flex-col justify-between h-full"
                    style={{
                      background: i % 2 === 0 ? 'var(--color-jet-ink)' : 'var(--color-sand)',
                      minHeight: '120px',
                    }}
                  >
                    <span
                      className="font-display font-normal"
                      style={{
                        fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                        letterSpacing: '-0.03em',
                        color: i % 2 === 0 ? 'var(--color-paper)' : 'var(--color-jet-ink)',
                      }}
                    >
                      {item.value}
                    </span>
                    <span
                      className="text-sm font-medium mt-2"
                      style={{ color: i % 2 === 0 ? 'var(--color-fog)' : 'var(--color-steel)' }}
                    >
                      {item.label}
                    </span>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <section className="py-20 px-6 bg-paper">
        <div className="max-w-page mx-auto">
          <SectionReveal>
            <p className="section-label mb-4">Our approach</p>
            <h2
              className="font-display font-normal text-jet-ink mb-4"
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
              }}
            >
              Thoughtful digital work starts with clarity.
            </h2>
            <p className="text-fog text-base mb-14 max-w-xl">
              We keep the process practical and collaborative, focusing on the real opportunity
              behind the work rather than inflated promises.
            </p>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <SectionReveal key={value.title} delay={i * 70}>
                <div
                  className="rounded-cards bg-cream-surface p-8 h-full flex flex-col gap-4 hover-lift"
                  style={{ boxShadow: 'var(--shadow-subtle)' }}
                >
                  <div className="w-11 h-11 rounded-xl bg-sand flex items-center justify-center shrink-0">
                    <Icon name={value.icon as any} size={20} className="text-jet-ink" />
                  </div>
                  <div>
                    <h3
                      className="text-jet-ink font-medium text-lg mb-2"
                      style={{ letterSpacing: '-0.015em' }}
                    >
                      {value.title}
                    </h3>
                    <p className="text-fog text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-sand">
        <div className="max-w-page mx-auto">
          <SectionReveal>
            <p className="section-label mb-4">What sets us apart</p>
            <h2
              className="font-display font-normal text-jet-ink mb-4"
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
              }}
            >
              A process built for real results.
            </h2>
            <p className="text-fog text-base mb-14 max-w-xl">
              We focus on the work that matters and keep communication clear from start to finish.
            </p>
          </SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {differentiators.map((item, i) => (
              <SectionReveal key={item.number} delay={i * 80}>
                <div
                  className="bg-paper rounded-cards p-8 lg:p-10 h-full flex flex-col gap-4 hover-lift"
                  style={{ boxShadow: 'var(--shadow-subtle)' }}
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono-custom text-pewter text-sm shrink-0 mt-1">
                      {item.number}
                    </span>
                    <div>
                      <h3
                        className="text-jet-ink font-medium text-xl mb-3"
                        style={{ letterSpacing: '-0.02em' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-steel text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
