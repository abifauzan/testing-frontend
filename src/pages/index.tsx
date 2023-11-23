import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Container from "@/components/container";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Header />

      <Container>
        <div></div>
      </Container>
    </main>
  );
}
