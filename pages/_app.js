import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="favicon.png" />
      </Head>
      <Script
        id="Adsense-id"
        data-ad-client="ca-pub-4888538539035804"
        async="true"
        strategy="beforeInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
