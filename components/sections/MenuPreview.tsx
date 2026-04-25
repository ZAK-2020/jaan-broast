'use client';

import { useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { menu, menuFilters, type MenuTag } from '@/data/menu';
import type { Locale } from '@/lib/utils';
import { cn } from '@/lib/utils';

export function MenuPreview() {
  const t = useTranslations('menuPreview');
  const tFilters = useTranslations('menuPreview.filters');
  const locale = useLocale() as Locale;
  const [active, setActive] = useState<'all' | MenuTag>('all');

  const visible = useMemo(() => {
    if (active === 'all') return menu;
    return menu.filter((m) => m.tags.includes(active));
  }, [active]);

  return (
    <section
      id="menu"
      className="border-line border-y bg-cream-2 py-20 lg:py-[100px]"
    >
      <Container>
        <SectionHeader
          num="06"
          kicker={t('kicker')}
          title={t('title')}
          sub={t('sub')}
          align="between"
          cta={
            <Button href="#" variant="dark">
              {t('cta')}
            </Button>
          }
        />

        <div className="mb-6 flex flex-wrap gap-2">
          {menuFilters.map((f) => {
            const isActive = active === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setActive(f.key)}
                className={cn(
                  'font-mono-label rounded-full border-[1.5px] px-3.5 py-2 text-xs font-bold uppercase tracking-wide transition-colors',
                  isActive
                    ? 'border-red bg-red text-cream'
                    : 'border-ink text-ink hover:bg-ink hover:text-cream',
                )}
              >
                {tFilters(f.labelKey)}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
          {visible.map((m) => (
            <a
              key={m.num}
              href="#"
              className="border-line group flex min-h-[120px] flex-col justify-between gap-1.5 rounded-2xl border bg-cream-2 p-4 transition-all duration-150 hover:-translate-y-0.5 hover:bg-ink hover:text-cream"
            >
              <span className="font-mono-label keep-ltr text-[10px] opacity-50">{m.num}</span>
              <h4 className="font-display m-0 text-base leading-tight">{m.name[locale]}</h4>
              <p className="m-0 text-xs opacity-75">{m.desc[locale]}</p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
