import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const services = [
  { slug: 'web-design', title: 'Web Design', description: 'Responsive, modern websites from brochure sites to e-commerce platforms that convert visitors into loyal customers.', image: '/images/Finished designs/webdesign.jpg', icon: '💻' },
  { slug: 'graphic-design', title: 'Graphic Design', description: 'Eye-catching print and digital design — flyers, brochures, posters, social media — that makes your brand unforgettable.', image: '/images/Finished designs/graphic.jpg', icon: '🎨' },
  { slug: 'branding', title: 'Branding', description: 'Complete brand identity systems including logos, colour palettes, typography, and guidelines that build recognition and trust.', image: '/images/Finished designs/brandingx.jpg', icon: '🏷️' },
  { slug: 'creative', title: 'Creative', description: 'Innovative visual concepts, creative direction, and storytelling — from campaigns to content creation and beyond.', image: '/images/Finished designs/creative.jpg', icon: '✨' },
  { slug: 'printing', title: 'Printing', description: 'Premium offset and digital printing — business cards, brochures, banners, signage — with fast turnaround and flawless quality.', image: '/images/Finished designs/printingx.jpg', icon: '🖨️' },
];

export default function Services() {
  return (
    <Layout title="Services" description="Explore our full range of design, print, and branding services.">

      {/* Hero */}
      <section className="bg-charles-darker py-32 md:py-48 relative overflow-hidden border-b border-gray-800 flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <Image
            src="/images/Finished designs/digital.jpg"
            alt="Pathway Printing & Graphics Services"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-charles-darker/50 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-charles-darker via-transparent to-charles-darker/30 z-[1]" />
        
        <div className="mx-auto max-w-7xl px-6 md:px-10 relative z-10 w-full">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-col items-center">
            <motion.p variants={fadeInUp} className="text-charles-lime font-heading font-bold text-sm uppercase tracking-[0.2em] mb-6">Our Services</motion.p>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-7xl font-heading font-bold text-white leading-tight max-w-5xl">
              Services designed to work for your brand, your audience and
              <span className="text-charles-lime"> your budget.</span>
            </motion.h1>
            <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime my-8 mx-auto" />
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-body text-gray-200 max-w-3xl leading-relaxed mx-auto">
              From high-impact print to flexible digital systems, we deliver full-service creative solutions with simple pricing and fast delivery.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8">
              <a href="#service-list" className="px-10 py-5 bg-charles-lime text-charles-dark font-heading font-bold uppercase tracking-wider hover:bg-charles-limeHover transition-colors inline-block shadow-xl shadow-charles-lime/10 text-lg">
                Explore Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="service-list" className="bg-charles-dark py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-20">
            <motion.p variants={fadeInUp} className="text-charles-lime font-heading font-bold text-sm uppercase tracking-[0.2em] mb-4">What We Offer</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Full-Service Creative Solutions</motion.h2>
            <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime mx-auto" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <motion.article
                key={service.slug}
                variants={fadeInUp}
              >
                <Link href={`/services/${service.slug}`} className="group block bg-charles-darker overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charles-darker via-charles-darker/30 to-transparent" />
                  </div>
                  <div className="p-8">
                    <div className="text-3xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-charles-lime transition-colors">{service.title}</h3>
                    <p className="font-body text-gray-400 leading-relaxed mb-6">{service.description}</p>
                    <span className="text-charles-lime font-heading font-bold text-sm uppercase tracking-wider hover:text-charles-limeHover transition-colors inline-flex items-center gap-2">
                      Learn More <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="bg-charles-darker py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeInUp} className="text-charles-lime font-heading font-bold text-sm uppercase tracking-[0.2em] mb-4">The Pathway Difference</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Why Work With Us</motion.h2>
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
              { num: '01', title: 'Simple Pricing', text: 'Fixed quotes with no hidden extras. You know exactly what you are paying from day one.' },
              { num: '02', title: 'Fast Delivery', text: 'Most projects delivered within 5–10 working days. Rush options available.' },
              { num: '03', title: 'Expert Team', text: 'Experienced designers who understand Kampala businesses inside and out.' },
              { num: '04', title: 'Full Support', text: 'Ongoing support and revisions included. We are here when you need us.' },
            ].map((item) => (
              <motion.div key={item.num} variants={fadeInUp} className="group p-8 bg-charles-dark border-b-2 border-transparent hover:border-charles-lime transition-all duration-300">
                <div className="text-4xl font-heading font-bold text-charles-lime mb-4">{item.num}</div>
                <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-charles-lime transition-colors">{item.title}</h3>
                <p className="font-body text-gray-400 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charles-lime py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-bold text-charles-dark mb-6">
              Let's Build Something Together
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl font-body text-charles-darker mb-10">
              Send us your brief and get a fixed quote in 24 hours.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/contact" className="px-10 py-4 bg-charles-dark text-white font-heading font-bold uppercase tracking-wider hover:bg-charles-darker transition-colors inline-block text-lg">
                Get a Free Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
