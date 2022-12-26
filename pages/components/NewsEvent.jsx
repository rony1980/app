import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import Image from "next/image";
export default function NewsEvent() {
  const [document, setDocument] = useState([]);
  useEffect(() => {
    fetch("http://autosapi.ifadgroup.com:8001/content-module/17")
      .then((res) => res.json())
      .then((data) => setDocument(data));
  }, []);

  const moduleName = document.map((item) => {
    return (
      <div
        className="row py-5 position-relative"
        style={{
          backgroundImage: `url(${item.module_image})`,
          backgroundSize: "cover",
        }}
        key={item.id}
      >
        <h1 className="brandColor text-center fw-bold">{item.module_name}</h1>
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
            {item.content_item.map((ron) => {
              return (
                <SwiperSlide key={ron.id}>
                  <div className="col mt-5">
                    <div className="d-flex justify-content-center align-items-center position-relative">
                      <Image
                        className="img-fluid mb-3"
                        src={ron.item_image}
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
  });

  return <>{moduleName}</>;
}
