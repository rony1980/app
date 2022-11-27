import React from "react";
import bg from "../../public/backgrounds/newsevent.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import Image from "next/image";
export default function NewsEvent() {
  const news = [
    { id: 1, image: "n1" },
    { id: 2, image: "n2" },
    { id: 3, image: "n3" },
    { id: 4, image: "n4" },
    { id: 5, image: "n5" },
  ];

  const background = {
    backgroundImage: `url(${bg.src})`,
    backgroundSize: "cover",
  };
  const playButton = {};
  return (
    <div className="row py-5 position-relative" style={background}>
      <h1 className="brandColor text-center fw-bold">News & Events</h1>
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
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1920: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {news.map((ron) => {
            return (
              <SwiperSlide key={ron.id}>
                <div className="col mt-5">
                  <div className="d-flex justify-content-center align-items-center position-relative">
                    <Image
                      className="img-fluid mb-3"
                      src={`/newsevents/${ron.image}.jpg`}
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
    </div>
  );
}
