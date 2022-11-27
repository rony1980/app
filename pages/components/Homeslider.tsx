import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";

export default function Homeslider() {
  const banner = [
    { id: "1", name: "banner1" },
    { id: "2", name: "banner2" },
    { id: "3", name: "banner3" },
  ];
  return (
    <div className="row">
      <div className="swiper">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {banner.map((rony) => {
            return (
              <SwiperSlide key={rony.id}>
                <Image
                  className="img-fluid"
                  src={`/banner/${rony.name}.webp`}
                  alt="car"
                  width={1920}
                  height={0}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
