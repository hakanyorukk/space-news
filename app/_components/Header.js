"use client";

import Logo from "./Logo";
import Navigation from "./Navigation";
import { debounce } from "lodash";
import { useEffect, useState } from "react";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setIsSticky(false);
      } else if (currentScrollY > lastScrollY) {
        setIsSticky(false);
        setActive(false);
      } else {
        // Show on scroll up
        setIsSticky(true);
      }

      setLastScrollY(currentScrollY);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`${
        isSticky ? "z-50 sticky top-0 translate-y-0 " : "-translate-y-full"
      }block bg-black border-b border-slate-900 px-8 py-2 transition-transform duration-700 ease-out relative`}
    >
      <div
        className={`relative max-w-7xl h-10 mx-auto flex justify-between items-center top-1`}
      >
        <Logo />
        <button
          onClick={() => setActive(!active)}
          className={`z-[12] absolute right-4 top-0 lg:invisible visible h-16 w-16 inline-block`}
        >
          &nbsp;
          <span
            className={`transition-all duration-200 relative w-8 h-[2px] inline-block bg-slate-50 before:top-[-0.6rem] before:w-8 before:h-[2px] before:inline-block before:bg-slate-50  after:w-8 after:h-[2px] after:inline-block after:bg-slate-50 after:top-[0.6rem] after:absolute before:absolute before:left-0 after:left-0 before:transition-all before:duration-200 after:transition-all after:duration-200 ${
              active
                ? " bg-transparent after:top-0.5 before:top-0.5 before:rotate-45  after:rotate-[-45deg] "
                : ""
            }`}
          >
            &nbsp;
          </span>
        </button>
        <Navigation active={active} />
      </div>
    </header>
  );
}

export default Header;
