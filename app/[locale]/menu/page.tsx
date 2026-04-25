import { setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MenuPreview } from '@/components/sections/MenuPreview';
import { Offers } from '@/components/sections/Offers';
import { Container } from '@/components/ui/Container';

export default async function MenuPage({
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
        {/* Page banner */}
        <section className="border-line border-b bg-ink py-14 text-cream">
          <Container>
            <p className="font-mono-label mb-3 text-saffron">Full Menu</p>
            <h1 className="font-display m-0 text-[clamp(40px,8vw,88px)]">
              Everything we serve.
            </h1>
            <p className="text-cream/65 mt-4 max-w-[560px] text-[17px]">
              Broast, biryani, BBQ, burgers, pizza, shawarma, Chinese, Pakistani food,
              and fresh nashta — all under one roof.
            </p>
          </Container>
        </section>

        {/* Full menu with filter */}
        <MenuPreview />

        {/* Current deals */}
        <Offers />
      </main>
      <Footer />
    </>
  );
}
