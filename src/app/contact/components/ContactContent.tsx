'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import SectionReveal from '@/components/SectionReveal';
import { services } from '@/data/services';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactContent() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Your name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Your email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please tell us about your project.';
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-paper">
        <div className="max-w-page mx-auto">
          <SectionReveal>
            <p className="section-label mb-4">Get in touch</p>
          </SectionReveal>
          <SectionReveal delay={80}>
            <h1
              className="font-display font-normal text-jet-ink mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                letterSpacing: '-0.025em',
                lineHeight: 1.05,
              }}
            >
              Let us talk about
              <br />
              <span className="text-fog">your next project.</span>
            </h1>
          </SectionReveal>
          <SectionReveal delay={140}>
            <p className="text-fog text-lg leading-relaxed max-w-xl">
              Book a free 30-minute consultation or drop us a message. We respond to every inquiry
              within one business day.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section id="contact-form" className="py-20 px-6 bg-paper">
        <div className="max-w-page mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <SectionReveal>
                `
                {submitted ? (
                  <div className="bg-cream-surface border border-dove rounded-[24px] p-8 md:p-10 text-center shadow-[0_0_0_1px_rgba(10,10,10,0.02)]">
                    <div className="w-12 h-12 bg-sand rounded-full flex items-center justify-center mx-auto mb-5">
                      <Icon name="CheckIcon" size={22} className="text-jet-ink" />
                    </div>
                    <h2
                      className="text-jet-ink font-medium text-2xl md:text-3xl mb-3"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      Message received
                    </h2>
                    <p className="text-fog text-base leading-relaxed mb-6 max-w-sm mx-auto">
                      Thanks, {formData.name.split(' ')[0]}. Your message has been validated locally
                      in this browser. To receive submissions, connect your preferred form endpoint
                      or email service in your environment configuration.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                      }}
                      className="btn-ghost text-sm"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col gap-5 border border-dove rounded-[24px] bg-cream-surface p-6 md:p-8 shadow-[0_0_0_1px_rgba(10,10,10,0.02)]"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-jet-ink text-sm font-medium">
                          Full name <span className="text-ember">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={`input-field ${errors.name ? 'error' : ''}`}
                          autoComplete="name"
                        />
                        {errors.name && <p className="text-ember text-xs">{errors.name}</p>}
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-jet-ink text-sm font-medium">
                          Email address <span className="text-ember">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={`input-field ${errors.email ? 'error' : ''}`}
                          autoComplete="email"
                        />
                        {errors.email && <p className="text-ember text-xs">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-jet-ink text-sm font-medium">
                          Phone number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="input-field"
                          autoComplete="tel"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="service" className="text-jet-ink text-sm font-medium">
                          Service of interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="">Select a service</option>
                          {services.map((s) => (
                            <option key={s.slug} value={s.slug}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    `
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-jet-ink text-sm font-medium">
                        Tell us about your project <span className="text-ember">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What are you trying to achieve, and what is getting in the way?"
                        className={`input-field resize-none ${errors.message ? 'error' : ''}`}
                      />
                      {errors.message && <p className="text-ember text-xs">{errors.message}</p>}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-paper/30 border-t-paper rounded-full animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            Send message
                            <Icon name="ArrowRightIcon" size={14} />
                          </>
                        )}
                      </button>
                      <p className="text-pewter text-xs">
                        We respond within one business day. No spam, ever.
                      </p>
                    </div>
                  </form>
                )}
              </SectionReveal>
            </div>

            <div className="lg:col-span-5">
              <SectionReveal delay={200}>
                <div className="bg-cream-surface border border-dove rounded-[24px] p-7 md:p-8 flex flex-col gap-6 shadow-[0_0_0_1px_rgba(10,10,10,0.02)]">
                  <div>
                    <p className="section-label mb-3">What happens next</p>
                    <h2
                      className="text-jet-ink font-medium text-xl md:text-2xl mb-3"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      We would love to hear about your project.
                    </h2>
                    <p className="text-fog text-sm md:text-base leading-relaxed">
                      Share a few details and we will respond with a clear next step, whether that
                      means a conversation, a proposal, or simply advice on the right direction.
                    </p>
                  </div>

                  <div className="space-y-3 text-sm text-steel">
                    {[
                      'Tell us what you are trying to achieve.',
                      'Share your timeline, goals, and current challenges.',
                      'We will recommend the most useful next step.',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl bg-paper border border-dove px-3 py-3"
                      >
                        <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-jet-ink text-[10px] text-paper">
                          ✓
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={300}>
                <div className="mt-4 p-5 rounded-[22px] border border-dove bg-paper flex items-center justify-between gap-4 shadow-[0_0_0_1px_rgba(10,10,10,0.02)]">
                  <div>
                    <p className="text-jet-ink text-sm font-medium mb-0.5">Have questions?</p>
                    <p className="text-fog text-xs">Check our FAQ before reaching out.</p>
                  </div>
                  <Link href="/faq" className="btn-nav text-xs shrink-0">
                    View FAQ
                    <Icon name="ArrowRightIcon" size={12} />
                  </Link>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      <div
        className="orb-decoration fixed top-1/4 right-0 pointer-events-none"
        style={{ width: '400px', height: '400px', opacity: 0.08 }}
      />
    </>
  );
}
