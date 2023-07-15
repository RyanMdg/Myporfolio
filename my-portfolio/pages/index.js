import "../src/app/globals.css";
import Navbar from "../src/app/components/navbar";
import Lefticons from "../src/app/components/lefticons";
import Righticon from "../src/app/components/righticon";
import Hero from "../src/app/components/hero";
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });

const home = () => {
  return (
    <main className={inter.className}>
      <Navbar />

      <div className=" max-w-[96%]  flex justify-between">
        <Lefticons />
        <Righticon />
      </div>
      <Hero />
    </main>
  );
};

export default home;
