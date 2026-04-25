import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhyChoose } from '@/components/sections/WhyChoose';
import { Container } from '@/components/ui/Container';
import { site } from '@/data/site';
import Image from 'next/image';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('nav');

  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section className="border-line border-b bg-cream-2 py-16 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="font-mono-label mb-4 text-red">About Us</p>
                <h1 className="font-display m-0 mb-5 text-[clamp(40px,8vw,80px)]">
                  Quetta&apos;s Home of <span className="text-red">Real Flavor</span>.
                </h1>
                <p className="text-ink-2 mb-6 max-w-[540px] text-[17px] leading-relaxed">
                  Jaan Broast &amp; Biryani started with one simple promise — serve
                  Quetta the freshest broast, the richest biryani, and the most
                  satisfying fast food, every single day. From a humble kitchen on
                  Prince Road we have grown into one of the city&apos;s most-loved
                  restaurants.
                </p>
                <p className="text-ink-2 mb-0 max-w-[540px] text-[17px] leading-relaxed">
                  We open at 7 am with a full nashta spread and close at 1 am —
                  because hunger doesn&apos;t keep business hours. Dine in with family,
                  grab a quick takeaway, or get hot food delivered straight to your
                  door.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-brand lg:aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80&auto=format&fit=crop"
                  alt="Jaan Broast restaurant kitchen"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Stats strip */}
        <section className="bg-red py-10 text-cream">
          <Container>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { num: '7 am', label: 'Opens Daily' },
                { num: '1 am', label: 'Closes Daily' },
                { num: '15+', label: 'Menu Items' },
                { num: '2 min', label: 'Avg. WhatsApp Reply' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-[clamp(32px,6vw,56px)] leading-none text-saffron">
                    {s.num}
                  </div>
                  <div className="font-mono-label mt-1 text-cream/75">{s.label}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Why choose us */}
        <WhyChoose />

        {/* Contact CTA */}
        <section className="bg-cream-2 py-16 text-center">
          <Container>
            <h2 className="font-display m-0 mb-4 text-[clamp(32px,6vw,60px)]">
              Come Visit Us
            </h2>
            <p className="text-ink-2 mx-auto mb-8 max-w-[480px]">
              {site.address.street}, {site.address.city} · {site.hours.label}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={site.order.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3 text-sm font-bold text-cream transition-colors hover:bg-red"
              >
                Get Directions
              </a>
              <a
                href={`tel:${site.phones[0].tel}`}
                className="inline-flex items-center gap-2 rounded-xl border-[1.5px] border-ink px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-ink hover:text-cream"
              >
                Call Now · {site.phones[0].display}
              </a>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
