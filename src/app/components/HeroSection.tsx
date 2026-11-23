'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)')?.matches;
    if (prefersReduced) return;

    const els = [line1Ref?.current, line2Ref?.current, line3Ref?.current];
    els?.forEach((el) => {
      if (el) {
        el.style.transform = 'translateY(100%)';
      }
    });
    if (subRef?.current) {
      subRef.current.style.opacity = '0';
      subRef.current.style.transform = 'translateY(16px)';
    }
    if (ctaRef?.current) {
      ctaRef.current.style.opacity = '0';
      ctaRef.current.style.transform = 'translateY(16px)';
    }

    const delays = [100, 250, 400];
    els?.forEach((el, i) => {
      setTimeout(() => {
        if (el) {
          el.style.transition = 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)';
          el.style.transform = 'translateY(0)';
        }
      }, delays?.[i]);
    });

    setTimeout(() => {
      if (subRef?.current) {
        subRef.current.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        subRef.current.style.opacity = '1';
        subRef.current.style.transform = 'translateY(0)';
      }
    }, 700);

    setTimeout(() => {
      if (ctaRef?.current) {
        ctaRef.current.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        ctaRef.current.style.opacity = '1';
        ctaRef.current.style.transform = 'translateY(0)';
      }
    }, 850);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden bg-paper">
      {/* Decorative orb */}
      <div
        className="orb-decoration animate-orb-pulse"
        style={{
          width: '500px',
          height: '500px',
          top: '-100px',
          right: '-100px',
        }}
      />
      <div
        className="orb-decoration"
        style={{
          width: '300px',
          height: '300px',
          bottom: '-50px',
          left: '-80px',
          background: 'radial-gradient(circle, #ffa888 0%, transparent 70%)',
          opacity: 0.1,
          animationDelay: '3s',
        }}
      />

      <div className="max-w-page mx-auto w-full relative z-10">
        {/* Label */}
        <div className="mb-8">
          <span className="tag-pill">
            <Icon name="BoltIcon" size={10} className="mr-1" />
            Full-service digital agency
          </span>
        </div>

        {/* Massive headline */}
        <h1 className="font-display font-normal text-jet-ink mb-10" style={{ fontSize: 'clamp(2.8rem, 9vw, 6rem)', lineHeight: 1.0, letterSpacing: '-0.025em' }}>
          <span className="line-reveal block">
            <span ref={line1Ref}>We design, build,</span>
          </span>
          <span className="line-reveal block">
            <span ref={line2Ref}>grow, and produce</span>
          </span>
          <span className="line-reveal block">
            <span ref={line3Ref} className="text-fog">for ambitious brands.</span>
          </span>
        </h1>

        {/* Subheadline + CTA row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-t border-dove pt-8 mt-8">
          <div ref={subRef} className="lg:col-span-6">
            <p className="text-steel text-lg leading-relaxed max-w-lg">
              DigitalBroom is a newly established digital agency focused on thoughtful strategy, digital experiences, and growth-minded execution for ambitious businesses.
            </p>
          </div>
          <div ref={ctaRef} className="lg:col-span-4 lg:col-start-9 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
            <Link href="/contact" className="btn-primary">
              Book a free consultation
              <Icon name="ArrowRightIcon" size={14} />
            </Link>
            <Link href="/work" className="btn-ghost">
              View our work
            </Link>
          </div>
        </div>

        {/* Quick strengths row */}
        {/* <div className="mt-16 flex flex-wrap gap-8 lg:gap-16">
          {[
            { value: 'Strategy', label: 'first' },
            { value: 'Digital', label: 'craft' },
            { value: 'Clear', label: 'communication' },
            { value: 'Focused', label: 'delivery' },
          ]?.map((stat) => (
            <div key={stat?.label} className="flex flex-col gap-1">
              <span className="font-display font-normal text-jet-ink" style={{ fontSize: '1.75rem', letterSpacing: '-0.02em', lineHeight: 1 }}>
                {stat?.value}
              </span>
              <span className="section-label">{stat?.label}</span>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}