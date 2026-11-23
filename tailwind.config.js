/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        'jet-ink': 'var(--color-jet-ink)',
        'charcoal': 'var(--color-charcoal)',
        'fog': 'var(--color-fog)',
        'pewter': 'var(--color-pewter)',
        'steel': 'var(--color-steel)',
        'dove': 'var(--color-dove)',
        'cream-surface': 'var(--color-cream)',
        'paper': 'var(--color-paper)',
        'sand': 'var(--color-sand)',
        'slate-custom': 'var(--color-slate)',
        'ember': 'var(--color-ember)',
        'sunbeam': 'var(--color-sunbeam)',
        'sprout': 'var(--color-sprout)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
      },
      borderRadius: {
        sm: 'var(--radius-sm, 3px)',
        md: 'var(--radius-md, 6px)',
        xl: 'var(--radius-xl, 12px)',
        '2xl': 'var(--radius-2xl, 16px)',
        full: '9999px',
        cards: '16px',
        pills: '9999px',
        inputs: '6px',
        buttons: '9999px',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      maxWidth: {
        page: 'var(--page-max-width)',
      },
      spacing: {
        '18': '72px',
        '22': '88px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        orbPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.18' },
          '50%': { transform: 'scale(1.15)', opacity: '0.25' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'orb-pulse': 'orbPulse 6s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};