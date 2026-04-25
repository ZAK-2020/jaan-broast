import { site } from '@/data/site';
import { menu } from '@/data/menu';
import { dishes } from '@/data/dishes';
import { aggregateRating, reviews } from '@/data/reviews';
import type { Locale } from './utils';

/**
 * Build LocalBusiness / Restaurant schema for Google rich results.
 * Returns an object you can inject as <script type="application/ld+json">.
 */
export function restaurantJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${site.url}/#restaurant`,
    name: site.name,
    image: `${site.url}/og-image.png`,
    url: site.url,
    telephone: `+92${site.phones[0].tel.replace(/^0/, '')}`,
    priceRange: site.priceRange,
    servesCuisine: site.servesCuisine,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: site.hours.days,
        opens: site.hours.opens,
        closes: site.hours.closes,
      },
    ],
    sameAs: [site.social.instagram, site.social.facebook].filter(Boolean),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: aggregateRating.bestRating,
      worstRating: aggregateRating.worstRating,
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating,
        bestRating: 5,
      },
      author: { '@type': 'Person', name: r.author },
      reviewBody: r.quote[locale],
    })),
    hasMenu: {
      '@type': 'Menu',
      name: 'Jaan Broast Menu',
      hasMenuSection: [
        {
          '@type': 'MenuSection',
          name: 'Signature Dishes',
          hasMenuItem: dishes.map((d) => ({
            '@type': 'MenuItem',
            name: d.name[locale],
            description: d.desc[locale],
            offers: {
              '@type': 'Offer',
              price: d.price,
              priceCurrency: 'PKR',
            },
          })),
        },
        {
          '@type': 'MenuSection',
          name: 'Full Menu',
          hasMenuItem: menu.map((m) => ({
            '@type': 'MenuItem',
            name: m.name[locale],
            description: m.desc[locale],
          })),
        },
      ],
    },
  };
}
