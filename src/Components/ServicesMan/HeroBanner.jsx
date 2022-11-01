import React from "react";
import { AllServices } from "../data/Services";

import HeroImg from "../../Img/m.jpg";
const HeroBanner = () => {
  return (
    <>
      <div className="w-full h-[300px] overflow-hidden ">
        <img
          src={HeroImg}
          alt=""
          className="w-full h-full object-cover object-center "
        />
      </div>
      <div className="w-full p-6 ">
        <h1 className=" text-[23px] font-medium p-5 w-full">Our Services</h1>
        <div className="flex  items-center flex-wrap w-full justify-center ">
          {AllServices.map((item) => {
            return (
              <div
                key={item.id}
                className="md:w-[200px] w-[120px] md:h-[220px] h-[130px]
                          flex items-center justify-center flex-col
                          border-[1px]
                          md:mx-4 m-2 rounded-lg cursor-pointer overflow-hidden
                          shadow-sm bg-[#fffbfb]
                          hover:shadow-xl transition-all duration-200 ease-in-out 
                          hover:scale-105 
                          "
              >
                <img src={item.img} alt="" className="w-full h-[80%]" />
                <h1 className="font-semibold md:text-[1.2rem] text-[0.9rem]">
                  {item.name}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
