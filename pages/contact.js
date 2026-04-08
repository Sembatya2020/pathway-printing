import Layout from '../components/Layout';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', message: ''
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Field-level validation
    if (!formData.firstName.trim()) { setError('First name is required'); return; }
    if (!formData.lastName.trim()) { setError('Last name is required'); return; }
    if (!formData.email.trim()) { setError('Email address is required'); return; }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!formData.message.trim()) { setError('Please enter a message'); return; }
    if (!agreedToTerms) { setError('Please verify that you are human'); return; }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mdawrogy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Pathway Website Message from ${formData.firstName} ${formData.lastName}`
        })
      });

      if (response.ok) {
        setSuccess('Thank you for contacting Pathway Printing & Graphics. Your message has been sent successfully.');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
        setAgreedToTerms(false);
        // Scroll to success message
        window.scrollTo({ top: 300, behavior: 'smooth' });
      } else {
        const data = await response.json();
        if (data.errors) {
          setError(data.errors.map(err => err.message).join(', '));
        } else {
          setError('Oops! There was a problem submitting your form. Please try again.');
        }
      }
    } catch (err) {
      setError('Oops! There was a problem connecting to the server. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout title="Contact" description="Get in touch with Pathway Printing & Graphics in Kampala.">

      {/* Hero */}
      <section className="bg-charles-darker py-32 md:py-48 relative overflow-hidden border-b border-gray-800 flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <Image
            src="/images/Finished designs/vision.jpg"
            alt="Contact Pathway Printing"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-charles-darker/60 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-charles-darker via-transparent to-charles-darker/30 z-[1]" />

        <div className="mx-auto max-w-7xl px-6 md:px-10 relative z-10 w-full">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-col items-center">
            <motion.p variants={fadeInUp} className="text-charles-lime font-heading font-bold text-sm uppercase tracking-[0.2em] mb-6">Get In Touch</motion.p>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-7xl font-heading font-bold text-white mb-6">
              Contact <span className="text-charles-lime">Us</span>
            </motion.h1>
            <motion.div variants={fadeInUp} className="w-[125px] h-[1px] bg-charles-lime my-8 mx-auto" />
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-body text-gray-200 max-w-2xl leading-relaxed mx-auto">
              Have a project in mind? We'd love to hear from you. Reach out and let's create something great together.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="relative h-80 md:h-96 bg-charles-dark">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7489088476803!2d32.5814!3d0.3431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x176b8e8a8e8e8e8f%3A0x8e8e8e8e8e8e8e8e!2sBwaise%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1234567890"
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* Contact Details + Form */}
      <section className="bg-charles-dark py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-2">

            {/* Address Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl font-heading font-bold text-charles-lime mb-8">Address</motion.h2>
              <motion.div variants={fadeInUp} className="space-y-6 font-body text-gray-300">
                <div>
                  <p className="text-white font-heading font-bold text-lg">Bwaise, Kampala</p>
                  <p>Along Bombo Road</p>
                  <p>Kampala, Uganda</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <a href="tel:+256782807255" className="text-white hover:text-charles-lime transition-colors text-lg font-bold">+256 782 807 255</a>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <a href="mailto:ivansmbt@gmail.com" className="text-white hover:text-charles-lime transition-colors text-lg font-bold">ivansmbt@gmail.com</a>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">WhatsApp</p>
                  <a href="https://wa.me/256755960836" className="text-white hover:text-charles-lime transition-colors text-lg font-bold">+256 755 960 836</a>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/ivan-sembatya-4b41b823b" target="_blank" rel="noreferrer" className="text-white hover:text-charles-lime transition-colors text-lg font-bold">Ivan Sembatya</a>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Facebook</p>
                  <a href="https://www.facebook.com/profile.php?id=61588577943873" target="_blank" rel="noreferrer" className="text-white hover:text-charles-lime transition-colors text-lg font-bold">Pathway Printing & Graphics</a>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-500">Business Hours</p>
                  <p className="text-white font-bold">Mon – Fri: 8:00 AM – 6:00 PM</p>
                  <p className="text-white font-bold">Sat: 9:00 AM – 2:00 PM</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl font-heading font-bold text-charles-lime mb-3">Get in Touch</motion.h2>
              <motion.p variants={fadeInUp} className="font-body text-gray-400 mb-8">
                Fill out the form below and one of our team members will be in touch within 24 hours.
              </motion.p>

              <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="firstName" placeholder="First Name *" value={formData.firstName} onChange={handleChange}
                    className="w-full bg-charles-darker border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-charles-lime focus:outline-none transition font-body" required />
                  <input type="text" name="lastName" placeholder="Last Name *" value={formData.lastName} onChange={handleChange}
                    className="w-full bg-charles-darker border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-charles-lime focus:outline-none transition font-body" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange}
                    className="w-full bg-charles-darker border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-charles-lime focus:outline-none transition font-body" required />
                  <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange}
                    className="w-full bg-charles-darker border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-charles-lime focus:outline-none transition font-body" />
                </div>
                <textarea name="message" placeholder="Tell us about your project..." rows="5" value={formData.message} onChange={handleChange}
                  className="w-full bg-charles-darker border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-charles-lime focus:outline-none transition resize-none font-body" />
                <div className="bg-charles-darker border border-gray-700 p-4 flex items-center gap-3">
                  <input type="checkbox" id="verify" checked={agreedToTerms}
                    onChange={(e) => { setAgreedToTerms(e.target.checked); setError(''); }}
                    className="w-5 h-5 cursor-pointer accent-charles-lime" />
                  <label htmlFor="verify" className="text-white text-sm cursor-pointer font-body">I am human</label>
                </div>
                {error && <p className="text-red-400 text-sm font-body">{error}</p>}
                {success && <p className="text-green-400 text-sm font-body">{success}</p>}
                <p className="text-sm text-gray-500 font-body">Fields marked * are required</p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 font-heading font-bold uppercase tracking-wider transition-all text-lg flex items-center justify-center gap-2 ${isSubmitting
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-charles-lime text-charles-dark hover:bg-charles-limeHover'
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-charles-lime py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold text-charles-dark mb-4">
              Prefer to Talk Directly?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg font-body text-charles-darker mb-8">
              Connect with us on WhatsApp for instant support or call us during business hours.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/256755960836" className="px-8 py-4 bg-charles-dark text-white font-heading font-bold uppercase tracking-wider hover:bg-charles-darker transition-colors">
                Chat on WhatsApp
              </a>
              <a href="tel:+256782807255" className="px-8 py-4 border-2 border-charles-dark text-charles-dark font-heading font-bold uppercase tracking-wider hover:bg-charles-dark hover:text-white transition-colors">
                Call Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
