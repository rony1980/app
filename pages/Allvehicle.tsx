import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Footer from "./components/Footer";
import Homeslider from "./components/Homeslider";
import Sidemenu from "./components/Sidemenu";
import Top from "./components/Top";

const Allvehicle = () => {
  const vehicle = [
    {
      id: "1",
      name: "ICV Distribution",
      detail:
        "A range that offers more power, cabin options, load body options, payload, comfort and savings",
      image: "v1",
    },
    {
      id: "2",
      name: "Ashok leyland 2518",
      detail:
        "Move ahed in your trucking business with Eicher Pro 5040 having competitive fuel effiency backed by Volvogroup's eperience",
      image: "v2",
    },
    {
      id: "3",
      name: "Ashok leyland 3120 6x2 BS6",
      detail:
        "Modular design, best in class fuel efficiently, superior tyre mileage, higher driving comfort and performance",
      image: "v3",
    },
    {
      id: "4",
      name: "Ashok leyland 3120 6x2 BS6",
      detail:
        "Modular design, best in class fuel efficiently, superior tyre mileage, higher driving comfort and performance",
      image: "v3",
    },
    {
      id: "5",
      name: "Ashok leyland 3120 6x2 BS6",
      detail:
        "Modular design, best in class fuel efficiently, superior tyre mileage, higher driving comfort and performance",
      image: "v1",
    },
    {
      id: "6",
      name: "Ashok leyland 3120 6x2 BS6",
      detail:
        "Modular design, best in class fuel efficiently, superior tyre mileage, higher driving comfort and performance",
      image: "v2",
    },
  ];
  return (
    <>
      <div className="container">
        <Head>
          <title>Testimonial</title>
          <meta name="description" content="All" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Top />
        <Homeslider />
        <main>
          <div className="row my-5">
            <div className="col-sm-3">
              <Sidemenu />
            </div>
            <div className="col-sm-9">
              <div className="row row-cols-1 row-cols-sm-3 g-4">
                {vehicle.map((ron) => {
                  return (
                    <div className="col">
                      <div className="card h-100">
                        <Image
                          className="card-img-top img-fluid"
                          src={`/discover/${ron.image}.png`}
                          alt="vehicle"
                          width={1920}
                          height={0}
                        />
                        <div className="card-body">
                          <h5 className="text-center">{ron.name}</h5>
                          <p className="text-center fs-6 py-4">{ron.detail}</p>
                          <div className="d-flex justify-content-center align-items-end">
                            <a
                              type="button"
                              className="btn btn-outline-warning px-4"
                            >
                              Explore
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Allvehicle;
