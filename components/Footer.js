import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-charles-darker text-white pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-2 text-white">Nija Print &<br />Graphics Studio</h3>
            <p className="font-body italic text-charles-lime text-sm mb-4 tracking-wide">
              Designing with purpose
            </p>
            <p className="font-body text-gray-400 leading-relaxed text-sm mb-6">
              Creative design and printing services based in Kampala, Uganda — working with clients both locally and online.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61588577943873"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-charles-dark border border-charles-lime/40 text-charles-lime hover:bg-charles-lime hover:text-charles-dark hover:border-charles-lime hover:scale-110 hover:shadow-lg hover:shadow-charles-lime/30 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.408.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.592 1.323-1.325V1.325C24 .593 23.408 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ivan-sembatya-4b41b823b"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-charles-dark border border-charles-lime/40 text-charles-lime hover:bg-charles-lime hover:text-charles-dark hover:border-charles-lime hover:scale-110 hover:shadow-lg hover:shadow-charles-lime/30 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-white">Services</h3>
            <div className="flex flex-col gap-2 font-body text-gray-400 text-sm">
              <Link href="/services/web-design" className="hover:text-charles-lime transition-colors">Web Design</Link>
              <Link href="/services/graphic-design" className="hover:text-charles-lime transition-colors">Graphic Design</Link>
              <Link href="/services/branding" className="hover:text-charles-lime transition-colors">Branding</Link>
              <Link href="/services/creative" className="hover:text-charles-lime transition-colors">Creative</Link>
              <Link href="/services/printing" className="hover:text-charles-lime transition-colors">Printing</Link>
              <Link href="/services/it-support" className="hover:text-charles-lime transition-colors">IT & Tech Support</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-white">Quick Links</h3>
            <div className="flex flex-col gap-2 font-body text-gray-400 text-sm">
              <Link href="/" className="hover:text-charles-lime transition-colors">Home</Link>
              <Link href="/about" className="hover:text-charles-lime transition-colors">About Us</Link>
              <Link href="/music" className="hover:text-charles-lime transition-colors">Music</Link>
              <Link href="/projects" className="hover:text-charles-lime transition-colors">Projects</Link>
              <Link href="/contact" className="hover:text-charles-lime transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-white">Contact Us</h3>
            <div className="flex flex-col gap-3 font-body text-gray-400 text-sm">
              <p>P.O. Box 209415, Kampala GPO<br />Kampala, Uganda<br />Available for both local and online projects</p>
              <a href="mailto:info@nija-graphicsstudio.com" className="hover:text-charles-lime transition-colors">info@nija-graphicsstudio.com</a>
              <a href="tel:+256782807255" className="hover:text-charles-lime transition-colors">+256 782 807 255</a>
              <div className="pt-2 border-t border-gray-700/50">
                <p className="text-xs text-gray-500 mb-1">Business Hours</p>
                <p className="text-gray-300 text-xs">Mon – Fri: 8:00 AM – 6:00 PM</p>
                <p className="text-gray-300 text-xs">Sat: 9:00 AM – 2:00 PM</p>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-body text-gray-500">
            © {new Date().getFullYear()} Nija Print & Graphics Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-body text-gray-500">
            <Link href="/privacy-policy" className="hover:text-charles-lime transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-charles-lime transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
