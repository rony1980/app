import { PHASE_PRODUCTION_BUILD } from "next/dist/shared/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Logo from "../../public/logo/logo.png";
import call from "../../public/social/call.png";
const Top = () => {
  const menu = {
    About: [
      {
        id: "1",
        name: "Who we are",
        slug: "/Whoweare",
      },
      {
        id: "2",
        name: "Mission & Vision",
        slug: "/Mission",
      },
      {
        id: "3",
        name: "Values",
        slug: "/Values",
      },
      {
        id: "4",
        name: "Our Story",
        slug: "/Story",
      },
      {
        id: "5",
        name: "Statistics",
        slug: "/Statistics",
      },
      {
        id: "6",
        name: "Partners",
        slug: "#Partners",
      },
      {
        id: "7",
        name: "Management",
        slug: "/Management",
      },
    ],
  };
  //Bootstrap js
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div id="Top" className="row py-4 align-items-center">
      <div className="col-sm-2">
        <Link href="/">
          <Image className="img-fluid" src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="col-sm-7">
        <nav className="nav justify-content-center">
          <span
            className="nav-link nav-link-top dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            About Us
            <ul className="dropdown-menu">
              {menu.About.map((item: any) => {
                return (
                  <li key={item.id}>
                    <Link className="dropdown-item" href={item.slug}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </span>

          <Link className="nav-link nav-link-top" href="#touchpoint">
            Touch Point
          </Link>
          <Link className="nav-link nav-link-top" href="#">
            Investor Information
          </Link>
          <Link className="nav-link nav-link-top" href="/Contact">
            Contact Us
          </Link>
        </nav>
        <nav className="nav justify-content-center">
          <Link className="nav-link nav-link-top" href="/Allvehicle">
            Trucks
          </Link>
          <Link className="nav-link nav-link-top" href="/Allvehicle">
            Buses
          </Link>
          <Link className="nav-link nav-link-top" href="/Allvehicle">
            Pickup
          </Link>
          <Link className="nav-link nav-link-top" href="/Allvehicle">
            Dump Truck
          </Link>
          <Link className="nav-link nav-link-top" href="/Allvehicle">
            Special Vehicle
          </Link>
        </nav>
      </div>
      <div className="col-sm-3">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="What are you looking for?"
            aria-label="search"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="d-flex justify-content-end">
          <Image width={150} height={62} src={call} alt="Call" />
        </div>
      </div>
    </div>
  );
};

export default Top;
