import Image from "next/image";
import React from "react";

const Social = () => {
  const socialImage = [
    {
      id: 1,
      image: "facebook.jpg",
      code: '<div class="fb-page" data-href="https://www.facebook.com/service.ifad" data-width="300" data-height="" data-hide-cover="false" data-show-facepile="false"></div>',
    },
    { id: 2, image: "instagram.jpg", code: "" },
    { id: 3, image: "linkedin.jpg", code: "" },
    { id: 4, image: "youtube.jpg", code: "" },
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
              <>
                <div key={social.id} className="col-sm-3 mb-sm-0 mb-4">
                  <div
                    style={{
                      backgroundImage: `url(/social/${social.image})`,
                      width: "300px",
                      height: "130px",
                    }}
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: social.code }}
                    ></div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Social;
