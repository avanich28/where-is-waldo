"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
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

const pathLists = gameLists.map(
  (game, i) => `/games/${i}-${convertStringIntoLink(game.name)}`
);

const GameContext = createContext<GameContextType<boolean, string> | undefined>(
  undefined
);

function GameProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Cannot use from useInitialParams hook
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isPlay, setIsPlay] = useState(false);
  const [characterFound, setCharacterFound] = useState<string[]>([]);
  const [timeCount, setTimeCount] = useState(0);
  const [record, setRecord] = useState<{
    status: boolean;
    gameId: null | number;
  }>({ status: false, gameId: null });
  const time = calcMinsAndSecs(timeCount);

  // Reset the game when players click other pages during playing the game
  useEffect(
    function () {
      if (!pathLists.includes(pathname)) {
        setIsPlay(false);
        reset();
      }
    },
    [pathname]
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

  // Add this because don't want to re-render GameImage component
  useEffect(
    function () {
      if (record.status && typeof record.gameId === "number") {
        createRecord({ gameId: record.gameId, timeCount });
        setRecord({ status: false, gameId: null });
      }
    },
    [record, timeCount]
  );

  const checkCoordinate = useCallback(
    function ({ x, y, gameId }: Coordinates): void {
      const characters = gameLists[gameId].characters;
      const name = characters.find((character) => {
        const { xLeft, xRight, yTop, yBottom } = character.coordinates;
        if (x > xLeft && x < xRight && y > yTop && y < yBottom)
          return character;
      })?.name;

      // Prevent repeat or not found
      if (characterFound.includes(name as string) || name === undefined) return;

      if (name) setCharacterFound((arr) => [...arr, name]);

      // Check all characters that are all found and save a record
      if (name && characterFound.length + 1 === 3) {
        setIsPlay(false);
        setRecord({ status: true, gameId });
      }
    },
    [characterFound]
  );

  function reset() {
    setCharacterFound([]);
    setTimeCount(0);
  }

  const value = useMemo(() => {
    return {
      isPlay,
      setIsPlay,
      time,
      characterFound,
      checkCoordinate,
      reset,
    };
  }, [isPlay, time, characterFound, checkCoordinate]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

function useGame() {
  const context = useContext(GameContext);
  if (context === undefined)
    throw new Error("GameContext was used outside provider!");

  return context;
}

export { GameProvider, useGame };
