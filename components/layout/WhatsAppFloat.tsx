'use client';

import { site } from '@/data/site';
import { waOrderUrl } from '@/lib/utils';

export function WhatsAppFloat() {
  return (
    <a
      href={waOrderUrl(
        site.whatsapp.number,
        'Hi Jaan Broast! I would like to place a delivery order. Please share the menu.',
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.45)] transition-transform duration-200 hover:scale-110 active:scale-95 lg:hidden"
      style={{ backgroundColor: '#25D366' }}
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="white" aria-hidden="true">
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.651 4.826 1.788 6.848L2 30l7.338-1.925A13.944 13.944 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.55 11.55 0 01-5.884-1.605l-.42-.25-4.354 1.142 1.161-4.243-.276-.436A11.558 11.558 0 014.4 16C4.4 9.592 9.592 4.4 16 4.4c6.408 0 11.6 5.192 11.6 11.6 0 6.408-5.192 11.6-11.6 11.6z" />
        <path d="M22.003 18.847c-.32-.16-1.894-.934-2.187-1.041-.293-.107-.507-.16-.72.16-.214.32-.827 1.041-1.014 1.255-.186.213-.373.24-.693.08-.32-.16-1.352-.498-2.575-1.59-.951-.848-1.592-1.895-1.778-2.215-.186-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.186.213-.32.32-.533.106-.214.053-.4-.027-.56-.08-.16-.72-1.734-.986-2.374-.26-.624-.524-.54-.72-.55-.186-.009-.4-.01-.613-.01-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.254 3.44 5.464 4.693.764.33 1.36.527 1.825.674.767.244 1.465.21 2.016.127.615-.092 1.894-.774 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
      </svg>
    </a>
  );
}
