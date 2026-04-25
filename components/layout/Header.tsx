import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { MobileDrawer } from './MobileDrawer';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Link } from '@/i18n/navigation';
import { site } from '@/data/site';
import { waOrderUrl } from '@/lib/utils';

export async function Header() {
  const t = await getTranslations('nav');
  const tBrand = await getTranslations('brand');

  return (
    <header className="border-line sticky top-0 z-50 border-b bg-cream">
      <Container>
        <div className="flex h-[72px] items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <span className="grid h-[52px] w-[52px] shrink-0 place-items-center">
              <Image
                src="/logo.png"
                alt={`${tBrand('name')} logo`}
                width={52}
                height={52}
                priority
                className="h-full w-full object-contain drop-shadow-[0_2px_6px_rgba(21,19,16,0.18)]"
              />
            </span>
            <span className="font-display text-[20px] tracking-[-0.02em]">
              <span>{tBrand('name')}</span>
              <small className="font-mono-label keep-ltr text-ink-2 mt-0.5 block text-[9px] tracking-[0.22em] font-normal normal-case">
                {tBrand('tagline')}
              </small>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
            <Link href="/" className="hover:text-red transition-colors">
              {t('home')}
            </Link>
            <Link href="/menu" className="hover:text-red transition-colors">
              {t('menu')}
            </Link>
            <Link href="/about" className="hover:text-red transition-colors">
              {t('about')}
            </Link>
            <Link href="/gallery" className="hover:text-red transition-colors">
              {t('gallery')}
            </Link>
            <Link href="/contact" className="hover:text-red transition-colors">
              {t('contact')}
            </Link>
          </nav>

          <div className="flex items-center gap-2.5">
            <LanguageSwitcher />
            <Button
              href={waOrderUrl(site.whatsapp.number, 'Hi Jaan Broast! I would like to place an order.')}
              variant="primary"
              className="max-sm:px-3.5 max-sm:text-xs"
            >
              {t('order')}
            </Button>
            <MobileDrawer />
          </div>
        </div>
      </Container>
    </header>
  );
}
