"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { SignOut, SignIn } from "./LogButtons";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const { data: session, status } = useSession();

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <nav
      className={
        shadow
          ? "fixed w-full h-15 shadow-md shadow-gray-400 z-[100]"
          : "fixed w-full h-15 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 md:px-16 bg-slate-900">
        <Image width="160" height="100" src="/assets/navLogo.png" />

        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#home">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#contact">Contact</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              {session ? <SignOut /> : <SignIn />}
            </li>
          </ul>
        </div>

        <div onClick={handleNav} className="md:hidden flex">
          <div className="px-2">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-white/30" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hiddedn fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-900 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <h2 className="p-2 text-cyan-200">AC</h2>
              <div
                onClick={handleNav}
                className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90] py-4">
                Let's build something remarkable together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <li className="text-sm py-4" onClick={handleNav}>
                <Link href="/#home">Home</Link>
              </li>
              <li className="text-sm py-4" onClick={handleNav}>
                <Link href="/#about">About</Link>
              </li>
              <li className="text-sm py-4" onClick={handleNav}>
                <Link href="/#skills">Skills</Link>
              </li>
              <li className="text-sm py-4" onClick={handleNav}>
                <Link href="/#projects">Projects</Link>
              </li>
              <li className="text-sm py-4" onClick={handleNav}>
                <Link href="/#contact">Contact</Link>
              </li>
              <li className="ml-10 text-sm uppercase hover:border-b">
                {session ? <SignOut /> : <SignIn />}
              </li>
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-cyan-200">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-105">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-105">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-105">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-105">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
