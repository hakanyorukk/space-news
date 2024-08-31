"use client";

import Logo from "./Logo";
import Navigation from "./Navigation";
import { debounce } from "lodash";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

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
      }block bg-black border-b border-slate-900 px-8 py-2 transition-transform duration-700 ease-out relative  place-items-center `}
    >
      <div className="max-w-7xl lg:w-full  h-10 mx-auto flex   place-items-center justify-between relative">
        <button
          onClick={() => setActive(!active)}
          className="text-2xl block lg:hidden "
        >
          {!active ? <RxHamburgerMenu /> : <IoMdClose />}
        </button>
        <Logo />

        <Navigation active={active} />
      </div>
    </header>
  );
}

export default Header;
