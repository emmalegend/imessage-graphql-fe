import Image from "next/image";
import { Inter } from "@next/font/google";
import { signIn, useSession } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data, status } = useSession();
  console.log("here is data" + data);
  return (
    <main>
      <h2>Sign In here</h2>
      <button onClick={() => signIn("google")}>Sign In</button>
    </main>
  );
}
