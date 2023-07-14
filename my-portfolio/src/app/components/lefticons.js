import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";

const icons = () => {
  return (
    <div className=" max-[700px]:hidden ms-2">
      <div className=" text-[1.8rem] flex ms-[.1rem] flex-col gap-4 p-2 fixed justify-center h-screen">
        <AiOutlineGithub className=" text-[#B5BFDF]" />
        <AiOutlineInstagram className=" text-[#B5BFDF]" />
        <AiOutlineFacebook className=" text-[#B5BFDF]" />
        <AiOutlineLinkedin className=" text-[#B5BFDF]" />
      </div>
      <div className=" relative top-[38rem] right-[8.1rem]">
        <hr className=" fixed rotate-90 mt-4 w-[20%]  " />
      </div>
    </div>
  );
};

export default icons;
