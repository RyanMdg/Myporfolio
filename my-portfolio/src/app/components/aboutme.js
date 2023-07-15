import { GoPerson } from "react-icons/go";

const aboutme = () => {
  return (
    <div>
      <h1 className=" flex text-[#8892B0] text-[1.5rem] font-semibold gap-2 items-center mt-[9rem]">
        {" "}
        <GoPerson className=" text-[1.7rem] text-[#FFD700]" />
        About me
        <hr className="  w-[40%]  bg-[#8892B0] opacity-30" />
      </h1>
    </div>
  );
};

export default aboutme;
