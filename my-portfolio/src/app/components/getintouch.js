const getintouch = () => {
  return (
    <div className=" flex flex-col items-center justify-center text-center mt-28">
      <span className="text-[#ffd900c7]">What's next?</span>
      <h1 className="  text-[#B5BFDF] font-bold text-[2.5rem]">Get In Touch</h1>
      <p className=" px-[10rem] max-md:px-[1rem] mb-10 mt-2 text-[#8892B0] font-medium">
        After years of dedication and learning, Im now equipped with a wealth of
        knowledge and skills. Now, it's time to put everything i learned into
        action. i want to have a company that will jump-start my career in the
        tech industry. Whether you have a project or job to offer or just want
        to say hi, I’ll try my best to get back to you!
      </p>

      <a href="/form">
        <button className="group relative h-12 w-50 px-5 border border-[#cbb018c7] overflow-hidden rounded-sm bg-[#0A192F] text-lg shadow">
          <div className="absolute inset-0 w-2 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full" />
          <span className="relative text-[#8892B0] font-semibold group-hover:text-[#18191c]">
            Say Hello
          </span>
        </button>
      </a>
    </div>
  );
};

export default getintouch;
