"use client";

import { type ErrorProps } from "@/app/_utils/types";
import Button from "@/app/_components/Button";

export const metadata = {
  title: "Error",
};

function Error({ error, reset }: ErrorProps) {
  return (
    <main className="h-full px-[3vw] flex flex-col justify-center items-center gap-3 tracking-wide sm:tracking-wider">
      <h1 className="font-semibold sm:font-bold text-xl sm:text-2xl lg:text-3xl">
        Something went wrong!
      </h1>
      <p>{error.message}</p>
      <Button onClick={reset}>Try again</Button>
    </main>
  );
}

export default Error;
