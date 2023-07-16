import { useState, useEffect } from "react";
import "../src/app/globals.css";
import Navbar from "../src/app/components/navbar";
import Lefticons from "../src/app/components/lefticons";
import Righticon from "../src/app/components/righticon";
import Hero from "../src/app/components/hero";
import { Montserrat } from "next/font/google";
import Footer from "../src/app/components/footer";

const inter = Montserrat({ subsets: ["latin"] });

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous task
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Set the desired loading time in milliseconds
  }, []);

  return (
    <main className={inter.className}>
      {loading ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="relative">
            <img className="rotate w-[50%]" src="/logo.png" alt="" />
            <div className="loader-line"></div>
          </div>
        </div> // Replace with your loader component
      ) : (
        <>
          <Navbar />
          <div className="max-w-[96%] flex justify-between">
            <Lefticons />
            <Righticon />
          </div>
          <Hero />
          <Footer />
        </>
      )}
    </main>
  );
};

export default Home;
