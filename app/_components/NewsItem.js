import Image from "next/image";
import Link from "next/link";

function NewsItem({ item }) {
  return (
    <div className=" mx-8 ">
      <div className="group h-[20rem] transition-all duration-200 relative shadow-md delay-300 ">
        <Image
          fill
          src={item.image_url}
          alt="newsimage"
          className="object-cover "
        />
        <div className="absolute bottom-0 h-full px-4 pt-4 z-10 left-0 right-0 bg-slate-700/[.75] backdrop-blur-md transition-transform delay-100 duration-300 translate-y-3/4 group-hover:translate-y-0 ease-out">
          <h5 className="texl-2xl font-bold tracking-widest">
            {item.news_site}
          </h5>
          <h4 className="text-md lg:text-xl pt-1">{item.title}</h4>
          <p className="text-sm lg:text-md pt-1">
            {item.summary.slice(0, 180) + "..."}
          </p>
          <Link
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm lg:text-md uppercase absolute bottom-6 text-center mx-auto px-4 py-2 outline left-1/2 -translate-x-1/2 transform all duration-300 ease-out bg-gradient-to-r from-transparent from-0% via-transparent via-50% to-slate-50 to-50% bg-[220%_auto] hover:bg-[100%] hover:text-slate-950"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
