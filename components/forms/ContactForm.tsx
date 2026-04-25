'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'sending' | 'sent' | 'error';

// Public access key — Web3Forms keys are designed to be embedded client-side.
// Get a new one from web3forms.com if the email destination changes.
const WEB3FORMS_ACCESS_KEY = '7f0b9b47-7a55-4165-95fa-f3d77225f3be';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', `New contact form message from ${formData.get('name') ?? 'Website'}`);
    formData.append('from_name', 'Jaan Broast Website');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = (await res.json()) as { success?: boolean; message?: string };

      if (data.success) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
        setErrorMessage(data.message ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  }

  const isSending = status === 'sending';

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-4 rounded-3xl border border-line bg-cream-2 p-6 md:p-8"
    >
      <h2 className="font-display m-0 text-[clamp(28px,5vw,40px)] leading-tight">
        Send us a message
      </h2>
      <p className="text-ink-2 m-0 text-sm">
        Fill in the form below and our team will get back to you within a few hours.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field
          label="Your name"
          name="name"
          type="text"
          placeholder="Ali Khan"
          required
          disabled={isSending}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="ali@example.com"
          required
          disabled={isSending}
        />
      </div>

      <Field
        label="Phone (optional)"
        name="phone"
        type="tel"
        placeholder="+92 300 1234567"
        disabled={isSending}
      />

      <div className="flex flex-col gap-1.5">
        <label className="font-mono-label text-ink-2" htmlFor="cf-message">
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          disabled={isSending}
          rows={5}
          placeholder="How can we help?"
          className={cn(
            'w-full resize-y rounded-xl border-[1.5px] border-ink/15 bg-cream px-4 py-3 text-sm text-ink',
            'placeholder:text-ink/40',
            'focus:border-red focus:outline-none focus:ring-2 focus:ring-red/20',
            'disabled:opacity-60',
          )}
        />
      </div>

      <button
        type="submit"
        disabled={isSending}
        className={cn(
          'inline-flex h-12 items-center justify-center rounded-xl bg-red px-6 text-sm font-bold uppercase tracking-wider text-cream transition-colors',
          'hover:bg-red-deep',
          'disabled:cursor-not-allowed disabled:opacity-60',
        )}
      >
        {isSending ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'sent' && (
        <div
          role="status"
          className="rounded-xl bg-[#33d17a]/15 px-4 py-3 text-sm font-semibold text-[#1d7a40]"
        >
          ✓ Thanks! Your message has been sent. We&apos;ll reply soon.
        </div>
      )}

      {status === 'error' && (
        <div
          role="alert"
          className="rounded-xl bg-red/10 px-4 py-3 text-sm font-semibold text-red-deep"
        >
          {errorMessage}
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
  disabled,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}) {
  const id = `cf-${name}`;
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono-label text-ink-2" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={cn(
          'h-12 rounded-xl border-[1.5px] border-ink/15 bg-cream px-4 text-sm text-ink',
          'placeholder:text-ink/40',
          'focus:border-red focus:outline-none focus:ring-2 focus:ring-red/20',
          'disabled:opacity-60',
        )}
      />
    </div>
  );
}
