"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const navLinks = [
  { label: "Home", route: "#" },
  { label: "News", route: "#latestNews" },
  { label: "Event", route: "#event" },
  { label: "Today", route: "#today" },
  { label: "About", route: "#about" },
];
function Header() {
  const [active, setActive] = useState(false);
  const modalRef = useRef(null);
  useEffect(() => {
    // Add event listener when modal is open
    if (active) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener when component unmounts or modal state changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active]); // Re-run the effect when isModalOpen changes

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setActive(false);
    }
  };
  return (
    <>
      <header
        ref={modalRef}
        className={`fixed w-full h-fit top-0 z-30 bg-black border-b border-slate-900 px-8 py-2 place-items-center justify-center  ${
          active ? "h-80" : ""
        } duration-300 place-items-center transition-all ease-out `}
      >
        <div className="max-w-7xl lg:w-full gap-12 mx-auto flex place-items-center justify-beetwen relative z-50">
          <button
            onClick={() => setActive(active ? false : true)}
            className="text-2xl lg:hidden z-50 flex place-items-center h-6 
            "
          >
            {" "}
            <span
              className={`relative w-6 h-[2px] bg-slate-50 inline-block transition-all duration-300 ease-in ${
                active ? "bg-transparent" : ""
              }`}
            >
              <span
                className={`absolute left-0 w-6 h-[2px] bg-slate-50 transition-all duration-300 ease-in  ${
                  active ? "top-0 rotate-45" : "-top-2"
                }`}
              />
              <span
                className={`absolute left-0 w-6 h-[2px] bg-slate-50 transition-all duration-300 ease-in  ${
                  active ? "top-0 -rotate-45" : "top-2"
                }`}
              />
            </span>
          </button>
          <Logo />

          <Navigation active={active} />
        </div>
        <div
          className={`z-10 w-full ${
            active ? "translate-y-0" : "-translate-y-10"
          } transition-transform duration-600 ease-in `}
        >
          {active && (
            <nav className="w-full bottom-0 -z-10 lg:hidden block transform ">
              <ul className="flex flex-col mx-12 justify-center place-items-center mt-6 ">
                {navLinks.map((link) => (
                  <li
                    key={link.label}
                    className="group relative border-t-[1px] w-full border-slate-900 justify-center flex py-2 "
                  >
                    <Link
                      href={link.route}
                      className={`tracking-[.2em] text-xl hover:text-indigo-300 transition-colors ${
                        link.label === "Home" && "font-bold text-indigo-600"
                      }`}
                      onClick={() => setActive(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>{" "}
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
