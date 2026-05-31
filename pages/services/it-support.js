import { useState } from 'react';
import Layout from '../../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const capabilities = [
  'Slow or freezing computers',
  'Startup and boot problems',
  'Software errors & crashes',
  'Driver and hardware issues',
  'Blue screen / system errors',
  'Wi-Fi & internet connectivity',
  'Virus and malware infections',
  'Windows installation & reinstall',
  'Microsoft Office setup',
  'Printer and scanner setup',
  'Zoom / Teams / Slack setup',
  'Email account configuration',
  'Locked or hacked account recovery',
  'Two-factor authentication setup',
  'Router & home network setup',
  'Data backup & file recovery',
  'WordPress website setup',
  'Domain and hosting setup',
  'Google Workspace / Microsoft 365',
  'Cloud storage configuration',
  'Antivirus & firewall setup',
  'Password & security audits',
];

const supportOptions = [
  {
    icon: '💻',
    title: 'Remote Support',
    desc: 'Secure remote sessions over AnyDesk or TeamViewer — get help without leaving your home or office.',
  },
  {
    icon: '🏠',
    title: 'On-Site (Kampala)',
    desc: 'In-person visits across Kampala for hardware setup, office networks, and anything that needs hands-on work.',
  },
  {
    icon: '💬',
    title: 'WhatsApp Chat',
    desc: 'Quick questions and step-by-step troubleshooting over WhatsApp — fast answers, no appointment needed.',
  },
  {
    icon: '📧',
    title: 'Email Support',
    desc: 'Detailed written guidance and follow-up for non-urgent issues, account setup, and security questions.',
  },
];

const plans = [
  {
    name: 'One-Time Fix',
    badge: null,
    price: '$10 – $50',
    period: 'per issue',
    description: 'Pay only for what you need. Perfect for a single computer problem, virus cleanup, or fresh Windows installation.',
    features: [
      'PC cleanup & tune-up',
      'Single software install',
      'Virus & malware removal',
      'Email or account recovery',
      '7-day follow-up included',
    ],
  },
  {
    name: 'Hourly Remote Help',
    badge: 'Most Popular',
    price: '$10 – $25',
    period: 'per hour',
    description: 'Best when you have a few smaller issues to sort out, or want guided help over a remote session.',
    features: [
      'Live remote troubleshooting',
      'Software setup & configuration',
      'Account & security setup',
      'Performance optimisation',
      'Worldwide availability',
    ],
  },
  {
    name: 'Business Monthly',
    badge: 'Best Value',
    price: '$50 – $300',
    period: 'per month',
    description: 'Ongoing IT care for small businesses. Predictable cost, priority response, and proactive maintenance.',
    features: [
      'Scheduled maintenance',
      'Software & security updates',
      'Backup management',
      'Priority response',
      'Monthly health report',
    ],
  },
];

const categories = [
  {
    icon: '🛠️',
    title: 'Remote IT Support',
    intro: 'Offered to clients worldwide — wherever you are, help is one session away.',
    items: [
      'Computer troubleshooting (slow PCs, startup, drivers, blue screens, internet)',
      'Software installation & setup (Windows, Office, antivirus, printers, Zoom, Teams, Slack)',
      'Virus & malware removal — scanning, cleanup, optimisation, security hardening',
      'Email & account setup — business email, Outlook/Gmail, account recovery, 2FA',
    ],
  },
  {
    icon: '🏢',
    title: 'Business IT Support',
    intro: 'Practical IT services for offices, schools, and small businesses in Kampala and beyond.',
    items: [
      'Network setup — Wi-Fi, router configuration, LAN cabling, troubleshooting',
      'IT maintenance contracts — monthly support packages with updates, backups, security',
      'Data backup & recovery — Acronis True Image, Google Drive, OneDrive setups',
      'User onboarding and account management',
    ],
  },
  {
    icon: '🌐',
    title: 'Website & Tech Setup',
    intro: 'Get your business online with a clean website and properly configured cloud tools.',
    items: [
      'WordPress installation & basic site maintenance',
      'Domain & hosting setup',
      'Business email integration',
      'Google Workspace & Microsoft 365 — accounts, email, cloud storage, security',
    ],
  },
  {
    icon: '🛡️',
    title: 'Cybersecurity (Beginner)',
    intro: 'A solid security baseline — ideal for individuals, families, and small offices.',
    items: [
      'Security audits — weak passwords, outdated software, open ports, common vulnerabilities',
      'Endpoint protection setup — antivirus, firewall, device security policies',
      'Two-factor authentication for all critical accounts',
      'Phishing & safe-browsing basics for your team',
    ],
  },
];

const faqs = [
  {
    q: 'Where are you located, and do you support clients outside Uganda?',
    a: 'I am based in Kampala, Uganda, but I provide remote IT support to clients worldwide over secure remote-desktop tools like AnyDesk and TeamViewer. On-site visits are available across Kampala.',
  },
  {
    q: 'How does remote support actually work?',
    a: 'After we agree on the issue and price, I send you a short download link for a secure remote-desktop tool. You stay in control — you can watch every step and end the session at any time.',
  },
  {
    q: 'How quickly can you respond?',
    a: 'WhatsApp messages are usually answered within an hour during business hours (Mon–Fri 8AM–6PM, Sat 9AM–2PM). Business Monthly clients get priority response, often within 30 minutes.',
  },
  {
    q: 'What if my problem cannot be fixed remotely?',
    a: 'If I cannot fully solve your issue remotely, you do not pay. For Kampala-based clients, I can also arrange an on-site visit for hardware problems.',
  },
  {
    q: 'Is my data safe during remote sessions?',
    a: 'Yes. Sessions are end-to-end encrypted and only run while you allow them. I never store your passwords, and I recommend changing any password you share with me right after the session.',
  },
  {
    q: 'Do you offer one-off help, or only monthly packages?',
    a: 'Both. You can book a single one-time fix, pay by the hour for ongoing help, or sign up for a Business Monthly package — whichever suits your needs.',
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-800 bg-charles-dark">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-charles-darker transition-colors"
      >
        <span className="font-heading font-bold text-white text-lg">{q}</span>
        <span className={`text-charles-lime text-2xl transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="px-6 pb-6 font-body text-gray-300 leading-relaxed border-t border-gray-800">
          <p className="pt-5">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function ITSupportPage() {
  return (
    <Layout
      title="IT & Tech Support"
      description="Remote and on-site IT support — computer troubleshooting, software setup, network setup, virus removal, data backup, and beginner cybersecurity. Available worldwide."
    >

      {/* Hero */}
      <section className="relative bg-charles-darker overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0">
          <Image
            src="/images/Finished-designs/keyboard.jpg"
            alt="IT & Tech Support"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charles-darker/95 via-charles-darker/70 to-charles-darker/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-charles-darker via-transparent to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 pt-56 pb-28">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.nav variants={fadeInUp} className="flex items-center gap-2 text-gray-400 mb-8 font-body text-sm">
              <Link href="/services" className="hover:text-charles-lime transition-colors">Services</Link>
              <span>›</span>
              <span className="text-charles-lime font-bold">IT & Tech Support</span>
            </motion.nav>
            <motion.p variants={fadeInUp} className="text-charles-lime font-heading font-bold text-sm uppercase tracking-[0.2em] mb-6">
              IT & Tech Support
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 max-w-3xl leading-tight">
              Reliable tech support — <span className="text-charles-lime">remote, on-site, worldwide.</span>
            </motion.h1>
            <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime mb-8" />
            <motion.p variants={fadeInUp} className="text-xl font-body text-gray-300 max-w-3xl leading-relaxed">
              Any device, any issue, any time. Friendly IT help for individuals and small businesses — from quick fixes to ongoing monthly maintenance.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="px-8 py-4 bg-charles-lime text-charles-dark font-heading font-bold uppercase tracking-wider hover:bg-charles-limeHover transition-colors">
                Get Help Now
              </Link>
              <a href="https://wa.me/256755960836" className="px-8 py-4 border-2 border-white text-white font-heading font-bold uppercase tracking-wider hover:bg-white hover:text-charles-dark transition-colors">
                Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-charles-lime py-8">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: '24/7', label: 'Remote availability' },
              { stat: 'Worldwide', label: 'Clients supported' },
              { stat: 'No-fix', label: 'No-fee guarantee' },
              { stat: 'Friendly', label: 'Step-by-step help' },
            ].map((b) => (
              <div key={b.label}>
                <p className="text-2xl md:text-3xl font-heading font-bold text-charles-dark">{b.stat}</p>
                <p className="text-xs md:text-sm font-body text-charles-darker uppercase tracking-wider">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities — "Nija can help with…" */}
      <section className="bg-charles-dark py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.p variants={fadeInUp} className="text-charles-lime font-heading font-bold text-sm uppercase tracking-[0.2em] mb-4">
              What I Can Help With
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              From annoying glitches to full business setups
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime mx-auto mb-6" />
            <motion.p variants={fadeInUp} className="text-lg font-body text-gray-400 max-w-2xl mx-auto">
              Here are some of the most common issues I sort out for clients every week.
            </motion.p>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
          >
            {capabilities.map((c) => (
              <motion.li key={c} variants={fadeInUp} className="flex items-start gap-3 bg-charles-darker p-4 border-l-2 border-charles-lime">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-charles-lime text-charles-dark flex items-center justify-center text-sm font-bold mt-0.5">✓</span>
                <span className="font-body text-gray-200 leading-snug">{c}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Support Options */}
      <section className="bg-charles-darker py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeInUp} className="text-charles-lime font-heading font-bold text-sm uppercase tracking-[0.2em] mb-4">
              How You Get Help
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Flexible support options that fit your schedule
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime mx-auto" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {supportOptions.map((opt) => (
              <motion.div
                key={opt.title}
                variants={fadeInUp}
                className="group p-8 bg-charles-dark border-b-2 border-transparent hover:border-charles-lime transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-5">{opt.icon}</div>
                <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-charles-lime transition-colors uppercase tracking-wide">
                  {opt.title}
                </h3>
                <p className="font-body text-gray-400 leading-relaxed">{opt.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Plans / Pricing comparison */}
      <section className="bg-charles-dark py-24 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeInUp} className="text-charles-lime font-heading font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Choose Your Plan
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Simple pricing. Pay only for what you need.
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime mx-auto mb-6" />
            <motion.p variants={fadeInUp} className="text-lg font-body text-gray-400 max-w-2xl mx-auto">
              Whether it's one quick fix or ongoing care for your business, there's an option that matches.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto"
          >
            {plans.map((plan) => {
              const featured = plan.badge === 'Most Popular';
              return (
                <motion.div
                  key={plan.name}
                  variants={fadeInUp}
                  className={`relative bg-charles-darker p-8 flex flex-col ${featured
                    ? 'border-2 border-charles-lime shadow-2xl shadow-charles-lime/10 md:-translate-y-4'
                    : 'border-t-2 border-charles-lime'
                    }`}
                >
                  {plan.badge && (
                    <span className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-wider ${featured ? 'bg-charles-lime text-charles-dark' : 'bg-charles-dark text-charles-lime border border-charles-lime'
                      }`}>
                      {plan.badge}
                    </span>
                  )}
                  <h3 className="text-2xl font-heading font-bold text-white mb-3">{plan.name}</h3>
                  <p className="font-body text-gray-400 text-sm leading-relaxed mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <p className="text-3xl md:text-4xl font-heading font-bold text-charles-lime">{plan.price}</p>
                    <p className="text-sm font-body text-gray-500 uppercase tracking-wider mt-1">{plan.period}</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 font-body text-gray-300 text-sm">
                        <span className="text-charles-lime mt-0.5">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center px-6 py-3 font-heading font-bold uppercase tracking-wider transition-colors ${featured
                      ? 'bg-charles-lime text-charles-dark hover:bg-charles-limeHover'
                      : 'border-2 border-charles-lime text-charles-lime hover:bg-charles-lime hover:text-charles-dark'
                      }`}
                  >
                    Choose Plan
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <p className="text-center font-body text-gray-500 text-sm italic mt-10">
            Final pricing depends on the complexity of the issue. Website setup projects: $50 – $500.
          </p>
        </div>
      </section>

      {/* Service Categories Breakdown */}
      <section className="bg-charles-darker py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeInUp} className="text-charles-lime font-heading font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Full Service Breakdown
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Four areas of expertise
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime mx-auto" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={stagger}
            className="grid gap-6 md:grid-cols-2"
          >
            {categories.map((cat) => (
              <motion.div key={cat.title} variants={fadeInUp} className="bg-charles-dark p-8 border-t-2 border-charles-lime flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{cat.icon}</span>
                  <h3 className="text-2xl font-heading font-bold text-white">{cat.title}</h3>
                </div>
                <p className="font-body text-gray-400 italic mb-5">{cat.intro}</p>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-gray-200">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-charles-lime mt-2.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why work with me */}
      <section className="bg-charles-dark py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeInUp} className="text-charles-lime font-heading font-bold text-sm uppercase tracking-[0.2em] mb-4">
              What Makes Nija IT Different
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Real tech help, in plain language
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime mx-auto" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { num: '01', title: 'No Jargon', text: 'I explain what is going on in clear language so you can make decisions with confidence.' },
              { num: '02', title: 'Fixed Quotes', text: 'You know the price before any work starts. No surprises on the bill afterwards.' },
              { num: '03', title: 'No Fix, No Fee', text: 'If I cannot solve your issue remotely, you do not pay. Simple.' },
              { num: '04', title: 'Friendly Follow-Up', text: 'Every job includes a follow-up check to make sure the fix really stuck.' },
            ].map((item) => (
              <motion.div key={item.num} variants={fadeInUp} className="group p-8 bg-charles-darker border-b-2 border-transparent hover:border-charles-lime transition-all duration-300">
                <div className="text-4xl font-heading font-bold text-charles-lime mb-4">{item.num}</div>
                <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-charles-lime transition-colors">{item.title}</h3>
                <p className="font-body text-gray-400 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-charles-darker py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeInUp} className="text-charles-lime font-heading font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Common Questions
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Frequently asked questions
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime mx-auto" />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={stagger} className="space-y-3">
            {faqs.map((f) => (
              <motion.div key={f.q} variants={fadeInUp}>
                <FAQItem q={f.q} a={f.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charles-lime py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-heading font-bold text-charles-dark mb-6">
              Got a tech problem? Let's sort it today.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl font-body text-charles-darker mb-10 max-w-2xl mx-auto">
              Tell me what's wrong and get a fixed quote in under an hour during business hours.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-10 py-4 bg-charles-dark text-white font-heading font-bold uppercase tracking-wider hover:bg-charles-darker transition-colors text-lg">
                Get a Free Quote
              </Link>
              <a href="https://wa.me/256755960836" className="px-10 py-4 border-2 border-charles-dark text-charles-dark font-heading font-bold uppercase tracking-wider hover:bg-charles-dark hover:text-white transition-colors text-lg">
                WhatsApp Now
              </a>
              <a href="tel:+256782807255" className="px-10 py-4 border-2 border-charles-dark text-charles-dark font-heading font-bold uppercase tracking-wider hover:bg-charles-dark hover:text-white transition-colors text-lg">
                Call
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
