"use client";
import Image from "next/image";

import React, { useState } from "react";
import Bell from "../../icons/Vector (5).png";
import Search from "../../icons/Search icon.png";
import Admin from "../../icons/Mask Group.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <section className=" container  w-full h-min relative top-[40px] sm:left-[20px] px-10">
      <nav className="flex justify-between items-center">
        <h2 className="hidden md:block font-[700] text-[24px]">Dashboard</h2>
        <button className="md:hidden" onClick={handleNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
          </svg>
        </button>
        <div className="flex items-center space-x-5">
          <div className="flex items-center   relative ">
            <input
              className="outline-none w-40 md:w-[180px]  bg-white h-[30px] rounded-[10px] px-2 text-[14px]"
              placeholder="search..."
            />
            <span className="text-red-500 absolute right-2">
              <Image src={Search} alt="search" />
            </span>
          </div>
          <div>
            <Image src={Bell} alt="bell" />
          </div>
          <div>
            <Image src={Admin} alt="admin" />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
