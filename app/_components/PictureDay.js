"use client";

import Image from "next/image";
import { getApod } from "../_lib/action";
import { useEffect, useState } from "react";

function PictureDay() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await getApod();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <section id="today" className="mb-[10rem] mt-20 h-full">
      <div className="grid grid-rows-2 lg:flex max-w-[85rem] mx-auto ">
        <div className="row-span-2 lg:basis-1/2 p-6 sm:p-12">
          <h3 className="uppercase tracking-[0.3em] mt-10 mb-2">TODAY</h3>
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 lg:mb-[5rem]">
            Astronomy Picture of the Day
          </h2>
          <h4 className="text-xl lg:text-2xl font-semibold mb-2">
            {data?.title}
          </h4>
          <p className="text-lg lg:text-xl">{data?.explanation}</p>
          <p className="mt-4 text-lg lg:text-xl font-semibold tracking-widest">
            {data?.date}
          </p>
        </div>
        <div className="sm:w-[80%] w-[90%] mx-auto lg:w-[40rem] row-span-2 lg:basis-1/2 ">
          <div className="relative h-[30rem] lg:h-[50rem]">
            <Image
              src={data?.url}
              fill
              className="object-cover"
              alt="data.title"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PictureDay;
