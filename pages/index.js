import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Populer from "./component/popular";
import Head from "next/head";

export default function index() {
  return (
    <>
      <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Hero />
      <Populer />
    </>
  );
}
