"use client";

import { MdAccessTime } from "react-icons/md";
import { useGame } from "@/app/_contexts/GameContext";

function Timer() {
  const { time } = useGame();
  const { minutes, seconds } = time;

  return (
    <div className="flex gap-1 md:gap-2 items-center">
      <span className="text-[1.5em]">
        <MdAccessTime />
      </span>
      <span className="flex [&>span]:w-5 [&>span]:sm:w-6">
        <span>{minutes}</span>
        <span className="text-center">:</span>
        <span>{seconds}</span>
      </span>
    </div>
  );
}

export default Timer;
