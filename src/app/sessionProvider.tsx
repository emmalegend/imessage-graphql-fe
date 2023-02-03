"use client";
import { SessionProvider } from "next-auth/react";

export default function Session({ children, session }: any) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
