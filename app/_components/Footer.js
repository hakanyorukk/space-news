"use client";

import { IoArrowUpOutline } from "react-icons/io5";

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
          <ul className="lg:flex grid gap-x-8  border-t-2 border-slate-600 pt-2 place-items-start">
            <li>Company</li>
            <li>Contact us</li>
            <li>Carrers</li>
            <li>Piravacy ploicy</li>
            <li>Terms</li>
          </ul>
        </div>
        <div className="border-t-2 border-slate-600 pt-2 grid lg:flex">
          <span className="cursor-pointer transform font-medium hover:scale-110 duration-300">
            &copy; Stellar News
          </span>
          <p> All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
