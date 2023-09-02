import { useState } from "react";
import PieChartComp from "./PieChartComp";

const pieChartData = {
  "May - June 2021": [
    { name: "Basic Tees", value: 430, color: "#98D89E" },
    { name: "Custom Short Pants", value: 270, color: "#F6DC7D" },
    { name: "Super Hoodies", value: 160, color: "#EE8484" },
  ],
  "June - July 2021": [
    { name: "Sweatshirts", value: 620, color: "#98D89E" },
    { name: "Track Pants", value: 540, color: "#F6DC7D" },
    { name: "Beanie Hats", value: 430, color: "#EE8484" },
  ],

  "Aug - Sep 2021": [
    { name: "Graphic T-shirts", value: 380, color: "#98D89E" },
    { name: "Cargo Shorts", value: 710, color: "#F6DC7D" },
    { name: "Sports Bras", value: 580, color: "#EE8484" },
  ],
  "Sep - Oct 2021": [
    { name: "Sweaters", value: 290, color: "#98D89E" },
    { name: "Chinos", value: 480, color: "#F6DC7D" },
    { name: "Ankle Boots", value: 720, color: "#EE8484" },
  ],
  "Oct - Nov 2021": [
   { name: "Hooded Sweatshirts", value: 520, color: "#98D89E" },
    { name: "Knit Beanies", value: 360, color: "#F6DC7D" },
    { name: "Leather Jackets", value: 190, color: "#EE8484" },
  ],
  "Nov - Dec 2021": [
    { name: "Sweaters", value: 189, color: "#98D89E" },
     { name: "Chinos", value: 456, color: "#F6DC7D" },
     { name: "Ankle Boots", value: 810, color: "#EE8484" },
  ],
};



// You can use this new dataset as needed in your code.


const Card = () => {
  const [month, setMonth] = useState("May - June 2021");

  const changeHandler = (e) => {
    setMonth(e.target.value);
  };

  const data = pieChartData[month];
  return (
    <article className="bg-white rounded-[20px] py-[30px] lg:px-[40px] px-8 space-y-[20px]">
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-bold">Top products</h4>
        <button
          className="text-xs text-[#858585] flex justify-center items-center space-x-2"
          aria-label="Select Month"
        >
          <select
            value={month}
            onChange={changeHandler}
            className=" outline-none "
          >
            {Object.keys(pieChartData).map((ele, index) => {
              return (
                <option key={index} value={ele}>
                  {ele}
                </option>
              );
            })}
          </select>
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-y-7 md:gap-x-5 md:gap-y-0 place-items-center">
        <PieChartComp data={data} />
        <div className="space-y-5 w-full">
          {data.map((prod, index) => (
            <div key={index} className="">
              <h6 className="flex justify-start items-center space-x-[10px]">
                <span
                  style={{ backgroundColor: `${prod.color}` }}
                  className={`w-3 h-3 bg-${prod.color} rounded-full`}
                ></span>
                <span className="text-sm font-bold">{prod.name}</span>
              </h6>
              <span className="ml-6 text-xs  text-[#858585]">
                {Math.round(prod.value / 10)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Card;
