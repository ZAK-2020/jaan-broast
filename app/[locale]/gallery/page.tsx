import { setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { SignatureDishes } from '@/components/sections/SignatureDishes';
import Image from 'next/image';

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80&auto=format&fit=crop',
    alt: 'Crispy broast platter',
    label: 'Signature Broast',
  },
  {
    src: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80&auto=format&fit=crop',
    alt: 'Chicken biryani',
    label: 'Chicken Biryani',
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80&auto=format&fit=crop',
    alt: 'BBQ platter',
    label: 'BBQ Platter',
  },
  {
    src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80&auto=format&fit=crop',
    alt: 'Chicken tikka pizza',
    label: 'Tikka Pizza',
  },
  {
    src: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800&q=80&auto=format&fit=crop',
    alt: 'Loaded fries',
    label: 'Loaded Fries',
  },
  {
    src: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&q=80&auto=format&fit=crop',
    alt: 'Arabic chargha',
    label: 'Arabic Chargha',
  },
  {
    src: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=800&q=80&auto=format&fit=crop',
    alt: 'Burger',
    label: 'Juicy Burgers',
  },
  {
    src: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&q=80&auto=format&fit=crop',
    alt: 'Shawarma wrap',
    label: 'Shawarma',
  },
  {
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80&auto=format&fit=crop',
    alt: 'Pakistani breakfast',
    label: 'Fresh Nashta',
  },
  {
    src: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80&auto=format&fit=crop',
    alt: 'Chinese noodles',
    label: 'Chinese &amp; More',
  },
  {
    src: 'https://images.unsplash.com/photo-1570544820941-2d4d3d8ea7c0?w=800&q=80&auto=format&fit=crop',
    alt: 'Naan bread',
    label: 'Fresh Bread',
  },
  {
    src: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80&auto=format&fit=crop',
    alt: 'Desi food',
    label: 'Pakistani Classics',
  },
];

export default async function GalleryPage({
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
        <section className="border-line border-b bg-red py-14 text-cream">
          <Container>
            <p className="font-mono-label mb-3 text-saffron">Gallery</p>
            <h1 className="font-display m-0 text-[clamp(40px,8vw,88px)]">
              Food worth looking at.
            </h1>
            <p className="mt-4 max-w-[480px] text-[17px] text-cream/80">
              Fresh, crispy, and made with love — a glimpse of what comes out of our kitchen every day.
            </p>
          </Container>
        </section>

        {/* Photo grid */}
        <section className="bg-cream py-16 lg:py-24">
          <Container>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {photos.map((p, i) => (
                <div
                  key={i}
                  className="group relative aspect-square overflow-hidden rounded-2xl bg-ink shadow-brand"
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/80 px-3 py-2.5 transition-transform duration-300 group-hover:translate-y-0">
                    <span
                      className="font-mono-label text-saffron text-[11px]"
                      dangerouslySetInnerHTML={{ __html: p.label }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Signature dishes CTA */}
        <SignatureDishes />
      </main>
      <Footer />
    </>
  );
}
