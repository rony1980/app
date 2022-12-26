import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Top from "./components/Top";
import Homeslider from "./components/Homeslider";
import Footer from "./components/Footer";
const Investor = () => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    fetch("http://cms.demo.api.net.bd/documents")
      .then((res) => res.json())
      .then((data) => setDocs(data));
  }, []);
  const document = docs.map((item, index) => {
    return (
      <>
        <h4 key={index}>{item.message}</h4>
        {item.all_document_list.map((items) => (
          <button key={items.id}>{items.name}</button>
        ))}
      </>
    );
  });

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
          <div className="col-sm-4">{document}</div>
          <div className="col-sm-8">Show details</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Investor;
