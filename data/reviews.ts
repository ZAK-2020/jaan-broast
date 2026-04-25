export type Review = {
  id: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: { en: string; ur: string };
  author: string;
  source: string;
  initial: string;
  variant?: 'light' | 'dark';
  avatarTone?: 'red' | 'saffron';
};

export const reviews: Review[] = [
  {
    id: 'r1',
    rating: 5,
    quote: {
      en: 'Arabic Chargha was tasty and highly recommended.',
      ur: 'عربی چڑھا بہت لذیذ تھا اور انتہائی سفارش کے قابل ہے۔',
    },
    author: 'Ahmed',
    source: 'Foodpanda',
    initial: 'A',
  },
  {
    id: 'r2',
    rating: 5,
    quote: {
      en: 'Loaded fries were fresh, flavorful, and satisfying.',
      ur: 'لوڈڈ فرائز تازہ، ذائقہ دار اور مطمئن کرنے والے تھے۔',
    },
    author: 'Sana',
    source: 'Google Review',
    initial: 'S',
    variant: 'dark',
    avatarTone: 'saffron',
  },
  {
    id: 'r3',
    rating: 5,
    quote: {
      en: 'Great taste, good quantity, and always served warm.',
      ur: 'ذائقہ بہترین، مقدار اچھی، ہمیشہ گرم پیش کیا جاتا ہے۔',
    },
    author: 'Bilal',
    source: 'Regular',
    initial: 'B',
  },
  {
    id: 'r4',
    rating: 5,
    quote: {
      en: 'Biryani, pulao, qeema — fast food items are loved by regulars.',
      ur: 'بریانی، پلاؤ، قیمہ — باقاعدہ گاہک پسند کرتے ہیں۔',
    },
    author: 'Fatima',
    source: 'Family Order',
    initial: 'F',
  },
];

/** Aggregate rating for JSON-LD. Recompute manually when reviews change. */
export const aggregateRating = {
  ratingValue: 4.9,
  reviewCount: reviews.length,
  bestRating: 5,
  worstRating: 1,
};
