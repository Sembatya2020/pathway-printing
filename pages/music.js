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

const YouTubeEmbed = ({ url, title }) => {
  const videoId = url.split('/').pop().split('?')[0];
  return (
    <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl group">
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="absolute inset-0 pointer-events-none border-2 border-transparent group-hover:border-amber-500/50 transition-colors duration-500 rounded-xl" />
    </div>
  );
};

export default function MusicPage() {
  return (
    <Layout 
      title="Music & Songwriting | Pathway Graphics" 
      description="Professional songwriting and music production for NGOs, businesses, and personal stories. Turning stories into powerful songs."
    >
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Finished designs/keyboard.jpg"
            alt="Songwriting and Music Production"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-charles-darker via-transparent to-black/40" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="flex justify-center mb-6">
              <p className="bg-amber-500/20 text-amber-500 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest border border-amber-500/30">
                Creative Music Projects
              </p>
            </motion.div>
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-8xl font-heading font-bold text-white mb-6 tracking-tight"
            >
              Turning Stories Into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                Powerful Songs
              </span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 font-body leading-relaxed"
            >
              I create custom songs, theme music, and inspirational soundtracks for individuals, businesses, and organizations.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#featured" 
                className="px-10 py-4 bg-amber-500 text-charles-darker font-heading font-bold uppercase tracking-wider hover:bg-amber-400 transition-all transform hover:-translate-y-1 shadow-lg shadow-amber-500/20"
              >
                🎧 Listen to My Work
              </a>
              <Link 
                href="/contact" 
                className="px-10 py-4 border-2 border-white/20 text-white font-heading font-bold uppercase tracking-wider hover:bg-white hover:text-charles-darker transition-all transform hover:-translate-y-1"
              >
                ✍️ Request a Custom Song
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
          <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent" />
        </div>
      </section>

      {/* Section 1: About My Songwriting */}
      <section className="bg-charles-darker py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
            >
              <h2 className="text-charles-lime font-heading font-bold text-sm uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                🎵 My Story
              </h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">
                About My <span className="text-amber-500">Songwriting</span>
              </h3>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-body">
                <p>
                  I am a passionate songwriter who creates music with purpose. I write songs for charities, organizations, businesses, and individuals who want to share a message that inspires, uplifts, and connects with people.
                </p>
                <p>
                  My music focuses on real stories, hope, and impact. Whether it is a theme song for an NGO, a personal story, or a campaign message, I turn ideas into powerful melodies and meaningful lyrics.
                </p>
              </div>
              <div className="mt-10 p-8 bg-charles-dark rounded-2xl border-l-4 border-amber-500 relative">
                <p className="italic text-white text-xl">
                  "Music has the power to speak where words fail. I help you find that voice."
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/Finished designs/music.jpg"
                  alt="Music Production"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charles-darker/80 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-amber-500 p-8 rounded-2xl shadow-xl hidden md:block text-charles-darker">
                <div className="text-4xl font-bold font-heading">10+</div>
                <div className="font-bold text-sm uppercase tracking-tighter">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Featured Song */}
      <section id="featured" className="bg-charles-dark py-24 border-y border-white/5">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-amber-500 font-heading font-bold text-sm uppercase tracking-[0.3em] mb-4">Featured Work</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">“You Can”</motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-amber-500 mx-auto mb-8" />
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-2xl mx-auto">
              A motivational song written to inspire confidence and remind people that they can overcome challenges.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <YouTubeEmbed url="https://youtu.be/i4LE99WqfAc" title="You Can - Featured Song" />
          </motion.div>
        </div>
      </section>

      {/* Section 3: Collaborations */}
      <section className="bg-charles-darker py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-amber-500 font-heading font-bold text-sm uppercase tracking-[0.3em] mb-4">The Portfolio</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-bold text-white mb-10">Collaborations & Projects</motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
              className="space-y-6"
            >
              <YouTubeEmbed url="https://youtu.be/WBrtOHojvy4" title="Heart Like a Mountain" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Heart Like a Mountain</h3>
                <p className="text-amber-500 font-medium mb-3">Written by Suraj Holzwarth</p>
                <p className="text-gray-400">A powerful song about strength and resilience, showcasing the emotional depth of acoustic storytelling.</p>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
              className="space-y-6"
            >
              <YouTubeEmbed url="https://youtu.be/pkJrtTmK4Uw" title="My Bright Star" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">My Bright Star</h3>
                <p className="text-amber-500 font-medium mb-3">Interview & Project Feature</p>
                <p className="text-gray-400">A touching project telling a meaningful story through music, highlighting the connection between narrative and melody.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Music for Impact */}
      <section className="bg-amber-500 py-24 overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
            >
              <h2 className="text-charles-darker font-heading font-bold text-sm uppercase tracking-[0.3em] mb-4">NGOs & Causes</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-charles-darker mb-8">Music for <span className="underline decoration-charles-darker/20">Impact</span></h3>
              <div className="space-y-6 text-charles-darker/80 text-xl font-body leading-relaxed">
                <p>
                  I also create songs for NGOs, community projects, and charitable causes. Music has a unique way of mobilizing people around a shared vision.
                </p>
                <div className="bg-charles-darker/5 p-8 rounded-2xl border-l-4 border-charles-darker">
                  <p className="font-bold text-charles-darker mb-2">Featured Project: “Arise and Shine”</p>
                  <p className="italic">
                    Written for Magarini Children Center Foundation, aimed at inspiring children and giving them hope for a brighter future.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md aspect-[3/4] bg-charles-darker rounded-[3rem] p-1 shadow-2xl flex flex-col justify-between overflow-hidden">
                 <div className="p-10 flex flex-col items-center text-center">
                   <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mb-6 shadow-xl animate-pulse">
                     <span className="text-3xl">🎤</span>
                   </div>
                   <h4 className="text-white text-3xl font-heading font-bold mb-4">Why Choose Me?</h4>
                   <ul className="text-gray-300 text-left space-y-4">
                     <li className="flex items-start gap-3">
                       <span className="text-amber-500 mt-1">⭐</span>
                       <span>Music with purpose and meaning</span>
                     </li>
                     <li className="flex items-start gap-3">
                       <span className="text-amber-500 mt-1">⭐</span>
                       <span>Experience working with NGOs</span>
                     </li>
                     <li className="flex items-start gap-3">
                       <span className="text-amber-500 mt-1">⭐</span>
                       <span>Unique combination of design + music</span>
                     </li>
                     <li className="flex items-start gap-3">
                       <span className="text-amber-500 mt-1">⭐</span>
                       <span>Personalized creative approach</span>
                     </li>
                   </ul>
                 </div>
                 <div className="h-2 bg-amber-500 w-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Services */}
      <section className="bg-charles-darker py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={stagger}
            className="text-center mb-20"
          >
            <motion.p variants={fadeInUp} className="text-amber-500 font-heading font-bold text-sm uppercase tracking-[0.3em] mb-4">What I Offer</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-bold text-white">Music Services</motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🎵", title: "Custom Songs", desc: "Original compositions based on your personal story, message, or vision." },
              { icon: "🎸", title: "NGO & Theme Songs", desc: "Impactful theme songs for foundations, charities, and community projects." },
              { icon: "🎧", title: "Brand Music", desc: "Unique soundtracks for businesses and brands that demand attention." },
              { icon: "🎤", title: "Vocal Recording", desc: "Professional vocal performance for your projects with soul and clarity." },
              { icon: "✍️", title: "Lyric Writing", desc: "Meaningful, poetic, and impactful lyrics tailored to your specific message." },
              { icon: "🎹", title: "Music Arrangement", desc: "Full instrumentation and production to bring your melodies to life." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={fadeInUp}
                className="group p-10 bg-charles-dark hover:bg-charles-dark/80 transition-all border-b-4 border-transparent hover:border-amber-500 text-center flex flex-col items-center"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="bg-charles-dark py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/images/Finished designs/keyboard.jpg"
            alt="Songwriting"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">
              Let’s Create Your Song
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-12 font-body leading-relaxed">
              Do you have a story, message, or vision? <br className="hidden md:block" />
              I am ready to turn it into a powerful song with the best melodies and vocals.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link 
                href="/contact" 
                className="px-12 py-5 bg-amber-500 text-charles-darker font-heading font-bold uppercase tracking-wider hover:bg-amber-400 transition-all inline-block shadow-2xl shadow-amber-500/20 text-lg sm:text-xl"
              >
                Request a Custom Song
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
