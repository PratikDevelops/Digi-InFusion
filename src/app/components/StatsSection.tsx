'use client';

import React from 'react';
import SectionReveal from '@/components/SectionReveal';

const strengths = [
  {
    title: 'Strategy first',
    description:
      'We start with the goal, the audience, and the opportunity before designing anything.',
  },
  {
    title: 'Design that works',
    description:
      'Every decision is shaped by clarity, usability, and the experience you want people to remember.',
  },
  {
    title: 'Built to move',
    description:
      'We create digital experiences that support growth, engagement, and clear next steps.',
  },
  {
    title: 'Clear collaboration',
    description:
      'You get straightforward guidance, thoughtful progress, and a more confident process.',
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 px-6 bg-cream-surface">
      <div className="max-w-page mx-auto">
        <SectionReveal>
          <p className="section-label mb-10">What we focus on</p>
        </SectionReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-dove">
          {strengths?.map((item, i) => (
            <SectionReveal key={item?.title} delay={i * 80}>
              <div className="bg-cream-surface p-8 lg:p-10 h-full">
                <p className="text-jet-ink font-medium text-base mb-2">{item?.title}</p>
                <p className="text-fog text-sm leading-relaxed">{item?.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
