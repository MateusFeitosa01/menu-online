import Hero from "@/components/Hero";
import  Cardapio  from "@/components/Cardapio";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cardapio/>
    </>
  );
}