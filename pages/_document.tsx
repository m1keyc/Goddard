import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
       <Head>
         <title>Goddard</title>
        <meta name="description" content="Goddard." />
        <meta name="keywords" content="Goddard" />
        <meta property="og:title" content="Goddard" />
        <meta property="og:description" content="Goddard" />
        <meta property="og:image" content="https://Goddard" />
        <meta property="og:url" content="https://Goddard" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="goddard" />
        <meta name="twitter:description" content="goddard" />
        <meta name="twitter:image" content="https://goddard" />
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