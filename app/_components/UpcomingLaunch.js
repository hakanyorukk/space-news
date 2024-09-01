"use client";

import { useEffect, useState } from "react";
import { getUpcomingLaunch } from "../_lib/action";
import CountUp from "react-countup";

function UpcomingLaunch() {
  const [launchItem, setLaunchItem] = useState([]);

  useEffect(() => {
    async function fetchUpcomingLaunch() {
      const data = await getUpcomingLaunch();
      setLaunchItem(data);
    }

    fetchUpcomingLaunch();
  }, []);

  const targetDate = new Date(`${launchItem?.net}`);
  const now = new Date();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const diffInMilliseconds = targetDate - now;
      const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      const diffInHours = Math.floor(diffInMinutes / 60);
      const diffInDays = Math.floor(diffInHours / 24);

      const hoursLeft = diffInHours % 24;
      const minutesLeft = diffInMinutes % 60;
      const secondsLeft = diffInSeconds % 60;

      setTimeLeft({
        days: diffInDays,
        hours: hoursLeft,
        minutes: minutesLeft,
        seconds: secondsLeft,
      });
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div
      className="absolute sm:-bottom-28 -bottom-48 flex flex-col right-0 mx-auto left-0 md:h-fit h-fit justify-center xl:w-[75%] w-[90%] backdrop-blur-sm shadow-md shadow-indigo-950 gap-8 before:bg-[conic-gradient(#7e22ce,#0e7490,#9333ea,#2563eb)] before:content-[''] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:absolute before:w-full before:h-full before:blur-lg before:-z-10 p-2 bg-transparent border-none rounded-xl
      "
    >
      <div className=" bg-gradient-to-l from-slate-900 via-indigo-950 to-slate-900 w-full h-full py-5 px-8 rounded-xl  lg:px-[5rem]">
        <div className=" flex sm:flex-row flex-col justify-between items-center gap-2">
          <h2 className="text-indigo-300 text-xl md:text-4xl font-bold">
            Upcoming Launch
          </h2>
          <h2 className="text-indigo-200 sm:text-xl text-lg font-medium ">
            {launchItem?.name}
          </h2>
        </div>

        <div className="flex sm:flex-row flex-col items-center  justify-between gap-8">
          <div className="flex gap-0 lg:gap-[0.8rem]">
            <h4 className="text-sm lg:text-3xl lg:font-bold font-semibold">
              T<span className="mx-2">-</span>
            </h4>
            <div className="text-center">
              <h3 className="text-md lg:text-2xl font-bold">
                {timeLeft.days || 0}
              </h3>
              <h3 className="text-xs lg:text-md">Days</h3>
            </div>
            <p className="text-md lg:text-2xl  font-bold">:</p>
            <div className="text-center">
              <div className="text-md lg:text-2xl  font-bold">
                {timeLeft.hours || 0}
              </div>
              <h3 className="text-xs lg:text-md">Hours</h3>
            </div>
            <p className="text-md lg:text-2xl  font-bold">:</p>
            <div className="text-center">
              <h3 className="text-md lg:text-2xl  font-bold">
                {timeLeft.minutes || 0}
              </h3>
              <h3 className="text-xs lg:text-md">Minutes </h3>
            </div>
            <p className="text-md lg:text-2xl  font-bold">:</p>
            <div className="text-center ">
              <h3 className="text-md lg:text-2xl  font-bold">
                {timeLeft.seconds || 0}
              </h3>
              <h3 className="text-xs lg:text-md">Seconds</h3>
            </div>
          </div>
          <div className="text-center">
            <h5 className="text-sm xl:text-lg">{launchItem?.pad?.name}</h5>
            <h5 className="text-sm xl:text-lg">
              {launchItem?.pad?.location.name}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingLaunch;
