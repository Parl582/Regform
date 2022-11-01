import React from "react";
import Banners from "../../Img/banner.jpeg";
import { Bannerss } from "../data/Banner";

const Banner = () => {
  return (
    <>
      {Bannerss.map((item) => {
        return (
          <div
            key={item.id}
            className="w-full md:h-[190px] h-[130px] border-[1px] my-1 overflow-hidden"
          >
            <img src={item.img} alt="" className="w-full h-full" />
          </div>
        );
      })}
    </>
  );
};

export default Banner;
