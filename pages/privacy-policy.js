import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function PrivacyPolicy() {
  return (
    <Layout title="Privacy Policy" description="Privacy Policy for Pathway Printing & Graphics.">
      <section className="bg-charles-darker py-32 md:py-48">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-10">
              Privacy <span className="text-charles-lime">Policy</span>
            </h1>
            <div className="prose prose-invert prose-lg max-w-none font-body text-gray-300 space-y-8">
              <p>
                At Pathway Printing & Graphics, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
              </p>
              
              <div>
                <h2 className="text-2xl font-heading font-bold text-white mb-4 text-charles-lime">1. Information We Collect</h2>
                <p>
                  We may collect personal information that you provide to us, such as your name, email address, phone number, and any details related to your design or printing requests when you contact us or request a quote.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-white mb-4 text-charles-lime">2. How We Use Your Information</h2>
                <p>
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and deliver the services you request.</li>
                  <li>Respond to your inquiries and provide customer support.</li>
                  <li>Send you quotes, invoices, and project updates.</li>
                  <li>Improve our website and service offerings.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-white mb-4 text-charles-lime">3. Data Security</h2>
                <p>
                  We implement reasonable security measures to protect your personal information from unauthorized access, loss, or misuse. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-white mb-4 text-charles-lime">4. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  Email: info@pathway-printing.net
                  <br />
                  Phone: +256 782 807 255
                </p>
              </div>
              
              <p className="text-sm text-gray-500 pt-10">   
                Last Updated: April 2026
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
