import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import { db } from "./db";
import google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [google],
  adapter: DrizzleAdapter(db),
  session: { strategy: "database" },
  pages: {
    signIn: "/auth/sign-in",
  },
});
