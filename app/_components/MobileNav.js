import Link from "next/link";
import React from "react";

const MobileNav = ({ active }) => {
  return (
    <nav className="w-full bottom-0 -z-10 lg:hidden block transform ">
      <ul className="flex flex-col  mx-12 justify-center place-items-center mt-6 ">
        <li className="group relative border-t w-full border-indigo-900 justify-center flex py-2">
          <Link
            href="#"
            className="tracking-[.2em]  hover:text-indigo-300 transition-colors"
          >
            Home
          </Link>
        </li>
        <li className="group relative border-t  w-full border-indigo-900 justify-center flex py-2">
          <Link
            href="#latestNews"
            className="tracking-[.2em] hover:text-indigo-300 transition-colors"
          >
            News
          </Link>
        </li>
        <li className="group relative border-t  w-full border-indigo-900 justify-center flex py-2">
          <Link
            href="#today"
            className="tracking-[.2em] hover:text-indigo-300 transition-colors"
          >
            Today
          </Link>
        </li>
        <li className="group relative border-t border-b w-full border-indigo-900 justify-center flex py-2">
          <Link
            href="#about"
            className="tracking-[.2em] hover:text-indigo-300 transition-colors"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
