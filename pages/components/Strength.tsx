import Image from "next/image";
import React from "react";

export default function Strength() {
  const strength = [
    { id: 1, name: "Sales", texts: "24 Sales Office", icon: "2" },
    { id: 2, name: "Service", texts: "32 Service Center", icon: "1" },
    {
      id: 3,
      name: "Leyparts",
      texts: "350 LayParts Retail Outlets",
      icon: "3",
    },
    { id: 4, name: "Dealers", texts: "10 Dealers", icon: "4" },
  ];
  const bg = {
    width: "100%",
    height: "500px",
    transform: "skew(54deg, -10deg)",
    background: "#f6821f",
    zIndex: "-99",
    top: "280px",
  };
  return (
    <div className="row my-5 position-relative overflow-hidden pb-5">
      <div className="position-absolute" style={bg}></div>
      <h1 className="brandColor text-center fw-bold mb-5">
        Countrywide Our Strength
      </h1>
      <div className="row row-cols-1 row-cols-sm-4 gx-5">
        {strength.map((st) => {
          return (
            <div className="col mb-sm-0 mb-4" key={st.id}>
              <div className="h-100 shadow py-4 mb-5 bg-body rounded d-flex justify-content-center flex-wrap">
                <div className="col-12 d-flex justify-content-center">
                  <Image
                    className="mx-3"
                    src={`/icons/${st.icon}.png`}
                    alt="icon"
                    width={60}
                    height={60}
                    style={{ backgroundColor: "#f6821f" }}
                  />
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <h1>{st.name}</h1>
                </div>
                <p>{st.texts}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
