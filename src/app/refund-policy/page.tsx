import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | Digi InFusion',
  description:
    'Digi InFusion Refund & Cancellation Policy. Terms for project fees, deposits, milestone payments, and cancellations.',
};

const EMAIL = 'digiinfusion.contact@gmail.com';

const sections = [
  {
    id: 'deposits',
    title: 'Deposits',
    body: [
      'A deposit of 50% of the project fee is due before work begins. The balance is due on delivery or according to the agreed milestones.',
      'Once work has started, the deposit is non-refundable. It secures your project slot and covers the initial planning and design work.',
    ],
  },
  {
    id: 'milestone-payments',
    title: 'Milestone Payments',
    body: [
      'Payments for completed milestones are non-refundable. Payments for milestones that have not started are handled under the cancellation terms below.',
    ],
  },
  {
    id: 'client-cancellations',
    title: 'Cancellations by the Client',
    body: ['If you decide to cancel a project, the following applies:'],
    list: [
      'Before work starts: you receive a full refund of all payments made, within 7 business days.',
      'During the project: payments for completed milestones are non-refundable. Payments for milestones that have not started are refunded within 7 business days of cancellation.',
      'After delivery: no refunds are issued for work that has already been delivered.',
    ],
  },
  {
    id: 'our-cancellations',
    title: 'Cancellations by Digi InFusion',
    body: [
      'If Digi InFusion cancels a project, you will be refunded for any work that has not been delivered.',
    ],
  },
  {
    id: 'non-refundable-work',
    title: 'Non-Refundable Work',
    body: [
      'Design concepts, code, and other materials created specifically for your project are non-refundable once they have been delivered or work on them has begun.',
    ],
  },
  {
    id: 'requesting-a-refund',
    title: 'How to Request a Refund',
    body: [
      'Send your request, along with your project name and payment details, to the email address below. We review every request and respond promptly.',
    ],
  },
];

const relatedPolicies = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Disclaimer', href: '/disclaimer' },
];

export default function RefundPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="border-b border-dove">
          <div className="max-w-page mx-auto px-6 py-16 md:py-20">
            <p className="text-sm font-medium text-jet-ink/60 mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl font-medium text-jet-ink tracking-tight mb-5">
              Refund &amp; Cancellation Policy
            </h1>
            <p className="max-w-2xl text-lg text-jet-ink/70 mb-6">
              How deposits, milestone payments, and cancellations work when you
              engage Digi InFusion for a project.
            </p>
            <span className="inline-flex items-center rounded-full border border-dove bg-paper px-4 py-1.5 text-sm text-jet-ink/70">
              Last updated: November 26, 2026
            </span>
          </div>
        </section>

        {/* Body */}
        <section>
          <div className="max-w-page mx-auto px-6 py-16 grid gap-12 lg:grid-cols-[240px_1fr]">
            {/* Table of contents */}
            <aside className="hidden lg:block">
              <nav aria-label="On this page" className="sticky top-24">
                <p className="text-sm font-medium text-jet-ink mb-4">On this page</p>
                <ul className="flex flex-col gap-3 border-l border-dove pl-4">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-sm text-jet-ink/60 hover:text-jet-ink transition-colors duration-200"
                      >
                        {String(i + 1).padStart(2, '0')}. {s.title}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#contact"
                      className="text-sm text-jet-ink/60 hover:text-jet-ink transition-colors duration-200"
                    >
                      {String(sections.length + 1).padStart(2, '0')}. Contact Details
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Content */}
            <div className="max-w-[720px]">
              <p className="text-jet-ink/70 leading-relaxed mb-12">
                This Refund &amp; Cancellation Policy explains how refunds and
                cancellations are handled for services provided by Digi InFusion.
                By engaging us for a project, you agree to the terms below.
              </p>

              {sections.map((s, i) => (
                <section
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-28 border-t border-dove py-10 first:border-t-0 first:pt-0"
                >
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-sm font-medium text-jet-ink/40">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-2xl font-medium text-jet-ink tracking-tight">
                      {s.title}
                    </h2>
                  </div>
                  <div className="space-y-4 text-jet-ink/70 leading-relaxed">
                    {s.body.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                    {s.list && (
                      <ul className="space-y-3 pt-1">
                        {s.list.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-jet-ink/40" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              ))}

              {/* Contact */}
              <section
                id="contact"
                className="scroll-mt-28 border-t border-dove py-10"
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-sm font-medium text-jet-ink/40">
                    {String(sections.length + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-2xl font-medium text-jet-ink tracking-tight">
                    Contact Details
                  </h2>
                </div>
                <div className="rounded-2xl border border-dove bg-paper p-6 md:p-8 shadow-subtle">
                  <p className="text-lg font-medium text-jet-ink mb-2">
                    Questions about this policy?
                  </p>
                  <p className="text-jet-ink/70 mb-6">
                    Email us at{' '}
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-jet-ink underline underline-offset-4 hover:opacity-70 transition-opacity"
                    >
                      {EMAIL}
                    </a>{' '}
                    and we will get back to you.
                  </p>
                  <Link href="/contact" className="btn-primary text-sm">
                    Contact us
                  </Link>
                </div>
              </section>

              {/* Related policies */}
              <div className="border-t border-dove pt-10">
                <p className="text-sm font-medium text-jet-ink mb-4">Related policies</p>
                <div className="flex flex-wrap gap-3">
                  {relatedPolicies.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="rounded-full border border-dove bg-paper px-4 py-2 text-sm text-jet-ink/70 hover:text-jet-ink hover:shadow-subtle transition-all duration-200"
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}