import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function TermsAndConditions() {
  return (
    <Layout title="Terms & Conditions" description="Terms and Conditions for Pathway Printing & Graphics.">
      <section className="bg-charles-darker py-32 md:py-48">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-10">
              Terms & <span className="text-charles-lime">Conditions</span>
            </h1>
            <div className="prose prose-invert prose-lg max-w-none font-body text-gray-300 space-y-8">
              <p>
                Welcome to Pathway Printing & Graphics. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.
              </p>
              
              <div>
                <h2 className="text-2xl font-heading font-bold text-white mb-4 text-charles-lime">1. Services</h2>
                <p>
                  Pathway Printing & Graphics provides graphic design, branding, and printing services. We reserve the right to modify, suspend, or discontinue any service at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-white mb-4 text-charles-lime">2. Project Approvals and Revisions</h2>
                <p>
                  We aim for complete client satisfaction. The number of revisions included depends on the project quote. Clients are responsible for providing final approval of all designs before printing. We are not liable for any errors found after final client sign-off has been received.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-white mb-4 text-charles-lime">3. Payments and Cancellations</h2>
                <p>
                  A deposit may be required before starting a project. Payments are non-refundable once the design or printing process has begun. We reserve the right to cancel projects if payment terms are not met.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-white mb-4 text-charles-lime">4. Intellectual Property</h2>
                <p>
                  Upon final payment, ownership of the design work may be transferred to the client, depending on the terms of the specific project agreement. We reserve the right to showcase the work in our portfolio, unless otherwise agreed upon in writing.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-white mb-4 text-charles-lime">5. Limitation of Liability</h2>
                <p>
                  Pathway Printing & Graphics is not liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services or products.
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
