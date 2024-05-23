import Link from "next/link";
import configData from "../../config.json";

const navItems = configData.NAV
  ? configData.NAV
  : {
      "/": {
        name: "home",
      },
      "/blog": {
        name: "blog",
      },
    };
export function Navbar() {
  return (
    <div className="nav-bar">
      <nav className="flex">
        <div className="flex flex-row space-x-0 pr-10">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 cursor-pointer"
              >
                {name}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
