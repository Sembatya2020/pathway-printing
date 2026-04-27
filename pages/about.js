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

export default function About() {
  return (
    <Layout title="About" description="Learn about Pathway Printing & Graphics — Kampala's creative design and print experts.">

      {/* Hero */}
      <section className="bg-charles-darker py-32 md:py-48 relative overflow-hidden border-b border-gray-800 flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <Image
            src="/images/Finished designs/about-cover.jpg"
            alt="About Pathway Printing & Graphics"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-charles-darker/50 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-charles-darker via-transparent to-charles-darker/30 z-[1]" />
        
        <div className="mx-auto max-w-7xl px-6 md:px-10 relative z-10 w-full">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-col items-center">
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-7xl font-heading font-bold text-white leading-tight">
              From Design & Print<br />to Music.
              <span className="text-charles-lime block mt-2">I have it covered.</span>
            </motion.h1>
            <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime my-8 mx-auto" />
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-body text-gray-200 max-w-3xl leading-relaxed mx-auto">
              I am a creative professional based in Kampala, delivering design, print, and music services.
              My focus is on clear communication, quality work, and helping you bring your ideas to life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-charles-dark py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden"
            >
              <Image
                src="/images/hoe-page.jpg"
                alt="Pathway Printing studio workspace"
                width={800}
                height={600}
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">My Story</motion.h2>
              <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime mb-8" />
              <motion.p variants={fadeInUp} className="text-lg font-body text-gray-300 leading-relaxed mb-6">
                I am based in Kampala, Uganda, and Pathway Printing &amp; Graphics was built from my passion for creative design, quality printing, and music communication.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg font-body text-gray-300 leading-relaxed mb-6">
                I have worked with organizations such as Processwork Institute of Hawaii, International Peace Group, Magarini Children's Center, and The Whirling Rainbow Foundation, along with several local NGOs. Through these experiences, I have delivered work based on each client's unique needs.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg font-body text-gray-300 leading-relaxed">
                I am always open to new opportunities and would be glad to work with you and serve you professionally.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Did You Know */}
      <section className="bg-charles-darker py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="order-2 lg:order-1">
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">My Approach</motion.h2>
              <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime mb-8" />
              <motion.p variants={fadeInUp} className="text-lg font-body text-gray-300 leading-relaxed mb-6">
                I believe strong design should do more than just look good. It should communicate clearly, represent your message with confidence, and leave a lasting impression.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg font-body text-gray-300 leading-relaxed mb-6">
                That is why I combine creative thinking, attention to detail, and practical design to deliver work that is both visually strong and effective.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg font-body text-gray-300 leading-relaxed">
                From print to digital design, my goal is to help you stand out, connect with your audience, and communicate your message clearly.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <Image
                src="/images/Book Cover Design.jpg"
                alt="Book cover design samples"
                width={800}
                height={600}
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-charles-dark py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-bold text-charles-lime mb-6">How I Work</motion.h2>
            <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime mx-auto" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              { step: '01', title: 'Listen', text: 'Your needs are unique. I start by understanding your goals and what you want to communicate.' },
              { step: '02', title: 'Explore', text: 'I research your audience and find the best creative approach for your project.' },
              { step: '03', title: 'Define', text: 'I develop a clear plan and direction that positions your message for maximum impact.' },
              { step: '04', title: 'Create', text: 'I bring your ideas to life with polished designs that are clear and effective.' },
              { step: '05', title: 'Deliver', text: 'From concept to completion — quality, on-time delivery every single time.' },
            ].map((item) => (
              <motion.div
                key={item.step}
                variants={fadeInUp}
                className="p-8 bg-charles-darker border-b-2 border-transparent hover:border-charles-lime transition-all duration-300 group"
              >
                <div className="text-4xl font-heading font-bold text-charles-lime mb-4">{item.step}</div>
                <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-charles-lime transition-colors">{item.title}</h3>
                <p className="font-body text-gray-400 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charles-lime py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-bold text-charles-dark mb-6">
              Ready to Get Started?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl font-body text-charles-darker mb-10 max-w-2xl mx-auto">
              Talk to me about your next print, design, or creative project today.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/contact" className="px-8 py-4 bg-charles-dark text-white font-heading font-bold uppercase tracking-wider hover:bg-charles-darker transition-colors inline-block">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
