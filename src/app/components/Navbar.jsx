"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "../../../assets/assets.js";
import Link from "next/link.js";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(0)";
    console.log("menu opened");
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
    console.log("menu closed");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <div>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full"></Image>
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : " "
        }`}
      >
        <a href="#top">
          <Image
            src={assets.logo}
            className="w-32 cursor-pointer rounded mr-14"
            alt="abc"
          ></Image>
        </a>
        <ul
          className={`hidden md:flex items-center lg: gap-20 rounded-full px-12 py-3 ${
            isScroll ? "  " : " bg-white bg-opacity-50"
          } `}
        >
          <li>
            <Link href="" className="">
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link href="#about">About</Link>
          </li>
          <li>
            {" "}
            <Link href="">My Work</Link>
          </li>
          <li>
            {" "}
            <Link href="">Contact</Link>
          </li>
          <li className="inline-block px-4 py-2 bg-yellow-100   text-yellow-800 rounded-full animate-pulse">
            <Link href="#">🚧 Work in Progress</Link>
          </li>
        </ul>

        <div className="flex item-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="" className="w-6"></Image>
          </button>
          <a
            href=""
            className="hidden lg:flex item-center gap-3 px-10 py-3 border border-gray-500 rounded-full ml-4"
          >
            Email Me{" "}
            <Image src={assets.arrow_icon} alt="" className="h-5 w-5"></Image>
          </a>
          <button>
            <Image
              src={assets.menu_black}
              alt=""
              className="md:hidden lg:hidden w-8 ml-2"
              onClick={openMenu}
            ></Image>
          </button>
        </div>
        {/* {mobile} */}
        <ul
          ref={sideMenuRef}
          className=" absolute transform flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-gray-100 transition-transform duration-500"
        >
          <Image
            alt=""
            src={assets.close_black}
            className="absolute top-4 right-4 w-6 h-6 cursor-pointer"
            onClick={closeMenu}
          />
          <li>
            <Link href="" className="" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link href="#about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link href="" onClick={closeMenu}>
              My Work
            </Link>
          </li>
          <li>
            {" "}
            <Link href="" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li>
            {" "}
            <Link href="" onClick={closeMenu}>
              Work in Progress
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
