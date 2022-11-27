import React from "react";
import bg from "../../public/backgrounds/client-bg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import Image from "next/image";
import Link from "next/link";
export default function Client() {
  const client = [
    { id: 1, image: "c1", videoLink: "https://youtube.com" },
    { id: 2, image: "c2", videoLink: "https://youtube.com" },
    { id: 3, image: "c3", videoLink: "https://youtube.com" },
    { id: 4, image: "c4", videoLink: "https://youtube.com" },
  ];

  const background = {
    backgroundImage: `url(${bg.src})`,
  };
  const playButton = {};
  return (
    <div className="mt-5">
      <h1 className="brandColor text-center mb-4 fw-bold">What Client Say</h1>
      <div className="row" style={background}>
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
            {client.map((ron) => {
              return (
                <SwiperSlide key={ron.id}>
                  <div className="col mt-5">
                    <div className="d-flex justify-content-center align-items-center position-relative">
                      <Image
                        className="img-fluid mb-3"
                        src={`/clients/${ron.image}.jpg`}
                        alt="car"
                        width={1920}
                        height={0}
                      />
                      <div className="display-1 text-white position-absolute">
                        <Link href={ron.videoLink} style={{ color: "white" }}>
                          <i className="bi bi-play-circle"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
