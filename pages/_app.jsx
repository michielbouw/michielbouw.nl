import React, { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';

import '../styles/index.css';

// import aos styles
import 'aos/dist/aos.css';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // init aos
    AOS.init({
      offset: 125,
    });
  }, []);

  return (
    <>
      <Head>
        <title>
          Michiel Bouw | Lead Software Consultant
        </title>
        <meta
          name="description"
          content="As a Lead Software Consultant, I combine hands-on software engineering with technical leadership, strategy, architecture and consultancy."
        />
        <meta
          property="og:title"
          content="Michiel Bouw | Lead Software Consultant"
        />
        <meta
          property="og:description"
          content="As a Lead Software Consultant, I combine hands-on software engineering with technical leadership, strategy, architecture and consultancy."
        />
        <meta property="og:url" content="https://michielbouw.nl" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://michielbouw.nl/michiel.jpg"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
