"use client";

import Slider from "react-slick";
import { getNews } from "../_lib/action";

import NewsItem from "./NewsItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";

function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="absolute text-[3rem] text-center cursor-pointer top-[40%] align-center right-[-10%] xl:right-[23%] z-10 p-2 bg-transparent  "
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <IoIosArrowForward className="transition-transform delay-100 hover:translate-x-2" />
    </div>
  );
}

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="absolute text-[3rem] text-center cursor-pointer top-[40%] left-[-10%] xl:left-[23%] z-10 p-2 bg-transparent"
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <IoIosArrowBack className="transition-transform delay-100 hover:-translate-x-2" />
    </div>
  );
}

function NewsList() {
  const [newsItems, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const data = await getNews();
      setNews(data);
    }

    fetchNews();
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 300,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section
      className="px-8 md:px-14 sm:px-[5rem] h-[60vh] mb-[2rem]"
      id="latestNews"
    >
      <div className="h-full mt-80 sm:mt-60">
        <h2 className="m-10 inline-block text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-indigo-500  to-cyan-500">
          Latest News
        </h2>
        <Slider {...settings}>
          {newsItems.map((item, index) => (
            <NewsItem key={index} item={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default NewsList;
