export type MenuTag =
  | 'popular'
  | 'best'
  | 'spicy'
  | 'family'
  | 'new'
  | 'nashta'
  | 'delivery';

export type MenuItem = {
  num: string;
  name: { en: string; ur: string };
  desc: { en: string; ur: string };
  tags: MenuTag[];
};

export const menu: MenuItem[] = [
  {
    num: 'M-01',
    name: { en: '7 Days 7 Dishes', ur: '7 دن 7 کھانے' },
    desc: { en: 'Daily specials to keep every visit exciting.', ur: 'روزانہ کی خاص ڈشیں۔' },
    tags: ['popular', 'best'],
  },
  {
    num: 'M-02',
    name: { en: 'Chicken Broast', ur: 'چکن براسٹ' },
    desc: { en: 'Crispy, juicy, served fresh.', ur: 'کرسپی، رسیلا، تازہ۔' },
    tags: ['popular', 'best', 'delivery'],
  },
  {
    num: 'M-03',
    name: { en: 'Chicken Biryani', ur: 'چکن بریانی' },
    desc: { en: 'Spicy rice, tender chicken, rich masala.', ur: 'مسالیدار چاول، نرم چکن۔' },
    tags: ['best', 'spicy', 'delivery'],
  },
  {
    num: 'M-04',
    name: { en: 'Bar-B-Q', ur: 'بار بی کیو' },
    desc: { en: 'Freshly grilled desi favorites.', ur: 'تازہ گرل، دیسی ذائقہ۔' },
    tags: ['family', 'delivery'],
  },
  {
    num: 'M-05',
    name: { en: 'Burgers & Sandwiches', ur: 'برگرز اور سینڈوچز' },
    desc: { en: 'Loaded fast food for quick cravings.', ur: 'فوری بھوک کا جواب۔' },
    tags: ['popular', 'delivery'],
  },
  {
    num: 'M-06',
    name: { en: 'Pizza', ur: 'پیزا' },
    desc: { en: 'Hot, cheesy, perfect for sharing.', ur: 'گرم، چیزی، شیئر کے لیے۔' },
    tags: ['popular', 'family'],
  },
  {
    num: 'M-07',
    name: { en: 'Shawarma & Rolls', ur: 'شوارما اور رولز' },
    desc: { en: 'Saucy, filling, easy anywhere.', ur: 'ساسی، بھرپور، آسان۔' },
    tags: ['delivery'],
  },
  {
    num: 'M-08',
    name: { en: 'Chinese Food', ur: 'چائنیز فوڈ' },
    desc: { en: 'Wok-style for Chinese food lovers.', ur: 'چائنیز شوقین کے لیے۔' },
    tags: ['new'],
  },
  {
    num: 'M-09',
    name: { en: 'Pakistani Food', ur: 'پاکستانی کھانا' },
    desc: { en: 'Handi, haleem, mutton, naan & salad.', ur: 'ہانڈی، حلیم، مٹن، نان۔' },
    tags: ['spicy', 'family'],
  },
  {
    num: 'M-10',
    name: { en: 'Fish & Soup', ur: 'مچھلی اور سوپ' },
    desc: { en: 'Comfort food for cold Quetta evenings.', ur: 'سرد شاموں کا کمفرٹ کھانا۔' },
    tags: ['delivery'],
  },
  {
    num: 'M-11',
    name: { en: 'Nashta', ur: 'ناشتہ' },
    desc: { en: 'Fresh breakfast, every morning.', ur: 'تازہ ناشتہ، ہر صبح۔' },
    tags: ['nashta'],
  },
  {
    num: 'M-12',
    name: { en: 'Handi', ur: 'ہانڈی' },
    desc: { en: 'Slow-cooked, rich, desi.', ur: 'دھیمی آنچ پر بنی، دیسی۔' },
    tags: ['spicy'],
  },
  {
    num: 'M-13',
    name: { en: 'Haleem', ur: 'حلیم' },
    desc: { en: 'Slow-simmered, hearty, warming.', ur: 'دیر تک پکی، گرم، بھرپور۔' },
    tags: ['new', 'family'],
  },
  {
    num: 'M-14',
    name: { en: 'Loaded Fries', ur: 'لوڈڈ فرائز' },
    desc: { en: 'Sauces + flavor, addictive.', ur: 'ساس اور ذائقے۔' },
    tags: ['popular'],
  },
  {
    num: 'M-15',
    name: { en: 'Drinks & Desserts', ur: 'مشروبات اور میٹھے' },
    desc: { en: 'Ice cream, fresh juices, cold drinks.', ur: 'آئسکریم، جوس، کولڈ ڈرنکس۔' },
    tags: ['new'],
  },
];

export const menuFilters: Array<{ key: 'all' | MenuTag; labelKey: string }> = [
  { key: 'all', labelKey: 'all' },
  { key: 'popular', labelKey: 'popular' },
  { key: 'spicy', labelKey: 'spicy' },
  { key: 'family', labelKey: 'family' },
  { key: 'new', labelKey: 'new' },
  { key: 'best', labelKey: 'best' },
  { key: 'nashta', labelKey: 'nashta' },
  { key: 'delivery', labelKey: 'delivery' },
];
