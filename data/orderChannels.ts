import { site } from './site';
import { waOrderUrl } from '@/lib/utils';

export type OrderChannel = {
  id: string;
  variant: 'red' | 'ink' | 'saffron' | 'cream';
  kicker: string;
  title: { en: string; ur: string };
  desc: { en: string; ur: string };
  cta: { en: string; ur: string };
  href: string;
};

export const orderChannels: OrderChannel[] = [
  {
    id: 'online',
    variant: 'red',
    kicker: '01 · Fastest',
    title: { en: 'Order Online', ur: 'آن لائن آرڈر' },
    desc: {
      en: 'Browse the full menu, customize your meal, and check out in under a minute.',
      ur: 'پورا مینو دیکھیں، کھانا بنائیں، ایک منٹ میں چیک آؤٹ۔',
    },
    cta: { en: 'Start Order →', ur: 'آرڈر شروع کریں →' },
    href: '#menu',
  },
  {
    id: 'app',
    variant: 'ink',
    kicker: '02 · App Exclusive',
    title: { en: 'Download App', ur: 'ایپ ڈاؤن لوڈ' },
    desc: {
      en: 'Live order tracking, faster re-orders, and app-only discounts on every category.',
      ur: 'لائیو ٹریکنگ، ری آرڈرز اور ایپ ایکسکلوسیو ڈسکاؤنٹس۔',
    },
    cta: { en: 'Get the App', ur: 'ایپ حاصل کریں' },
    href: site.order.app,
  },
  {
    id: 'whatsapp',
    variant: 'saffron',
    kicker: '03 · Quickest',
    title: { en: 'WhatsApp Us', ur: 'واٹس ایپ پر آرڈر' },
    desc: {
      en: "Send your order on WhatsApp — confirm, pay cash, and we'll dispatch.",
      ur: 'واٹس ایپ پر آرڈر بھیجیں — کیش آن ڈیلیوری۔',
    },
    cta: { en: 'Chat on WhatsApp', ur: 'واٹس ایپ پر چیٹ' },
    href: waOrderUrl(
      site.whatsapp.number,
      'Hi Jaan Broast! I would like to place a delivery order. Please confirm the menu and delivery time.',
    ),
  },
  {
    id: 'phone',
    variant: 'cream',
    kicker: '04 · Classic',
    title: { en: 'Call for Delivery', ur: 'کال پر آرڈر' },
    desc: {
      en: 'Prefer a phone call? Our kitchen line is open for direct orders.',
      ur: 'فون پر آرڈر کرنا چاہتے ہیں؟ ہمارا کچن لائن موجود ہے۔',
    },
    cta: { en: `Call ${site.phones[0].display}`, ur: `کال ${site.phones[0].display}` },
    href: `tel:${site.phones[0].tel}`,
  },
];
