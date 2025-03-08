"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGame } from "@/app/_contexts/GameContext";

function GameImage({ name, image, gameId }) {
  const imageRef = useRef(null);
  const { checkCoordinate } = useGame();

  function onClick(e) {
    const image = imageRef.current;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const x = e.nativeEvent.offsetX * scaleX;
    const y = e.nativeEvent.offsetY * scaleY;

    checkCoordinate(x, y, gameId);
  }

  return (
    <Image
      ref={imageRef}
      src={image[1]}
      alt={name}
      placeholder="blur"
      onClick={onClick}
    />
  );
}

export default GameImage;
