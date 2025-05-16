"use client";

import { redirect } from "next/navigation";
import { useGame } from "@/app/_contexts/GameContext";

function RedirectToGamesPage({ children }: { children: React.ReactNode }) {
  const { isPlay, characterFound } = useGame();

  // Handle reload /games/:gameId page and prevent players from accessing with url directly
  if (!isPlay && characterFound.length === 0) redirect("/games");

  return <>{children}</>;
}

export default RedirectToGamesPage;
