'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import { cn } from '@/lib/utils';
import { routing } from '@/i18n/routing';

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className={cn(
        'font-mono-label keep-ltr inline-flex items-center gap-1 rounded-full border border-line p-1',
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            disabled={isPending || active}
            onClick={() =>
              startTransition(() => {
                router.replace(pathname, { locale: l });
              })
            }
            className={cn(
              'rounded-full px-3 py-1 text-[11px] font-bold uppercase transition-colors',
              active ? 'bg-ink text-cream' : 'text-ink-2 hover:text-ink',
            )}
            aria-pressed={active}
          >
            {l === 'en' ? 'EN' : 'اردو'}
          </button>
        );
      })}
    </div>
  );
}
