"use client";
import Slider from "react-slick";
import VideoItem from "./VideoItem";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Suspense, useEffect, useState } from "react";
import { getPhoto1 } from "../_lib/data-service";
import UpcomingLaunch from "./UpcomingLaunch";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export const revalidate = 36000;

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="right-[-5%] top-[40%] absolute text-[4rem] text-center cursor-pointer z-10 p-2  bg-transparent"
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <IoIosArrowForward className="transition-transform delay-100 hover:translate-x-2" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="left-[-5%] top-[40%] absolute text-[4rem] text-center cursor-pointer  z-10 p-2 bg-transparent "
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <IoIosArrowBack className="transition-transform delay-100 hover:-translate-x-2" />
    </div>
  );
}

function VideoList() {
  //const id_1 = "CLPS Overview Video Final";
  const id_2 = "KSC-20221005-VP-MWC01-001-CREW5-HIGHLIGHTS-3315114";
  //const id_3 = "jsc2022m000285-Artemis_I_Mission_Highlights_MP4";
  const id_4 =
    "JPL-20240710-Perseverance_Rover_Spots_an_Unusual_Rock_in_Ancient_River_Channel_Mars_Report";
  const id_5 = "Artemis Onward to the Moon";
  const id_6 = "jsc2023m000213_Gateway_LunarSpaceStationTrailer_4K";

  const id_7 = "jsc2023m000187_OSIRIS-REx_SampleRevealEventVideo_MP4_23.97";
  const ids = [id_5, id_7, id_2, id_4];

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const videoData = await Promise.all(
        ids.map(async (id) => {
          const { item, video_URL } = await getPhoto1({ id });
          return { item, video_URL };
        })
      );
      setVideos(videoData);
    }

    fetchVideos();
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    cssEase: "linear",

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="bg-transparent mb-[15rem] h-[58vh] shadow-2xl ">
      <div className="max-w-[85%] mx-auto relative h-[58vh] ">
        <Slider {...settings} className="flex">
          {videos.map((video, index) => (
            <VideoItem
              key={index}
              item={video.item}
              video_URL={video.video_URL}
            />
          ))}
        </Slider>
        <Suspense>
          <UpcomingLaunch />
        </Suspense>
      </div>
    </section>
  );
}

export default VideoList;
