import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

import favicon from "../public/favicon.png";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href={favicon?.src} />
        <meta name="image" content={favicon?.src} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta
          name="theme-color"
          content="red"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#FF4331"
          media="(prefers-color-scheme: dark)"
        />
        <link rel="apple-touch-icon" sizes="72x72" href={favicon?.src} />
        <link rel="apple-touch-icon" sizes="114x114" href={favicon?.src} />
        <link rel="apple-touch-icon" href={favicon?.src} />
        <link rel="apple-touch-startup-image" href={favicon?.src} />
      </Head>
      <Script
        id="Adsense-id"
        data-ad-client="ca-pub-4888538539035804"
        async="true"
        strategy="beforeInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
