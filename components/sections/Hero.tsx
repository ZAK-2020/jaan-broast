import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { site } from '@/data/site';

export async function Hero() {
  const t = await getTranslations('hero');
  const tTrust = await getTranslations('trust');
  const locale = await getLocale();

  return (
    <section className="relative overflow-hidden py-10 lg:py-[100px]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <div>
            <div className="font-mono-label keep-ltr mb-6 inline-flex items-center gap-2.5 rounded-full bg-ink px-3.5 py-2 text-saffron">
              <span className="block h-2 w-2 rounded-full bg-[#33d17a] shadow-[0_0_0_3px_rgba(51,209,122,0.25)]" />
              <span>{t('status')}</span>
            </div>

            <h1 className="font-display m-0 mb-5 text-[clamp(44px,9vw,112px)]">
              {t('h1a')} <span className="text-red">{t('h1b')}</span>,{' '}
              <span className="relative inline-block isolate">
                {t('h1c')}
                <span className="absolute inset-x-0 bottom-[6%] -z-10 h-[0.22em] bg-saffron" />
              </span>{' '}
              {t('h1d')}
            </h1>

            <p className="text-ink-2 m-0 mb-7 max-w-[560px] text-[clamp(16px,2.2vw,19px)]">
              {t('lead')}
            </p>

            <div className="mb-7 flex flex-wrap gap-3">
              <Button href="#order" variant="primary" size="lg">
                {t('ctaOrder')}
              </Button>
              <Button href="#menu" variant="ghost" size="lg">
                {t('ctaMenu')}
              </Button>
              <Button href={`tel:${site.phones[0].tel}`} variant="dark" size="lg">
                {t('ctaCall')}
              </Button>
            </div>

            <div className="font-mono-label text-ink-2 flex flex-wrap gap-x-5 gap-y-2">
              <TrustItem>{tTrust('fresh')}</TrustItem>
              <TrustItem>{tTrust('fast')}</TrustItem>
              <TrustItem>{tTrust('dine')}</TrustItem>
              <TrustItem>{tTrust('take')}</TrustItem>
              <TrustItem>{tTrust('family')}</TrustItem>
            </div>
          </div>

          <div
            className="relative mx-auto w-full max-w-[480px] px-2 lg:ml-auto lg:mr-0 lg:max-w-[560px] lg:px-0 [.rtl_&]:lg:ml-0 [.rtl_&]:lg:mr-auto"
            aria-hidden="true"
          >
            {/* Soft pulsing saffron glow ring behind the main image */}
            <div className="absolute inset-[6%] -z-10 rounded-[40%] bg-saffron/30 blur-2xl animate-pulse-soft" />

            {/* Slow rotating dotted ring */}
            <div className="absolute inset-0 -z-10 animate-spin-slow opacity-40 [mask-image:radial-gradient(circle,black_60%,transparent_70%)]">
              <div className="h-full w-full rounded-full border-2 border-dashed border-red/40" />
            </div>

            {/* Main hero food image — gentle floating */}
            <div className="relative aspect-square overflow-hidden rounded-[32px] shadow-[0_30px_80px_-15px_rgba(21,19,16,0.5)] animate-float-slow">
              <Image
                src="/hero_pic.webp"
                alt="Jaan Broast signature platter"
                fill
                priority
                quality={100}
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Gradient overlay at bottom for text legibility */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/60 to-transparent" />
              {/* Bottom label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <span className="font-display text-cream text-[18px] leading-tight drop-shadow">
                  Signature Broast &amp; More
                </span>
                <span className="font-mono-label rounded-full bg-red px-3 py-1.5 text-cream">
                  Open Now
                </span>
              </div>
            </div>

            {/* Floating dish thumbnails — gentle bobbing motion */}
            <div className="absolute -bottom-4 -left-4 h-[110px] w-[110px] overflow-hidden rounded-2xl border-4 border-cream bg-ink shadow-brand animate-float max-md:hidden">
              <Image
                src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300&q=80&auto=format&fit=crop"
                alt="Chicken biryani"
                fill
                sizes="110px"
                className="object-cover"
              />
            </div>
            <div className="absolute -right-4 top-4 h-[90px] w-[90px] overflow-hidden rounded-2xl border-4 border-cream bg-ink shadow-brand animate-float-delayed max-md:hidden">
              <Image
                src="https://images.unsplash.com/photo-1544025162-d76694265947?w=300&q=80&auto=format&fit=crop"
                alt="BBQ platter"
                fill
                sizes="90px"
                className="object-cover"
              />
            </div>

            {/* Stamp badge */}
            <span
              className={
                locale === 'ur'
                  ? 'absolute -left-3 -top-3 z-10 grid h-[100px] w-[100px] -rotate-12 place-items-center rounded-full bg-saffron p-2.5 text-center font-display leading-none text-ink shadow-[0_10px_24px_-8px_rgba(21,19,16,0.35)] animate-sway max-[480px]:h-[80px] max-[480px]:w-[80px]'
                  : 'absolute -bottom-3 right-10 z-10 grid h-[100px] w-[100px] rotate-12 place-items-center rounded-full bg-saffron p-2.5 text-center font-display leading-none text-ink shadow-[0_10px_24px_-8px_rgba(21,19,16,0.35)] animate-sway max-[480px]:h-[80px] max-[480px]:w-[80px]'
              }
            >
              <span className="block">
                <span className="block text-[28px] max-[480px]:text-[20px]">{t('stampBig')}</span>
                <span className="font-mono-label mt-1 block text-[10px] tracking-[0.14em] font-medium">
                  {t('stampSmall')}
                </span>
              </span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TrustItem({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 before:block before:h-1.5 before:w-1.5 before:rounded-full before:bg-red before:content-['']">
      {children}
    </span>
  );
}

