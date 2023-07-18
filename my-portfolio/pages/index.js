import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import "../src/app/globals.css";
import Navbar from "../src/app/components/navbar";
import Lefticons from "../src/app/components/lefticons";
import Righticon from "../src/app/components/righticon";
import Hero from "../src/app/components/hero";
import { Montserrat } from "next/font/google";
import Footer from "../src/app/components/footer";
import ReactGa from "react-ga";

const tracking_Id = "G-G95PF7PFS8";

if (typeof window !== "undefined") {
  ReactGA.initialize(tracking_Id);
}

const inter = Montserrat({ subsets: ["latin"] });

const Home = () => {
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    // Only initialize if the window object is available (client-side)
    if (typeof window !== "undefined") {
      ReactGA.pageview(window.location.pathname);

      const handleRouteChange = (url) => {
        ReactGA.pageview(url);
      };

      router.events.on("routeChangeComplete", handleRouteChange);

      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router]);

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
