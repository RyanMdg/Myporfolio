import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";

const icons = () => {
  return (
    <div className=" max-[750px]:hidden ms-2">
      <div className=" text-[1.8rem] flex ms-[.1rem] flex-col gap-4 p-2 fixed justify-center h-screen">
        <a href="https://github.com/RyanMdg" className="  ">
          <AiOutlineGithub className=" hover:text-[#ffd900c7] duration-300 text-[#B5BFDF]" />
        </a>
        <a href="" className="  ">
          <AiOutlineInstagram className="  hover:text-[#ffd900c7] duration-300 text-[#B5BFDF]" />
        </a>
        <a href="https://www.facebook.com/ryan.deguia.94/" className="  ">
          <AiOutlineFacebook className="  hover:text-[#ffd900c7] duration-300 text-[#B5BFDF]" />
        </a>
        <a href="https://www.linkedin.com/in/ryan-christopher-de-guia-267845266/">
          <AiOutlineLinkedin className="  hover:text-[#ffd900c7] duration-300 text-[#B5BFDF]" />
        </a>
      </div>
      <div className=" relative top-[38rem] right-[8.1rem]">
        <hr className=" fixed rotate-90 mt-4 w-[20%]  " />
      </div>
    </div>
  );
};

export default icons;
