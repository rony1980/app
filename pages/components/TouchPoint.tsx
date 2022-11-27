import React from "react";
import salesIcon from "../../public/icons/sales.png";
import serviceIcon from "../../public/icons/service.png";
import leypartsIcon from "../../public/icons/leyparts.png";
import Image from "next/image";

export default function TouchPoint() {
  return (
    <div className="col-sm-12">
      {/* TouchPoint */}
      <h1 className="brandColor text-center fw-bold my-5">Touch Point</h1>
      <div
        className="col-sm-12 pt-3 position-relative"
        style={{ backgroundColor: "#f6821f" }}
      >
        <div
          className="flex-row text-white d-flex justify-content-center"
          style={{ marginTop: "-50px" }}
        >
          <div className="px-4 text-center">
            <Image width={50} height={50} src={salesIcon} alt="icon" />
            <p>Sales</p>
          </div>
          <div className="px-4">
            <Image width={50} height={50} src={serviceIcon} alt="icon" />
            <p>Service</p>
          </div>
          <div className="px-4">
            <Image width={50} height={50} src={leypartsIcon} alt="icon" />
            <p>Leyparts</p>
          </div>
        </div>
      </div>
    </div>
  );
}
