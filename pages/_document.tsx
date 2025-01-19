import { Html, Head, Main, NextScript } from "next/document";
import { Poppins } from "next/font/google";


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased font-poppins">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
