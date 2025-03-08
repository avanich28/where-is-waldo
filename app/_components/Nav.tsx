"use client";

import { JSX } from "react";
import Link from "next/link";
import { PiTrophyFill, PiUserFill } from "react-icons/pi";
import { TbMoonFilled, TbSunFilled } from "react-icons/tb";
import { useTheme } from "@/app/_contexts/ThemeContext";

const linkDefaultStyle =
  "text-xl sm:text-2xl lg:text-3xl [&>*]:primaryTransition hover:[&>*]:text-hover-secondary hover:[&>*]:dark:text-hover-primary";

function Nav(): JSX.Element {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`flex gap-5 sm:gap-7 lg:gap-9 ${linkDefaultStyle}`}>
      <Link href="/user/records">
        <PiUserFill />
      </Link>
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
