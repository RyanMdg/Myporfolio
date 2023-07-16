"use client";

import { GoPerson } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";
import { BiSolidContact } from "react-icons/bi";
import { useState } from "react";

const navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className=" py-8">
      <div className="  flex justify-between items-center mx-8">
        <img
          className=" min-[320px]:w-[10%] min-[350px]:w-[10%] min-[440px]:w-[7%] min-[550px]:w-[5%] min-[650px]:w-[3%] min-[800px]:w-[2%] "
          src="/logo.png"
          alt=""
        />
        {/* Hamburger Icon */}
        <div className="min-[750px]:hidden min-[320px]:ms-[19rem] min-[350px]:ms-[19rem] flex items-center">
          <button
            type="button"
            className="text-[#FFD700] text-[2rem]  focus:outline-none"
            onClick={toggleMenu}
          >
            &#8801;
          </button>
        </div>

        <ul className=" max-[750px]:hidden text-[#B5BFDF] gap-6 flex font-semibold">
          <a href="">
            <li className="flex items-center pb-1 gap-2 link link-underline link-underline-black  ">
              {" "}
              <GoPerson className=" text-[1.2rem] text-[#FFD700]" /> About me
            </li>
          </a>
          <a href="">
            <li className="flex items-center pb-1 gap-2 link link-underline link-underline-black  ">
              <CgWebsite className=" text-[1.2rem] text-[#FFD700]" /> Projects
            </li>
          </a>
          <a href="">
            <li className="flex items-center pb-1 gap-2 link link-underline link-underline-black  ">
              <BiSolidContact className=" text-[1.2rem] text-[#FFD700]" />{" "}
              Contact
            </li>
          </a>
        </ul>
      </div>

      {/* FOR MENU HAMBURGER */}
      <div
        className={`fixed top-0 left-[10rem] min-[320px]:left-[30%] h-full    w-[100%] bg-[#112240] z-50 transform duration-300 ease-in-out  ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          className="text-gray-500  text-2xl flex items-center justify-center relative top-4 right-4 focus:outline-none"
          onClick={toggleMenu}
        >
          <img
            className="w-[40%] ms-[12rem] object-contain flex-none"
            src="/brnd.png"
            alt=""
          />

          <div className=" absolute max-[750px]:left-[250%] max-[650px]:left-[230%] max-[550px]:left-[180%]  max-[450px]:left-[150%]   top-[.5rem] text-[#FFD700]  text-[1.5rem]">
            &#x2715;
          </div>
        </button>
        <ul className="flex text-[#B5BFDF] mt-10 min-[320px]:me-[8rem] min-[350px]:me-[8rem] min-[440px]:me-[8rem] min-[550px]:me-[9rem] min-[650px]:me-[12rem]  flex-col items-center me-[9rem]  p-2 uppercase gap-10  pt-12 ">
          <a href="">
            <li className="flex items-center font-semibold text-[1.3rem] pb-1 gap-2 link link-underline link-underline-black  ">
              {" "}
              <GoPerson className=" text-[2rem] text-[#FFD700]" /> About me
            </li>
          </a>
          <a href="">
            <li className="flex items-center text-[1.3rem] font-semibold pb-1 gap-2 link link-underline link-underline-black  ">
              <CgWebsite className=" text-[2rem] text-[#FFD700]" /> Projects
            </li>
          </a>
          <a href="">
            <li className="flex items-center font-semibold text-[1.3rem] pb-1 gap-2 link link-underline link-underline-black  ">
              <BiSolidContact className=" text-[2rem] text-[#FFD700]" /> Contact
            </li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
