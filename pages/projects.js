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
  // Websites
  {
    title: 'Ivaste Website',
    category: 'Web Design',
    description: 'A responsive website designed to present the Ivaste brand with a clean layout, clear navigation, and engaging visual elements that communicate the brand\'s mission effectively.',
    image: '/images/Finished-designs/ivaste-website.png'
  },
  {
    title: 'Magarini Children\'s Center Website',
    category: 'Web Design',
    description: 'A website designed for the Magarini Children\'s Center in Kenya, created to share the center\'s mission, connect with supporters, and provide a clear online presence for the organization.',
    image: '/images/Finished-designs/magarini-website.png'
  },
  {
    title: 'Processwork Institute Website',
    category: 'Web Design',
    description: 'A professional website designed for the Processwork Institute of Hawaii, featuring clear information architecture and an accessible design that serves both practitioners and students.',
    image: '/images/Finished-designs/processwork-website.png'
  },
  // Graphic Design
  {
    title: 'Aikido Event Poster',
    category: 'Graphic Design',
    description: 'A bold, eye-catching poster design for an Aikido martial arts event with clear typography and a dynamic layout that grabs attention.',
    image: '/images/Finished-designs/Aikido.jpeg'
  },
  {
    title: 'Healing History Publication',
    category: 'Graphic Design',
    description: 'Complete publication design including cover and interior layout for a book exploring health and historical narratives, with clean typography and professional finishing.',
    image: '/images/Finished-designs/Healing-History-1.jpeg'
  },
  {
    title: 'Processwork Flyer Design',
    category: 'Graphic Design',
    description: 'A clean and informative flyer design for Processwork events, focused on clear messaging and visual impact to communicate the program details effectively.',
    image: '/images/Finished-designs/Ivanlee-Designs2.jpg'
  },
  {
    title: 'Event Flyer Design',
    category: 'Graphic Design',
    description: 'A vibrant flyer designed for a community event with bold visuals and clear information hierarchy to attract and inform the audience.',
    image: '/images/Finished-designs/graphics-1.jpeg'
  },
  {
    title: 'Promotional Poster',
    category: 'Graphic Design',
    description: 'A professionally designed promotional poster with eye-catching colors and clean layout to communicate the message with visual impact.',
    image: '/images/Finished-designs/graphics-1.jpg'
  },
  {
    title: 'Community Event Flyer',
    category: 'Graphic Design',
    description: 'A well-structured flyer designed for community outreach, focusing on clarity and visual appeal to effectively engage the target audience.',
    image: '/images/Finished-designs/graphics-2.jpeg'
  },
  {
    title: 'Organization Flyer',
    category: 'Graphic Design',
    description: 'A clean and professional flyer designed for an organization, with strong typography and layout that communicates key information clearly.',
    image: '/images/Finished-designs/graphics-3.jpeg'
  },
  {
    title: 'Creative Campaign Design',
    category: 'Graphic Design',
    description: 'A creative campaign design with bold visual elements and compelling messaging to drive engagement and awareness.',
    image: '/images/Finished-designs/graphics-3.jpg'
  },
  {
    title: 'Program Flyer Design',
    category: 'Graphic Design',
    description: 'A detailed program flyer with structured content layout and attractive color scheme designed to inform and inspire action.',
    image: '/images/Finished-designs/graphics-4.jpeg'
  },
  {
    title: 'Social Media Graphic',
    category: 'Graphic Design',
    description: 'A social media graphic designed with modern aesthetics and brand consistency, optimized for online engagement and sharing.',
    image: '/images/Finished-designs/graphics-5.jpg'
  },
  {
    title: 'Event Announcement Design',
    category: 'Graphic Design',
    description: 'A visually striking event announcement design with professional typography and layout that captures attention instantly.',
    image: '/images/Finished-designs/graphics-6.jpg'
  },
  {
    title: 'Workshop Poster',
    category: 'Graphic Design',
    description: 'A workshop poster featuring clean design, strong visual hierarchy, and clear call-to-action to drive attendance.',
    image: '/images/Finished-designs/graphics-7.jpg'
  },
  {
    title: 'Informational Flyer',
    category: 'Graphic Design',
    description: 'An informational flyer designed with a focus on readability and visual clarity, effectively presenting key details to the audience.',
    image: '/images/Finished-designs/graphics-8.jpeg'
  },
  {
    title: 'Conference Poster Design',
    category: 'Graphic Design',
    description: 'A conference poster design with professional layout, compelling visuals, and organized content structure for maximum impact.',
    image: '/images/Finished-designs/graphics-9.jpg'
  },
  {
    title: 'Charity Event Flyer',
    category: 'Graphic Design',
    description: 'A charity event flyer designed with warm visuals and clear messaging to inspire community support and participation.',
    image: '/images/Finished-designs/graphics-10.jpg'
  },
  {
    title: 'Vector Portrait Illustration',
    category: 'Graphic Design',
    description: 'A hand-crafted vector portrait illustration capturing personality and warmth through bold linework and confident color blocking — ideal for personal branding and editorial use.',
    image: '/images/Finished-designs/new%20(3).jpeg'
  },
  {
    title: 'Digital Vector Portrait',
    category: 'Graphic Design',
    description: 'A detailed digital portrait rendered in vector with rich textures, soft lighting, and a moody tone — designed for profile branding and creative campaigns.',
    image: '/images/Finished-designs/new%20(4).jpeg'
  },
  {
    title: 'Stylized Profile Illustration',
    category: 'Graphic Design',
    description: 'A modern, stylized vector profile combining a clean character illustration with dynamic geometric accents — built for standout social media identity.',
    image: '/images/Finished-designs/new%20(5).jpeg'
  },
  {
    title: 'Critical Mass Kampala – Countdown Flyer',
    category: 'Graphic Design',
    description: 'A vibrant countdown flyer for the Critical Mass Kampala Monthly Social Ride, using bright colors and layered photography to build excitement around the event.',
    image: '/images/Finished-designs/new%20(6).jpeg'
  },
  {
    title: 'Patriotic Vector Portrait',
    category: 'Graphic Design',
    description: 'A vector portrait overlaid with national flag tones — combining identity and pride into a single editorial-style illustration.',
    image: '/images/Finished-designs/new%20(7).jpeg'
  },
  {
    title: 'Editorial Vector Portrait',
    category: 'Graphic Design',
    description: 'A warm, editorial-style vector portrait with painterly highlights and a textured background — suited for magazine features and creative profiles.',
    image: '/images/Finished-designs/new%20(8).jpeg'
  },
  {
    title: 'Critical Mass Monthly Social Ride',
    category: 'Graphic Design',
    description: 'An event flyer for the Critical Mass Kampala Monthly Social Ride — combining route mapping, bold typography, and lifestyle photography into a single energetic poster.',
    image: '/images/Finished-designs/new%20(9).jpeg'
  },
  {
    title: 'Tokenomics Monday Social Graphic',
    category: 'Graphic Design',
    description: 'A modern social media graphic for a recurring crypto education series — clean dual-portrait layout, branded badge, and on-trend financial iconography.',
    image: '/images/Finished-designs/new%20(10).jpeg'
  },
  {
    title: 'Christmas Promotional Flyer',
    category: 'Graphic Design',
    description: 'A festive promotional flyer for a holiday "buy one, get one free" campaign — gold-on-black palette with a hand-drawn tree motif for premium seasonal appeal.',
    image: '/images/Finished-designs/new%20(11).jpeg'
  },
  {
    title: 'Eid Holidays Travel Flyer',
    category: 'Graphic Design',
    description: 'A vibrant travel agency flyer promoting an Eid holiday tour package — combining destination photography, decorative typography, and a clear booking call-to-action.',
    image: '/images/Finished-designs/new%20(12).jpeg'
  },
  {
    title: 'UAE Visa Service Flyer',
    category: 'Graphic Design',
    description: 'A bold promotional flyer for a UAE visa service — clean typography, vivid gradients, and lifestyle imagery designed to drive conversions on social media.',
    image: '/images/Finished-designs/new%20(13).jpeg'
  },
  {
    title: 'TV Show Promotional Poster',
    category: 'Graphic Design',
    description: 'A bold, broadcast-ready poster for a featured TV show — strong typography, cinematic imagery, and a confident layout designed to grab attention on every screen it lands on.',
    image: '/images/Finished-designs/TV-show.jpg'
  },
  {
    title: 'Cabaret Plays Theatre Poster',
    category: 'Graphic Design',
    description: 'An expressive poster for a live cabaret theatre production — dramatic colour, stylised typography, and an atmospheric mood that captures the energy of the performance.',
    image: '/images/Finished-designs/Cabaret%20plays.jpg'
  },
  {
    title: 'Destiny Event Flyer',
    category: 'Graphic Design',
    description: 'An inspiring event flyer built around the theme of destiny — warm visuals, clear messaging hierarchy, and a layout designed to draw the audience in and drive attendance.',
    image: '/images/Finished-designs/destiny.jpg'
  },
  {
    title: 'Ignite Campaign Flyer',
    category: 'Graphic Design',
    description: 'A high-energy campaign flyer for the Ignite event — bold colour, expressive typography, and a layout engineered to spark interest and motivate sign-ups.',
    image: '/images/Finished-designs/Ignite.jpg'
  },
  {
    title: 'Restaurant Promo Flyer',
    category: 'Graphic Design',
    description: 'A mouth-watering promotional flyer for a local restaurant — appetising photography, warm brand colours, and a clear menu-driven layout designed to convert hungry scrollers into walk-in customers.',
    image: '/images/Finished-designs/restaurant.jpeg'
  },
  {
    title: 'Massage & Wellness Flyer',
    category: 'Graphic Design',
    description: 'A calming wellness flyer for a massage and spa service — soft palette, balanced spacing, and clean typography that communicates relaxation and trust at a glance.',
    image: '/images/Finished-designs/massage.jpeg'
  },

  // Music & Creative
  {
    title: 'My Bright Star',
    category: 'Music',
    description: 'A collaborative music project created with Sarah Bethany, Michael, and Suraj Holzwarth to express hope and inspiration. I contributed to the creative direction and message of the song.',
    image: '/images/Finished-designs/music.jpg',
    videoUrl: 'https://www.youtube.com/embed/K-F0B4ONcQg'
  },
  {
    title: 'You Can',
    category: 'Music',
    description: 'A motivational song written to inspire confidence and remind people that they can overcome challenges. This is one of my featured original compositions.',
    image: '/images/Finished-designs/music.jpg',
    videoUrl: 'https://www.youtube.com/embed/i4LE99WqfAc'
  },
  {
    title: 'Heart Like a Mountain',
    category: 'Music',
    description: 'A powerful song about strength and resilience, written by Suraj Holzwarth. This project showcases the emotional depth of acoustic storytelling and collaboration.',
    image: '/images/Finished-designs/music.jpg',
    videoUrl: 'https://www.youtube.com/embed/WBrtOHojvy4'
  },
  {
    title: 'My Bright Star – The Backstory',
    category: 'Music',
    description: 'An in-depth interview and behind-the-scenes look at the creative process and story behind "My Bright Star" — a project created with The Whirling Rainbow Foundation.',
    image: '/images/Finished-designs/music.jpg',
    videoUrl: 'https://www.youtube.com/embed/2oPD4_iVDng'
  },
];

const categories = ['All', 'Web Design', 'Graphic Design', 'Music'];

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
      <section className="bg-charles-darker pt-28 pb-12 md:pt-32 md:pb-16 relative overflow-hidden border-b border-gray-800 flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <Image
            src="/images/Finished-designs/project-cover.jpg"
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
              A curated selection of my design, print, and creative projects for clients locally and online.
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
                onClick={() => !project.videoUrl && setSelectedProject(project)}
                className={`group relative overflow-hidden bg-charles-darker ${!project.videoUrl ? 'cursor-pointer' : ''} transition-shadow hover:shadow-xl hover:shadow-charles-lime/5 rounded border border-transparent hover:border-gray-700`}
              >
                {project.videoUrl ? (
                  <div className="relative h-80 overflow-hidden">
                    <iframe
                      src={project.videoUrl}
                      title={project.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
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
                )}
                <div className="p-8">
                  <span className="text-charles-lime text-xs font-bold uppercase tracking-wider block mb-3">{project.category}</span>
                  <h3 className="font-heading font-bold text-2xl text-white group-hover:text-charles-lime transition-colors mb-3">{project.title}</h3>
                  <p className="font-body text-gray-400 leading-relaxed text-sm">{project.description}</p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Music Portfolio CTA */}
          {activeCategory === 'Music' && (
            <div className="mt-12 text-center">
              <Link href="/music" className="inline-flex items-center gap-3 px-10 py-4 bg-charles-lime text-charles-dark font-heading font-bold uppercase tracking-wider hover:bg-charles-limeHover transition-all shadow-lg shadow-charles-lime/20 text-lg">
                🎵 View Full Music Portfolio
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <p className="text-gray-500 font-body text-sm mt-4">Explore all my songs, collaborations, and music services</p>
            </div>
          )}

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
              Let's work together on your next project. Get in touch and tell me about your ideas.
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
