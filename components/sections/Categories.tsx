import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Tag } from '../ui/Tag';
import { categories, type CategoryVariant } from '@/data/categories';
import type { Locale } from '@/lib/utils';
import { cn } from '@/lib/utils';

const variantStyles: Record<
  CategoryVariant,
  { card: string; tag: string; desc: string }
> = {
  cream: {
    card: 'bg-cream-2 text-ink border-line',
    tag: 'bg-ink text-cream',
    desc: 'text-ink-2',
  },
  red: {
    card: 'bg-red text-cream border-red',
    tag: 'bg-saffron text-ink',
    desc: 'text-cream/80',
  },
  ink: {
    card: 'bg-ink text-cream border-ink',
    tag: 'bg-ink text-cream border border-cream/20',
    desc: 'text-cream/70',
  },
  saffron: {
    card: 'bg-saffron text-ink border-saffron',
    tag: 'bg-ink text-cream',
    desc: 'text-ink-2',
  },
};

export async function Categories() {
  const t = await getTranslations('categories');
  const locale = (await getLocale()) as Locale;

  return (
    <section id="categories" className="py-20 lg:py-[100px]">
      <Container>
        <SectionHeader num="02" kicker={t('kicker')} title={t('title')} sub={t('sub')} />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-3.5 lg:grid-cols-4">
          {categories.map((c) => {
            const v = variantStyles[c.variant];
            return (
              <a
                key={c.id}
                href="#menu"
                className={cn(
                  'relative flex aspect-[4/5] flex-col gap-2 overflow-hidden rounded-[20px] border p-3 transition-transform duration-200 hover:-translate-y-1 sm:gap-3 sm:p-[18px]',
                  v.card,
                )}
              >
                <Tag className={v.tag}>{c.tag[locale]}</Tag>
                <div className="relative w-full flex-1 overflow-hidden rounded-2xl bg-ink">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10 min-h-0">
                  <h3 className="font-display m-0 text-base leading-tight sm:text-xl sm:leading-none">
                    {c.name[locale]}
                  </h3>
                  <p
                    className={cn(
                      'mt-1 line-clamp-2 text-[10px] leading-tight sm:text-xs',
                      v.desc,
                    )}
                  >
                    {c.desc[locale]}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
