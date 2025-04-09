import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

// https://github.com/nextauthjs/next-auth/issues/12731
