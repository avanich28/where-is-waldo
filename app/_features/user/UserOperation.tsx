"use client";

import Link from "next/link";
import { useInitialParams } from "@/app/_hooks/useInitialParams";
import { isActive } from "@/app/_utils/helpers";
import Container from "@/app/_components/Container";

const linkDefaultStyle =
  "uppercase text-center tracking-wider font-semibold sm:font-bold text-light-textHead dark:text-dark-textHead text-xs sm:text-sm lg:text-base [&>*]:border-hidden [&>*]:rounded-md [&>*]:p-1 [&>*]:w-[8rem] [&>*]:sm:w-40 [&>*]:lg:w-[12rem] hover:[&>*]:text-hover-primary dark:hover:[&>*]:text-hover-secondary [&>*]:primaryTransition";

function UserOperation() {
  const { pathname } = useInitialParams();
  const defaultLinks = ["/user/records", "/user/settings"];

  return (
    <Container addClassName={`gap-1 ${linkDefaultStyle}`}>
      {defaultLinks.map((link) => (
        <Link key={link} href={link} className={isActive(pathname, link)}>
          {link.split("/")[2]}
        </Link>
      ))}
    </Container>
  );
}

export default UserOperation;
