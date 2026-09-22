import { useEffect } from 'react';

// Hostinger Reach embed configuration
const REACH_FORM_ID = '1376b796-6ea7-42b4-813d-9be7f7f6b358';
const REACH_EMBED_SRC = 'https://cdn-reach.hostinger.com/js/embed.js';

/**
 * Site-wide "Stay in touch" band that hosts the Hostinger Reach
 * subscription/contact form.
 *
 * The Hostinger embed script scans the DOM for `data-reach-form`
 * elements when it loads. Because this component re-mounts on every
 * client-side navigation (Pages Router), we (re)load the embed script
 * on each mount so the freshly-rendered form container gets hydrated,
 * and remove it on unmount to avoid stale copies accumulating.
 */
export default function ReachForm() {
  useEffect(() => {
    // Drop any previously injected copy so the script re-scans the DOM
    // and hydrates the form container rendered by this mount.
    const existing = document.querySelector(`script[src="${REACH_EMBED_SRC}"]`);
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.src = REACH_EMBED_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section className="bg-charles-dark border-t border-gray-800 py-16">
      <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
        <p className="text-charles-lime font-heading font-bold text-sm uppercase tracking-[0.2em] mb-4">
          Stay in Touch
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
          Join Our Newsletter
        </h2>
        <p className="font-body text-gray-400 mb-8">
          Subscribe for design tips, project updates, and special offers from Nija Print &amp; Graphics Studio.
        </p>

        {/* Hostinger Reach form — hydrated by embed.js */}
        <div data-reach-form={REACH_FORM_ID}></div>
      </div>
    </section>
  );
}
