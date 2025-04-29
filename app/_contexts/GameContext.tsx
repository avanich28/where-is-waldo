"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { createRecord } from "@/app/_lib/actions";
import { gameLists } from "@/app/_utils/gameLists";
import { calcMinsAndSecs, convertStringIntoLink } from "@/app/_utils/helpers";
import { type Coordinates, type Time } from "@/app/_utils/types";

type GameContextType<T, U> = {
  isPlay: T;
  setIsPlay: Dispatch<SetStateAction<T>>;
  time: Time;
  characterFound: U[];
  checkCoordinate: ({ x, y, gameId }: Coordinates) => void;
  reset: () => void;
};

const GameContext = createContext<GameContextType<boolean, string> | undefined>(
  undefined
);

function GameProvider({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isPlay, setIsPlay] = useState(false);
  const [characterFound, setCharacterFound] = useState<string[]>([]);
  const [timeCount, setTimeCount] = useState(0);
  const time = calcMinsAndSecs(timeCount);

  // Reset the game when players click other pages during playing the game
  useEffect(
    function () {
      const pathLists = gameLists.map(
        (game, i) => `/games/${i}-${convertStringIntoLink(game.name)}`
      );

      if (!pathLists.includes(path)) {
        setIsPlay(false);
        reset();
      }
    },
    [path]
  );

  useEffect(
    function () {
      if (isPlay) {
        intervalRef.current = setInterval(
          () => setTimeCount((prevCount) => prevCount + 1),
          1000
        );
      }

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };
    },
    [isPlay]
  );

  function checkCoordinate({ x, y, gameId }: Coordinates): void {
    const characters = gameLists[gameId].characters;
    const name = characters.find((character) => {
      const { xLeft, xRight, yTop, yBottom } = character.coordinates;
      if (x > xLeft && x < xRight && y > yTop && y < yBottom) return character;
    })?.name;

    // Prevent repeat or not found
    if (characterFound.includes(name as string) || name === undefined) return;

    if (name) setCharacterFound((arr) => [...arr, name]);

    // Check all characters that are all found and save a record
    if (name && characterFound.length + 1 === 3) {
      setIsPlay(false);
      createRecord({ gameId, timeCount });
    }
  }

  function reset() {
    setCharacterFound([]);
    setTimeCount(0);
  }

  return (
    <GameContext.Provider
      value={{
        isPlay,
        setIsPlay,
        time,
        characterFound,
        checkCoordinate,
        reset,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

function useGame() {
  const context = useContext(GameContext);
  if (context === undefined)
    throw new Error("GameContext was used outside provider!");

  return context;
}

export { GameProvider, useGame };
