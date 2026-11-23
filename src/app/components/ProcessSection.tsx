'use client';

import React from 'react';
import SectionReveal from '@/components/SectionReveal';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We start with a deep dive into your business, goals, and competitive landscape. No assumptions, just research.',
    detail: 'Stakeholder interviews · Competitor audit · Goal mapping · KPI definition',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'Strategy before execution. We build a detailed plan covering scope, timeline, resources, and success metrics.',
    detail: 'Project roadmap · Tech stack selection · Content strategy · Budget allocation',
  },
  {
    number: '03',
    title: 'Execute',
    description:
      'Our in-house team moves fast and communicates clearly. Weekly check-ins, Slack access, real-time progress updates.',
    detail: 'Agile sprints · Weekly demos · Iterative feedback · QA at every stage',
  },
  {
    number: '04',
    title: 'Deliver',
    description:
      'Launch is just the beginning. We monitor, optimize, and support, turning delivery into ongoing momentum.',
    detail: 'Launch support · Performance monitoring · 30-day warranty · Retainer options',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 px-6 bg-sand">
      <div className="max-w-page mx-auto">
        <SectionReveal>
          <div className="mb-14">
            <p className="section-label mb-3">How we work</p>
            <h2
              className="font-display font-normal text-jet-ink"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
              }}
            >
              A process built for results
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {steps?.map((step, i) => (
            <SectionReveal key={step?.number} delay={i * 80}>
              <div
                className="bg-paper rounded-cards p-8 lg:p-10 h-full flex flex-col gap-4 hover-lift"
                style={{ boxShadow: 'var(--shadow-subtle)' }}
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono-custom text-pewter text-sm shrink-0 mt-1">
                    {step?.number}
                  </span>
                  <div>
                    <h3
                      className="text-jet-ink font-medium text-xl mb-3"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {step?.title}
                    </h3>
                    <p className="text-steel text-sm leading-relaxed mb-4">{step?.description}</p>
                    <p className="text-pewter text-sm font-mono-custom leading-relaxed">
                      {step?.detail}
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
