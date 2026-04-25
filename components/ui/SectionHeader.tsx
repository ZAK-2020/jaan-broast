import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  num: string;
  kicker: string;
  title: string;
  sub?: string;
  tone?: 'light' | 'dark';
  align?: 'start' | 'between';
  cta?: ReactNode;
  className?: string;
};

export function SectionHeader({
  num,
  kicker,
  title,
  sub,
  tone = 'light',
  align = 'start',
  cta,
  className,
}: Props) {
  const subColor = tone === 'dark' ? 'text-cream/70' : 'text-ink-2';
  const numColor = tone === 'dark' ? 'text-saffron' : 'text-red';

  return (
    <div
      className={cn(
        'mb-10 flex flex-col gap-2',
        align === 'between' && 'lg:flex-row lg:items-end lg:justify-between lg:gap-8',
        className,
      )}
    >
      <div className="flex flex-col gap-2">
        <span
          className={cn(
            'font-mono-label keep-ltr',
            'text-[12px] tracking-[0.16em]',
            numColor,
          )}
        >
          {num} / {kicker}
        </span>
        <h2 className="font-display m-0 text-[clamp(32px,5.5vw,64px)]">{title}</h2>
        {sub && <p className={cn('mt-2 max-w-[560px] text-base', subColor)}>{sub}</p>}
      </div>
      {cta && <div className="shrink-0">{cta}</div>}
    </div>
  );
}
