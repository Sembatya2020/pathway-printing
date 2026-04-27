import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const services = [
  {
    title: 'Web Design',
    slug: 'web-design',
    description: 'Responsive websites built to engage your audience and communicate your message clearly.',
    image: '/images/Finished designs/webdesign.jpg',
    icon: '💻'
  },
  {
    title: 'Graphic Design',
    slug: 'graphic-design',
    description: 'Flyers, posters, social media designs, and print materials that are clear and visually strong.',
    image: '/images/Finished designs/graphic.jpg',
    icon: '🎨'
  },
  {
    title: 'Music',
    slug: 'music',
    description: 'Songwriting, collaboration, and custom music for events and creative projects.',
    image: '/images/Finished designs/music.jpg',
    icon: '🎵'
  },
  {
    title: 'Creative',
    slug: 'creative',
    description: 'Creative direction, visual storytelling, and content that brings your ideas to life.',
    image: '/images/Finished designs/creative.jpg',
    icon: '✨'
  },
  {
    title: 'Printing',
    slug: 'printing',
    description: 'Quality offset and digital printing with reliable turnaround times.',
    image: '/images/Finished designs/printingx.jpg',
    icon: '🖨️'
  }
];

const testimonials = [
  {
    text: "Ivan has such an angelic voice—he sounds like Michael Jackson. He brings a different and unique style to every project. Give him the opportunity to work on your project —you'll be impressed by his talent and passion.",
    author: "Iga Kenneth",
    role: "Sound Engineer & Producer"
  },
  {
    text: "Ivan took my lyrics and created the base melody, capturing the deep emotional feeling of the song. It's always inspiring to work with Ivan and his amazing talent!",
    author: "Suraj Holzwarth",
    role: "Director of The Whirling Rainbow"
  },
  {
    text: "We hired Ivan to be our graphic designer for our website and media design. We also hired Ivan to write inspirational songs for the Magarini Children's Centre in Kenya. We invited him to Kenya to teach the children the songs. This was a life changing experience for everyone at the center.",
    author: "Sage Emery",
    role: "Founder of International Peace Group"
  }
];

const projects = [
  {
    title: 'Aikido Event Poster',
    category: 'Poster Design',
    image: '/images/Finished designs/Aikido.jpeg'
  },
  {
    title: 'Healing History Publication',
    category: 'Book & Print Design',
    image: '/images/Finished designs/Healing-History 1.jpeg'
  },
  {
    title: 'Processwork Flyer',
    category: 'Branding & Identity',
    image: '/images/Finished designs/Ivanlee Designs2.jpg'
  },
  {
    title: 'Corporate Brochure Design',
    category: 'Print Design',
    image: '/images/Expert Designs, Flexible Solutions.jpg'
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [testimonialKey, setTestimonialKey] = useState(0);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setTestimonialKey((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setTestimonialKey((prev) => prev + 1);
  };

  const heroSlides = [
    {
      title: "Design · Print · Music",
      headline: "Pathway Printing &<br /><span class=\"text-charles-lime\">Graphics</span>",
      description: "Helping you bring your ideas to life through creative design, print, and music.",
      image: "/images/Finished designs/digital.jpg"
    },
    {
      title: "Quality You Can Trust",
      headline: "Quality You Can<br /><span class=\"text-charles-lime\">See & Feel</span>",
      description: "From flyers to banners, I deliver quality print work with reliable turnaround — every time.",
      image: "/images/Finished designs/vision.jpg"
    },
    {
      title: "Creative Design Solutions",
      headline: "Designs That<br /><span class=\"text-charles-lime\">Communicate</span>",
      description: "I create clean, effective designs that help your message stand out and connect with the right audience.",
      image: "/images/Finished designs/printing.jpg"
    },
    {
      title: "Web Design That Works",
      headline: "Digital Experiences<br />That <span class=\"text-charles-lime\">Engage</span>",
      description: "Responsive, modern websites built to represent your brand and communicate clearly online.",
      image: "/images/Finished designs/quality.jpg"
    },
    {
      title: "Music & Creative Projects",
      headline: "Ideas That<br /><span class=\"text-charles-lime\">Inspire</span>",
      description: "Songwriting, collaboration, and creative projects that express hope and tell meaningful stories.",
      image: "/images/Finished designs/project-cover.jpg"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // 5 seconds
    
    return () => clearInterval(slideTimer);
  }, [heroSlides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <Layout>
      {/* Hero Carousel Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-charles-darker">
        
        {/* Carousel Backgrounds */}
        {heroSlides.map((slide, index) => (
          <div key={index} className={`hero-slide ${index === currentSlide ? 'active' : ''} absolute inset-0 transition-opacity duration-1000 ease-in-out`}>
             <div 
               className="hero-zoom-bg absolute inset-0"
               style={{ 
                 backgroundImage: `url('${slide.image}')`,
                 backgroundPosition: 'center',
                 backgroundSize: 'cover'
               }}
             />
          </div>
        ))}

        <div className="absolute inset-0 bg-charles-darker/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-charles-darker/60 via-transparent to-charles-darker/90 z-10" />
        
        <div className="relative z-20 mx-auto max-w-7xl px-6 md:px-10 w-full flex flex-col items-center justify-center text-center">
          
          <motion.div
            key={currentSlide} // Remounts content to re-trigger animations
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full max-w-4xl"
          >
            <motion.p 
              variants={fadeInUp}
              className="text-charles-lime font-heading font-bold text-sm uppercase tracking-[0.2em] mb-4"
            >
              {heroSlides[currentSlide].title}
            </motion.p>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-8xl font-heading font-bold text-white leading-[1.05] mb-6"
              dangerouslySetInnerHTML={{ __html: heroSlides[currentSlide].headline }}
            />
            
            <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime mb-8 mx-auto"></motion.div>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl font-body text-gray-200 max-w-2xl mb-10 leading-relaxed mx-auto min-h-[85px]"
            >
              {heroSlides[currentSlide].description}
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-5">
              <Link href="/contact" className="text-lg px-8 py-4 bg-charles-lime text-charles-dark hover:bg-charles-limeHover transition-all inline-block font-heading font-bold shadow-lg shadow-charles-lime/20">
                Get a Free Quote
              </Link>
              <Link href="/projects" className="text-lg px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-charles-dark transition-all inline-block font-heading font-bold">
                View Our Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Navigation Dots (Centered Bottom) */}
          <div className="absolute bottom-12 flex gap-4">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 ease-out focus:outline-none ${
                  index === currentSlide 
                    ? 'w-12 bg-charles-lime' 
                    : 'w-4 bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-charles-lime mx-auto mb-2"></div>
          <p className="text-charles-lime text-xs font-heading uppercase tracking-widest">Scroll</p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="bg-charles-dark py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.p variants={fadeInUp} className="text-charles-lime font-heading font-bold text-sm uppercase tracking-[0.2em] mb-4">What I Do</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">My Services</motion.h2>
            <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime mx-auto mb-6"></motion.div>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl font-body text-gray-400 max-w-3xl mx-auto">Creative design, print, and music solutions to help you communicate your message clearly and effectively.</motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
              >
                <Link href={service.slug === 'music' ? '/music' : `/services/${service.slug}`} className="group block relative overflow-hidden bg-charles-darker transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charles-darker via-charles-darker/40 to-transparent" />
                  </div>
                  <div className="p-8">
                    <div className="text-3xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-charles-lime transition-colors">{service.title}</h3>
                    <p className="font-body text-gray-400 leading-relaxed mb-4">{service.description}</p>
                    <span className="text-charles-lime font-heading font-bold text-sm uppercase tracking-wider group-hover:text-charles-limeHover inline-flex items-center gap-2">
                      Learn More <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <Link href="/services" className="btn-lime text-lg px-10 py-4 inline-block">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-charles-darker py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.p variants={fadeInUp} className="text-charles-lime font-heading font-bold text-sm uppercase tracking-[0.2em] mb-4">Why Choose Me</motion.p>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Why Choose Pathway</motion.h2>
              <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime mb-8"></motion.div>
              <motion.p variants={fadeInUp} className="text-lg font-body text-gray-300 leading-relaxed mb-10 max-w-xl">
                I provide creative, reliable, and affordable printing and graphic design services for businesses, schools, churches, and individuals. While I serve clients locally in Uganda, I have also worked with online clients, including flyer design projects for clients in the United States. I focus on understanding your needs and delivering work that is simple, clear, and effective.
              </motion.p>

              <motion.ul variants={staggerContainer} className="space-y-6">
                {[
                  { title: 'Personalized Service', desc: 'I work closely with each client to understand their needs and deliver the right solution.' },
                  { title: 'Professional Design Quality', desc: 'I focus on clean, effective, and visually strong designs that communicate clearly.' },
                  { title: 'Fast & Reliable Turnaround', desc: 'I value your time and work hard to deliver on schedule.' },
                  { title: 'Affordable Pricing', desc: 'Professional design and printing services at prices that fit your budget.' },
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeInUp} className="flex gap-4 items-start group">
                    <div className="w-10 h-10 border border-charles-lime/30 flex items-center justify-center flex-shrink-0 group-hover:bg-charles-lime group-hover:text-charles-dark transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-white mb-1">{item.title}</h4>
                      <span className="font-body text-gray-400 text-sm">{item.desc}</span>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-charles-dark p-12 lg:p-16 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-charles-lime/10 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-charles-lime/5 rounded-tr-full"></div>
              <div className="relative z-10 text-center">
                <div className="text-6xl mb-6">🏆</div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-charles-lime mb-6">Serving Businesses, Schools, and Churches in Kampala</h3>
                <p className="font-body text-gray-400 mb-10 leading-relaxed text-lg">
                  I provide creative, reliable, and professional design, printing, and music services for businesses, schools, churches, and organizations — both locally and online.
                </p>
                <div className="grid grid-cols-3 gap-6 border-t border-gray-700 pt-8">
                  <div>
                    <div className="text-4xl font-heading font-bold text-white mb-2">5+</div>
                    <div className="text-xs uppercase tracking-wider text-charles-lime font-bold">Years<br/>Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-heading font-bold text-white mb-2">20+</div>
                    <div className="text-xs uppercase tracking-wider text-charles-lime font-bold">Clients<br/>Served</div>
                  </div>
                  <div>
                    <div className="text-4xl font-heading font-bold text-white mb-2">100+</div>
                    <div className="text-xs uppercase tracking-wider text-charles-lime font-bold">Projects<br/>Handled</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-charles-dark py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.p variants={fadeInUp} className="text-charles-lime font-heading font-bold text-sm uppercase tracking-[0.2em] mb-4">Portfolio</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Recent Work</motion.h2>
            <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime mx-auto mb-6"></motion.div>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl font-body text-gray-400 max-w-3xl mx-auto">A selection of my recent design, print, and creative projects for clients locally and online.</motion.p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden bg-charles-darker cursor-pointer rounded border border-transparent hover:border-gray-700 transition-all hover:shadow-xl hover:shadow-charles-lime/5"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-charles-lime/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-charles-dark font-heading font-bold text-lg uppercase tracking-wider flex items-center gap-2">
                      View Project →
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-charles-lime text-xs font-bold uppercase tracking-wider block mb-2">{project.category}</span>
                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-charles-lime transition-colors">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/projects" className="btn-lime text-lg px-10 py-4 inline-block">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* About the Founder Section */}
      <section className="bg-charles-darker py-28 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
            >
              <Image
                src="/images/founder.png"
                alt="Ivan Sembatya - Founder of Pathway Printing & Graphics"
                fill
                className="object-cover object-top"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeInUp} className="text-charles-lime font-heading font-bold text-sm uppercase tracking-[0.2em] mb-4">About Me</motion.p>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">About the Founder</motion.h2>
              <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime mb-8"></motion.div>
              <motion.div variants={fadeInUp} className="space-y-6 text-lg font-body text-gray-300 leading-relaxed">
                <p>
                  My name is <span className="text-white font-bold">Ivan Sembatya</span>, founder of Pathway Printing & Graphics. I am a graphic designer and creative professional based in Uganda. I hold a Bachelor's degree in Software Development from BYU and I am currently continuing my studies in Process Work.
                </p>
                <p>
                  I work with individuals, businesses, organizations, and charities to create websites, graphics, and creative content that communicate clearly and effectively. Whether you need a website for your project, designs for a special event, or music that expresses your vision, I am ready to work with you and bring your ideas to life.
                </p>
                <p>
                  I am building this business with a strong commitment to professionalism, creativity, and reliability. My goal is to provide affordable, high-quality design and printing solutions while growing and improving every day in this field.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="bg-charles-darker py-28 border-t border-gray-800 border-b border-gray-800 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-charles-lime/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-charles-lime/3 rounded-full translate-x-1/3 translate-y-1/3" />
        
        <div className="mx-auto max-w-4xl px-6 md:px-10 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-charles-lime font-heading font-bold text-sm uppercase tracking-[0.2em] mb-4">Testimonials</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">What My Clients Say</motion.h2>
            <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime mx-auto"></motion.div>
          </motion.div>

          {/* Carousel */}
          <div className="text-center min-h-[280px] flex flex-col items-center justify-center">
            <div key={testimonialKey} className="testimonial-fade-in max-w-3xl mx-auto">
              <div className="text-7xl text-charles-lime font-heading leading-none mb-8 opacity-30">"</div>
              <p className="font-body text-xl md:text-2xl text-gray-200 mb-10 italic leading-relaxed -mt-4">
                {testimonials[currentTestimonial].text}
              </p>
              <div>
                <div className="font-heading font-bold text-white text-xl mb-1">{testimonials[currentTestimonial].author}</div>
                <div className="text-charles-lime font-bold uppercase tracking-wider text-xs">{testimonials[currentTestimonial].role}</div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-charles-lime w-8' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-charles-lime py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-bold text-charles-dark mb-6">
              Ready to Start Your Project?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl font-body text-charles-darker mb-10 max-w-2xl mx-auto">
              Let's work together. Get in touch for a free consultation and quote.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6">
              <Link href="/contact" className="px-10 py-4 bg-charles-dark text-white font-heading font-bold uppercase tracking-wider hover:bg-charles-darker transition-colors hover:shadow-2xl text-lg">
                Request a Quote
              </Link>
              <a href="tel:+256782807255" className="px-10 py-4 border-2 border-charles-dark text-charles-dark font-heading font-bold uppercase tracking-wider hover:bg-charles-dark hover:text-white transition-colors text-lg">
                Call Now: +256 782 807 255
              </a>
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
