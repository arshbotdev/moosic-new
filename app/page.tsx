import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[url('/bg.png')] bg-cover bg-center h-screen">
      <Navbar />
      <Header />
    </main>
  );
}
