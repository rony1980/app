import Image from "next/image";
import React, { useEffect } from "react";
import Logo from "../../public/logo/logo.png";
import call from "../../public/social/call.png";
const Top = () => {
  //Bootstrap js
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div id="Top" className="row py-4 align-items-center">
      <div className="col-sm-2">
        <Image className="img-fluid" src={Logo} alt="Logo" />
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
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </span>

          <a className="nav-link nav-link-top" href="#">
            Touch Point
          </a>
          <a className="nav-link nav-link-top" href="#">
            Investor Information
          </a>
          <a className="nav-link nav-link-top" href="#">
            Contact Us
          </a>
        </nav>
        <nav className="nav justify-content-center">
          <span
            className="nav-link nav-link-top dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Trucks
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </span>

          <span
            className="nav-link nav-link-top dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Buses
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </span>
          <span
            className="nav-link nav-link-top dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Pickup
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </span>
          <span
            className="nav-link nav-link-top dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dump Truck
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </span>
          <span
            className="nav-link nav-link-top dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Special Vehicle
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </span>
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
