"use client";

import React from "react";
import { assets, infoList, toolsData } from "../../../assets/assets";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full px-[8%] py-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
        About Me
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="w-64 sm:w-80 rounded-xl overflow-hidden">
          <Image
            src={assets.profile_img}
            alt="Profile"
            className="w-full h-auto object-cover rounded-full shadow-sm"
          />
        </div>

        <div className="flex-1 max-w-3xl">
          <p className="text-base md:text-lg text-gray-700 mb-10 leading-relaxed">
            As a computer engineering student, I possess a strong understanding
            of computer systems. I’m also skilled in Machine Learning,
            JavaScript, and React.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="flex items-start gap-4 border-l-4 border-black pl-4 p-4 rounded-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md hover:bg-gray-50"
              >
                <Image
                  src={icon}
                  alt={title}
                  className="w-8 h-8 object-contain mt-1"
                />
                <div>
                  <h3 className="text-lg font-medium mb-1">{title}</h3>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-center mb-6">
              I am familiar with:
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {toolsData.map((tool, index) => (
                <Image
                  key={index}
                  src={tool}
                  alt={`Tool ${index}`}
                  className="w-12 h-12 object-contain opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
