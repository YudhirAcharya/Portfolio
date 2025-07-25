"use client";

import React from "react";
import Image from "next/image";
import { assets } from "../../../assets/assets.js";
import Link from "next/link.js";

const Header = () => {
  return (
    <div className="w-11/12 max-w-6xl mx-auto h-screen flex items-center justify-center ">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-14">
        <Image
          src={assets.user_image}
          alt="Yudhir Acharya"
          className="w-64 h-auto rounded-xl object-cover shadow-sm"
        />

        <div className="text-center md:text-left mt-10">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Hello! I am Yudhir Acharya.
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            I am a developer. I do JavaScript, React.js, Next.js, ML, etc.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              target="_blank"
              className="px-8 py-3 border border-black text-black text-base rounded-full hover:bg-black hover:text-white transition duration-300"
            >
              GitHub
            </a>
            <a
              href="#"
              target="_blank"
              className="px-8 py-3 border border-black text-black text-base rounded-full hover:bg-black hover:text-white transition duration-300 flex gap-3"
            >
              Resume
              <Image src={assets.download_icon} className="w-5"></Image>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
