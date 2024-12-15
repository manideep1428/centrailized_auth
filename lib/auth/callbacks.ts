import { JWT } from "next-auth/jwt";
import { ExtendedSession } from "./session";

export const callbacks = {
  async jwt({ token, user }: { token: JWT; user: any }) {
    if (user) {
      token.id = user.id;
    }
    return token;
  },
  async session({ session, token }: { session: ExtendedSession; token: JWT }) {
    if (session.user) {
      session.user.id = token.id as string;
    }
    return session;
  },
};