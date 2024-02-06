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
          Michiel Bouw | Lead Software Engineering Consultant
          (JavaScript/TypeScript)
        </title>
        <meta
          name="description"
          content="As a mainly (frontend) JavaScript-specialised developer, I am passionate about directly solving technical challenges involving the end user. Having worked with a variety of technologies, primarily using JavaScript, in a wide range of projects in different teams, I have become an all-round JavaScript developer."
        />
        <meta
          property="og:title"
          content="Michiel Bouw | Lead Software Engineering Consultant (JavaScript/TypeScript)"
        />
        <meta
          property="og:description"
          content="As a mainly (frontend) JavaScript-specialised developer, I am passionate about directly solving technical challenges involving the end user. Having worked with a variety of technologies, primarily using JavaScript, in a wide range of projects in different teams, I have become an all-round JavaScript developer."
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
