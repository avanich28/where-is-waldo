"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { gameLists } from "@/app/_utils/gameLists";
import { calcMinsAndSecs, convertStringIntoLink } from "@/app/_utils/helpers";
import { createRecord } from "@/app/_lib/actions";

const GameContext = createContext();

function GameProvider({ children }) {
  const path = usePathname();
  const [isPlay, setIsPlay] = useState(false);
  const [characterFound, setCharacterFound] = useState([]);
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
      let interval = null;
      if (isPlay) {
        interval = setInterval(
          () => setTimeCount((prevCount) => prevCount + 1),
          1000
        );
      }

      return () => {
        if (interval) {
          clearInterval(interval);
          interval = null;
        }
      };
    },
    [isPlay]
  );

  function checkCoordinate(x, y, gameId) {
    const characters = gameLists[gameId].characters;
    const name = characters.find((character) => {
      const { xLeft, xRight, yTop, yBottom } = character.coordinates;
      if (x > xLeft && x < xRight && y > yTop && y < yBottom) return character;
    })?.name;

    // Prevent repeat
    if (characterFound.includes(name)) return;

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
