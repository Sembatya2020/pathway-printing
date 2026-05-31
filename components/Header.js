import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const servicesDropdown = [
  { label: 'Web Design', slug: 'web-design' },
  { label: 'Graphic Design', slug: 'graphic-design' },
  { label: 'IT & Tech Support', slug: 'it-support' },
  { label: 'Music', slug: 'music', isPage: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 h-[100px] transition-all duration-300 ${scrolled ? 'bg-charles-darker/95 backdrop-blur-md shadow-lg h-[80px]' : 'bg-charles-darker'}`}>
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center gap-1.5 transition-all hover:opacity-95 group">
          <div className="relative h-[120px] md:h-[170px] w-[120px] md:w-[170px] transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_18px_rgba(190,242,100,0.35)] flex-shrink-0">
            <Image
              src="/images/Finished-designs/logo.png"
              alt="Nija Print & Graphics Studio Logo"
              fill
              unoptimized
              className="object-contain saturate-[1.15] brightness-[1.15]"
              priority
            />
          </div>
          <div className="flex flex-col justify-center leading-none">
            <h1 className="text-[10px] md:text-xs font-heading font-bold text-white tracking-[0.08em] uppercase leading-tight">
              Nija <span className="text-charles-lime">Print &amp;</span>
            </h1>
            <h1 className="text-[10px] md:text-xs font-heading font-bold text-white tracking-[0.08em] uppercase leading-tight">
              Graphics <span className="text-charles-lime">Studio</span>
            </h1>
            <p className="mt-0.5 text-[8px] md:text-[9px] font-body italic text-gray-400 tracking-wide">
              Designing with purpose
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 xl:gap-10 lg:flex h-full">
          <Link href="/" className="text-[16.5px] font-heading font-semibold text-white hover:text-charles-lime transition-colors">Home</Link>
          <Link href="/about" className="text-[16.5px] font-heading font-semibold text-white hover:text-charles-lime transition-colors">About</Link>
          <div className="relative h-full flex items-center" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-1 text-[16.5px] font-heading font-semibold text-white hover:text-charles-lime transition-colors"
            >
              Services
              <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? 'rotate-180 text-charles-lime' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`absolute top-[100px] left-1/2 -translate-x-1/2 w-64 bg-charles-darker border border-gray-700 border-t-2 border-t-charles-lime shadow-2xl transition-all duration-300 origin-top ${open ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}`}>
              <div className="flex flex-col py-2">
                {servicesDropdown.map((item) => (
                  <Link
                    key={item.slug}
                    href={item.isPage ? `/${item.slug}` : `/services/${item.slug}`}
                    className="text-[15px] font-body text-gray-300 hover:text-charles-dark hover:bg-charles-lime block px-6 py-3 transition-all duration-200"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="border-t border-gray-700 mt-1 pt-1">
                  <Link
                    href="/services"
                    className="text-[15px] font-heading font-bold text-charles-lime hover:text-charles-dark hover:bg-charles-lime block px-6 py-3 transition-all duration-200"
                    onClick={() => setOpen(false)}
                  >
                    View All Services →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link href="/music" className="text-[16.5px] font-heading font-semibold text-white hover:text-charles-lime transition-colors">Music</Link>
          <Link href="/projects" className="text-[16.5px] font-heading font-semibold text-white hover:text-charles-lime transition-colors">Projects</Link>
          <Link href="/contact" className="ml-4 px-7 py-3 bg-charles-lime text-charles-dark text-[15px] font-heading font-bold hover:bg-charles-limeHover transition-transform hover:scale-105 shadow-md">
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="block lg:hidden text-white hover:text-charles-lime transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-[100px] left-0 w-full bg-charles-darker border-t border-charles-lime shadow-xl lg:hidden max-h-[calc(100vh-100px)] overflow-y-auto transition-all duration-300 ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="flex flex-col gap-1 px-6 py-6 font-heading">
          <Link href="/" onClick={() => setMobileOpen(false)} className="text-white hover:text-charles-lime py-3 text-lg font-semibold border-b border-gray-700/50">Home</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="text-white hover:text-charles-lime py-3 text-lg font-semibold border-b border-gray-700/50">About</Link>
          <div className="py-3 border-b border-gray-700/50">
            <p className="font-semibold text-lg text-charles-lime mb-3">Services</p>
            <div className="grid grid-cols-1 gap-1 pl-4">
              {servicesDropdown.map((item) => (
                <Link
                  key={item.slug}
                  href={item.isPage ? `/${item.slug}` : `/services/${item.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-300 text-base hover:text-charles-lime py-2 font-body transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/projects" onClick={() => setMobileOpen(false)} className="text-white hover:text-charles-lime py-3 text-lg font-semibold border-b border-gray-700/50">Projects</Link>
          <Link href="/music" onClick={() => setMobileOpen(false)} className="text-white hover:text-charles-lime py-3 text-lg font-semibold border-b border-gray-700/50">Music</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="mt-3 text-center py-3 bg-charles-lime text-charles-dark font-bold text-lg hover:bg-charles-limeHover transition-colors">Contact Us</Link>
        </div>
      </div>

    </header>
  );
}
