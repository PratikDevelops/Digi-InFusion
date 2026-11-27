import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Cookie Policy | Digi InFusion',
  description:
    'Digi InFusion Cookie Policy. What cookies are, how our website uses them, and how you can manage them.',
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
    id: 'what-are-cookies',
    title: 'What Are Cookies?',
    body: [
      'Cookies are small text files that a website places on your device when you visit it. They are widely used to make websites work properly and to give visitors a smoother browsing experience.',
    ],
  },
  {
    id: 'how-we-use-cookies',
    title: 'How We Use Cookies',
    body: [
      'This website does not use third-party analytics or advertising trackers. We only use essential cookies and technical storage that the site needs to function, including for the contact form.',
      'If we add analytics tools in the future, we will update this policy before they go live.',
    ],
  },
  {
    id: 'essential-cookies',
    title: 'Essential Cookies',
    body: [
      'Essential cookies are necessary for the website to work as intended. They support core functions such as loading pages correctly and letting you submit the contact form. Because the site cannot work properly without them, they cannot be switched off from within our website.',
    ],
  },
  {
    id: 'managing-cookies',
    title: 'Managing Cookies',
    body: [
      'You can control and delete cookies through your browser settings. Most browsers let you:',
    ],
    list: [
      'See which cookies are stored on your device and delete them.',
      'Block cookies from being placed, either for all sites or for specific ones.',
      'Clear cookies automatically when you close the browser.',
    ],
  },
  {
    id: 'effects-of-disabling',
    title: 'If You Disable Cookies',
    body: [
      'If you block or delete essential cookies, some parts of the website, such as the contact form, may not work as expected, and you may need to re-enter preferences each time you visit.',
    ],
  },
  {
    id: 'policy-changes',
    title: 'Changes to This Policy',
    body: [
      'We may update this Cookie Policy from time to time. The "Last updated" date at the top of this page shows when it last changed.',
    ],
  },
];

const relatedPolicies = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Disclaimer', href: '/disclaimer' },
];

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="border-b border-dove">
          <div className="max-w-page mx-auto px-6 py-16 md:py-20">
            <p className="text-sm font-medium text-jet-ink/60 mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl font-medium text-jet-ink tracking-tight mb-5">
              Cookie Policy
            </h1>
            <p className="max-w-2xl text-lg text-jet-ink/70 mb-6">
              What cookies are, how the Digi InFusion website uses them, and how
              you can manage them.
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
                This Cookie Policy explains how Digi InFusion uses cookies on
                this website. For more on how we handle your personal
                information, see our{' '}
                <Link
                  href="/privacy-policy"
                  className="text-jet-ink underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  Privacy Policy
                </Link>
                .
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
                    Questions about our use of cookies?
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