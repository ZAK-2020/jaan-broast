export type Dish = {
  id: string;
  name: { en: string; ur: string };
  desc: { en: string; ur: string };
  meta: { en: string; ur: string };
  price: number;
  image: string;
  alt: string;
};

export const dishes: Dish[] = [
  {
    id: 'broast',
    name: { en: 'Crispy Chicken Broast', ur: 'کرسپی چکن براسٹ' },
    desc: {
      en: 'Golden, crunchy, and served hot with fries, sauce, and the flavor Jaan is known for.',
      ur: 'سنہرا، کرنچی، تازہ پیش کیا جاتا ہے — فرائز اور ساس کے ساتھ۔',
    },
    meta: { en: 'Signature · Rs. 650', ur: 'سگنیچر · روپے 650' },
    price: 650,
    image:
      'https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?w=400&q=80&auto=format&fit=crop',
    alt: 'Crispy broast',
  },
  {
    id: 'biryani',
    name: { en: 'Chicken Biryani', ur: 'چکن بریانی' },
    desc: {
      en: 'A spicy, satisfying classic — fragrant rice, tender chicken, rich masala.',
      ur: 'مسالیدار اور بھرپور ذائقہ — خوشبودار چاول، نرم چکن۔',
    },
    meta: { en: 'Best Seller · Rs. 380', ur: 'بیسٹ سیلر · روپے 380' },
    price: 380,
    image:
      'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&q=80&auto=format&fit=crop',
    alt: 'Chicken biryani',
  },
  {
    id: 'chargha',
    name: { en: 'Arabic Chargha', ur: 'عربی چڑھا' },
    desc: {
      en: 'A flavorful favorite for customers who love tender chicken with bold seasoning.',
      ur: 'نرم چکن اور تیز مسالوں کا دلکش امتزاج۔',
    },
    meta: { en: 'Highly Recommended · Rs. 1,250', ur: 'ہائلی ریکمنڈڈ · روپے 1,250' },
    price: 1250,
    image:
      'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&q=80&auto=format&fit=crop',
    alt: 'Arabic chargha',
  },
  {
    id: 'loaded-fries',
    name: { en: 'Loaded Fries', ur: 'لوڈڈ فرائز' },
    desc: {
      en: 'Crispy fries topped with sauces and flavors that make every bite addictive.',
      ur: 'کرسپی فرائز، ساس اور ذائقوں کے ساتھ لاجواب۔',
    },
    meta: { en: 'Crowd Favorite · Rs. 420', ur: 'کراؤڈ فیورٹ · روپے 420' },
    price: 420,
    image:
      'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&q=80&auto=format&fit=crop',
    alt: 'Loaded fries',
  },
  {
    id: 'tikka-pizza',
    name: { en: 'Chicken Tikka Pizza', ur: 'چکن تکہ پیزا' },
    desc: {
      en: 'Hot, cheesy, and topped with desi-style chicken tikka flavor.',
      ur: 'گرم، چیزی اور دیسی چکن تکہ کے ذائقے سے سجا۔',
    },
    meta: { en: 'Popular · Rs. 950', ur: 'پاپولر · روپے 950' },
    price: 950,
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80&auto=format&fit=crop',
    alt: 'Chicken tikka pizza',
  },
  {
    id: 'bbq-platter',
    name: { en: 'BBQ Platter', ur: 'بی بی کیو پلیٹر' },
    desc: {
      en: 'Freshly grilled items made for family dinners, gatherings, and desi food lovers.',
      ur: 'تازہ گرل کی گئی اشیاء — فیملی ڈنرز کے لیے بہترین۔',
    },
    meta: { en: 'Family Size · Rs. 1,850', ur: 'فیملی سائز · روپے 1,850' },
    price: 1850,
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80&auto=format&fit=crop',
    alt: 'BBQ platter',
  },
];
