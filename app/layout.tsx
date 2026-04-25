import type { ReactNode } from 'react';

/**
 * The real <html>/<body> are rendered in app/[locale]/layout.tsx
 * so we can set `lang` and `dir` based on the current locale.
 * This root layout is intentionally a pass-through.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
