import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
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
            content="https://michielbouw.nl/header.jpg"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
          <link
            rel="apple-touch-icon"
            sizes="250x250"
            href="/apple-touch-icon.png"
          />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
