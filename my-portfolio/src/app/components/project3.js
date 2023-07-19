import { CgWebsite } from "react-icons/cg";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

const projects = () => {
  return (
    <div data-aos="fade-up" className="max-[1000px]:hidden mt-20">
      <div className=" relative grid grid-cols-2">
        <div class="relative overflow-hidden">
          <a href="https://thegroceryhubmp2.vercel.app/">
            <img
              class=" duration-300 hover:scale-110 z-40 filter w-[100%] rounded-md"
              src="/groceryhub-mockup.png"
              alt=""
            />
          </a>{" "}
        </div>
        <div className=" text-end me-10 mt-16">
          <span className=" text-[#ffd900]">Featured Project</span>
          <h1 className=" text-[2rem] font-bold text-[#CCD6F6]">
            Grocery Shop
          </h1>
          <p className=" py-3 px-5 pl-20 left-[32rem] right-10 mt-5  z-50 absolute text-[#8892B0] bg-[#112240] rounded-md shadow-lg hover:shadow-xl duration-300">
            The grocery hub website is a dynamic and user-friendly platform
            designed to provide a seamless online shopping experience for
            customers.Not Responsive.
          </p>
          <ul className=" flex gap-8 text-[#8892B0] mt-[8rem] justify-end font-semibold ">
            <li>Vs Code</li>
            <li>React</li>
            <li>Tailwind</li>
            <li>Node</li>
            <li>MongoDb</li>
          </ul>
          <span className=" flex justify-end gap-4 mt-3">
            <a href="https://github.com/RyanMdg/Mp-2">
              <AiOutlineGithub className=" hover:text-[#ffd900] text-[1.7rem] text-[#B5BFDF]" />
            </a>
            <a href="https://thegroceryhubmp2.vercel.app/">
              <BiLinkExternal className="  hover:text-[#ffd900] text-[1.7rem] text-[#B5BFDF]" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default projects;
