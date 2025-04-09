"use client";

import { useRef } from "react";

// For login and signup form
const bottomTextDefaultStyle =
  "[&>div:last-child]:text-xs [&>div:last-child]:sm:text-sm [&>div:last-child]:lg:text-base [&>div:last-child>span]:font-semibold [&>div:last-child>span]:sm:font-bold [&>div:last-child>span]:underline [&>div:last-child>span]:underline-offset-2 hover:[&>div:last-child>span>a]:text-hover-primary dark:hover:[&>div:last-child>span>a]:text-hover-secondary [&>div:last-child>span>a]:primaryTransition";

function FormBox({ children, name, action }) {
  return (
    <form
      action={action}
      className={`flex flex-col gap-2 sm:w-[40vw] px-[2vw] py-[4vh] border border-light-container dark:border-dark-container rounded-md capitalize tracking-wide sm:tracking-wider [&>button]:ml-auto ${bottomTextDefaultStyle}`}
    >
      <h2 className="mb-1 uppercase font-semibold sm:font-bold sm:text-lg lg:text-xl">
        {name}
      </h2>

      {children}
    </form>
  );
}

export default FormBox;
