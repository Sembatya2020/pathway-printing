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
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const services = [
  {
    slug: 'web-design',
    title: 'Web Design',
    icon: '💻',
    image: '/images/Finished designs/web-cover.jpg',
    heroText: 'Websites that work as hard as you do.',
    content: 'From brochure sites to e-commerce platforms, we craft responsive, fast-loading websites that convert visitors into customers. Every site is built with your brand at its core, designed to look stunning on every device, and optimised for search engines.',
    intro: 'Your website is often the first impression a potential client gets. We make sure it counts. Our web design service covers everything from initial concept and wireframing to design, development, and launch — with ongoing support to keep your site performing at its best.',
    features: [
      { title: 'Responsive Design', desc: 'Mobile-first approach that looks perfect on every screen size.' },
      { title: 'SEO Optimised', desc: 'Built-in search engine optimisation for better visibility.' },
      { title: 'Content Management', desc: 'Easy-to-use CMS so you can update content yourself.' },
      { title: 'E-Commerce Ready', desc: 'Online stores with secure payment integration.' },
      { title: 'Fast Loading', desc: 'Optimised performance for the best user experience.' },
      { title: 'Analytics Setup', desc: 'Track visitors and measure your website performance.' },
    ],
    process: ['Discovery & Requirements', 'Wireframing & Prototyping', 'Visual Design', 'Development & Testing', 'Launch & Support'],
    relatedProjects: [
      { title: 'Web Design Concept', image: '/images/Web Design Elements Brush Effect PNG Images,  Web Design, Computer, Computer Page PNG Transparent Background - Pngtree.jpg' },
    ],
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    icon: '🎨',
    image: '/images/Finished designs/graphic-cover.jpg',
    heroText: 'Design that makes your message unmissable.',
    content: 'Our graphic design service covers everything from brochures and flyers to social media graphics and digital ads. Every piece is crafted with clear attention to your brand guidelines, target audience, and intended impact.',
    intro: 'Great graphic design does more than look good — it communicates your message clearly and drives action. Whether you need a single poster or an entire suite of marketing materials, our team produces professional-grade design work that delivers results.',
    features: [
      { title: 'Print Materials', desc: 'Flyers, brochures, posters, and catalogues designed for impact.' },
      { title: 'Digital Graphics', desc: 'Social media posts, web banners, and email templates.' },
      { title: 'Infographics', desc: 'Complex data presented visually for easy understanding.' },
      { title: 'Packaging Design', desc: 'Product packaging that stands out on the shelf.' },
      { title: 'Illustration', desc: 'Custom illustrations and iconography for your brand.' },
      { title: 'Photo Editing', desc: 'Professional retouching and image manipulation.' },
    ],
    process: ['Creative Brief', 'Concept Development', 'Design Drafts & Revisions', 'Final Artwork Delivery', 'Print-Ready Files'],
    relatedProjects: [
      { title: 'Creative Studio Portfolio', image: '/images/Creative Graphic Designing Company in Scarborough.jpg' },
      { title: 'Aikido Event Poster', image: '/images/Finished designs/Aikido.jpeg' },
    ],
  },
  {
    slug: 'branding',
    title: 'Branding',
    icon: '🏷️',
    image: '/images/Finished designs/branding-cover.jpg',
    heroText: 'Build a brand that people remember.',
    content: 'Your brand is more than a logo — it is the entire experience your audience has with your business. We create complete brand identity systems that give your organisation consistency, credibility, and a professional edge in a competitive market.',
    intro: 'A strong brand builds trust, creates recognition, and drives loyalty. Our branding service covers everything from logo design and colour palette development to typography, brand guidelines, and stationery design — giving you a cohesive visual identity that works across all touchpoints.',
    features: [
      { title: 'Logo Design', desc: 'Memorable logos with multiple variations for different uses.' },
      { title: 'Colour Palette', desc: 'Curated brand colours with specific codes for print and digital.' },
      { title: 'Typography System', desc: 'Font selections and hierarchy rules for consistency.' },
      { title: 'Brand Guidelines', desc: 'Comprehensive brand manual for consistent application.' },
      { title: 'Stationery Design', desc: 'Business cards, letterheads, and envelope designs.' },
      { title: 'Brand Strategy', desc: 'Positioning, tone of voice, and brand messaging.' },
    ],
    process: ['Brand Audit & Research', 'Strategy & Positioning', 'Concept Exploration', 'Design Refinement', 'Guidelines Delivery'],
    relatedProjects: [
      { title: 'Processwork Flyer', image: '/images/Finished designs/Ivanlee Designs2.jpg' },
    ],
  },
  {
    slug: 'creative',
    title: 'Creative',
    icon: '✨',
    image: '/images/Finished designs/creative-cover.jpg',
    heroText: 'Ideas that captivate and inspire.',
    content: 'Sometimes a project needs something beyond standard design. Our creative service covers campaign concepts, visual storytelling, event materials, presentations, and everything in between — giving your projects the creative energy they need to stand out.',
    intro: 'Creativity is at the heart of everything we do. Whether you need a campaign concept, event collateral, or a fresh creative direction, we bring ideas to life with originality, skill, and attention to detail. Our creative team works closely with you to ensure every project feels unique and impactful.',
    features: [
      { title: 'Campaign Concepts', desc: 'Big ideas that connect with your audience across channels.' },
      { title: 'Event Materials', desc: 'Invitations, programmes, backdrops, and display graphics.' },
      { title: 'Presentation Design', desc: 'Professional slide decks that impress clients and investors.' },
      { title: 'Social Media Content', desc: 'Scroll-stopping visuals for all platforms.' },
      { title: 'Photo Direction', desc: 'Art direction for product and lifestyle photography.' },
      { title: 'Motion Graphics', desc: 'Animated visual content for digital marketing.' },
    ],
    process: ['Ideation & Brainstorming', 'Creative Direction', 'Concept Presentation', 'Production & Execution', 'Delivery & Refinement'],
    relatedProjects: [
      { title: 'Corporate Brochure Design', image: '/images/Expert Designs, Flexible Solutions.jpg' },
      { title: 'Book Cover Design', image: '/images/Book Cover Design.jpg' },
    ],
  },
  {
    slug: 'printing',
    title: 'Printing',
    icon: '🖨️',
    image: '/images/Finished designs/printingb.jpg',
    heroText: 'Premium print, delivered on time.',
    content: 'High-quality commercial printing with fast turnaround and competitive pricing. From business cards to large format banners, we handle print production from file preparation to delivery — ensuring every piece is crisp, accurate, and professionally finished.',
    intro: 'Print is still one of the most powerful ways to communicate. Our printing service covers everything from small run digital printing to large format production, with premium materials and finishes that make your printed materials look and feel exceptional.',
    features: [
      { title: 'Business Cards', desc: 'Classic and premium cards with various paper stocks and finishes.' },
      { title: 'Brochures & Flyers', desc: 'High-quality folded and flat marketing materials.' },
      { title: 'Large Format', desc: 'Banners, signage, wall graphics, and exhibition displays.' },
      { title: 'Booklets & Reports', desc: 'Bound publications with professional finishing options.' },
      { title: 'Stationery Printing', desc: 'Letterheads, envelopes, invoice pads, and NCR forms.' },
      { title: 'Specialty Finishes', desc: 'Foil stamping, embossing, die-cutting, and lamination.' },
    ],
    process: ['File Review & Preparation', 'Material Selection', 'Proof Approval', 'Print Production', 'Quality Check & Delivery'],
    relatedProjects: [
      { title: 'Exhibition Display Design', image: '/images/Pin by Nuno Eusebio on Atelier _ Graphic design inspiration poster, Company.jpg' },
      { title: 'Healing History Publication', image: '/images/Finished designs/Healing-History 1.jpeg' },
    ],
  },
];

export async function getStaticPaths() {
  const paths = services.map((s) => ({ params: { slug: s.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  return { props: { service } };
}

export default function ServicePage({ service }) {
  return (
    <Layout title={service.title} description={service.content}>

      {/* Hero with Background Image */}
      <section className="relative bg-charles-darker overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charles-darker/95 via-charles-darker/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-charles-darker via-transparent to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 py-28">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.nav variants={fadeInUp} className="flex items-center gap-2 text-gray-400 mb-8 font-body text-sm">
              <Link href="/services" className="hover:text-charles-lime transition-colors">Services</Link>
              <span>›</span>
              <span className="text-charles-lime font-bold">{service.title}</span>
            </motion.nav>
            <motion.p variants={fadeInUp} className="text-charles-lime font-heading font-bold text-sm uppercase tracking-[0.2em] mb-6">{service.title}</motion.p>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 max-w-3xl leading-tight">{service.heroText}</motion.h1>
            <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime mb-8" />
            <motion.p variants={fadeInUp} className="text-xl font-body text-gray-300 max-w-3xl leading-relaxed">{service.content}</motion.p>
            <motion.div variants={fadeInUp} className="mt-10">
              <Link href="/contact" className="px-8 py-4 bg-charles-lime text-charles-dark font-heading font-bold uppercase tracking-wider hover:bg-charles-limeHover transition-colors inline-block">
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-charles-dark py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} at Pathway`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeInUp} className="text-charles-lime font-heading font-bold text-sm uppercase tracking-[0.2em] mb-4">About This Service</motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">{service.title} at Pathway</motion.h2>
              <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime mb-8" />
              <motion.p variants={fadeInUp} className="text-lg font-body text-gray-300 leading-relaxed">{service.intro}</motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-charles-darker py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeInUp} className="text-charles-lime font-heading font-bold text-sm uppercase tracking-[0.2em] mb-4">Capabilities</motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">What We Deliver</motion.h2>
            <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime mx-auto" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {service.features.map((f, i) => (
              <motion.div key={i} variants={fadeInUp} className="group p-8 bg-charles-dark border-b-2 border-transparent hover:border-charles-lime transition-all duration-300">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-charles-lime text-charles-dark flex items-center justify-center text-lg font-bold mb-5">✓</span>
                <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-charles-lime transition-colors">{f.title}</h3>
                <p className="font-body text-gray-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-charles-dark py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeInUp} className="text-charles-lime font-heading font-bold text-sm uppercase tracking-[0.2em] mb-4">How It Works</motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Our Process</motion.h2>
            <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime mx-auto" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
          >
            {service.process.map((p, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-charles-darker border-2 border-charles-lime text-charles-lime flex items-center justify-center text-xl font-heading font-bold mx-auto mb-4 group-hover:bg-charles-lime group-hover:text-charles-dark transition-all duration-300">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="font-heading font-bold text-white text-sm">{p}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Related Projects */}
      {service.relatedProjects && service.relatedProjects.length > 0 && (
        <section className="bg-charles-darker py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
              <motion.p variants={fadeInUp} className="text-charles-lime font-heading font-bold text-sm uppercase tracking-[0.2em] mb-4">Portfolio</motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Related Projects</motion.h2>
              <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime mx-auto" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className={`grid gap-6 ${service.relatedProjects.length === 1 ? 'max-w-lg mx-auto' : 'md:grid-cols-2 max-w-4xl mx-auto'}`}
            >
              {service.relatedProjects.map((proj, i) => (
                <motion.div key={i} variants={fadeInUp} className="group relative overflow-hidden bg-charles-dark cursor-pointer">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-charles-lime/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-charles-dark font-heading font-bold text-lg uppercase tracking-wider">View Project →</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-xl text-white group-hover:text-charles-lime transition-colors">{proj.title}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-12 text-center">
              <Link href="/projects" className="text-charles-lime font-heading font-bold text-sm uppercase tracking-wider hover:text-charles-limeHover transition-colors inline-flex items-center gap-2">
                View All Projects <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-charles-lime py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-heading font-bold text-charles-dark mb-6">
              Ready to get started with {service.title}?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl font-body text-charles-darker mb-10 max-w-2xl mx-auto">
              Send us your brief and get a fixed quote in 24 hours. No obligation, no hidden costs.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-10 py-4 bg-charles-dark text-white font-heading font-bold uppercase tracking-wider hover:bg-charles-darker transition-colors text-lg">
                Get a Free Quote
              </Link>
              <a href="tel:+256782807255" className="px-10 py-4 border-2 border-charles-dark text-charles-dark font-heading font-bold uppercase tracking-wider hover:bg-charles-dark hover:text-white transition-colors text-lg">
                Call Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
