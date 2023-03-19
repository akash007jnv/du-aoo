import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { useRouter } from 'next/router';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client from "../Sanity/sanity";
import moment from "moment";
import Link from "next/link";
import { GlobalData } from "../pages/_app";
import slug from "@/pages/[slug]";

function Coura() {
  const [News, setNews] = useState([]);
  const { FeaturedPost, setFeaturedPost } = useContext(GlobalData);


  const handleClick = (slug) => {
    router.push(`/${slug}`);
   
  };

  useEffect(() => {
    client
      .fetch(`
        *[_type == 'featuredNews'] | order(publishedAt desc) {
          _id,
          body,
          categories,
          "imageUrl": image.asset->url,
          importantLinks,
          publishedAt,
          source,
          title
        }
      `)
      .then((data) => {
        console.log(data);
        setNews(data);
      });
  }, []);
  

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="relative w-full">
      <div className="absolute w-full">
        <div className="absolute w-full bg-gradient-to-t from-black to-transparent bg-gradient"></div>
        <Slider {...settings}>
          {News.map((g) => {
            const { imageUrl, title,publishedAt,Slug } = g;
            // const hh = Slug.slug
            return (
              <Link
             href={`${Slug}`} 
              >
          
              <div key={g._id}>
                <div
                  className="w-full h-[500px] bg-cover relative z-40"
                  style={{ backgroundImage: `url(${imageUrl})` }}
                >
                  <div className="absolute z-20 inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <h1 className="absolute bottom-10 left-0 ml-3 Laato z-50 text-white text-xl ">
                    {title}
                  </h1>
                  <p className="absolute bottom-6 left-0 ml-3  z-50 text-white text-[12px] ">
                    Updated on {moment(publishedAt).format('dddd, MMMM Do YYYY')}
                  </p>
                </div>
              </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Coura;
