import "../src/app/globals.css";
import Navbar from "../src/app/components/navbar";
import Lefticons from "../src/app/components/lefticons";
import Hero from "../src/app/components/hero";
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });

const home = () => {
  return (
    <main className={inter.className}>
      <Navbar />
      <Lefticons />
      <Hero />
    </main>
  );
};

export default home;
