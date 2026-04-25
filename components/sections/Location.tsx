import { getTranslations } from 'next-intl/server';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { site } from '@/data/site';

export async function Location() {
  const t = await getTranslations('location');

  return (
    <section id="contact" className="bg-ink py-20 text-cream lg:py-[100px]">
      <Container>
        <SectionHeader num="09" kicker={t('kicker')} title={t('title')} sub={t('sub')} tone="dark" />
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[1.2fr_1fr]">
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-cream/15"
            style={{
              backgroundImage:
                'linear-gradient(rgba(200,50,30,0.22), rgba(200,50,30,0.22)),' +
                'repeating-linear-gradient(0deg, rgba(245,239,227,0.08) 0 1px, transparent 1px 40px),' +
                'repeating-linear-gradient(90deg, rgba(245,239,227,0.08) 0 1px, transparent 1px 40px)',
              backgroundColor: '#1E1A15',
            }}
            aria-label="Map placeholder"
            role="img"
          >
            <div className="absolute left-1/2 top-[48%] h-11 w-11 -translate-x-1/2 -translate-y-full -rotate-45 rounded-[50%_50%_50%_0] bg-red shadow-[0_10px_24px_rgba(0,0,0,0.4)]">
              <span className="absolute inset-2.5 rounded-full bg-saffron" />
            </div>
            <div className="font-mono-label absolute bottom-4 left-4 rounded-xl bg-cream px-3.5 py-2.5 text-[11px] font-semibold text-ink">
              [ MAP · {site.address.street}, {site.address.city} ]
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <Row label={t('address')} value={`${site.address.street}, ${site.address.city}`} />
            <Row label={t('hours')} value={site.hours.label} />
            <div className="flex flex-col gap-1 pb-4">
              <span className="font-mono-label text-saffron">{t('phones')}</span>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {site.phones.map((p) => (
                  <a
                    key={p.tel}
                    href={`tel:${p.tel}`}
                    className="font-mono-label keep-ltr rounded-[10px] bg-cream/[0.06] px-3 py-2.5 text-left text-[13px] font-semibold transition-colors hover:bg-saffron hover:text-ink normal-case"
                  >
                    {p.display}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-2 flex flex-wrap gap-2.5">
              <Button href={site.order.directions} variant="saffron">
                {t('directions')}
              </Button>
              <Button href={`tel:${site.phones[0].tel}`} variant="primary">
                {t('call')}
              </Button>
              <Button
                href={`https://wa.me/${site.whatsapp.number}`}
                variant="ghost"
                className="border-cream/30 text-cream hover:bg-cream hover:text-ink"
              >
                {t('whatsapp')}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-cream/10 pb-4">
      <span className="font-mono-label text-saffron">{label}</span>
      <span className="font-display text-[22px] leading-tight">{value}</span>
    </div>
  );
}
