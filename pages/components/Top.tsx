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
        slug: "/History",
      },
      {
        id: "5",
        name: "Statistics",
        slug: "/Statistics",
      },
      {
        id: "6",
        name: "Partners",
        slug: "Partners",
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
    <div id="Top" className="row align-items-center pb-sm-0 pb-5">
      <div className="col-sm-3 col">
        <Link href="/">
          <Image className="img-fluid" src={Logo} alt="Logo" />
        </Link>
        <div className="position-relative d-sm-none d-block">
          <div className="call">
            <Image width={100} height={40} src={call} alt="Call" />
          </div>
        </div>
      </div>
      <div className="w-100 d-sm-none d-block"></div>
      <div className="col">
        <nav className="navbar navbar-expand-lg">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="navbar-nav d-flex justify-content-center">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        About
                      </a>
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
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link nav-link-top"
                        href="#touchpoint"
                        scroll={false}
                      >
                        Touch Point
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link nav-link-top" href="/Investor">
                        Investor Information
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link nav-link-top" href="/Contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-12">
                  <ul className="navbar-nav d-flex justify-content-center fs-4">
                    <li className="nav-item">
                      <Link
                        className="nav-link nav-link-top"
                        href="/Allvehicle"
                      >
                        Buses
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link nav-link-top"
                        href="/Allvehicle"
                      >
                        Trucks
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link nav-link-top"
                        href="/Allvehicle"
                      >
                        Pickup
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link nav-link-top"
                        href="/Allvehicle"
                      >
                        Dump Truck
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link nav-link-top"
                        href="/Allvehicle"
                      >
                        Special Vehicle
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="w-100 d-sm-none d-block"></div>
      <div className="col-sm-3 col-12">
        <div className="position-relative">
          <div className="searchBoxc">
            <input
              className="searchInputc"
              type="text"
              name=""
              placeholder="Search"
            />
            <button className="searchButtonc">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
        <div className="position-relative d-sm-block d-none">
          <div className="call">
            <Image width={110} height={45} src={call} alt="Call" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
