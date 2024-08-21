import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

export default function Home() {

  return (
    <div className="overflow-y-hidden bg-orange-50 text-emerald-950">
      <Navbar/>
      <Hero/>
    </div>
  ); 
}
