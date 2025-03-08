"use client";

import { useRouter } from "next/navigation";
import { useGame } from "@/app/_contexts/GameContext";
import ImageBox from "@/app/_components/ImageBox";

const defaultStyles = {
  leftTop: "hover:bg-hover-primary",
  rightTop: "hover:bg-green-700",
  leftBottom: "hover:bg-hover-secondary",
  rightBottom: "hover:bg-red-700",
};

const boxPositionArr = Object.keys(defaultStyles);

function Box({ id, data }) {
  const { setIsPlay } = useGame();
  const router = useRouter();
  const { name, href, image } = data;
  const position = boxPositionArr[id];

  function handleGameStart() {
    setIsPlay(true);
    router.push(`/games/${id}-${href}`);
  }

  return (
    <button onClick={handleGameStart} href={`/games/${id}-${href}`}>
      <div
        className={`w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[180px] lg:h-[180px] flex justify-center items-center text-center rounded-md overflow-hidden px-2 lg:px-3 group relative tracking-wider animate-expand primaryTransition [&>*]:primaryTransition ${defaultStyles[position]}`}
      >
        <ImageBox
          src={image[0]}
          alt={name}
          addClassName={`opacity-50 group-hover:opacity-0`}
        />

        <span className="font-semibold sm:font-bold text-sm sm:text-[16px] lg:text-lg z-10 group-hover:opacity-0">
          {name}
        </span>

        <span className="uppercase font-extrabold sm:text-2xl lg:text-3xl absolute opacity-0 group-hover:opacity-100 group-hover:animate-zoom">
          play
        </span>
      </div>
    </button>
  );
}

export default Box;
