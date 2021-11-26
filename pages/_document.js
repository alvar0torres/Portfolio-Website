import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/code.png" />
          <title>Alvaro Torres</title>
          <meta name="description" content="My Portfolio Website" />
          <meta name="image" property="og:image" content="https://live.staticflickr.com/65535/51707377849_4d7b1f58c5_k.jpg"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
