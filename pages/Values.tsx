import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Top from "./components/Top";
import Footer from "./components/Footer";
import bg from "../public/values/values.webp";
const Values = () => {
  const valueItem = [
    {
      id: "1",
      name: "Customer Focus",
      text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit tempora corrupti accusantium vitae amet possimus adminima, assumenda debitis enim.",
    },
    {
      id: "2",
      name: "Resonsibilities",
      text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit tempora corrupti accusantium vitae amet possimus adminima, assumenda debitis enim.",
    },
    {
      id: "3",
      name: "Aspiration",
      text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit tempora corrupti accusantium vitae amet possimus adminima, assumenda debitis enim.",
    },
    {
      id: "4",
      name: "Teamwork",
      text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit tempora corrupti accusantium vitae amet possimus adminima, assumenda debitis enim.",
    },
  ];
  return (
    <>
      <div className="container-fluid">
        <Head>
          <title>Values</title>
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
            <h1 className="fw-bold position-relative text-white">Values</h1>
          </div>
        </div>
      </div>
      <div
        className="container position-relative"
        style={{ marginTop: "-150px" }}
      >
        <div className="row py-5">
          {valueItem.map((item) => {
            return (
              <div className="col-sm-3" key={item.id}>
                <div className="valueBox p-4">
                  <div className="valueNumberBox d-flex justify-content-center align-items-center fs-1 fw-bold">
                    0{item.id}
                  </div>
                  <h4 className="mt-4 fw-bold text-white">{item.name}</h4>
                  <p className="text-white fs-6 text-justify fw-light">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Values;
