import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Social = () => {
  const [document, setDocument] = useState([]);
  useEffect(() => {
    fetch("http://autosapi.ifadgroup.com:8001/content-module/6")
      .then((res) => res.json())
      .then((data) => setDocument(data));
  }, []);

  const socialModule = document.map((items) => {
    return (
      <div className="row my-5" key={items.id}>
        <h1 className="brandColor text-center fw-bold mb-4">
          {items.module_name}
        </h1>
        <div className="swiper">
          <div className="row">
            {items.content_item.map((social) => {
              return (
                <div key={social.id} className="col-sm-3 mb-sm-0 mb-4">
                  <Link href={social.item_link}>
                    <Image
                      className="img-fluid mb-3 newsImage"
                      src={social.item_image}
                      alt="car"
                      width={1920}
                      height={0}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col-sm-3 mb-sm-0 mb-4">
              <div
                className="fb-like"
                data-href="https://www.facebook.com/ifadautos"
                data-width=""
                data-layout="button_count"
                data-action="like"
                data-size="small"
                data-share="true"
              ></div>
            </div>
            <div className="col-sm-3 mb-sm-0 mb-4">
              <i className="bi bi-instagram"></i>
            </div>
            <div className="col-sm-3 mb-sm-0 mb-4">
              <i className="bi bi-linkedin"></i>
            </div>
            <div className="col-sm-3 mb-sm-0 mb-4">
              <i className="bi bi-youtube"></i>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{socialModule}</>;
};

export default Social;
