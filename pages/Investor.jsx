import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Top from "./components/Top";
import Homeslider from "./components/Homeslider";
import Footer from "./components/Footer";
const Investor = () => {
  return (
    <>
      <div className="container-fluid">
        <Head>
          <title>Values</title>
          <meta name="description" content="All" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Top />
        <Homeslider />
      </div>
      <div className="container">
        <h1 className="brandColor text-center my-5 fw-bold">
          Investor Information
        </h1>
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-8">Show details</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Investor;
