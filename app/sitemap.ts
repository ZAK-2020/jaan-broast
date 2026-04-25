import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routing.locales.map((locale) => ({
    url: `${site.url}/${locale}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: locale === routing.defaultLocale ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${site.url}/${l}`]),
      ),
    },
  }));
}
