"use client";
import React, { useState } from "react";
import Image from "next/image";
import Bell from "../icons/Vector (5).png";
import Search from "../icons/Search icon.png";
import Admin from "../icons/Mask Group.png";
import Rev from "../icons/Vector (4).png";
import Group from "../icons/Vector (6).png";
import Like from "../icons/Vector (1).png";
import Trans from "../icons/total_transactions_icon.png";
import {
  DashBoardIcon,
  TransactionsIcon,
  SchedulesIcon,
  UsersIcon,
  SettingsIcon,
} from "../component/Buttons";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LineChartContainer from "../component/LineChartContainer";
import Card from "../component/Card";
import Cards from "../component/Cards";
const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  if (session.status === "unauthenticated") {
    router.push("/");
  }
  console.log(session, "this is ses");
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" flex   bg-[#F5F5F5] min-h-screen gap-x-2 lg:gap-x-[20px] ">
      <div className="w-[240px] fixed top-0  left-0 z-50 hidden md:block ">
        <div className="  relative top-[20px]  left-[40px]  bg-black text-white rounded-[30px]  ">
          <div className="h-full flex flex-col ml-12  py-12 ">
            <h1 className="text-4xl font-[700]">Board.</h1>
            <ul className="pt-16 space-y-10">
              <li className="flex  space-x-6 text-[18px] ">
                <DashBoardIcon />
                <span> Dashboard</span>
              </li>
              <li className="flex  text-white space-x-5 text-[18px]  ">
                <TransactionsIcon />
                <span>Transactions</span>
              </li>
              <li className="flex  space-x-6  text-[18px] ">
                <SchedulesIcon />
                <span>Schedules</span>
              </li>
              <li className="flex  space-x-6 text-[18px] ">
                <UsersIcon />
                <span> Users</span>
              </li>
              <li className="flex  space-x-6 text-[18px] ">
                <SettingsIcon />
                <span>Settings</span>
              </li>
            </ul>
            <div className="pt-28 space-y-5">
              <p className="text-[14px]">Help</p>
              <p className="text-[14px]">Contact Us</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? " md:hidden fixed left-0 top-0 w-full h-screen z-50 bg-black"
            : ""
        }
      >
        <div
          className={
            nav
              ? "   fixed left-0 top-0  w-[75%] sm:w-[60%] md:w-[45%] ml-20 h-screen  p-10 "
              : "fixed left-[-100%] top-0  p-10 "
          }
        >
          <div className="flex w-full items-center justify-between ">
            <h1 className="text-4xl text-white font-[700]">Board.</h1>

            <button
              className="rounded-full bg-white cursor-pointer p-3"
              onClick={handleNav}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>
          <ul className="pt-16 text-white space-y-10">
            <li className="flex  space-x-6 text-[18px] ">
              <DashBoardIcon />
              <span> Dashboard</span>
            </li>
            <li className="flex space-x-5 text-[18px]  ">
              <TransactionsIcon />
              <span>Transactions</span>
            </li>
            <li className="flex  space-x-6  text-[18px] ">
              <SchedulesIcon />
              <span>Schedules</span>
            </li>
            <li className="flex  space-x-6 text-[18px] ">
              <UsersIcon />
              <span> Users</span>
            </li>
            <li className="flex  space-x-6 text-[18px] ">
              <SettingsIcon />
              <span>Settings</span>
            </li>
          </ul>
          <div className="pt-28 space-y-5">
            <p className="text-[14px] text-white">Help</p>
            <p className="text-[14px] text-white">Contact Us</p>
          </div>
        </div>
      </div>

      <div className="   flex  flex-col  w-full md:ml-[250px]">
        <section className="  w-full h-min relative top-[40px] sm:left-[20px] px-10">
          <nav className="flex justify-between items-center">
            <h2 className="hidden md:block font-[700] text-[24px]">
              Dashboard
            </h2>
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
            <div className="flex items-center space-x-6">
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
              <button onClick={() => signOut("google")}>
                <Image src={Admin} alt="admin" />
              </button>
            </div>
          </nav>
        </section>
        <div className="relative top-[80px] sm:left-[20px] px-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-[#DDEFE0] rounded-xl px-8 py-4 space-y-4">
              <div className="flex justify-end">
                <Image src={Rev} alt="revnue" />
              </div>
              <div className="flex flex-col flex-wrap">
                <h2 className="text-[14px]">Total Revenues</h2>
                <p className="sm:text-[24px] font-[700]">$2,129,430</p>
              </div>
            </div>
            <div className="bg-[#F4ECDD] rounded-xl px-8 py-4 space-y-4">
              <div className="flex justify-end">
                <Image src={Trans} alt="revnue" />
              </div>
              <div>
                <h2 className="text-[14px]">Total Transactions</h2>
                <p className="sm:text-[24px] font-[700]">1,520</p>
              </div>
            </div>
            <div className="bg-[#EFDADA] rounded-xl px-8 py-4 space-y-4">
              <div className="flex justify-end">
                <Image src={Like} alt="revnue" />
              </div>
              <div>
                <h2 className="text-[14px]">Total Likes</h2>
                <p className="sm:text-[24px] font-[700]">9,721</p>
              </div>
            </div>
            <div className="bg-[#DEE0EF] rounded-xl px-8 py-4 space-y-4">
              <div className="flex justify-end">
                <Image src={Group} alt="revnue" />
              </div>
              <div>
                <h2 className="text-[14px]">Total Users</h2>
                <p className="sm:text-[24px] font-[700]">892</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 relative sm:left-[20px] px-10">
          <LineChartContainer />
        </div>
        <div className="mt-16 relative sm:left-[20px] px-10 pb-5 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <Card />
            <div className="bg-white rounded-[20px] py-[30px] lg:px-[40px] px-8 space-y-[20px]">
              <div className="flex flex-col space-y-7 ">
                <div className="flex justify-between items-center">
                  <h1 className="text-[18px] font-[700]">Today schedule</h1>
                  <p className="text-[12px]">See All &gt;</p>
                </div>
                <div className="border-[#9BDD7C] space-y-[5px]  border-l-[5px] pl-5">
                  <p className="text-[14px] font-[700]">
                    Meeting with suppliers from Kuta Bali
                  </p>
                  <p className="text-[12px]">14.00-15.00</p>
                  <p className="text-[12px]">at Sunset Road,Kuta,Bali</p>
                </div>
                <div className="border-[#6972C3] space-y-[5px]  border-l-[5px] pl-5">
                  <p className="text-[14px] font-[700]">
                    Check operation at Giga Factory 1
                  </p>
                  <p className="text-[12px]">18.00-20.00</p>
                  <p className="text-[12px]">at Central Jakarta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
