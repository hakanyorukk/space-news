import Link from "next/link";

function Navigation({ active }) {
  return (
    <nav>
      <ul
        className={`flex lg:flex-row flex-col gap-12 text-xl font-[500] uppercase transition-all duration-200 absolute w-[50%] ${
          active
            ? "visible z-50 auto-cols-max py-16 px-15 pl-12 backdrop-blur-3xl "
            : "lg:visible invisible"
        } absolute top-10 lg:top-0 right-0 lg:bg-transparent bg-slate-800/[.75] `}
      >
        <li className="group relative">
          <Link href="#" className="hover:text-indigo-300 transition-colors">
            Home
            <div className="rounded-xl absolute content-none w-full h-[.2rem] transform all duration-300 delay-100 ease-out bg-gradient-to-r from-transparent from-0% via-transparent via-50% to-indigo-300 to-50% bg-[220%_auto] group-hover:bg-[100%]"></div>
          </Link>
        </li>

        <li className="group relative">
          <Link
            href="#latestNews"
            className="hover:text-indigo-300 transition-colors"
          >
            News
            <div className="rounded-xl absolute content-none w-full h-[.2rem] transform all duration-300 delay-100 ease-out bg-gradient-to-r from-transparent from-0% via-transparent via-50% to-indigo-300 to-50% bg-[220%_auto] group-hover:bg-[100%]"></div>
          </Link>
        </li>

        <li className="group relative">
          <Link
            href="#event"
            className="hover:text-indigo-300  transition-colors"
          >
            Event
            <div className="rounded-xl absolute content-none w-full h-[.2rem] transform all duration-300 delay-100 ease-out bg-gradient-to-r from-transparent from-0% via-transparent via-50% to-indigo-300 to-50% bg-[220%_auto] group-hover:bg-[100%]"></div>
          </Link>
        </li>

        <li className="group relative">
          <Link
            href="#today"
            className="hover:text-indigo-300 transition-colors"
          >
            Today
            <div className="rounded-xl absolute content-none w-full h-[.2rem] transform all duration-300 delay-100 ease-out bg-gradient-to-r from-transparent from-0% via-transparent via-50% to-indigo-300 to-50% bg-[220%_auto] group-hover:bg-[100%]"></div>
          </Link>
        </li>

        <li className="group relative">
          <Link
            href="#about"
            className="hover:text-indigo-300 transition-colors"
          >
            About
            <div className="rounded-xl absolute content-none w-full h-[.2rem] transform all duration-300 delay-100 ease-out bg-gradient-to-r from-transparent from-0% via-transparent via-50% to-indigo-300 to-50% bg-[220%_auto] group-hover:bg-[100%]"></div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
