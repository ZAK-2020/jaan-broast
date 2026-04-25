import { getLocale, getTranslations } from 'next-intl/server';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Button, type ButtonVariant } from '../ui/Button';
import { orderChannels, type OrderChannel } from '@/data/orderChannels';
import type { Locale } from '@/lib/utils';
import { cn } from '@/lib/utils';

const cardStyles: Record<OrderChannel['variant'], string> = {
  cream: 'bg-[#FBF6EB] text-ink border-line',
  red: 'bg-red text-cream border-red',
  ink: 'bg-ink text-cream border-ink',
  saffron: 'bg-saffron text-ink border-saffron',
};

const buttonVariantFor: Record<OrderChannel['variant'], ButtonVariant> = {
  cream: 'dark',
  red: 'cream',
  ink: 'saffron',
  saffron: 'dark',
};

export async function OrderChannels() {
  const t = await getTranslations('order');
  const locale = (await getLocale()) as Locale;

  return (
    <section id="order" className="py-20 lg:py-[100px]">
      <Container>
        <SectionHeader num="05" kicker={t('kicker')} title={t('title')} sub={t('sub')} />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {orderChannels.map((c) => (
            <div
              key={c.id}
              className={cn(
                'flex min-h-[240px] flex-col justify-between gap-4 rounded-3xl border p-7 transition-transform duration-200 hover:-translate-y-1',
                cardStyles[c.variant],
              )}
            >
              <span className="font-mono-label opacity-80">{c.kicker}</span>
              <div>
                <h3 className="font-display m-0 text-[28px] leading-none">{c.title[locale]}</h3>
                <p className="mt-2 text-sm opacity-85">{c.desc[locale]}</p>
              </div>
              <Button href={c.href} variant={buttonVariantFor[c.variant]} className="self-start">
                {c.cta[locale]}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
