"use server";

import { notFound } from "next/navigation";
import { prisma } from "./prisma";
import { auth } from "./auth";
import { gameLists } from "@/app/_utils/gameLists";
import { convertStringIntoLink } from "@/app/_utils/helpers";

// Prevent incorrect path for gameId and boardId
function checkPathId(path) {
  const pathLists = gameLists.map(
    (game, i) => `${i}-${convertStringIntoLink(game.name)}`
  );

  if (pathLists.includes(path)) return true;
  return false;
}

export async function getUserData() {
  const session = await auth();
  if (!session) return { name: null };

  const userId = Number(session.user?.id);

  try {
    const data = await prisma.user.findFirst({
      where: { id: userId },
      select: { name: true },
    });

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Username could not be loaded!");
  }
}

export async function getUserBestRecords() {
  const session = await auth();
  if (!session) throw new Error("You must be logged in!");

  const userId = Number(session.user?.id);

  try {
    const data = await prisma.record.groupBy({
      by: ["gameId"],
      where: {
        userId: userId,
      },
      _min: {
        timeCount: true,
      },
    });

    if (data.length === 0) return [];

    const userFastestRecordByGame = data.map((record) => ({
      // Start from 0 in an array index
      gameId: record.gameId - 1,
      timeCount: record._min.timeCount,
    }));

    return userFastestRecordByGame;
  } catch (error) {
    console.error(error);
    throw new Error("User's best records could not be loaded!");
  }
}

export async function getAllRecordsPerGame(boardId) {
  // Cannot call function inside try/catch
  if (!checkPathId(boardId)) return notFound();

  // Start from 1 in DB
  const id = 1 + Number(boardId.split("-")[0]);

  try {
    const data = await prisma.game.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        records: {
          where: {
            gameId: id,
          },
          orderBy: {
            timeCount: "asc",
          },
          select: {
            user: {
              select: { name: true },
            },
            timeCount: true,
            createdAt: true,
          },
        },
      },
    });

    if (!data) return [];

    // Add a dense rank
    let rank = 1;
    let prevTimeCount = 0;
    const recordsWithRank = data.records.map((obj, i) => {
      const { user, timeCount, createdAt: date } = obj;
      const { name } = user;

      if (i === 0) {
        prevTimeCount = timeCount;
      } else if (timeCount > prevTimeCount) {
        rank++;
      }

      return { rank, name, timeCount, date };
    });

    return recordsWithRank;
  } catch (error) {
    console.error(error);
    throw new Error("Records could not be loaded!");
  }
}

export async function getGameData(gameId) {
  if (!checkPathId(gameId)) return notFound();

  const id = Number(gameId.split("-")[0]);

  return { id, ...gameLists[id] };
}
