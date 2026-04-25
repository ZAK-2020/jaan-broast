# Theme

All visual styling tokens (colors, fonts, radii, shadows) live in **one place**:

👉 **`app/globals.css`** — see the `@theme { }` block at the top.

Tailwind v4 auto-generates utilities from every `--color-*`, `--font-*`, `--radius-*`, `--shadow-*` token you declare. Change a hex code in that block, and every button, card, and section re-colors on the next build.

## Examples

**Change the brand red site-wide**

```css
@theme {
  --color-red: #c8321e; /* ← edit this line */
}
```

**Swap the display font**

1. In `app/layout.tsx` replace the `Archivo_Black` import with any `next/font/google` font.
2. Update `--font-display` in `app/globals.css` if you change the variable name.

## Token map (what these control)

| Token             | Used by                                    |
| ----------------- | ------------------------------------------ |
| `--color-cream`   | page background, light text on dark cards  |
| `--color-ink`     | body text, dark buttons, dark sections     |
| `--color-red`     | primary brand accent, CTAs, offers section |
| `--color-saffron` | gold accent, stamps, ribbons               |
| `--color-mustard` | review star color, hover states            |
| `--shadow-brand`  | elevated plates/cards                      |
| `--radius-*`      | card and button rounding                   |

## Content (not theme)

Copy, prices, phone numbers, menu items, offers, reviews etc. live in `data/*.ts` — not in this theme file. See `data/site.ts` for contact info.
