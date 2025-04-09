import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";

const authConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: { label: "name", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.name || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { name: credentials.name },
        });

        if (user && (await bcrypt.compare(credentials.password, user.password)))
          return { id: user.id, name: user.name };
        else throw new Error("Invalid email or password");
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async jwt({ token, user }) {
      // Need to add an user id one more time
      if (user) token.uid = user.id;

      return token;
    },
    async session({ session, token }) {
      if (session.user) session.user.id = token.sub;

      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
