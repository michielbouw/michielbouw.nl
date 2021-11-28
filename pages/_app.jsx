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
          Michiel Bouw | Lead Software Engineer (JavaScript/TypeScript)
        </title>
        <meta
          name="description"
          content="As a mainly (front-end) JavaScript specialised developer I have a passion for solving UX challenges that involve the end user directly. Having worked with different technologies mainly using JavaScript on different kind of projects in different teams I have become an all-round JavaScript developer. I am a dedicated team player that enjoys working actively and closely together with others to achieve the best results together."
        />
        <meta
          property="og:title"
          content="Michiel Bouw | Lead Software Engineer (JavaScript/TypeScript)"
        />
        <meta
          property="og:description"
          content="As a mainly (front-end) JavaScript specialised developer I have a passion for solving UX challenges that involve the end user directly. Having worked with different technologies mainly using JavaScript on different kind of projects in different teams I have become an all-round JavaScript developer. I am a dedicated team player that enjoys working actively and closely together with others to achieve the best results together."
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
