import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import React from "react";
import Face from "./../public/tesimonial/face1.webp";
import Footer from "./components/Footer";
import Homeslider from "./components/Homeslider";
import Top from "./components/Top";

const Testimonials = () => {
  const testi = [
    {
      id: "1",
      name: "client 1",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla a, nobis placeat vel qui ut quod maxime officia doloribus aspernatur sed eaque id debitis harum. Reiciendis odit culpa assumenda voluptatem!",
      photo: "face1.webp",
    },
    {
      id: "2",
      name: "client 2",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla a, nobis placeat vel qui ut quod maxime officia doloribus aspernatur sed eaque id debitis harum. Reiciendis odit culpa assumenda voluptatem!",
      photo: "face2.webp",
    },
    {
      id: "3",
      name: "client 3",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla a, nobis placeat vel qui ut quod maxime officia doloribus aspernatur sed eaque id debitis harum. Reiciendis odit culpa assumenda voluptatem!",
      photo: "face3.webp",
    },
    {
      id: "4",
      name: "client 4",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla a, nobis placeat vel qui ut quod maxime officia doloribus aspernatur sed eaque id debitis harum. Reiciendis odit culpa assumenda voluptatem!",
      photo: "face4.webp",
    },
    {
      id: "5",
      name: "client 5",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla a, nobis placeat vel qui ut quod maxime officia doloribus aspernatur sed eaque id debitis harum. Reiciendis odit culpa assumenda voluptatem!",
      photo: "face1.webp",
    },
    {
      id: "6",
      name: "client 6",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla a, nobis placeat vel qui ut quod maxime officia doloribus aspernatur sed eaque id debitis harum. Reiciendis odit culpa assumenda voluptatem!",
      photo: "face2.webp",
    },
  ];
  const avatar = {
    zIndex: "333",
  };
  return (
    <>
      <div className="container">
        <Top />
        {/* <Nav /> */}
        <Homeslider />
        <div className="row mt-5">
          <h1 className="text-center brandColor">TESTIMONIALS</h1>
          <div className="col-sm-6 offset-sm-3 mb-4">
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              doloribus incidunt perferendis vero. Consequuntur unde accusamus
              numquam exercitationem
            </p>
          </div>
          {testi.map((st) => {
            return (
              <div key={st.id} className="col-sm-4">
                <div className="shadow mb-5 bg-body rounded position-relative overflow-hidden pb-5">
                  <h1 className="display-1">
                    <i className="bi bi-quote"></i>
                  </h1>
                  <p className="text-center px-4">{st.detail}</p>
                  <div className="row d-flex justify-content-center">
                    <div
                      className="d-flex justify-content-center"
                      style={{
                        borderRadius: "50%",
                        overflow: "hidden",
                        width: "100px",
                        height: "100px",
                        zIndex: 333,
                      }}
                    >
                      <Image
                        objectFit="cover"
                        width={100}
                        height={100}
                        src={`/testimonial/${st.photo}`}
                        alt="avatar"
                      />
                    </div>
                    <h6 className="text-center mt-2 text-white" style={avatar}>
                      {st.name}
                    </h6>
                    <div
                      className="col-6 d-flex justify-content-evenly text-white"
                      style={avatar}
                    >
                      <i className="bi bi-facebook"></i>
                      <i className="bi bi-twitter"></i>
                      <i className="bi bi-instagram"></i>
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      bottom: 0,
                      left: 0,
                      zIndex: 0,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 820"
                    >
                      <path
                        fill="#f6821f"
                        fill-opacity="1"
                        d="M0,256L48,234.7C96,213,192,171,288,154.7C384,139,480,149,576,176C672,203,768,245,864,234.7C960,224,1056,160,1152,154.7C1248,149,1344,203,1392,229.3L1440,256L1440,820L1392,820C1344,820,1248,820,1152,820C1056,820,960,820,864,820C768,820,672,820,576,820C480,820,384,820,288,820C192,820,96,820,48,820L0,820Z"
                      ></path>
                    </svg>
                  </div>
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

export default Testimonials;
