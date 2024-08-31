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
    <div className="px-4 lg:px-[5rem] py-5 absolute right-[12%] border-2 border-slate-500 top-[93%] left-[12%] h-[10rem] justify-center  backdrop-blur-sm bg-gradient-to-l from-slate-900 via-indigo-950 to-slate-900 shadow-md shadow-indigo-950 ">
      <div className="mx-4 mb-4 flex justify-between items-center ">
        <h2 className="text-indigo-300 text-xl md:text-4xl font-bold">
          Upcoming Launch
        </h2>
        <h2 className="text-indigo-200 text-xl font-medium hidden xl:block">
          {launchItem?.name}
        </h2>
      </div>

      <div className=" items-center flex justify-between">
        <div className="flex gap-0 lg:gap-[0.8rem]">
          <h4 className="text-sm lg:text-3xl lg:font-bold font-semibold">
            T<span className="mx-2">-</span>
          </h4>
          <div className="text-center">
            <h3 className="text-md lg:text-2xl font-bold">
              <CountUp start={0} duration={1} delay={2} end={timeLeft.days} />
            </h3>
            <h3 className="text-sm lg:text-md">Days</h3>
          </div>
          <p className="text-md lg:text-2xl  font-bold">:</p>
          <div className="text-center">
            <div className="text-md lg:text-2xl  font-bold">
              <CountUp start={0} delay={2} end={timeLeft.hours} />
            </div>
            <h3 className="text-sm lg:text-md">Hours</h3>
          </div>
          <p className="text-md lg:text-2xl  font-bold">:</p>
          <div className="text-center">
            <h3 className="text-md lg:text-2xl  font-bold">
              {" "}
              <CountUp
                start={0}
                duration={1}
                delay={2}
                end={timeLeft.minutes}
              />
            </h3>
            <h3 className="text-sm lg:text-md">Minutes </h3>
          </div>
          <p className="text-md lg:text-2xl  font-bold">:</p>
          <div className="text-center ">
            <h3 className="text-md lg:text-2xl  font-bold">
              {timeLeft.seconds || 0}
            </h3>
            <h3 className="text-sm lg:text-md">Seconds</h3>
          </div>
        </div>
        <div className="text-center mr-8 hidden xl:block">
          <h5 className="text-sm xl:text-lg">{launchItem?.pad?.name}</h5>
          <h5 className="text-sm xl:text-lg">
            {launchItem?.pad?.location.name}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default UpcomingLaunch;
