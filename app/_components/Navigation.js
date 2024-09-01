import Link from "next/link";

const navLinks = [
  { label: "Home", route: "#" },
  { label: "News", route: "#latestNews" },
  { label: "Event", route: "#event" },
  { label: "Today", route: "#today" },
  { label: "About", route: "#about" },
];

function Navigation() {
  return (
    <nav>
      <ul className=" lg:flex lg:flex-row flex-col gap-12 text-xl font-[500] uppercase transition-all duration-200 w-[50%] absolute top-10 lg:top-0 right-0 lg:bg-transparent bg-slate-800/[.75] hidden z-50 place-items-center my-auto">
        {navLinks.map((link) => (
          <li key={link.label} className="group relative">
            <Link
              href={link.route}
              className="hover:text-indigo-300 transition-colors"
            >
              {link.label}{" "}
              <div className="rounded-xl absolute content-none w-full h-[.2rem] transform all duration-300 delay-100 ease-out bg-gradient-to-r from-transparent from-0% via-transparent via-50% to-indigo-300 to-50% bg-[220%_auto] group-hover:bg-[100%]"></div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
