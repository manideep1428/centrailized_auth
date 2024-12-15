import { DefaultSession } from "next-auth";

export interface ExtendedSession extends DefaultSession {
  user: {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export const sessionConfig = {
  strategy: "jwt" as const,
  maxAge: 30 * 24 * 60 * 60, // 30 days
};