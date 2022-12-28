import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import background from "../../public/backgrounds/background.png";
import Link from "next/link";

export default function Discover() {
  const product = {
    bus: [
      {
        id: "1",
        name: "ICV Distribution",
        detail:
          "A range that offers more power, cabin options, load body options, payload, comfort and savings",
        image: "bus1.webp",
      },
      {
        id: "2",
        name: "Ashok leyland 2518",
        detail:
          "Move ahed in your trucking business with Eicher Pro 5040 having competitive fuel effiency backed by Volvogroup's eperience",
        image: "bus2.webp",
      },
      {
        id: "3",
        name: "Ashok leyland 3120 6x2 BS6",
        detail:
          "Modular design, best in class fuel efficiently, superior tyre mileage, higher driving comfort and performance",
        image: "bus3.webp",
      },
      {
        id: "4",
        name: "Ashok leyland 3120 6x2 BS6",
        detail:
          "Modular design, best in class fuel efficiently, superior tyre mileage, higher driving comfort and performance",
        image: "bus4.webp",
      },
    ],
    trucks: [
      {
        id: "5",
        name: "ICV Distribution",
        detail:
          "A range that offers more power, cabin options, load body options, payload, comfort and savings",
        image: "truck1.webp",
      },
      {
        id: "6",
        name: "Ashok leyland 2518",
        detail:
          "Move ahed in your trucking business with Eicher Pro 5040 having competitive fuel effiency backed by Volvogroup's eperience",
        image: "truck2.webp",
      },
      {
        id: "7",
        name: "Ashok leyland 3120 6x2 BS6",
        detail:
          "Modular design, best in class fuel efficiently, superior tyre mileage, higher driving comfort and performance",
        image: "truck3.webp",
      },
      {
        id: "8",
        name: "Ashok leyland 3120 6x2 BS6",
        detail:
          "Modular design, best in class fuel efficiently, superior tyre mileage, higher driving comfort and performance",
        image: "truck3.webp",
      },
    ],
    pickup: [
      {
        id: "9",
        name: "ICV Distribution",
        detail:
          "A range that offers more power, cabin options, load body options, payload, comfort and savings",
        image: "pickup1.webp",
      },
      {
        id: "10",
        name: "Ashok leyland 2518",
        detail:
          "Move ahed in your trucking business with Eicher Pro 5040 having competitive fuel effiency backed by Volvogroup's eperience",
        image: "pickup2.webp",
      },
      {
        id: "11",
        name: "Ashok leyland 3120 6x2 BS6",
        detail:
          "Modular design, best in class fuel efficiently, superior tyre mileage, higher driving comfort and performance",
        image: "pickup1.webp",
      },
      {
        id: "12",
        name: "Ashok leyland 3120 6x2 BS6",
        detail:
          "Modular design, best in class fuel efficiently, superior tyre mileage, higher driving comfort and performance",
        image: "pickup2.webp",
      },
    ],
  };

  return (
    <div
      className="row py-5"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="brandColor text-center fw-bold">Discover The Range</h1>
      <div className="d-flex justify-content-center mt-3">
        <ul
          className="nav nav-pills mb-3 text-center"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Buses
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Trucks
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Pickup
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content p-0" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          {/* Buses */}
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
              {product.bus.map((ron) => {
                return (
                  <SwiperSlide key={ron.id}>
                    <div className="col mt-2">
                      <div className="h-100">
                        <Image
                          className="img-fluid mb-3"
                          src={`/product/${ron.image}`}
                          alt="car"
                          width={1920}
                          height={0}
                        />
                        <h5 className="text-center">{ron.name}</h5>
                        <p className="text-center fs-6 py-4">{ron.detail}</p>
                        <div className="d-flex justify-content-center">
                          <Link
                            type="button"
                            className="btn btn-outline-warning px-4"
                            href={"/SingleVehicle"}
                          >
                            Explore
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
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          {/* Trucks */}
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
              {product.trucks.map((ron) => {
                return (
                  <SwiperSlide key={ron.id}>
                    <div className="col mt-5">
                      <div className="h-100">
                        <Image
                          className="img-fluid mb-3"
                          src={`/product/${ron.image}`}
                          alt="car"
                          width={1920}
                          height={0}
                        />
                        <h5 className="text-center">{ron.name}</h5>
                        <p className="text-center fs-6 py-4">{ron.detail}</p>
                        <div className="d-flex justify-content-center">
                          <a
                            type="button"
                            className="btn btn-outline-warning px-4"
                          >
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
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          {/* Pickup */}
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
              {product.pickup.map((ron) => {
                return (
                  <SwiperSlide key={ron.id}>
                    <div className="col mt-5">
                      <div className="h-100">
                        <Image
                          className="img-fluid mb-3"
                          src={`/product/${ron.image}`}
                          alt="car"
                          width={1920}
                          height={0}
                        />
                        <h5 className="text-center">{ron.name}</h5>
                        <p className="text-center fs-6 py-4">{ron.detail}</p>
                        <div className="d-flex justify-content-center">
                          <a
                            type="button"
                            className="btn btn-outline-warning px-4"
                          >
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
        <div
          className="tab-pane fade"
          id="pills-disabled"
          role="tabpanel"
          aria-labelledby="pills-disabled-tab"
        >
          ...
        </div>
      </div>
    </div>
  );
}
