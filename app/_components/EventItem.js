import { getEvent } from "../_lib/data-service";
import Link from "next/link";

async function EventItem() {
  const getEventItem = await getEvent();
  const dateStr = getEventItem.date;
  const date = new Date(dateStr);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
    timeZone: "Europe/Istanbul",
  };

  const formattedDate = new Intl.DateTimeFormat("en-UK", options).format(date);

  return (
    <section className="w-full p-12 object-cover h-full" id="event">
      <h3 className="mb-8 inline-block text-3xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-indigo-800  via-violet-900  to-purple-500">
        Upcoming Event
      </h3>
      <div className="bg-center bg-event object-cover w-full bg-cover items-center place-content-center h-[80vh] ">
        <div className="grid border-0 xl:border-2 w-full xl:w-[38%] xl:ml-20 ml-0 px-12 bg-slate-500/[.25] backdrop-blur-sm rounded-md overflow-hidden ">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold uppercase mb-4 lg:mb-12 tracking-[0.18em] py-12">
            {getEventItem.name}
          </h2>
          <p className="text-xl lg:text-2xl font-medium">
            {getEventItem.description}
          </p>
          <h3 className="mt-6 text-xl lg:text-2xl font-bold tracking-wider">
            {formattedDate}
          </h3>
          <Link
            href={getEventItem.news_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block mx-auto font-semibold text-slate-50 justify-center mt-[6rem] px-8 py-3 text-md uppercase outline transform all duration-300 ease-out bg-gradient-to-r from-transparent from-0% via-transparent via-50% to-slate-50 to-50% bg-[220%_auto] hover:bg-[100%] hover:text-slate-950 mb-10"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default EventItem;
