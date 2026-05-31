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
          "Network Setup",
          "Cybersecurity Basics"
        ]
      },
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": "https://nija-graphicsstudio.com/#studio",
        "name": "Nija Print & Graphics Studio",
        "description": "Creative design, high-quality commercial printing, and custom music production services based in Kampala, Uganda, serving clients locally and worldwide.",
        "url": "https://nija-graphicsstudio.com/",
        "image": "https://nija-graphicsstudio.com/images/Finished-designs/printingb.jpg",
        "email": "mailto:info@nija-graphicsstudio.com",
        "telephone": "+256782807255",
        "priceRange": "$$",
        "currenciesAccepted": "UGX, USD",
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
          "Software Installation & Setup",
          "Virus & Malware Removal",
          "Network Setup",
          "Data Backup & Recovery",
          "Google Workspace & Microsoft 365 Support",
          "Beginner Cybersecurity Audits"
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{formattedTitle}</title>
        <meta name="description" content={description || 'Professional graphic design, branding, and print solutions in Kampala, Uganda. Serving churches, schools, and businesses.'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <div className="min-h-screen bg-charles-dark text-white overflow-x-hidden flex flex-col">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

