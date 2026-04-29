import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <section
      id="home"
      className="w-full h-screen text-left border-t-2 border-gray-400"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="mx-4 md:mx-16">
          <div className="rounded-full shadow-md shadow-gray-400 p-6 mb-2 cursor-pointer hover:scale-110 ease-in duration-10">
            <a
              href="https://www.linkedin.com/in/airishchristian"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="rounded-full shadow-md shadow-gray-400 p-6 mb-2 cursor-pointer hover:scale-110 ease-in duration-10">
            <a
              href="https://github.com/AiriChr"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithub />
            </a>
          </div>
          <div className="rounded-full shadow-md shadow-gray-400 p-6 mb-2 cursor-pointer hover:scale-110 ease-in duration-10">
            <AiOutlineMail />
          </div>
          <div className="rounded-full shadow-md shadow-gray-400 p-6 mb-2 cursor-pointer hover:scale-110 ease-in duration-10">
            <BsFillPersonLinesFill />
          </div>
        </div>

        <div>
          <p className="uppercase text-sm tracking-widest text-gray-400">
            LET'S WORK TOGETHER
          </p>
          <h1 className="py-4 text-gray-400">
            Hi, I'm <span className="text-cyan-200">Airish Christian</span>
          </h1>
          <h1 className="py-2 text-gray-400">Tech Enthusiast</h1>
          <p className="py-4 text-gray-400 max-w-70% m-auto">
            I am a seasoned Electronics Engineer who specializes in
            Telecommunications, Data Analysis and Software Development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;
