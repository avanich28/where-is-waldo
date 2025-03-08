"use client";

import { redirect } from "next/navigation";
import { useGame } from "@/app/_contexts/GameContext";

function RedirectToGamesPage({ children }) {
  const { isPlay, characterFound } = useGame();

  // Prevent players from accessing with url directly
  if (!isPlay && characterFound.length === 0) redirect("/games");

  return <>{children}</>;
}

export default RedirectToGamesPage;
