import Image from "next/image";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

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
  ];
  const bg = {
    width: "100%",
    height: "500px",
    transform: "skew(54deg, -10deg)",
    background: "#f6821f",
    zIndex: "-99",
    top: "240px",
  };
  // ForAnimation
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  // Animation end
  return (
    <div className="row my-5 position-relative overflow-hidden pb-5">
      <div className="position-absolute" style={bg}></div>
      <motion.div
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <h1 className="brandColor text-center fw-bold mb-5">
          Countrywide Our Strength
        </h1>

        <div className="row row-cols-1 row-cols-sm-3 pe-0">
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
      </motion.div>
    </div>
  );
}
