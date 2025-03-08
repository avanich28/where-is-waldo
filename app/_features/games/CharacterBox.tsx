"use client";

import { useGame } from "@/app/_contexts/GameContext";
import ImageBox from "@/app/_components/ImageBox";

function CharacterBox({ src, alt, name }) {
  const { characterFound } = useGame();

  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 items-center">
      <div
        className={`relative h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] lg:h-[65px] lg:w-[65px] border border-black dark:border-white rounded-md overflow-hidden ${
          characterFound.includes(name) ? "opacity-25" : "opacity-100"
        }`}
      >
        <ImageBox src={src} alt={alt} />
      </div>
      <span className="capitalize text-sm font-light sm:text-base sm:tracking-wider">
        {name}
      </span>
    </div>
  );
}

export default CharacterBox;
