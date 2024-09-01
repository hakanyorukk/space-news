"use client";

import { IoArrowUpOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className="h-auto px-12 lg:px-0 py-16 lg:py-24 bg-black relative"
      id="about"
    >
      <button
        className="group absolute w-[3rem] h-[3rem] rounded-md top-[-1.5rem] right-12 bg-slate-50"
        onClick={scrollToTop}
      >
        <IoArrowUpOutline className="relative p-2 h-full w-full text-slate-800 transition all duration-300 group-hover:scale-125" />
      </button>
      <div className="flex justify-between text-xl ouline max-w-[85rem] mx-auto ">
        <div>
          <ul className="lg:flex grid gap-x-8 gap-y-4 border-t-2 border-slate-600 pt-2 place-items-start sm:text-lg text-base">
            <li>Company</li>
            <li>Contact us</li>
            <li>Carrers</li>
            <li>Piravacy ploicy</li>
            <li>Terms</li>
          </ul>
        </div>
        <div className="border-t-2 border-slate-600 pt-2 grid lg:flex gap-8 ">
          <span className="sm:text-lg text-base cursor-pointer transform font-medium hover:scale-110 duration-300 ">
            &copy; Stellar News
          </span>
          <Link
            href="https://github.com/hakanyorukk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 place-items-center text-xl font-semibold  hover:-skew-y-6 px-2 hover:scale-110 z-30 hover:bg-slate-700 hover:p-2 hover:rounded-lg hover:skew-x-6 overflow-hidden"
          >
            <FaGithub className=" text-violet-400 " />
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-cyan-400">
              hakanyorukk
            </p>
          </Link>
          <p className="text-base"> All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
