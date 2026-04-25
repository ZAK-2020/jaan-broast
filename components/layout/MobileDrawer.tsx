'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { Link, usePathname } from '@/i18n/navigation';

export function MobileDrawer() {
  const [open, setOpen] = useState(false);
  const t = useTranslations('nav');
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Menu"
        aria-expanded={open}
        className="grid h-11 w-11 place-items-center rounded-xl border-[1.5px] border-ink lg:hidden"
      >
        <span className="relative block h-0.5 w-[18px] bg-ink before:absolute before:left-0 before:top-[-6px] before:h-0.5 before:w-[18px] before:bg-ink before:content-[''] after:absolute after:left-0 after:top-[6px] after:h-0.5 after:w-[18px] after:bg-ink after:content-['']" />
      </button>

      <div
        className={cn(
          'border-line absolute inset-x-0 top-[72px] border-b bg-cream px-6 pb-6 pt-3 lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="flex flex-col">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="border-line border-b py-3 text-sm font-bold"
          >
            {t('home')}
          </Link>
          <Link
            href="/menu"
            onClick={() => setOpen(false)}
            className="border-line border-b py-3 text-sm font-bold"
          >
            {t('menu')}
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="border-line border-b py-3 text-sm font-bold"
          >
            {t('about')}
          </Link>
          <Link
            href="/gallery"
            onClick={() => setOpen(false)}
            className="border-line border-b py-3 text-sm font-bold"
          >
            {t('gallery')}
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="py-3 text-sm font-bold"
          >
            {t('contact')}
          </Link>
        </div>
      </div>
    </>
  );
}
