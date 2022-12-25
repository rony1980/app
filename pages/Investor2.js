import React from "react";
import Link from "next/link";

import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Top from "./components/Top";
import Homeslider from "./components/Homeslider";
import Footer from "./components/Footer";
import { getDocuments } from "./api/getDocuments";

const Investor = () => {
  function handleClick(data) {
    console.log(data);
  }
  const [fileUrl, setfileUrl] = useState([]);

  const cataglogBtn = fileUrl?.map((ctx, idx) => {
    const { name } = ctx.all_document_list;
    return <div key={idx}>{name}</div>;
  });
  useEffect(() => {
    try {
      getDocuments().then((Result) => {
        setfileUrl(Result);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="container-fluid">
        <Head>
          <title>investor Information</title>
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

        <button onClick={handleClick}>{cataglogBtn}</button>
      </div>
      <Footer />
    </>
  );
};

export default Investor;
