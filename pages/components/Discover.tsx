import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import background from "../../public/backgrounds/background.png";

export default function Discover() {
  const discover = [
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
  ];

  return (
    <div
      className="row py-5"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <h1 className="brandColor text-center fw-bold">Discover The Range</h1>
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
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1920: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {discover.map((ron) => {
            return (
              <SwiperSlide key={ron.id}>
                <div className="col mt-5">
                  <div className="h-100">
                    <Image
                      className="img-fluid mb-3"
                      src={`/discover/${ron.image}.png`}
                      alt="car"
                      width={1920}
                      height={0}
                    />
                    <h5 className="text-center">{ron.name}</h5>
                    <p className="text-center fs-6 py-4">{ron.detail}</p>
                    <div className="d-flex justify-content-center">
                      <a type="button" className="btn btn-outline-warning px-4">
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
