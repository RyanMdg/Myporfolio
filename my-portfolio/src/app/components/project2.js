import { CgWebsite } from "react-icons/cg";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

const projects = () => {
  return (
    <div data-aos="fade-up" className=" mt-20 max-[1000px]:hidden">
      <div className=" relative grid grid-cols-2">
        <div className=" text-start me-10 mt-16">
          <span className=" text-[#ffd900]">Featured Project</span>
          <h1 className=" text-[2rem] font-bold pr-10 text-[#CCD6F6]">
            Ecommerce Watch website
          </h1>
          <p className=" py-3 px-5 right-[32rem] mt-5  z-50 absolute text-[#8892B0] bg-[#112240] rounded-md shadow-lg hover:shadow-xl duration-300">
            A luxury watch e-commerce website is an online platform dedicated to
            selling high-end, luxury watches to customers. ensuring they find
            the perfect statement piece and timeless style.
          </p>
          <ul className=" flex gap-8 text-[#8892B0] mt-[8rem] font-semibold ">
            <li>Vs Code</li>
            <li>Html</li>
            <li>Boostrap</li>
            <li>Javascript</li>
          </ul>
          <span className=" flex gap-4 mt-3">
            <a href="https://github.com/RyanMdg/mp1-v2.1">
              <AiOutlineGithub className=" hover:text-[#ffd900] text-[1.7rem] text-[#B5BFDF]" />
            </a>
            <a href="https://luxwatch.netlify.app/?fbclid=IwAR0QNI_QUiCrc2gkPhPAwm-aplp5uHgI_K7OHhuh3hbXrRSqtOEeSBqBpO4">
              <BiLinkExternal className="hover:text-[#ffd900] text-[1.7rem] text-[#B5BFDF]" />
            </a>
          </span>
        </div>
        <div class="relative overflow-hidden">
          <a href="https://luxwatch.netlify.app/?fbclid=IwAR0QNI_QUiCrc2gkPhPAwm-aplp5uHgI_K7OHhuh3hbXrRSqtOEeSBqBpO4">
            <img
              class=" duration-300 hover:scale-110 z-40 filter w-[100%] rounded-md"
              src="/luxwatch-mockup.png"
              alt=""
            />
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default projects;
