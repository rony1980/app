import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import Image from "next/image";
import background from "../../public/backgrounds/background.png";
import TouchPoint from "./TouchPoint";

export default function Award() {
  const award = [
    { id: 1, image: "a1" },
    { id: 2, image: "a2" },
    { id: 3, image: "a1" },
  ];

  return (
    <div
      className="row pt-5 position-relative"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <h1 className="brandColor text-center fw-bold">Award & Recognition</h1>
      <div className="swiper">
        <Swiper
          modules={[Navigation]}
          spaceBetween={100}
          slidesPerView={1}
          pagination={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1920: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        >
          {award.map((ron) => {
            return (
              <SwiperSlide key={ron.id}>
                <div className="col mt-5">
                  <div className="d-flex justify-content-center align-items-center position-relative">
                    <Image
                      className="img-fluid mb-3"
                      src={`/award/${ron.image}.png`}
                      alt="car"
                      width={1920}
                      height={0}
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="swiper">
        <TouchPoint />
      </div>
    </div>
  );
}
