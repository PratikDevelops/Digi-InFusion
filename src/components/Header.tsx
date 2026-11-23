'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  // { label: 'FAQ', href: '/faq' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-paper/90 backdrop-blur-[12px] border-b border-dove'
            : 'bg-transparent'
        }`}
        style={{ height: '64px' }}
      >
        <div className="max-w-page mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <AppLogo size={32} />
            <span className="font-sans font-medium text-jet-ink text-base tracking-tight hidden sm:block">
              DigitalBroom
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className={`nav-link ${pathname === link?.href ? 'active' : ''}`}
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="btn-ghost text-sm">
              Get in touch
            </Link>
            <Link href="/contact" className="btn-primary text-sm">
              Book a call
              <Icon name="ArrowRightIcon" size={14} />
            </Link>
          </div>

          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-dove bg-paper transition-all duration-200 hover:shadow-subtle"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <span
                className={`absolute block w-4 h-[1.5px] bg-jet-ink transition-all duration-300 ${
                  isMobileOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`absolute block w-4 h-[1.5px] bg-jet-ink transition-all duration-300 ${
                  isMobileOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute block w-4 h-[1.5px] bg-jet-ink transition-all duration-300 ${
                  isMobileOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backdropFilter: 'blur(16px)', backgroundColor: 'rgba(255,255,255,0.95)' }}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-8">
          <nav className="flex flex-col gap-1 flex-1">
            {navLinks?.map((link, i) => (
              <Link
                key={link?.href}
                href={link?.href}
                className={`flex items-center justify-between py-4 border-b border-dove text-xl font-medium transition-all duration-300 ${
                  pathname === link?.href ? 'text-jet-ink' : 'text-fog hover:text-jet-ink'
                }`}
                style={{ transitionDelay: isMobileOpen ? `${i * 50}ms` : '0ms' }}
              >
                {link?.label}
                <Icon name="ArrowRightIcon" size={16} className="text-fog" />
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 mt-8">
            <Link href="/contact" className="btn-primary w-full justify-center text-base py-4">
              Book a Free Consultation
            </Link>
            <Link href="/contact" className="btn-ghost w-full justify-center text-base py-4">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}