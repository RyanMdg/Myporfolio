"use client";
import "../globals.css";
import { useState } from "react";

const navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className=" py-4">
      <div className="  flex justify-between items-center mx-8">
        <img
          className=" w-[2%] min-[320px]:w-[10%] max-[750px]:w-[4%]"
          src="/logo.png"
          alt=""
        />
        {/* Hamburger Icon */}
        <div className="min-[750px]:hidden flex items-center">
          <button
            type="button"
            className="text-[#5FF4D2] text-[2rem]  focus:outline-none"
            onClick={toggleMenu}
          >
            &#8801;
          </button>
        </div>

        <ul className=" max-[750px]:hidden text-[#B5BFDF] gap-4 flex font-semibold">
          <a href="">
            <li>
              {" "}
              <span className=" text-[#5FF4D2] pe-2">01.</span>About
            </li>
          </a>
          <a href="">
            <li>
              <span className=" text-[#5FF4D2] pe-2">02.</span>Projects
            </li>
          </a>
          <a href="">
            <li>
              <span className=" text-[#5FF4D2] pe-2">03.</span>Contact
            </li>
          </a>
        </ul>
      </div>

      {/* FOR MENU HAMBURGER */}
      <div
        className={`fixed top-0 left-[10rem] min-[320px]:left-[30%]   h-screen w-[100%] bg-[#112240] z-50 transform duration-300 ease-in-out  ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          className="text-gray-500 screen2:text-[2rem] text-2xl flex items-center justify-center relative top-4 right-4 focus:outline-none"
          onClick={toggleMenu}
        >
          <img
            className="w-[40%] ms-[12rem]  screen2:w-[65%] screen3:w-[45%] object-contain flex-none"
            src="/brnd.png"
            alt=""
          />

          <div className=" absolute left-[150%] min-[320px]:left-[98%] min-[350px]:left-[120%] min-[440px]:left-[150%] min-[550px]:left-[190%] min-[650px]:left-[225%] top-[.5rem] text-[#5FF4D2]  text-[1.5rem]">
            &#x2715;
          </div>
        </button>
        <ul className="flex text-[#B5BFDF] min-[320px]:me-[5rem]  flex-col items-center me-[9rem]  p-2 uppercase gap-10  pt-12">
          <a href="">
            <li className=" text-center">
              {" "}
              <span className=" text-[#5FF4D2] pe-2">01.</span> <br />
              About
            </li>
          </a>
          <a href="">
            <li className=" text-center">
              {" "}
              <span className=" text-[#5FF4D2] pe-2">02.</span> <br />
              Projects
            </li>
          </a>
          <a href="">
            <li className=" text-center">
              {" "}
              <span className=" text-[#5FF4D2] pe-2">03.</span> <br />
              Contact
            </li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
