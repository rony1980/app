import Head from "next/head";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Top from "./components/Top";
import Homeslider from "./components/Homeslider";
import Image from "next/image";
import Footer from "./components/Footer";
const Mission = () => {
  const vision = [
    {
      id: 1,
      photo: "m1.webp",
      heading: "Mission",
      detail:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia quas omnis dolorem officiis id provident similique, quos accusamus quia?",
    },
    {
      id: 2,
      photo: "m3.webp",
      heading: "Vision",
      detail:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia quas omnis dolorem officiis id provident similique, quos accusamus quia?",
    },
    {
      id: 3,
      photo: "m2.webp",
      heading: "Values",
      detail:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia quas omnis dolorem officiis id provident similique, quos accusamus quia?",
    },
  ];
  return (
    <>
      <div className="container-fluid">
        <Head>
          <title>Mission & Vision</title>
          <meta name="description" content="All" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Top />
        <Homeslider />
      </div>
      <div className="container">
        <h1 className="brandColor text-center my-5 fw-bold">
          Mission & Vision
        </h1>
        <div className="row mb-5">
          {vision.map((vision, i) => {
            return (
              <div key={i} className="row d-flex align-items-center">
                {i % 2 == 0 ? (
                  <>
                    <div className={"col-sm-6 p-0"}>
                      <Image
                        className="img-fluid"
                        width={600}
                        height={400}
                        src={`/mission/${vision.photo}`}
                        alt="image"
                      />
                    </div>
                    <div className="col-sm-6 order-2 px-5">
                      <h4 className="brandColor fw-bold text-center">
                        {vision.heading}
                      </h4>
                      {vision.detail}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-sm-6 order-2 p-0">
                      <Image
                        className="img-fluid"
                        width={600}
                        height={400}
                        src={`/mission/${vision.photo}`}
                        alt="image"
                      />
                    </div>
                    <div className="col-sm-6 order-1 px-5">
                      <h4 className="brandColor fw-bold text-center">
                        {vision.heading}
                      </h4>
                      {vision.detail}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mission;
