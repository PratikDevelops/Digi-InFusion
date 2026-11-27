import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import SectionReveal from '@/components/SectionReveal';

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-jet-ink">
      <div className="max-w-page mx-auto">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="section-label text-fog mb-4">Ready to start?</p>
            <h2
              className="font-display font-normal text-paper mb-6"
              style={{
                fontSize: 'var(--text-cta-heading)',
                letterSpacing: '-0.025em',
                lineHeight: 1.05,
              }}
            >
              Let&apos;s build something worth talking about.
            </h2>
            <p className="text-fog text-base leading-relaxed mb-8 max-w-lg">
              Book a free 30-minute consultation. We&apos;ll review your current situation, identify
              the biggest opportunities, and outline exactly how we&apos;d approach your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-paper text-jet-ink rounded-full px-5 py-3 text-sm font-medium transition-all duration-200 hover:opacity-90"
              >
                Book a free consultation
                <Icon name="ArrowRightIcon" size={14} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-paper rounded-full px-5 py-3 text-sm font-medium border border-fog transition-all duration-200 hover:border-paper"
              >
                Explore services
              </Link>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
