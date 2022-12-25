import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Top from "./components/Top";
import Homeslider from "./components/Homeslider";
import Footer from "./components/Footer";
import bg from "../public/values/values.webp";
import bg2 from "../public/values/statistics.webp";
const Statistics = () => {
  const statisticsItem = [
    {
      id: 1,
      value: "$750M",
      text: "Sales Value",
    },
    {
      id: 2,
      value: "1000+",
      text: "Employees",
    },
    {
      id: 3,
      value: "60000+",
      text: "Vehicles Sold",
    },
    {
      id: 4,
      value: "21",
      text: "Offices",
    },
    {
      id: 5,
      value: "$130M",
      text: "Sales FY 2018-19",
    },
    {
      id: 6,
      value: "$236M",
      text: "Market Cap",
    },
  ];
  return (
    <>
      <div className="container-fluid">
        <Head>
          <title>Statistics</title>
          <meta name="description" content="All" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Top />
        <div className="row">
          <div
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${bg.src})`,
              width: "100%",
              height: "400px",
              backgroundSize: "cover",
            }}
            className="coverPhoto d-flex justify-content-center align-items-center position-relative"
          >
            <h1 className="fw-bold position-relative text-white">STATISTICS</h1>
          </div>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url(${bg2.src})`,
          width: "100%",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row py-5">
            <div className="col-sm-6 offset-sm-6">
              <div className="row row-cols-2 g-3 g-lg-5">
                {statisticsItem.map((item) => {
                  return (
                    <div className="col" key={item.id}>
                      <div className="p-3 bg-white border-redius">
                        <h1 className="brandColor fw-bold text-center">
                          {item.value}
                        </h1>
                        <h4 className="text-center">{item.text}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Statistics;
