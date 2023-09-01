import React from "react";
import Rev from "../icons/Vector (4).png";
import Group from "../icons/Vector (6).png";
import Like from "../icons/Vector (1).png";
import Trans from "../icons/total_transactions_icon.png";
import Image from "next/image";
const Cards = () => {
  return (
    <div className="relative top-[80px] sm:left-[20px] px-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="bg-[#DDEFE0] rounded-xl px-8 py-4 space-y-4">
          <div className="flex justify-end">
            <Image src={Rev} alt="revnue" />
          </div>
          <div className="flex flex-col flex-wrap">
            <h2 className="text-[14px]">Total Revenues</h2>
            <p className="text-[24px] font-[700]">$2,129,430</p>
          </div>
        </div>
        <div className="bg-[#F4ECDD] rounded-xl px-8 py-4 space-y-4">
          <div className="flex justify-end">
            <Image src={Trans} alt="revnue" />
          </div>
          <div>
            <h2 className="text-[14px]">Total Transactions</h2>
            <p className="text-[24px] font-[700]">1,520</p>
          </div>
        </div>
        <div className="bg-[#EFDADA] rounded-xl px-8 py-4 space-y-4">
          <div className="flex justify-end">
            <Image src={Like} alt="revnue" />
          </div>
          <div>
            <h2 className="text-[14px]">Total Likes</h2>
            <p className="text-[24px] font-[700]">9,721</p>
          </div>
        </div>
        <div className="bg-[#DEE0EF] rounded-xl px-8 py-4 space-y-4">
          <div className="flex justify-end">
            <Image src={Group} alt="revnue" />
          </div>
          <div>
            <h2 className="text-[14px]">Total Users</h2>
            <p className="text-[24px] font-[700]">892</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
