"use client";

import { useState } from "react";
import LineChartComponent from "./LineChartComponent";
const lineChartData = {
  "May - June 2021": {
    user: [250, 300, 200, 400, 350],
    guest: [300, 250, 200, 300, 450],
  },
  "June - July 2021": {
    user: [300, 400, 250, 450, 300],
    guest: [350, 250, 300, 200, 400],
  },
  "July - Aug 2021": {
    user: [400, 300, 250, 500, 350],
    guest: [250, 350, 400, 500, 250],
  },
  "Aug - Sep 2021": {
    user: [350, 200, 400, 450, 300],
    guest: [300, 250, 450, 350, 200],
  },
  "Sept - Oct 2021": {
    user: [250, 350, 300, 500, 400],
    guest: [400, 300, 500, 250, 350],
  },
  "Nov - Dec 2021": {
    user: [400, 500, 350, 450, 250],
    guest: [500, 250, 350, 400, 300],
  },
};

const LineChartContainer = () => {
  const [month, setMonth] = useState("May - June 2021");

  const selectHandler = (e) => {
    setMonth(e.target.value);
  };
  return (
    <div className=" bg-white rounded-[20px] py-[30px] lg:px-[40px] px-8 ">
      <div className=" flex justify-between items-center ">
        <div className="">
          <h4 className=" text-lg font-bold ">Activities</h4>
          <button
            aria-label="Select Month"
            className=" -ml-[3px] text-xs text-[#858585] flex justify-center items-center space-x-2 "
          >
            <select
              onChange={selectHandler}
              className=" outline-none"
              value={month}
            >
              {Object.keys(lineChartData).map((ele, index) => {
                return (
                  <option key={index} value={ele}>
                    {ele}
                  </option>
                );
              })}
            </select>
          </button>
        </div>
        <div className=" flex justify-center items-center space-x-4 md:space-x-[35px] font-lato text-sm ">
          <h5 className=" flex justify-center items-center space-x-[10px] ">
            {" "}
            <span className=" w-[10px] h-[10px] bg-[#E9A0A0] rounded-full "></span>
            <span>Guest</span>
          </h5>
          <h5 className=" flex justify-center items-center space-x-[10px] ">
            {" "}
            <span className=" w-[10px] h-[10px] bg-[#98D89E] rounded-full "></span>
            <span>User</span>
          </h5>
        </div>
      </div>
      <LineChartComponent lineChartData={lineChartData[month]} />
    </div>
  );
};

export default LineChartContainer;
