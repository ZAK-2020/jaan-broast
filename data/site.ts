/**
 * Brand + contact info. Edit this file to change the business details
 * that appear in the header, footer, order section, location block,
 * JSON-LD structured data, and sitemap.
 */

export const site = {
  name: 'Jaan Broast & Biryani',
  shortName: 'Jaan Broast',
  legalName: 'Jaan Broast & Biryani',
  url: 'https://jaanbroast.com',
  tagline: "Quetta's Favorite Spot for Broast, Biryani & Fast Food",
  description:
    'Crispy chicken broast, spicy biryani, smoky BBQ, burgers, pizza, shawarma, Chinese and fresh nashta in Quetta. Dine-in, takeaway, and fast delivery on Prince Road.',

  address: {
    street: 'Prince Road',
    city: 'Quetta',
    region: 'Balochistan',
    country: 'Pakistan',
    postalCode: '',
  },

  geo: {
    // Approximate Prince Road, Quetta — replace with exact kitchen coords once known.
    latitude: 30.1894,
    longitude: 67.0095,
  },

  hours: {
    label: 'Daily · 7:00 am – 1:00 am',
    // ISO-format for JSON-LD openingHoursSpecification
    opens: '07:00',
    closes: '01:00',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  },

  phones: [
    { display: '081-2669900', tel: '0812669900' },
    { display: '081-2669988', tel: '0812669988' },
    { display: '081-2839900', tel: '0812839900' },
    { display: '03111-786-550', tel: '03111786550' },
    { display: '0326-2669988', tel: '03262669988' },
  ],

  whatsapp: {
    display: '+92 336 8156071',
    // wa.me number format (no plus, no dashes)
    number: '923368156071',
  },

  social: {
    instagram: 'https://instagram.com/jaanbroast',
    facebook: 'https://facebook.com/jaanbroast',
  },

  order: {
    app: 'https://play.google.com/store/apps/details?id=com.quickup.janbroast',
    foodpanda: '#', // replace with real Foodpanda link
    directions: 'https://www.google.com/maps/search/?api=1&query=52Q8%2BH3+Quetta,+Pakistan',
  },

  priceRange: 'PKR 290 – 2,290',
  servesCuisine: ['Pakistani', 'Fast Food', 'BBQ', 'Chinese', 'Breakfast'],
} as const;

export type Site = typeof site;
