import "../styles/globals.css";
import LayoutGA from "../components/LayoutGA";
import Head from "next/head";
import Sidebar from "../components/Sidebar/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutGA>
      <Head>
        <title>FLIPPINCSS</title>
        <meta
          name="description"
          content="Have you ever thought FLIP this css? Well that's why we made flippincss.com. Choose a button, copy, paste..done. It's that easy. :) " />
        <meta
          name="keywords"
          content="flippincss.com, flippincss, cssbuttons, css buttons, css button, button css, buttons css, button html css, button"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Sidebar />
      <Component {...pageProps} />
    </LayoutGA>
  );
}

export default MyApp;
