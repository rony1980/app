import Head from "next/head";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Top from "./components/Top";
import Homeslider from "./components/Homeslider";
import Image from "next/image";
import Footer from "./components/Footer";
const History = () => {
  const history = [
    {
      id: 1,
      photo: "history1.webp",
      heading: "Mission",
      year: "1985",
      detail:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia quas omnis dolorem officiis id provident similique, quos accusamus quia?",
    },
    {
      id: 2,
      photo: "history2.webp",
      heading: "Vision",
      year: "1986",
      detail:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia quas omnis dolorem officiis id provident similique, quos accusamus quia?",
    },
    {
      id: 3,
      photo: "history3.webp",
      heading: "Values",
      year: "1987",
      detail:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia quas omnis dolorem officiis id provident similique, quos accusamus quia?",
    },
    {
      id: 4,
      photo: "history4.webp",
      heading: "Values",
      year: "1988",
      detail:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia quas omnis dolorem officiis id provident similique, quos accusamus quia?",
    },
  ];
  const avatar = {
    borderRadius: "50%",
    overflow: "hidden",
    width: "100px",
    height: "100px",
    zIndex: "333",
  };
  const circle = {};
  return (
    <>
      <div className="container-fluid">
        <Head>
          <title>History</title>
          <meta name="description" content="All" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Top />
        <Homeslider />
      </div>
      <div className="container">
        <h1 className="brandColor text-center my-5 fw-bold">History</h1>
        <div className="row mb-5">
          {history.map((history, i) => {
            return (
              <div key={i} className="row d-flex align-items-center">
                {i % 2 == 0 ? (
                  <>
                    <div className="col-sm-6 p-0"></div>
                    <div
                      className="col-sm-6 px-5 position-relative"
                      style={{
                        borderLeftWidth: "1px",
                        borderLeftStyle: "dashed",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          backgroundColor: "#f6821f",
                          position: "absolute",
                          top: "85px",
                          left: "-15px",
                          zIndex: "333",
                        }}
                      ></div>
                      <div
                        style={{
                          borderBottomWidth: "1px",
                          borderBottomStyle: "dashed",
                          width: "70px",
                          position: "absolute",
                          top: "100px",
                          left: "-5px",
                        }}
                      ></div>
                      <div className="row py-5 d-flex">
                        <div className="col-4">
                          <div className="d-flex justify-content-center">
                            <div className="position-relative" style={avatar}>
                              <Image
                                src={`/history/${history.photo}`}
                                alt="photo"
                                objectFit="cover"
                                layout="fill"
                              />
                            </div>
                          </div>
                          <h4 className="fw-bold brandColor text-center mt-2">
                            {history.year}
                          </h4>
                        </div>
                        <div className="col-8">
                          <h4 className="brandColor fw-bold border-bottom border-secondary">
                            {history.heading}
                          </h4>
                          <p style={{ textAlign: "justify" }}>
                            {history.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="col-sm-6 px-5 position-relative"
                      style={{
                        borderRightWidth: "1px",
                        borderRightStyle: "dashed",
                      }}
                    >
                      <div
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          backgroundColor: "#f6821f",
                          position: "absolute",
                          top: "85px",
                          right: "-15px",
                          zIndex: "333",
                        }}
                      ></div>
                      <div
                        style={{
                          borderBottomWidth: "1px",
                          borderBottomStyle: "dashed",
                          width: "70px",
                          position: "absolute",
                          top: "100px",
                          right: "-5px",
                        }}
                      ></div>
                      <div className="row py-5">
                        <div className="col-8">
                          <h4 className="brandColor fw-bold border-bottom border-secondary">
                            {history.heading}
                          </h4>
                          <p style={{ textAlign: "justify" }}>
                            {history.detail}
                          </p>
                        </div>
                        <div className="col-4">
                          <div className="d-flex justify-content-center">
                            <div className="position-relative" style={avatar}>
                              <Image
                                src={`/history/${history.photo}`}
                                alt="photo"
                                objectFit="cover"
                                layout="fill"
                              />
                            </div>
                          </div>
                          <h4 className="fw-bold brandColor text-center mt-2">
                            {history.year}
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className={"col-sm-6 p-0"}></div>
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

export default History;
