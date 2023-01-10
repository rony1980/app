import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
const Recentnews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("http://autosapi.ifadgroup.com:8001/content-module/17")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div>
      <h4 className="brandColor fw-bold">Recent Posts</h4>
      {news.map((ron) => 
        ron.content_item.map(item=>{
        return(
        <div className="row border-bottom py-4" key={item.id}>
          <div className="col-3 position-relative">
            <Image
              className="position-relative"
              layout="fill"
              objectFit="cover"
              src={item.item_image}
              alt="image"
            />
          </div>
          <div className="col-9 fs-3">
            <Link className="newslink" key={item.id} href={`${item.id}`}>
              <h4>{item.item_name}</h4>
            </Link>
          </div>
        </div>
        )
         })
        )}
    </div>
  );
};

export default Recentnews;
