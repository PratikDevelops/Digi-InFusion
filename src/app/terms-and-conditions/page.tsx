import React from 'react';
import type { Metadata } from 'next';
import { site } from '@/config/site';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Digi InFusion',
  description:
    'Digi InFusion Terms & Conditions. The terms that govern your use of our website and the services we provide.',
  openGraph: {
    title: 'Terms & Conditions | Digi InFusion',
    description:
      'Digi InFusion Terms & Conditions. The terms that govern your use of our website and the services we provide.',
    images: [
      {
        url: `${site.url}/assets/images/app_logo.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | Digi InFusion',
    description:
      'Digi InFusion Terms & Conditions. The terms that govern your use of our website and the services we provide.',
    images: [
      {
        url: `${site.url}/assets/images/app_logo.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

const EMAIL = 'digiinfusion.contact@gmail.com';

type Section = {
  id: string;
  title: string;
  body?: string[];
  list?: string[];
};

const sections: Section[] = [
  {
    id: 'services',
    title: 'Services',
    body: [
      'Digi InFusion provides website design, development, digital marketing, and related consulting services. Every project is tailored to the specific needs of your business, and the scope of each engagement is agreed with you before work begins.',
    ],
  },
  {
    id: 'client-responsibilities',
    title: 'Client Responsibilities',
    body: ['To keep your project on schedule, you agree to:'],
    list: [
      'Provide accurate and complete information about your business and requirements.',
      'Respond promptly to our requests for feedback and approvals.',
      'Pay all invoices according to the agreed payment terms.',
    ],
  },
  {
    id: 'payment-terms',
    title: 'Payment Terms',
    body: ['Payment for each project works as follows:'],
    list: [
      'Deposit: 50% of the project fee is due before work begins.',
      'Balance: the remaining amount is due on delivery or according to the agreed milestones.',
      'Late payments: work may be paused until overdue invoices are settled.',
    ],
  },
  {
    id: 'revisions',
    title: 'Revisions',
    body: [
      'Each project includes two rounds of revisions within the agreed scope. Additional revisions or changes to the scope are quoted separately and agreed in writing before the work starts.',
    ],
  },
  {
    id: 'ownership',
    title: 'Ownership and Intellectual Property',
    body: [
      'You own the final deliverables, including code, design files, and content, once you have paid in full.',
      'Digi InFusion keeps the rights to its pre-existing tools, code libraries, and methods. We may show completed work in our portfolio unless you ask us in writing not to.',
    ],
  },
  {
    id: 'third-party-tools',
    title: 'Third-Party Tools',
    body: [
      'We may use third-party tools and services to deliver your project. Their use is subject to their own terms and policies.',
    ],
  },
  {
    id: 'limitation-of-liability',
    title: 'Limitation of Liability',
    body: [
      'Our total liability for any claim arising out of these Terms will not exceed the total fees you paid us in the twelve months before the claim.',
    ],
  },
  {
    id: 'termination',
    title: 'Termination',
    body: [
      'Either party may end the agreement with 14 days\u2019 written notice. You pay for all work completed up to the termination date.',
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    body: [
      'These Terms are governed by the laws of India, and any disputes fall under the jurisdiction of the courts of India.',
    ],
  },
];

const relatedPolicies = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Disclaimer', href: '/disclaimer' },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="border-b border-dove">
          <div className="max-w-page mx-auto px-6 py-16 md:py-20">
            <p className="text-sm font-medium text-jet-ink/60 mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl font-medium text-jet-ink tracking-tight mb-5">
              Terms &amp; Conditions
            </h1>
            <p className="max-w-2xl text-lg text-jet-ink/70 mb-6">
              The terms that apply when you use the Digi InFusion website or
              engage us for a project.
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
                These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your
                use of our website and the services provided by Digi InFusion.
                By using the website or engaging us for a project, you agree to
                these Terms.
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
                    {s.body?.map((p) => (
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
                    Questions about these Terms?
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