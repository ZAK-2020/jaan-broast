import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Container } from '../ui/Container';
import { Link } from '@/i18n/navigation';
import { site } from '@/data/site';

export async function Footer() {
  const t = await getTranslations('footer');
  const tBrand = await getTranslations('brand');

  return (
    <footer className="bg-[#0B0A08] pt-[60px] pb-6 text-cream">
      <Container>
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <span className="mb-3 grid h-[120px] w-[120px] place-items-center">
              <Image
                src="/logo.png"
                alt={`${tBrand('name')} logo`}
                width={120}
                height={120}
                className="h-full w-full object-contain drop-shadow-[0_4px_14px_rgba(0,0,0,0.5)]"
              />
            </span>
            <h3 className="font-display mb-2.5 mt-3 text-[40px] leading-[0.95]">
              {tBrand('name').includes('Jaan') ? (
                <>
                  Jaan <span className="text-red">Broast</span> &amp; Biryani
                </>
              ) : (
                tBrand('name')
              )}
            </h3>
            <p className="m-0 max-w-[360px] text-sm text-cream/65">{t('description')}</p>
          </div>

          <FooterCol heading={t('menu')}>
            <FooterLink href="/menu">Full Menu</FooterLink>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/gallery">Gallery</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
          </FooterCol>

          <FooterCol heading={t('order')}>
            <FooterLink href="#order">Order Online</FooterLink>
            <FooterLink href={site.order.app}>Download App</FooterLink>
            <FooterLink href={site.order.foodpanda}>Foodpanda</FooterLink>
            <FooterLink href={`https://wa.me/${site.whatsapp.number}`}>WhatsApp Order</FooterLink>
            <FooterLink href={`tel:${site.phones[0].tel}`}>Call Now</FooterLink>
          </FooterCol>

          <FooterCol heading={t('visit')}>
            <li>
              {site.address.street}, {site.address.city}
            </li>
            <li>{site.hours.label}</li>
            <FooterLink href={`tel:${site.phones[0].tel}`}>{site.phones[0].display}</FooterLink>
            <FooterLink href={`tel:${site.phones[3].tel}`}>{site.phones[3].display}</FooterLink>
            <FooterLink href={site.social.instagram}>Instagram · Facebook</FooterLink>
          </FooterCol>
        </div>

        <div className="font-mono-label flex flex-col items-start gap-3 border-t border-cream/10 pt-5 text-cream/50 md:flex-row md:items-center md:justify-between">
          <span>{t('rights')}</span>
          <span>{t('strap')}</span>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div>
      <h5 className="font-mono-label mb-3.5 mt-0 text-saffron">{heading}</h5>
      <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('https://wa.me');
  return (
    <li>
      {isExternal ? (
        <a href={href} className="hover:text-saffron transition-colors">
          {children}
        </a>
      ) : (
        <Link href={href as Parameters<typeof Link>[0]['href']} className="hover:text-saffron transition-colors">
          {children}
        </Link>
      )}
    </li>
  );
}
