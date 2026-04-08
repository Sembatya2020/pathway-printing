import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const projects = [
  {
    title: 'Aikido Event Poster',
    category: 'Graphic Design',
    description: 'Bold, eye-catching poster design for a martial arts event with dynamic typography and vibrant layout that captures attention from across the room.',
    image: '/images/Finished designs/Aikido.jpeg'
  },
  {
    title: 'Healing History Publication',
    category: 'Printing',
    description: 'Complete book cover and interior layout design for a publication exploring health and historical narratives, with premium print finishing.',
    image: '/images/Finished designs/Healing-History 1.jpeg'
  },
  {
    title: 'Processwork Flyer',
    category: 'Branding',
    description: 'Complete brand identity package including logo design, colour palette, typography system, and full stationery suite.',
    image: '/images/Finished designs/Ivanlee Designs2.jpg'
  },
  {
    title: 'Corporate Brochure Design',
    category: 'Graphic Design',
    description: 'Professional multi-page brochure showcasing company services and capabilities with a clean, modern layout.',
    image: '/images/Expert Designs, Flexible Solutions.jpg'
  },
  {
    title: 'Book Cover Design',
    category: 'Creative',
    description: 'Creative book cover design combining strong visual imagery with clear typographic hierarchy to attract readers.',
    image: '/images/Book Cover Design.jpg'
  },
  {
    title: 'Web Design Concept',
    category: 'Web Design',
    description: 'Modern web design concept with clean layout, responsive structure, and engaging visual elements for a digital-first brand.',
    image: '/images/Web Design Elements Brush Effect PNG Images,  Web Design, Computer, Computer Page PNG Transparent Background - Pngtree.jpg'
  },
  {
    title: 'Creative Studio Portfolio',
    category: 'Creative',
    description: 'Portfolio presentation design for a creative studio, showcasing diverse capabilities across print and digital.',
    image: '/images/Creative Graphic Designing Company in Scarborough.jpg'
  },
  {
    title: 'Exhibition Display Design',
    category: 'Printing',
    description: 'Large format exhibition graphics and display design with high visual impact, printed on premium materials.',
    image: '/images/Pin by Nuno Eusebio on Atelier _ Graphic design inspiration poster, Company.jpg'
  },
];

const categories = ['All', 'Web Design', 'Graphic Design', 'Branding', 'Creative', 'Printing'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedProject]);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout title="Projects" description="Browse our portfolio of design, branding, and print projects.">

      {/* Hero */}
      <section className="bg-charles-darker py-32 md:py-48 relative overflow-hidden border-b border-gray-800 flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <Image
            src="/images/Finished designs/project-cover.jpg"
            alt="Projects Cover"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-charles-darker/50 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-charles-darker via-transparent to-charles-darker/30 z-[1]" />
        
        <div className="mx-auto max-w-7xl px-6 md:px-10 relative z-10 w-full">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-col items-center">
            <motion.p variants={fadeInUp} className="text-charles-lime font-heading font-bold text-sm uppercase tracking-[0.2em] mb-6">Our Portfolio</motion.p>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-7xl font-heading font-bold text-white mb-6">
              Visual Solutions <br />
              <span className="text-charles-lime">Portfolio.</span>
            </motion.h1>
            <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime my-8 mx-auto" />
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-body text-gray-200 max-w-3xl leading-relaxed mx-auto">
              A curated selection of our design, branding, and print projects for clients in Kampala and beyond.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Projects Grid */}
      <section className="bg-charles-dark py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          {/* Category Filters */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-wrap gap-3 mb-16 justify-center"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                variants={fadeInUp}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 text-sm font-heading font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-charles-lime text-charles-dark'
                    : 'bg-charles-darker text-gray-400 hover:text-white hover:bg-charles-darker/80 border border-gray-700'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden bg-charles-darker cursor-pointer transition-shadow hover:shadow-xl hover:shadow-charles-lime/5 rounded border border-transparent hover:border-gray-700"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charles-darker via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-charles-lime/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8">
                    <div className="text-center">
                      <span className="text-charles-dark font-heading font-bold text-xl uppercase tracking-wider block mb-3">
                        View Project
                      </span>
                      <span className="text-charles-darker text-sm font-body block max-w-sm">{project.description}</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-charles-lime text-xs font-bold uppercase tracking-wider block mb-3">{project.category}</span>
                  <h3 className="font-heading font-bold text-2xl text-white group-hover:text-charles-lime transition-colors mb-3">{project.title}</h3>
                  <p className="font-body text-gray-400 leading-relaxed text-sm">{project.description}</p>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 font-body text-lg">No projects in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charles-lime py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-bold text-charles-dark mb-6">
              Like What You See?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl font-body text-charles-darker mb-10 max-w-2xl mx-auto">
              Let's create something amazing for your brand too. Get in touch and tell us about your project.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-10 py-4 bg-charles-dark text-white font-heading font-bold uppercase tracking-wider hover:bg-charles-darker transition-colors text-lg">
                Start Your Project
              </Link>
              <Link href="/services" className="px-10 py-4 border-2 border-charles-dark text-charles-dark font-heading font-bold uppercase tracking-wider hover:bg-charles-dark hover:text-white transition-colors text-lg">
                View Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-charles-darker max-w-5xl w-full max-h-[95vh] overflow-y-auto rounded-lg shadow-2xl relative flex flex-col"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 hover:bg-charles-lime hover:text-charles-dark text-gray-200 rounded-full flex items-center justify-center transition-all shadow-lg backdrop-blur-md"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="relative h-[300px] sm:h-[400px] md:h-[600px] w-full bg-charles-dark flex-shrink-0">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              <div className="p-8 md:p-12 text-center bg-gradient-to-t from-charles-darker to-charles-dark/50">
                <span className="text-charles-lime font-bold uppercase tracking-wider text-sm block mb-3 inline-block px-3 py-1 bg-charles-lime/10 rounded-full">
                  {selectedProject.category}
                </span>
                <h3 className="font-heading font-bold text-3xl md:text-5xl text-white mb-6">
                  {selectedProject.title}
                </h3>
                {selectedProject.description ? (
                  <p className="text-gray-300 font-body text-lg max-w-2xl mx-auto leading-relaxed">
                    {selectedProject.description}
                  </p>
                ) : (
                  <p className="text-gray-300 font-body text-lg max-w-2xl mx-auto leading-relaxed">
                    Premium client deliverable focused on crisp design, clear messaging, and high-quality production standards.
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
