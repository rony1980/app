import Image from "next/image";
import React from "react";

const Social = () => {
  const socialImage = [
    { id: 1, image: "facebook.jpg" },
    { id: 2, image: "instagram.jpg" },
    { id: 3, image: "linkedin.jpg" },
    { id: 4, image: "youtube.jpg" },
  ];

  return (
    <div className="row my-5">
      <h1 className="brandColor text-center fw-bold mb-4">
        SOCIAL MEDIA PRESENCE
      </h1>
      <div className="swiper">
        <div className="row">
          {socialImage.map((social: any) => {
            return (
              <div key={social.id} className="col-sm-3 mb-sm-0 mb-4">
                <Image
                  className="img-fluid"
                  width={400}
                  height={214}
                  src={`/social/${social.image}`}
                  alt="Social Media"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Social;
