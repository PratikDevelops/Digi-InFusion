import React from 'react';
import type { Metadata, Viewport } from 'next';
import { DM_Sans, JetBrains_Mono } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { site } from '@/config/site';
import '../styles/tailwind.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
});

const defaultTitle = 'Digi InFusion | Digital Agency for Web, Marketing & Video';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#183b32',
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: defaultTitle,
  description: site.description,
  applicationName: 'Digi InFusion',
  authors: [{ name: 'Digi InFusion' }],
  creator: 'Digi InFusion',
  publisher: 'Digi InFusion',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: 'en',
    url: site.url,
    title: defaultTitle,
    description: site.description,
    images: [
      {
        url: `${site.url}/assets/images/app_logo.png`,
        width: 1200,
        height: 630,
        alt: 'Digi InFusion logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: site.description,
    images: [
      {
        url: `${site.url}/assets/images/app_logo.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className={dmSans.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}