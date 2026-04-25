import { setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { Categories } from '@/components/sections/Categories';
import { SignatureDishes } from '@/components/sections/SignatureDishes';
import { WhyChoose } from '@/components/sections/WhyChoose';
import { OrderChannels } from '@/components/sections/OrderChannels';
import { MenuPreview } from '@/components/sections/MenuPreview';
import { Offers } from '@/components/sections/Offers';
import { Reviews } from '@/components/sections/Reviews';
import { Location } from '@/components/sections/Location';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Categories />
        <SignatureDishes />
        <WhyChoose />
        <OrderChannels />
        <MenuPreview />
        <Offers />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </>
  );
}
