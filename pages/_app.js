import Script from "next/script";

import { Fragment } from "react";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Script
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=G-V66VBH7T18"}
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-V66VBH7T18');`}
      </Script>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
