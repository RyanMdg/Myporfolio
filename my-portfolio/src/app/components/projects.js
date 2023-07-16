import { CgWebsite } from "react-icons/cg";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import Project2 from "./project2";
import Project3 from "./project3";

const projects = () => {
  return (
    <div data-aos="fade-up" className="max-[1000px]:hidden">
      <h1 className=" flex mb-12 text-[#CCD6F6] text-[2rem] font-bold gap-2 items-center mt-[9rem]">
        {" "}
        <CgWebsite className=" text-[2rem] text-[#FFD700]" /> Projects
        <hr className="  w-[40%]  bg-[#8892B0] opacity-30" />
      </h1>

      <div className=" relative grid grid-cols-2">
        <div class="relative">
          <img
            class="  z-40 filter w-[100%] rounded-md"
            src="/mardee-mockup.png"
            alt=""
          />

          <a href="https://coachmardee.netlify.app/">
            {" "}
            <div class="absolute  z-50 inset-0 rounded-md w-[100%] hover:bg-transparent transition duration-300 bg-[#ffd9001c] bg-opacity-30"></div>
          </a>
        </div>
        <div className=" text-end me-10 mt-16">
          <span className=" text-[#ffd900]">Featured Project</span>
          <h1 className=" text-[2rem] font-bold text-[#CCD6F6]">
            F.A Personal Website
          </h1>
          <p className=" py-3 px-5 pl-20 left-[32rem] right-10 mt-5  z-50 absolute text-[#8892B0] bg-[#112240] rounded-md shadow-lg hover:shadow-xl duration-300">
            A financial agent landing page is a webpage designed to introduce
            and attract potential clients to the services offered by a financial
            agent or agency.
          </p>
          <ul className=" flex gap-8 text-[#8892B0] mt-[8rem] justify-end font-semibold ">
            <li>Vs Code</li>
            <li>Html</li>
            <li>Css</li>
            <li>Javascript</li>
          </ul>
          <span className=" flex justify-end gap-4 mt-3">
            <a href="https://github.com/RyanMdg/PrulifeUKProject">
              <AiOutlineGithub className=" hover:text-[#ffd900] text-[1.7rem] text-[#B5BFDF]" />
            </a>
            <a href="https://coachmardee.netlify.app/">
              <BiLinkExternal className="  hover:text-[#ffd900] text-[1.7rem] text-[#B5BFDF]" />
            </a>
          </span>
        </div>
      </div>
      <Project2 />
      <Project3 />
    </div>
  );
};

export default projects;
