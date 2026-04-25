import { setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Location } from '@/components/sections/Location';
import { Container } from '@/components/ui/Container';
import { ContactForm } from '@/components/forms/ContactForm';
import { site } from '@/data/site';
import { waOrderUrl } from '@/lib/utils';

export default async function ContactPage({
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
        <section className="border-line border-b bg-cream-2 py-14">
          <Container>
            <p className="font-mono-label mb-3 text-red">Contact Us</p>
            <h1 className="font-display m-0 mb-4 text-[clamp(40px,8vw,88px)]">
              We&apos;re always <span className="text-red">here.</span>
            </h1>
            <p className="text-ink-2 max-w-[500px] text-[17px]">
              Call, WhatsApp, or walk in — our team is ready to take your order seven
              days a week from 7 am to 1 am.
            </p>
          </Container>
        </section>

        {/* Quick contact cards */}
        <section className="bg-cream py-12">
          <Container>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {/* WhatsApp */}
              <a
                href={waOrderUrl(
                  site.whatsapp.number,
                  'Hi Jaan Broast! I would like to get in touch.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 rounded-2xl border-2 border-[#25D366] bg-[#25D366]/5 p-6 transition-colors hover:bg-[#25D366] hover:text-white"
              >
                <span className="font-mono-label text-[#25D366] group-hover:text-white">WhatsApp</span>
                <span className="font-display text-[22px] leading-tight group-hover:text-white">
                  {site.whatsapp.display}
                </span>
                <span className="text-sm text-ink-2 group-hover:text-white/80">
                  Chat with us for orders &amp; enquiries
                </span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${site.phones[0].tel}`}
                className="group flex flex-col gap-3 rounded-2xl border-2 border-ink bg-ink/5 p-6 transition-colors hover:bg-ink hover:text-cream"
              >
                <span className="font-mono-label text-ink group-hover:text-saffron">Phone</span>
                <span className="font-display text-[22px] leading-tight group-hover:text-cream">
                  {site.phones[0].display}
                </span>
                <span className="text-sm text-ink-2 group-hover:text-cream/70">
                  Call us to place an order
                </span>
              </a>

              {/* Location */}
              <a
                href={site.order.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 rounded-2xl border-2 border-red bg-red/5 p-6 transition-colors hover:bg-red hover:text-cream"
              >
                <span className="font-mono-label text-red group-hover:text-saffron">Location</span>
                <span className="font-display text-[22px] leading-tight group-hover:text-cream">
                  {site.address.street}, {site.address.city}
                </span>
                <span className="text-sm text-ink-2 group-hover:text-cream/70">
                  Get directions on Google Maps
                </span>
              </a>
            </div>

            {/* All phone numbers */}
            <div className="mt-8">
              <p className="font-mono-label mb-4 text-ink-2">All Phone Lines</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
                {site.phones.map((p) => (
                  <a
                    key={p.tel}
                    href={`tel:${p.tel}`}
                    className="font-mono-label keep-ltr rounded-xl border border-ink/15 bg-cream-2 px-4 py-3 text-[13px] font-semibold transition-colors hover:bg-ink hover:text-cream normal-case"
                  >
                    {p.display}
                  </a>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-saffron/20 px-6 py-4">
              <span className="block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#33d17a] shadow-[0_0_0_4px_rgba(51,209,122,0.25)]" />
              <span className="font-display text-[18px]">Open Daily · {site.hours.label}</span>
            </div>
          </Container>
        </section>

        {/* Contact form */}
        <section className="bg-cream py-16 lg:py-20">
          <Container>
            <div className="mx-auto max-w-[640px]">
              <ContactForm />
            </div>
          </Container>
        </section>

        {/* Map & location block */}
        <Location />
      </main>
      <Footer />
    </>
  );
}
