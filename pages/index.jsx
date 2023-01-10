import "bootstrap/dist/css/bootstrap.css";
import Award from "./components/Award";
import Client from "./components/Client";
import Discover from "./components/Discover";
import Homeslider from "./components/Homeslider";
import NewsEvent from "./components/NewsEvent";
import Strength from "./components/Strength";
import Footer from "./components/Footer";
import Top from "./components/Top";
import React from "react";
import TouchPoint from "./components/TouchPoint";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Ifad Autos</title>
        <meta name="description" content="All" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-fluid">
        <Top />
        <Homeslider />
        <Discover />
        <Strength />
        <Client />
        <NewsEvent />
        <Award />
        <TouchPoint />
      </div>
      <Footer />
    </>
  );
};

export default index;