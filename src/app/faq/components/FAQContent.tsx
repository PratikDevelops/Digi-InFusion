'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import SectionReveal from '@/components/SectionReveal';
import CTASection from '@/app/components/CTASection';

const faqs = [
  {
    question: 'What types of projects does Digi InFusion support?',
    answer:
      'Digi InFusion supports digital projects focused on strategy, design, web experiences, digital growth, and thoughtful execution for ambitious businesses.',
  },
  {
    question: 'How do we start a project?',
    answer:
      'The easiest next step is to contact us through the contact page and share a few details about your goals, timeline, and current challenges. We will review the brief and recommend the best direction.',
  },
  {
    question: 'Do you work with new or established businesses?',
    answer:
      'Yes. We work with businesses at different stages of growth, especially those looking to clarify their positioning, improve their digital experiences, and build momentum online.',
  },
  {
    question: 'Can I request a consultation before committing?',
    answer:
      'Yes. A consultation is a good way to talk through the challenge, clarify the goals, and understand whether the right next step is a strategy discussion, a scoped project, or a smaller engagement.',
  },
  {
    question: 'What kinds of deliverables can I expect?',
    answer:
      'Deliverables depend on the scope, but typical work includes strategy, design direction, digital experience work, implementation support, and practical recommendations for launch or iteration.',
  },
  {
    question: 'How long does a typical engagement take?',
    answer:
      'Timeline depends on the scope and the complexity of the work, but we keep the process practical and transparent so expectations remain clear throughout delivery.',
  },
];

const faqHighlights = ['Strategy-led work', 'Clear communication', 'Thoughtful execution'];

export default function FAQContent() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-paper">
        <div className="max-w-page mx-auto">
          <SectionReveal>
            <p className="section-label mb-4">Frequently asked questions</p>
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
              Questions before
              <br />
              <span className="text-fog">we begin.</span>
            </h1>
          </SectionReveal>
          <SectionReveal delay={140}>
            <p className="text-fog text-lg leading-relaxed max-w-xl">
              A few practical answers about how Digi InFusion works, what we help with, and how to
              get started.
            </p>
          </SectionReveal>
        </div>
      </section>
      <section className="py-20 px-6 bg-paper">
        <div className="max-w-page mx-auto">
          <SectionReveal>
            <p className="section-label mb-4">Answers</p>
            <h2
              className="font-display font-normal text-jet-ink mb-10"
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
              }}
            >
              Everything you need to know.
            </h2>
          </SectionReveal>
          <div className="space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <SectionReveal key={item.question} delay={index * 40}>
                  <div className="rounded-[22px] border border-dove bg-cream-surface shadow-[0_0_0_1px_rgba(10,10,10,0.02)] overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6"
                      aria-expanded={isOpen}
                    >
                      <span className="text-jet-ink font-medium text-base md:text-lg">
                        {item.question}
                      </span>
                      <span
                        className="shrink-0 w-9 h-9 rounded-full bg-sand flex items-center justify-center transition-transform duration-300"
                        style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                      >
                        <Icon name="PlusIcon" size={16} className="text-jet-ink" />
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-steel text-base leading-relaxed px-5 md:px-6 pb-6 max-w-3xl">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
