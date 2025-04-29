import { StaticImageData } from "next/image";
import { z } from "zod";

export type ErrorProps = {
  error: Error;
  reset: () => void;
};

export type FormError = {
  error: boolean;
  message?: string | undefined;
};

export const baseUserSchema = z.object({
  name: z.string().trim(),
});

export type Username = z.infer<typeof baseUserSchema>;

export const userSchema = baseUserSchema.extend({
  password: z.string(),
});

export const passwordSchema = z.object({
  password: z.string(),
  passwordConfirm: z.string(),
});

export const recordSchema = z.object({
  gameId: z.number(),
  timeCount: z.number(),
});

export type Record = z.infer<typeof recordSchema>;

export const userBestRecords = z
  .array(
    z.object({
      gameId: z.number(),
      timeCount: z.number(),
    })
  )
  .max(4);

export type BestRecords = z.infer<typeof userBestRecords>;

export const boardRecord = z.object({
  rank: z.number().positive(),
  name: z.string(),
  timeCount: z.number(),
  date: z.date(),
});

export type BoardRecord = z.infer<typeof boardRecord>;

export const allRecordsPerGame = z.array(boardRecord);

export type AllRecords = z.infer<typeof allRecordsPerGame>;

const staticImageSchema = z.object({
  src: z.string(),
  height: z.number(),
  width: z.number(),
  blurDataURL: z.string().optional(),
}) satisfies z.ZodType<StaticImageData>;

const coordinateSchema = z.object({
  xLeft: z.number(),
  xRight: z.number(),
  yTop: z.number(),
  yBottom: z.number(),
});

const characterSchema = z.object({
  name: z.string(),
  img: staticImageSchema,
  coordinates: coordinateSchema,
});

export const baseGameDataSchema = z.object({
  name: z.string(),
  image: z.array(staticImageSchema).length(2),
  artist: z.string(),
  source: z.string(),
  characters: z.array(characterSchema).length(3),
});

export type BaseGameData = z.infer<typeof baseGameDataSchema>;

export type GameLists = z.infer<typeof baseGameDataSchema>[];

export const gameDataSchema = baseGameDataSchema.extend({
  id: z.number(),
});

export type GameData = z.infer<typeof gameDataSchema>;

export type Time = {
  minutes: string;
  seconds: string;
};

export type Coordinates = {
  gameId: number;
  x: number;
  y: number;
};
