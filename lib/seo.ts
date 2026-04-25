import type { Metadata } from 'next';
import { site } from '@/data/site';
import { routing } from '@/i18n/routing';
import type { Locale } from './utils';

type MetaArgs = {
  locale: Locale;
  title: string;
  description: string;
  keywords?: string;
  path?: string;
};

export function buildMetadata({ locale, title, description, keywords, path = '' }: MetaArgs): Metadata {
  const url = `${site.url}/${locale}${path}`;
  const ogLocale = locale === 'ur' ? 'ur_PK' : 'en_PK';
  const altLocale = locale === 'ur' ? 'en_US' : 'ur_PK';

  return {
    metadataBase: new URL(site.url),
    title,
    description,
    keywords,
    applicationName: site.name,
    authors: [{ name: site.name }],
    creator: site.name,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${site.url}/${l}${path}`]),
      ),
    },
    openGraph: {
      type: 'website',
      url,
      siteName: site.name,
      title,
      description,
      locale: ogLocale,
      alternateLocale: [altLocale],
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
    robots: { index: true, follow: true },
    icons: { icon: '/logo.png', apple: '/logo.png' },
  };
}
