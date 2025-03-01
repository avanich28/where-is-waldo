"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { calcMinsAndSecs } from "@/app/_utils/helpers";

const GameContext = createContext();

function GameProvider({ children }) {
  const [isPlay, setIsPlay] = useState(false);
  const [timeCount, setTimeCount] = useState(0);
  const interval = useRef();
  const { minutes, seconds } = calcMinsAndSecs(timeCount);

  function time() {
    setTimeCount((num) => num + 1);
  }

  // FIXME Recheck
  useEffect(
    function () {
      if (isPlay) {
        interval.current = setInterval(time, 1000);
      } else return () => clearInterval(interval.current);
    },
    [isPlay]
  );

  return (
    <GameContext.Provider
      value={{ isPlay, setIsPlay, timeCount, setTimeCount, minutes, seconds }}
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
