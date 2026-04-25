import { getLocale, getTranslations } from 'next-intl/server';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { reviews } from '@/data/reviews';
import type { Locale } from '@/lib/utils';
import { cn } from '@/lib/utils';

export async function Reviews() {
  const t = await getTranslations('reviews');
  const locale = (await getLocale()) as Locale;

  return (
    <section id="reviews" className="py-20 lg:py-[100px]">
      <Container>
        <SectionHeader num="08" kicker={t('kicker')} title={t('title')} sub={t('sub')} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => {
            const dark = r.variant === 'dark';
            return (
              <figure
                key={r.id}
                className={cn(
                  'flex flex-col gap-3 rounded-[20px] border p-6',
                  dark
                    ? 'border-ink bg-ink text-cream'
                    : 'border-line bg-[#FBF6EB] text-ink',
                )}
              >
                <div className="text-mustard tracking-[2px] text-base" aria-label={`${r.rating} stars`}>
                  {'★'.repeat(r.rating)}
                </div>
                <blockquote className="m-0 text-[17px] font-semibold leading-snug text-pretty">
                  &ldquo;{r.quote[locale]}&rdquo;
                </blockquote>
                <figcaption className={cn('flex items-center gap-2.5 text-[13px]', dark ? 'text-cream/70' : 'text-ink-2')}>
                  <span
                    className={cn(
                      'font-display grid h-[34px] w-[34px] place-items-center rounded-full text-sm',
                      r.avatarTone === 'saffron'
                        ? 'bg-saffron text-ink'
                        : 'bg-red text-cream',
                    )}
                  >
                    {r.initial}
                  </span>
                  {r.author} · {r.source}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
