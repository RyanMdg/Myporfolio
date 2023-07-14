const Hero = () => {
  return (
    <div className="flex min-h-screen max-[320px]:ms-[1rem] max-w-[70rem] mx-auto my-[5rem]">
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
        <p className="  text-[#8892B0] pr-[30rem] min-[320px]:pr-[1rem] ">
          I'm a self-taught front-end developer, and I'm passionate about
          creating engaging and intuitive web experiences. With a keen eye for
          design and a strong understanding of web technologies.
        </p>
      </div>
    </div>
  );
};

export default Hero;
