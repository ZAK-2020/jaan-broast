import { getLocale, getTranslations } from 'next-intl/server';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { whyChoose } from '@/data/whyChoose';
import type { Locale } from '@/lib/utils';

export async function WhyChoose() {
  const t = await getTranslations('why');
  const locale = (await getLocale()) as Locale;

  return (
    <section id="about" className="bg-ink py-20 text-cream lg:py-[100px]">
      <Container>
        <SectionHeader
          num="04"
          kicker={t('kicker')}
          title={t('title')}
          sub={t('sub')}
          tone="dark"
        />
        <div className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-[20px] border border-cream/10 bg-cream/10 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w) => (
            <div
              key={w.num}
              className="flex min-h-[200px] flex-col gap-3 bg-ink px-6 py-7"
            >
              <div className="font-display text-saffron text-[40px] leading-none">{w.num}</div>
              <h4 className="font-display m-0 text-xl leading-tight">{w.title[locale]}</h4>
              <p className="m-0 text-sm text-cream/75">{w.desc[locale]}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
