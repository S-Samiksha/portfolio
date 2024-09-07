import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/portfolio/coffee.png" /> {/* Absolute path */}
      </Head>
      {/* Optionally add a title */}
      <title>Sam's Portfolio</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
