import Image from "next/image";
import { getApod } from "../_lib/data-service";
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

  // if (!data) {
  //   return <div>Loading...</div>;
  // }
  return (
    <section id="today" className="mb-[10rem]">
      <div className="grid grid-rows-2 lg:flex max-w-[85rem] mx-auto my-12">
        <div className="row-span-2 lg:basis-1/2 p-12">
          <h3 className="uppercase tracking-[0.3em] mt-10 mb-2">TODAY</h3>
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 lg:mb-[5rem]">
            Astronomy Picture of the Day
          </h2>
          <h4 className="text-xl lg:text-2xl font-semibold mb-2">
            {data?.title}
          </h4>
          <p className="text-lg lg:text-xl">{data?.explanation}</p>
        </div>
        <div className="w-[80%] mx-auto lg:w-[40rem] row-span-2 lg:basis-1/2 ">
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
