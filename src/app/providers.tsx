"use client";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../Chakra/theme";

export default function Provider({ children, session }: any) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </SessionProvider>
  );
}
