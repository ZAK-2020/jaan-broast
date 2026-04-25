export type CategoryVariant = 'cream' | 'red' | 'ink' | 'saffron';

export type Category = {
  id: string;
  variant: CategoryVariant;
  tag: { en: string; ur: string };
  name: { en: string; ur: string };
  desc: { en: string; ur: string };
  image: string;
  alt: string;
};

export const categories: Category[] = [
  {
    id: 'broast',
    variant: 'red',
    tag: { en: 'Signature', ur: 'سگنیچر' },
    name: { en: 'Chicken Broast', ur: 'چکن براسٹ' },
    desc: {
      en: 'Crispy outside, juicy inside — the one Quetta comes back for.',
      ur: 'باہر سے کرسپی، اندر سے رسیلا — کوئٹہ کی پہلی پسند۔',
    },
    image:
      'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&q=80&auto=format&fit=crop',
    alt: 'Chicken broast',
  },
  {
    id: 'biryani',
    variant: 'cream',
    tag: { en: 'Best Seller', ur: 'بیسٹ سیلر' },
    name: { en: 'Chicken Biryani', ur: 'چکن بریانی' },
    desc: {
      en: 'Aromatic, spicy, rich masala — built for lunch, dinner, family orders.',
      ur: 'خوشبودار، مسالیدار، لنچ اور ڈنر کے لیے بہترین۔',
    },
    image:
      'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80&auto=format&fit=crop',
    alt: 'Biryani',
  },
  {
    id: 'bbq',
    variant: 'ink',
    tag: { en: 'Fresh Grill', ur: 'فریش گرل' },
    name: { en: 'Bar-B-Q', ur: 'بار بی کیو' },
    desc: {
      en: 'Smoky, tender, grilled to order — desi flavor, done right.',
      ur: 'سموکی، نرم، تازہ گرل — دیسی ذائقہ۔',
    },
    image:
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&auto=format&fit=crop',
    alt: 'BBQ',
  },
  {
    id: 'burgers',
    variant: 'saffron',
    tag: { en: 'Quick Craving', ur: 'فوری کھانا' },
    name: { en: 'Burgers & Zingers', ur: 'برگرز اور زنگر' },
    desc: {
      en: 'Loaded, saucy, satisfying — for big appetite and quick cravings.',
      ur: 'لوڈڈ، ساسی، بڑی بھوک کا حل۔',
    },
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80&auto=format&fit=crop',
    alt: 'Burger',
  },
  {
    id: 'pizza',
    variant: 'cream',
    tag: { en: 'Share Size', ur: 'شیئر سائز' },
    name: { en: 'Pizza & Loaded Fries', ur: 'پیزا اور لوڈڈ فرائز' },
    desc: {
      en: 'Cheesy, hot, loaded — late-night orders, family nights, all good.',
      ur: 'چیزی، گرم، فیملی نائٹس کے لیے۔',
    },
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&auto=format&fit=crop',
    alt: 'Pizza',
  },
  {
    id: 'shawarma',
    variant: 'red',
    tag: { en: 'Wraps', ur: 'رولز' },
    name: { en: 'Shawarma & Rolls', ur: 'شوارما اور رولز' },
    desc: {
      en: 'Saucy, filling, easy to enjoy anywhere in Quetta.',
      ur: 'ساسی، بھرپور، کوئٹہ میں ہر جگہ آسان۔',
    },
    image:
      'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80&auto=format&fit=crop',
    alt: 'Shawarma',
  },
  {
    id: 'chinese',
    variant: 'ink',
    tag: { en: 'Wok Style', ur: 'واک اسٹائل' },
    name: { en: 'Chinese Food', ur: 'چائنیز فوڈ' },
    desc: {
      en: 'Flavorful wok-style meals for Chinese food lovers.',
      ur: 'چائنیز کھانے کے شوقین افراد کے لیے۔',
    },
    image:
      'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80&auto=format&fit=crop',
    alt: 'Chinese',
  },
  {
    id: 'nashta',
    variant: 'saffron',
    tag: { en: 'Morning', ur: 'صبح' },
    name: { en: 'Nashta', ur: 'ناشتہ' },
    desc: {
      en: 'Start your day fresh — breakfast classics from the Jaan Broast kitchen.',
      ur: 'تازہ ناشتہ، ہر صبح جان براسٹ کے کچن سے۔',
    },
    image:
      'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80&auto=format&fit=crop',
    alt: 'Nashta',
  },
];
