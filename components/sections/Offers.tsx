import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { offers } from '@/data/offers';
import type { Locale } from '@/lib/utils';
import { cn } from '@/lib/utils';

export async function Offers() {
  const t = await getTranslations('offers');
  const locale = (await getLocale()) as Locale;

  return (
    <section id="offers" className="bg-red py-20 text-cream lg:py-[100px]">
      <Container>
        <SectionHeader num="07" kicker={t('kicker')} title={t('title')} sub={t('sub')} tone="dark" />
        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((o) => {
            const feat = o.feat;
            return (
              <div
                key={o.id}
                className={cn(
                  'relative flex flex-col overflow-hidden rounded-[20px]',
                  feat ? 'bg-ink text-cream' : 'bg-cream text-ink',
                )}
              >
                <span
                  className={cn(
                    'font-mono-label absolute right-3.5 top-3.5 z-10 rounded-full px-2.5 py-1.5 text-[10px]',
                    feat ? 'bg-saffron text-ink' : 'bg-ink text-saffron',
                  )}
                >
                  {o.ribbon[locale]}
                </span>
                <div className="relative aspect-[16/9] overflow-hidden bg-ink">
                  <Image
                    src={o.image}
                    alt={o.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2.5 px-5 pb-6 pt-5">
                  <h4 className="font-display m-0 text-[22px] leading-none">{o.title[locale]}</h4>
                  <p className={cn('m-0 text-[13px]', feat ? 'text-cream/80' : 'text-ink-2')}>
                    {o.desc[locale]}
                  </p>
                  <div className={cn('font-display text-[28px]', feat ? 'text-saffron' : 'text-red')}>
                    {o.price.value}{' '}
                    <small
                      className={cn(
                        'font-mono-label text-[13px] font-medium',
                        feat ? 'text-cream/80' : 'text-ink-2',
                      )}
                    >
                      {o.price.unit[locale]}
                    </small>
                  </div>
                  <Button
                    href={o.href}
                    variant={feat ? 'saffron' : 'dark'}
                    className="mt-1 self-start"
                  >
                    {o.cta[locale]}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
