import { setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { site } from '@/data/site';

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <section className="border-line border-b bg-cream-2 py-14">
          <Container>
            <p className="font-mono-label mb-3 text-red">Legal</p>
            <h1 className="font-display m-0 text-[clamp(36px,7vw,72px)]">Privacy Policy</h1>
            <p className="text-ink-2 mt-3 text-sm">
              Last updated: April 2026 · {site.name}
            </p>
          </Container>
        </section>

        <section className="bg-cream py-14">
          <Container>
            <div className="prose prose-sm max-w-[720px] text-ink-2 [&_h2]:font-display [&_h2]:text-ink [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:pl-5 [&_li]:mb-1">
              <p>
                This Privacy Policy describes how {site.name} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the Restaurant&rdquo;)
                collects, uses, and protects information when you use our website at{' '}
                <strong>{site.url}</strong>, contact us by phone, WhatsApp, or visit our premises.
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                We collect information you voluntarily provide when you contact us, such as
                your name, phone number, and order details. We do not operate a formal account
                system or store payment card details.
              </p>
              <ul>
                <li>Phone numbers used when you call or WhatsApp us for orders</li>
                <li>Device and browser data collected automatically by server logs</li>
                <li>Approximate location if you use our &ldquo;Get Directions&rdquo; feature (handled by Google Maps)</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Process and confirm your food orders</li>
                <li>Contact you about your order status or delivery</li>
                <li>Improve our website and service quality</li>
              </ul>
              <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

              <h2>3. WhatsApp &amp; Telephone Orders</h2>
              <p>
                When you place an order via WhatsApp or telephone, your number and
                conversation may be retained by our team for order fulfilment and
                customer service purposes. WhatsApp messages are subject to WhatsApp&apos;s
                own privacy policy.
              </p>

              <h2>4. Cookies</h2>
              <p>
                Our website may use essential cookies to support navigation and performance.
                We do not use tracking cookies for advertising. You can disable cookies in
                your browser settings, though this may affect some site functionality.
              </p>

              <h2>5. Third-Party Services</h2>
              <p>
                Our website links to Google Maps for directions and may reference
                third-party delivery platforms (Foodpanda). These services have their own
                privacy policies and we are not responsible for their data practices.
              </p>

              <h2>6. Data Retention</h2>
              <p>
                We retain order and contact information only as long as necessary to
                fulfil your order and comply with applicable law. You may request
                deletion of your data at any time.
              </p>

              <h2>7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Request access to personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal data</li>
              </ul>
              <p>
                To exercise these rights, contact us at{' '}
                <a href={`tel:${site.phones[0].tel}`} className="text-red underline">
                  {site.phones[0].display}
                </a>{' '}
                or via WhatsApp at{' '}
                <a href={`tel:${site.whatsapp.display}`} className="text-red underline">
                  {site.whatsapp.display}
                </a>
                .
              </p>

              <h2>8. Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. The latest version will always
                be available on this page with the updated date shown above.
              </p>

              <h2>9. Contact</h2>
              <p>
                {site.name} · {site.address.street}, {site.address.city},{' '}
                {site.address.region}, {site.address.country}
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
