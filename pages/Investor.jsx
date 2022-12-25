import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Top from "./components/Top";
import Homeslider from "./components/Homeslider";
import Footer from "./components/Footer";
const Investor = () => {
  const [document, setDocument] = useState([]);
  useEffect(() => {
    fetch("http://cms.demo.api.net.bd/documents")
      .then((res) => res.json())
      .then((data) => setDocument(data));
  }, []);

  let documentButtons = (mapItem) =>
    mapItem.map((item) => {
      return (
        <button
          key={item.id}
          id="v-pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-profile"
          type="button"
          role="tab"
          aria-controls="v-pills-profile"
          aria-selected="false"
        >
          {item.name}
        </button>
      );
    });

  //let handleClick = (id, data) => data;

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
        <div className="row my-5">
          <div className="col-sm-4">
            {document.map((element, index) => (
              <div>
                <h3 key={index}>{element.message}</h3>
                <div
                  className="btn-group-vertical"
                  aria-label="Vertical button group"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  {documentButtons(element.all_document_list)}
                </div>
              </div>
            ))}
          </div>

          <div className="col-sm-8">
            <>
              <div
                className="tab-pane fade"
                id="abc"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                heelo
              </div>
            </>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Investor;
