'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import SectionReveal from '@/components/SectionReveal';

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
    question: 'How long does a typical engagement take?',
    answer:
      'Timeline depends on the scope and the complexity of the work, but we keep the process practical and transparent so expectations remain clear throughout delivery.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-20 px-6 bg-cream-surface">
      <div className="max-w-page mx-auto">
        <SectionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="section-label mb-3">Frequently asked</p>
              <h2
                className="font-display font-normal text-jet-ink"
                style={{
                  fontSize: 'var(--text-section-heading)',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.1,
                }}
              >
                Questions before
                <br />
                we begin.
              </h2>
            </div>
            <Link href="/faq" className="btn-ghost text-sm shrink-0">
              View all questions
              <Icon name="ArrowRightIcon" size={14} />
            </Link>
          </div>
        </SectionReveal>

        <div className="space-y-4 max-w-3xl">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <SectionReveal key={item.question} delay={index * 40}>
                <div className="rounded-[22px] border border-dove bg-paper overflow-hidden">
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
                    className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
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
  );
}
