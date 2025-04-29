"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { useGame } from "@/app/_contexts/GameContext";

type GameImageProps = {
  name: string;
  image: StaticImageData[];
  gameId: number;
};

function GameImage({ name, image, gameId }: GameImageProps) {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const { checkCoordinate } = useGame();

  function onClick(e: React.MouseEvent<HTMLDivElement>) {
    const image = imageRef.current;

    if (image) {
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;

      const x = e.nativeEvent.offsetX * scaleX;
      const y = e.nativeEvent.offsetY * scaleY;

      checkCoordinate({ x, y, gameId });
    }
  }

  return (
    <div onClick={onClick}>
      <Image ref={imageRef} src={image[1]} alt={name} placeholder="blur" />
    </div>
  );
}

export default GameImage;
