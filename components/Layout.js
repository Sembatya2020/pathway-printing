import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';

export default function Layout({ children, title, description }) {
  const router = useRouter();
  const cleanPath = router.asPath.split('?')[0];
  const canonicalUrl = `https://nija-graphicsstudio.com${cleanPath === '/' ? '' : cleanPath}`;

  const formattedTitle = title
    ? (title.includes('Nija') ? title : `${title} | Nija Print & Graphics Studio`)
    : 'Nija Print & Graphics Studio | Kampala Design & Print';

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://nija-graphicsstudio.com/#website",
        "url": "https://nija-graphicsstudio.com/",
        "name": "Nija Print & Graphics Studio",
        "description": "Professional graphic design, branding, printing, and music production solutions in Kampala, Uganda.",
        "publisher": {
          "@id": "https://nija-graphicsstudio.com/#founder"
        }
      },
      {
        "@type": "Person",
        "@id": "https://nija-graphicsstudio.com/#founder",
        "name": "Ivan Sembatya",
        "jobTitle": "Founder & Creative Director",
        "url": "https://nija-graphicsstudio.com/about/",
        "image": "https://nija-graphicsstudio.com/images/founder.png",
        "knowsAbout": [
          "Web Design",
          "Graphic Design",
          "Branding",
          "Commercial Printing",
          "Songwriting",
          "Music Production",
          "Process Work",
          "Information Technology Support",
          "Remote Computer Troubleshooting",
          "Windows & Microsoft Office Installation",
          "Google Workspace & Microsoft 365 Setup",
          "Data Backup & File Recovery",
          "Domain & Hosting Setup"
        ]
      },
      {
        "@type": ["ProfessionalService", "LocalBusiness", "Organization"],
        "@id": "https://nija-graphicsstudio.com/#studio",
        "name": "Nija Print & Graphics Studio",
        "legalName": "Nija Print & Graphics Studio Uganda Limited",
        "alternateName": "Nija Print & Graphics Studio Uganda Ltd",
        "description": "Creative design, high-quality commercial printing, and custom music production services based in Kampala, Uganda, serving clients locally and worldwide. Officially registered as Nija Print & Graphics Studio Uganda Limited.",
        "url": "https://nija-graphicsstudio.com/",
        "logo": "https://nija-graphicsstudio.com/images/Finished-designs/logo.png",
        "image": "https://nija-graphicsstudio.com/images/Finished-designs/printingb.jpg",
        "email": "mailto:info@nija-graphicsstudio.com",
        "telephone": "+256782807255",
        "priceRange": "$$",
        "currenciesAccepted": "UGX, USD",
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61588577943873",
          "https://www.linkedin.com/in/ivan-sembatya-4b41b823b"
        ],
        "founder": {
          "@id": "https://nija-graphicsstudio.com/#founder"
        },
        "address": {
          "@type": "PostalAddress",
          "postOfficeBoxNumber": "209415",
          "addressLocality": "Kampala GPO, Kampala",
          "addressRegion": "Central Region",
          "addressCountry": "UG"
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Kampala" },
          { "@type": "Country", "name": "Uganda" },
          { "@type": "Place", "name": "Worldwide (online services)" }
        ],
        "serviceType": [
          "Web Design",
          "Graphic Design",
          "Branding & Identity",
          "Commercial Printing",
          "Custom Songwriting",
          "Music Production",
          "Remote IT Support",
          "Computer Troubleshooting",
          "Windows Installation & Reinstall",
          "Microsoft Office Setup",
          "Printer & Scanner Setup",
          "Wi-Fi & Internet Connectivity Help",
          "Locked or Hacked Account Recovery",
          "Data Backup & File Recovery",
          "Google Workspace & Microsoft 365 Setup",
          "Cloud Storage Configuration",
          "Domain & Hosting Setup"
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{formattedTitle}</title>
        <meta name="description" content={description || 'Professional graphic design, branding, printing, IT support, and music production services in Kampala, Uganda. Officially registered as Nija Print & Graphics Studio Uganda Limited.'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1d1d1d" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ivan Sembatya — Nija Print & Graphics Studio Uganda Limited" />
        <meta name="keywords" content="graphic design Kampala, printing Uganda, web design Kampala, IT support Kampala, branding Uganda, Nija Print, Nija Graphics, Nija Print & Graphics Studio Uganda Limited" />
        <link rel="icon" type="image/png" href="/images/Finished-designs/logo.png" />
        <link rel="apple-touch-icon" href="/images/Finished-designs/logo.png" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nija Print & Graphics Studio" />
        <meta property="og:title" content={formattedTitle} />
        <meta property="og:description" content={description || 'Professional graphic design, branding, printing, IT support, and music production services in Kampala, Uganda.'} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://nija-graphicsstudio.com/images/Finished-designs/printingb.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_UG" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={formattedTitle} />
        <meta name="twitter:description" content={description || 'Professional graphic design, branding, printing, IT support, and music production services in Kampala, Uganda.'} />
        <meta name="twitter:image" content="https://nija-graphicsstudio.com/images/Finished-designs/printingb.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <div className="min-h-screen bg-charles-darker text-white overflow-x-hidden flex flex-col">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

