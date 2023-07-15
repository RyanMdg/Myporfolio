import Aboutme from "./aboutme";

const Hero = () => {
  return (
    <div className="flex min-h-screen max-[320px]:ms-[1rem] max-[750px]:ms-[2rem] max-w-[70rem] mx-auto my-[5rem]">
      <div className="w-max">
        <h1 className="text-[#ffd900c7] animate-span text-[1.1rem]">
          Hi, my name is
        </h1>
        <h1 className="animate-typing my-4 uppercase overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-[#B5BFDF] font-bold">
          Ryan De Guia.
        </h1>
        <h1 className="text-5xl transition-all mb-5  text-[#8892B0] font-bold animate-span ">
          I build things for the web.
        </h1>
        <p className="  text-[#8892B0] pr-[30rem] min-[320px]:pr-[3rem] mb-10">
          I'm a self-taught front-end developer, and I'm passionate about
          creating engaging and intuitive web experiences. With a keen eye for
          design and a strong understanding of web technologies.
        </p>
        <button className="group relative h-12 w-50 px-5 border border-[#cbb018c7] overflow-hidden rounded-lg bg-[#0A192F] text-lg shadow">
          <div className="absolute inset-0 w-2 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full" />
          <span className="relative text-[#8892B0] font-semibold group-hover:text-[#18191c]">
            Check out my projects!
          </span>
        </button>
        <Aboutme />
      </div>
    </div>
  );
};

export default Hero;
