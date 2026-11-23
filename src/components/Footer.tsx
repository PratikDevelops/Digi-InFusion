import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

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
};

const socialLinks = [
  { icon: 'GlobeAltIcon', href: '/', label: 'Home' },
  { icon: 'ChatBubbleLeftIcon', href: '/contact', label: 'Contact' },
  { icon: 'VideoCameraIcon', href: '/work', label: 'Work' },
];

export default function Footer() {
  return (
    <footer className="bg-paper border-t border-dove pt-16 pb-8">
      <div className="max-w-page mx-auto px-6">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <AppLogo size={28} />
              <span className="font-medium text-jet-ink text-base tracking-tight">DigitalBroom</span>
            </Link>
            <p className="text-fog text-sm leading-relaxed max-w-[200px]">
              A growing digital agency focused on strategy, design, and digital experiences.
            </p>
            <div className="flex gap-3 mt-5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-dove text-fog hover:text-jet-ink hover:border-jet-ink transition-all duration-200"
                >
                  <Icon name={s.icon as any} size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <p className="section-label mb-4">Services</p>
            <ul className="space-y-3">
              {footerLinks.services.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-fog hover:text-jet-ink text-sm font-medium transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <p className="section-label mb-4 opacity-0">More</p>
            <ul className="space-y-3">
              {footerLinks.services.slice(4).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-fog hover:text-jet-ink text-sm font-medium transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <p className="section-label mb-4">Company</p>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-fog hover:text-jet-ink text-sm font-medium transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dove pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-pewter text-sm">© 2026 DigitalBroom. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/faq" className="text-pewter hover:text-jet-ink text-sm transition-colors duration-150">FAQ</Link>
            <Link href="/contact" className="text-pewter hover:text-jet-ink text-sm transition-colors duration-150">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}