import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'dark' | 'ghost' | 'saffron' | 'cream';
export type ButtonSize = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-bold whitespace-nowrap border-[1.5px] border-transparent transition-[transform,background,color] duration-150 hover:-translate-y-px';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-red text-cream hover:bg-red-deep',
  dark: 'bg-ink text-cream hover:bg-ink-2',
  ghost: 'bg-transparent border-ink text-ink hover:bg-ink hover:text-cream',
  saffron: 'bg-saffron text-ink hover:bg-mustard',
  cream: 'bg-cream text-ink hover:bg-cream-2',
};

const sizes: Record<ButtonSize, string> = {
  md: 'px-[18px] py-3 text-sm tracking-[0.01em]',
  lg: 'px-6 py-4 text-[15px] tracking-[0.01em]',
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: LinkProps | ButtonProps) {
  const { variant = 'primary', size = 'md', className, children, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ('href' in rest && rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
