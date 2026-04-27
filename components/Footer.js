import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-charles-darker text-white pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4 text-white">Pathway Printing<br />& Graphics</h3>
            <p className="font-body text-gray-400 leading-relaxed text-sm mb-6">
              Creative design and printing services based in Kampala, Uganda — working with clients both locally and online.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=61588577943873" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center border border-gray-600 text-gray-400 hover:bg-charles-lime hover:text-charles-dark hover:border-charles-lime transition-all">
                f
              </a>
              <a href="https://www.linkedin.com/in/ivan-sembatya-4b41b823b" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center border border-gray-600 text-gray-400 hover:bg-charles-lime hover:text-charles-dark hover:border-charles-lime transition-all">
                in
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
              <p>Kampala, Uganda<br />Available for both local and online projects</p>
              <a href="mailto:info@pathway-printing.net" className="hover:text-charles-lime transition-colors">info@pathway-printing.net</a>
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
            © {new Date().getFullYear()} Pathway Printing & Graphics. All rights reserved.
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
