import { type DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: DefaultUser & {
      id: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    uid: string;
  }
}

// https://github.com/nextauthjs/next-auth/discussions/536
