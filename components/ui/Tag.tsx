import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Tag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'font-mono-label inline-flex self-start rounded-full px-2.5 py-1.5',
        'text-[10px] tracking-[0.14em]',
        'bg-ink text-cream',
        className,
      )}
    >
      {children}
    </span>
  );
}
