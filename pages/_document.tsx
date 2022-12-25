import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <div id="fb-root"></div>
        <script
          async
          defer
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0&appId=1559583837846448&autoLogAppEvents=1"
          nonce="WlJhp4mk"
        ></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
