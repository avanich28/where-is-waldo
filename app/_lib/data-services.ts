"use server";

import { notFound } from "next/navigation";
import { gameLists } from "@/app/_utils/gameLists";

// Check incorrect path
function checkPathId(path) {
  if (!gameLists.map((game, i) => `${i}-${game.href}`).includes(path))
    return false;

  return true;
}

export async function getUsername() {}

export async function getUserPassword() {}

export async function getUserBestRecords() {
  const timeCount = 12;
  const data = [
    { gameId: 0, place: 1, timeCount },
    { gameId: 1, place: 2, timeCount: timeCount + 1 },
    { gameId: 2, place: 3, timeCount: timeCount + 2 },
    { gameId: 3, place: 4, timeCount: timeCount + 3 },
  ];

  return data;
}

export async function getAllRecordsPerGame(boardId) {
  if (!checkPathId(boardId)) return notFound();

  const id = Number(boardId.split("-")[0]);

  // FIXME connect gameId with backend
  function addDay(days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  }

  const data = [
    { gameId: 0, name: "akari", timeCount: 3, date: addDay(0) },
    {
      gameId: 0,
      name: "alicia",
      timeCount: 4,
      date: addDay(1),
    },
    { gameId: 0, name: "aika", timeCount: 5, date: addDay(2) },
    { gameId: 0, name: "akira", timeCount: 6, date: addDay(3) },
    { gameId: 1, name: "alice", timeCount: 7, date: addDay(4) },
    {
      gameId: 1,
      name: "athena",
      timeCount: 8,
      date: addDay(5),
    },
    { gameId: 1, name: "aria", timeCount: 9, date: addDay(6) },
    { gameId: 2, name: "hime", timeCount: 10, date: addDay(7) },
    { gameId: 2, name: "ma", timeCount: 11, date: addDay(8) },
    {
      gameId: 2,
      name: "akasuki",
      timeCount: 12,
      date: addDay(9),
    },
    { gameId: 3, name: "ai", timeCount: 13, date: addDay(10) },
    {
      gameId: 3,
      name: "woody",
      timeCount: 14,
      date: addDay(11),
    },
    {
      gameId: 3,
      name: "grandma",
      timeCount: 15,
      date: addDay(12),
    },
    {
      gameId: 3,
      name: "postman",
      timeCount: 16,
      date: addDay(13),
    },
  ];

  return data.filter((player) => player.gameId === id);
}

export async function getGameData(gameId) {
  if (!checkPathId(gameId)) return notFound();

  const id = Number(gameId.split("-")[0]);

  return { id, ...gameLists[id] };
}
