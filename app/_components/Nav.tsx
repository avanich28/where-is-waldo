"use client";

import Link from "next/link";
import { PiTrophyFill, PiUserFill } from "react-icons/pi";
import { TbMoonFilled, TbSunFilled } from "react-icons/tb";
import { useTheme } from "@/app/_contexts/ThemeContext";

const linkDefaultStyle: string =
  "text-xl sm:text-2xl lg:text-3xl hover:[&>*]:text-hover-secondary hover:[&>*]:dark:text-hover-primary [&>*]:secondaryTransition";

function Nav({ name }: { name: string | undefined }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`flex gap-5 sm:gap-7 lg:gap-9 items-center ${linkDefaultStyle}`}
    >
      {name && (
        <>
          <Link href="/user" className="md:hidden">
            <PiUserFill />
          </Link>
          <Link
            href="/user"
            className="hidden md:inline-flex text-base lg:text-lg uppercase tracking-wider"
          >
            {name.length > 10 ? name.slice(0, 10) + "." : name}
          </Link>
        </>
      )}
      <Link href="/boards">
        <PiTrophyFill />
      </Link>
      <button onClick={toggleTheme} className="animate-rotate" key={theme}>
        {theme === "dark" ? <TbSunFilled /> : <TbMoonFilled />}
      </button>
    </nav>
  );
}

export default Nav;
