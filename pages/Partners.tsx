import Head from "next/head";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Top from "./components/Top";
import Homeslider from "./components/Homeslider";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import Footer from "./components/Footer";
const Partners = () => {
  const logo = [
    { id: 1, image: "p1" },
    { id: 2, image: "p2" },
    { id: 3, image: "p3" },
    { id: 4, image: "p4" },
    { id: 5, image: "p5" },
    { id: 6, image: "p6" },
    { id: 7, image: "p7" },
  ];
  return (
    <>
      <div className="container-fluid">
        <Head>
          <title>History</title>
          <meta name="description" content="All" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Top />
        <Homeslider />
      </div>
      <div className="container">
        <div className="row my-5">
          <h1 className="fw-bold brandColor text-center">Partners</h1>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
            maxime inventore ipsam, aut nemo asperiores fugiat cum nisi dolores
            voluptas, nihil necessitatibus dolor quos? Dicta eligendi,
            perspiciatis, veniam dolores corporis corrupti asperiores non
            incidunt, repellat nulla at ratione consequuntur vero dolore cumque
            illum ab repudiandae obcaecati atque magni iusto iste!
          </p>
        </div>
      </div>
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
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
            1920: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
        >
          {logo.map((ron) => {
            return (
              <SwiperSlide key={ron.id}>
                <div className="col my-5">
                  <div className="d-flex justify-content-center align-items-center position-relative">
                    <Image
                      className="img-fluid mb-3 partnerLogo"
                      src={`/partners/${ron.image}.webp`}
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
      <Footer />
    </>
  );
};

export default Partners;
