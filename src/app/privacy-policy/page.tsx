import React from 'react';
import type { Metadata } from 'next';
import { site } from '@/config/site';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Digi InFusion',
  description:
    'Digi InFusion Privacy Policy. How we collect, use, and protect your information, and the rights you have over your data.',
  openGraph: {
    title: 'Privacy Policy | Digi InFusion',
    description:
      'Digi InFusion Privacy Policy. How we collect, use, and protect your information, and the rights you have over your data.',
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
    title: 'Privacy Policy | Digi InFusion',
    description:
      'Digi InFusion Privacy Policy. How we collect, use, and protect your information, and the rights you have over your data.',
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
  afterList?: string[];
};

const sections: Section[] = [
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    body: [
      'We collect only the information you choose to give us. When you contact us through the website, that includes:',
    ],
    list: [
      'Your name and email address.',
      'Your phone number, if you provide one.',
      'The contents of your message and any project details you share.',
    ],
  },
  {
    id: 'how-we-use-your-information',
    title: 'How We Use Your Information',
    body: ['We use the information you send us to:'],
    list: [
      'Respond to your enquiries and discuss your project.',
      'Provide our services and manage client work and invoicing.',
      'Send replies and administrative messages related to your enquiry or project.',
      'Keep the website secure and working properly.',
    ],
  },
  {
    id: 'cookies-and-analytics',
    title: 'Cookies and Analytics',
    body: [
      'This website does not use third-party analytics or advertising trackers. We only use essential cookies and technical storage that the site needs to function, including for the contact form.',
      'If we add analytics tools in the future, we will update this policy before they go live.',
    ],
  },
  {
    id: 'data-retention',
    title: 'Data Retention',
    body: [
      'Contact form enquiries and email correspondence are kept for up to 24 months after our last communication, then deleted.',
      'Project and invoicing records are kept for as long as applicable tax and accounting laws require.',
    ],
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    body: [
      'You can ask us to give you access to your personal data, correct it, or delete it. Email us at the address below and we will respond within 30 days.',
    ],
  },
  {
    id: 'security',
    title: 'Security',
    body: [
      'We take reasonable steps to protect your information. However, no method of transmission over the internet is completely secure, so we cannot guarantee absolute security.',
    ],
  },
  {
    id: 'childrens-privacy',
    title: "Children's Privacy",
    body: [
      'Our website and services are intended for businesses and adults. We do not knowingly collect personal information from children. If you believe a child has sent us their information, contact us and we will delete it.',
    ],
  },
  {
    id: 'policy-changes',
    title: 'Changes to This Policy',
    body: [
      'We may update this policy from time to time. The "Last updated" date at the top of this page shows when it last changed.',
    ],
  },
];

const relatedPolicies = [
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Disclaimer', href: '/disclaimer' },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="border-b border-dove">
          <div className="max-w-page mx-auto px-6 py-16 md:py-20">
            <p className="text-sm font-medium text-jet-ink/60 mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl font-medium text-jet-ink tracking-tight mb-5">
              Privacy Policy
            </h1>
            <p className="max-w-2xl text-lg text-jet-ink/70 mb-6">
              What information we collect, how we use it, and the control you
              have over your data when you use the Digi InFusion website.
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
                Digi InFusion operates this website. This Privacy Policy explains
                how we handle personal information that you share with us. By
                using the website or contacting us, you agree to the practices
                described below.
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
                    {s.afterList?.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
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