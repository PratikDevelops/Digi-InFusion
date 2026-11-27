import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const CONTACT_EMAIL = 'digiinfusion.contact@gmail.com';
const CONTACT_PHONE_DISPLAY = '+91 89281 66954';
const CONTACT_PHONE_HREF = 'tel:+918928166954';

const footerLinks = {
  services: [
    { label: 'Web Design & Dev', href: '/services/web-design-development' },
    { label: 'App Design & Dev', href: '/services/app-design-development' },
    { label: 'SEO', href: '/services/seo' },
    { label: 'Social Media', href: '/services/social-media-marketing' },
    { label: 'Paid Ads', href: '/services/ads-paid-marketing' },
    { label: 'Automation', href: '/services/automation' },
    { label: 'Video Editing', href: '/services/video-editing' },
    { label: 'Video Production', href: '/services/video-shooting-production' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ],
};

// Dummy links: replace with your real profile URLs (same as the Contact page)
const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/digiinfusion',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/digiinfusion',
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/digiinfusion',
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
];

const linkClass =
  'inline-block py-0.5 text-fog hover:text-jet-ink text-sm font-medium transition-colors duration-150';

export default function Footer() {
  return (
    <footer className="bg-paper border-t border-dove pt-16 pb-8 md:pt-20">
      <div className="max-w-page mx-auto px-6">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 mb-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-x-12">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <AppLogo size={140} />
              {/* <span className="font-medium text-jet-ink text-base tracking-tight">
                Digi InFusion
              </span> */}
            </Link>
            <p className="text-fog text-sm leading-relaxed max-w-[280px]">
              A digital agency focused on strategy, design, and digital experiences.
            </p>

            <ul className="mt-5 flex flex-col gap-2">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-fog hover:text-jet-ink text-sm transition-colors duration-150 break-all"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_PHONE_HREF}
                  className="text-fog hover:text-jet-ink text-sm transition-colors duration-150"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
            </ul>

            <ul className="flex items-center gap-3 mt-6">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-dove text-fog hover:text-jet-ink hover:border-jet-ink transition-all duration-200"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {s.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <nav aria-label="Footer services" className="col-span-1">
            <p className="section-label mb-5">Services</p>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Footer company" className="col-span-1">
            <p className="section-label mb-5">Company</p>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Footer legal" className="col-span-2 sm:col-span-1">
            <p className="section-label mb-5">Legal</p>
            <ul className="flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dove pt-6 md:pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-pewter text-sm">© 2026 Digi InFusion. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.legal.slice(0, 3).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-pewter hover:text-jet-ink text-sm transition-colors duration-150"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}