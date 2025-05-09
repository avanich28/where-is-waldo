"use server";

import { notFound } from "next/navigation";
import { gameLists } from "@/app/_utils/gameLists";
import { convertStringIntoLink } from "@/app/_utils/helpers";
import {
  type AllRecords,
  type BestRecords,
  type GameData,
  type Username,
  allRecordsPerGame,
  baseUserSchema,
  gameDataSchema,
  userBestRecords,
} from "@/app/_utils/types";
import { auth } from "./auth";
import { prisma } from "./prisma";

// Prevent incorrect path for gameId and boardId
function checkPathId(path: string): boolean {
  const pathLists = gameLists.map(
    (game, i) => `${i}-${convertStringIntoLink(game.name)}`
  );

  if (pathLists.includes(path)) return true;
  return false;
}

export async function getUserData(): Promise<Username | { name: undefined }> {
  const session = await auth();
  // Don't break web app and throw error when a page is initially mounted
  if (!session) return { name: undefined };

  const userId = Number(session.user?.id);

  try {
    const data = await prisma.user.findFirst({
      where: { id: userId },
      select: { name: true },
    });

    return baseUserSchema.parse(data);
  } catch (error) {
    console.error(error);
    throw new Error("Username could not be loaded!");
  }
}

export async function getUserBestRecords(): Promise<BestRecords> {
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

    return userBestRecords.parse(userFastestRecordByGame);
  } catch (error) {
    console.error(error);
    throw new Error("User's best records could not be loaded!");
  }
}

export async function getAllRecordsPerGame(
  boardId: string
): Promise<AllRecords> {
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
            id: true,
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
      const { id, user, timeCount, createdAt: date } = obj;
      const { name } = user;

      if (i === 0) {
        prevTimeCount = timeCount;
      } else if (timeCount > prevTimeCount) {
        rank++;
      }

      return { id, rank, name, timeCount, date };
    });

    return allRecordsPerGame.parse(recordsWithRank);
  } catch (error) {
    console.error(error);
    throw new Error("Records could not be loaded!");
  }
}

export async function getGameData(gameId: string): Promise<GameData> {
  if (!checkPathId(gameId)) return notFound();

  const id = Number(gameId.split("-")[0]);

  return gameDataSchema.parse({ id, ...gameLists[id] });
}
