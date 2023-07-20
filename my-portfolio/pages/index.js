import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../src/app/globals.css";
import Navbar from "../src/app/components/navbar";
import Lefticons from "../src/app/components/lefticons";
import Righticon from "../src/app/components/righticon";
import Hero from "../src/app/components/hero";
import { Montserrat } from "next/font/google";
import Footer from "../src/app/components/footer";
import ReactGA from "react-ga";
import { GoPerson } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";
import { BiSolidContact } from "react-icons/bi";

const tracking_Id = "G-G95PF7PFS8";

if (typeof window !== "undefined") {
  ReactGA.initialize(tracking_Id);
}

const inter = Montserrat({ subsets: ["latin"] });

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [showNav, setShowNav] = useState(false);

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

  const toggleNav = () => {
    setShowNav((prevState) => !prevState);
  };

  return (
    <main className={inter.className}>
      {loading ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="relative">
            <img className="rotate w-[50%]" src="/logo.png" alt="" />
            <div className="loader-line"></div>
          </div>
        </div>
      ) : (
        <>
          <div className={`container ${showNav ? "show-nav" : ""}`}>
            <div className="circle-container">
              <div className="circle">
                <button onClick={toggleNav} id="close">
                  <i className="fas fa-times text-[#222326]" />
                </button>
                <button onClick={toggleNav} id="open">
                  <i className="fas fa-bars text-[#222326]" />
                </button>
              </div>
            </div>
            <div className="content">
              <div className="max-w-[96%] flex justify-between">
                <Lefticons />
                <Righticon />
              </div>
              <Hero />
              <Footer />
            </div>
          </div>
          <nav>
            <nav>
              <ul>
                <li>
                  <a
                    href=""
                    className=" pb-2 link link-underline link-underline-black"
                  >
                    <i class="fas fa-home"></i> Home
                  </a>
                </li>

                <li>
                  <a
                    className=" pb-2 link link-underline link-underline-black"
                    href=""
                  >
                    <i class="fas fa-user-alt"></i> About
                  </a>
                </li>
                <li>
                  <a
                    className=" pb-2 link link-underline link-underline-black"
                    href=""
                  >
                    <i class="fas fa-envelope "></i> Contact
                  </a>
                </li>
                <li className=" ms-16 ">
                  <a
                    href="https://drive.google.com/file/d/12YuGPhRaG68Aci7JPbVa9mtcFE9fznHp/view?usp=drive_link"
                    className=" border border-[#FFD700] px-3 py-2 rounded-md"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
          </nav>
        </>
      )}
    </main>
  );
};

export default Home;
