import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Pathway Printing & Graphics` : 'Pathway Printing & Graphics | Kampala Design & Print'}</title>
        <meta name="description" content={description || 'Professional graphic design, branding, and print solutions in Kampala, Uganda. Serving churches, schools, and businesses since 2024.'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-charles-dark text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
