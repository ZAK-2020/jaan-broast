import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { dishes } from '@/data/dishes';
import { site } from '@/data/site';
import { waOrderUrl, type Locale } from '@/lib/utils';

export async function SignatureDishes() {
  const t = await getTranslations('signature');
  const locale = (await getLocale()) as Locale;

  return (
    <section id="signature" className="bg-cream-2 py-20 lg:py-[100px]">
      <Container>
        <SectionHeader num="03" kicker={t('kicker')} title={t('title')} sub={t('sub')} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {dishes.map((d) => (
            <a
              key={d.id}
              href={waOrderUrl(
                site.whatsapp.number,
                `Hi Jaan Broast! I'd like to order 1x ${d.name.en} (Rs. ${d.price.toLocaleString()}). Please confirm availability and delivery time.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="border-line group grid grid-cols-[112px_1fr_auto] items-center gap-4 rounded-[20px] border bg-[#FBF6EB] p-4 transition-all duration-200 hover:border-ink hover:bg-ink hover:text-cream max-[480px]:grid-cols-[80px_1fr]"
            >
              <div className="relative h-28 w-28 overflow-hidden rounded-2xl bg-red max-[480px]:h-20 max-[480px]:w-20">
                <Image
                  src={d.image}
                  alt={d.alt}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-display m-0 mb-1 text-xl leading-tight">{d.name[locale]}</h3>
                <p className="text-ink-2 m-0 mb-1.5 text-[13px] group-hover:text-cream/75">
                  {d.desc[locale]}
                </p>
                <span className="font-mono-label text-red group-hover:text-saffron">
                  ★ {d.meta[locale]}
                </span>
              </div>
              <div className="font-display grid h-11 w-11 place-items-center rounded-full bg-saffron text-ink group-hover:bg-saffron group-hover:text-ink max-[480px]:hidden">
                +
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
