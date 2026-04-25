import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Locale = 'en' | 'ur';

export function pickLocaleField<T>(field: { en: T; ur: T }, locale: Locale): T {
  return field[locale];
}

/** Build a wa.me deep-link with a pre-filled order message. */
export function waOrderUrl(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
