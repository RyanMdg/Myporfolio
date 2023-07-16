import { GoPerson } from "react-icons/go";
import { BiRightArrow } from "react-icons/bi";
const aboutme = () => {
  return (
    <div>
      <h1 className=" flex text-[#8892b0ae] text-[2rem] font-bold gap-2 items-center mt-[9rem]">
        {" "}
        <GoPerson className=" text-[2rem] text-[#FFD700]" />
        About me
        <hr className="  w-[40%]  bg-[#8892B0] opacity-30" />
      </h1>
      <div className=" mt-10 grid gap-10  md:grid-cols-2">
        <div>
          <p className="text-[#8892B0] leading-7 font-semibold">
            Hello! My name is Ryan De Guia and I enjoy creating things that live
            on the internet.As a passionate and dedicated Front-End Web
            Developer, I specialize in building modern and responsive web
            applications. With a strong foundation in HTML, CSS, and JavaScript,
            I am skilled in utilizing CSS frameworks like Tailwind CSS and
            Bootstrap to create visually appealing and user-friendly interfaces.
            I have a good understanding of React.js for building dynamic and
            interactive user interfaces. Additionally, I have basic knowledge in
            backend development using Node.js with Express framework and MongoDB
            with Mongoose framework..
          </p>
          <div className="flex gap-[7rem] mt-5">
            <ul className=" flex flex-col gap-1 text-[#8892B0] ">
              <li className="flex gap-2 items-center">
                <BiRightArrow className="text-[#ffd9009e]" />
                Html
              </li>
              <li className="flex gap-2 items-center">
                <BiRightArrow className="text-[#ffd9009e]" />
                Css
              </li>
              <li className="flex gap-2 items-center">
                <BiRightArrow className="text-[#ffd9009e]" />
                Tailwind
              </li>
              <li className="flex gap-2 items-center">
                <BiRightArrow className="text-[#ffd9009e]" />
                Javascript
              </li>
            </ul>
            <ul className=" flex flex-col gap-1 text-[#8892B0] ">
              <li className="flex gap-2 items-center">
                <BiRightArrow className="text-[#ffd9009e]" />
                Reactjs
              </li>
              <li className="flex gap-2 items-center">
                <BiRightArrow className="text-[#ffd9009e]" />
                Node.js
              </li>
              <li className="flex gap-2 items-center">
                <BiRightArrow className="text-[#ffd9009e]" />
                Mongodb
              </li>
              <li className="flex gap-2 items-center">
                <BiRightArrow className="text-[#ffd9009e]" />
                Bootstrap
              </li>
            </ul>
          </div>
        </div>
        <figure className=" relative ms-20 ">
          <div class="relative">
            <img
              class="  z-40 filter w-[60%] rounded-md"
              src="/grad.jpg"
              alt=""
            />

            <div class="absolute  z-50 inset-0 rounded-md w-[60%] hover:bg-transparent transition duration-300 bg-[#ffd90039] bg-opacity-30"></div>
          </div>
          <div class="absolute z-[-1] top-10 left-5 inset-0 rounded-md max-[700px]:h-[90%] w-[60%] h-[60%] border-2 border-[#ffd900] bg-opacity-30"></div>
        </figure>
      </div>
    </div>
  );
};

export default aboutme;
