export type Offer = {
  id: string;
  ribbon: { en: string; ur: string };
  title: { en: string; ur: string };
  desc: { en: string; ur: string };
  price: { value: string; unit: { en: string; ur: string } };
  cta: { en: string; ur: string };
  href: string;
  image: string;
  alt: string;
  feat?: boolean;
};

export const offers: Offer[] = [
  {
    id: 'family-broast',
    ribbon: { en: 'App Only', ur: 'ایپ ایکسکلوسیو' },
    title: { en: 'Family Broast Deal', ur: 'فیملی براسٹ ڈیل' },
    desc: {
      en: '6 pcs broast, large fries, 2 drinks, dipping sauces. Perfect for family dinners & group orders.',
      ur: '6 پیس براسٹ، بڑی فرائز، 2 ڈرنکس، ڈپنگ ساس۔',
    },
    price: { value: 'Rs. 2,290', unit: { en: '/ serves 4', ur: '/ 4 افراد' } },
    cta: { en: 'Claim in App', ur: 'ایپ سے حاصل کریں' },
    href: '#order',
    image:
      'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&q=80&auto=format&fit=crop',
    alt: 'Family broast deal',
    feat: true,
  },
  {
    id: 'biryani-lunch',
    ribbon: { en: 'Lunch', ur: 'لنچ' },
    title: { en: 'Biryani Lunch Deal', ur: 'بریانی لنچ ڈیل' },
    desc: {
      en: 'Full biryani plate, raita, cold drink — a satisfying meal for students & office workers.',
      ur: 'مکمل بریانی پلیٹ، رائتہ، ٹھنڈا مشروب۔',
    },
    price: { value: 'Rs. 490', unit: { en: '/ 12–3 pm', ur: '/ 12–3 بجے' } },
    cta: { en: 'Order Deal', ur: 'آرڈر کریں' },
    href: '#order',
    image:
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80&auto=format&fit=crop',
    alt: 'Biryani lunch deal',
  },
  {
    id: 'weekend-bbq',
    ribbon: { en: 'Weekend', ur: 'ویک اینڈ' },
    title: { en: 'Weekend BBQ Special', ur: 'ویک اینڈ بی بی کیو' },
    desc: {
      en: 'Mixed grill, two naans, salad, raita — fresh weekend flavor for the whole family.',
      ur: 'مکس گرل، دو نان، سلاد، رائتہ۔',
    },
    price: { value: 'Rs. 1,890', unit: { en: '/ Fri–Sun', ur: '/ جمعہ–اتوار' } },
    cta: { en: 'Pre-book', ur: 'پری بک' },
    href: '#order',
    image:
      'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&q=80&auto=format&fit=crop',
    alt: 'BBQ weekend special',
  },
  {
    id: 'app-exclusive',
    ribbon: { en: 'App Only', ur: 'ایپ ایکسکلوسیو' },
    title: { en: 'App Exclusive', ur: 'ایپ ایکسکلوسیو' },
    desc: {
      en: 'Download the Jaan Broast app and unlock flat 15% off your first three orders.',
      ur: 'ایپ ڈاؤن لوڈ کریں اور پہلے 3 آرڈرز پر 15% چھوٹ۔',
    },
    price: { value: '-15%', unit: { en: '/ first 3 orders', ur: '/ پہلے 3 آرڈرز' } },
    cta: { en: 'Get App', ur: 'ایپ حاصل کریں' },
    href: '#',
    image:
      'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80&auto=format&fit=crop',
    alt: 'App exclusive deal',
  },
  {
    id: 'nashta-special',
    ribbon: { en: 'Morning', ur: 'صبح' },
    title: { en: 'Nashta Special', ur: 'ناشتہ اسپیشل' },
    desc: {
      en: 'Halwa puri, chana, omelette, paratha, lassi — fresh breakfast, every morning.',
      ur: 'حلوہ پوری، چنا، آملیٹ، پراٹھا، لسی۔',
    },
    price: { value: 'Rs. 290', unit: { en: '/ 7–11 am', ur: '/ 7–11 بجے' } },
    cta: { en: 'Order Nashta', ur: 'ناشتہ آرڈر' },
    href: '#order',
    image:
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80&auto=format&fit=crop',
    alt: 'Nashta breakfast',
  },
  {
    id: 'student-saver',
    ribbon: { en: 'Student', ur: 'اسٹوڈنٹ' },
    title: { en: 'Student Saver', ur: 'اسٹوڈنٹ سیور' },
    desc: {
      en: 'Zinger burger, fries, drink — flash your student ID, get the deal.',
      ur: 'زنگر برگر، فرائز، ڈرنک — اسٹوڈنٹ آئی ڈی دکھائیں۔',
    },
    price: { value: 'Rs. 390', unit: { en: '/ with ID', ur: '/ آئی ڈی کے ساتھ' } },
    cta: { en: 'Grab It', ur: 'حاصل کریں' },
    href: '#order',
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80&auto=format&fit=crop',
    alt: 'Student saver',
  },
];
