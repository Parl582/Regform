import React from "react";

const MobileMenu = () => {
  return (
    <>
      <div className="flex w-full h-[calc(100vh-70px)] bg-[whitesmoke] fixed">
        <div className=" h-full w-full space-y-2 font-semibold  pl-2 pt-5 ">
          <div className="font-semibold cursor-pointer w-full  px-5 py-1">Home </div>
          <div className="font-semibold cursor-pointer w-full  px-5 py-1">Who we are</div>
          <div className="font-semibold cursor-pointer w-full  px-5 py-1">Join with us</div>
          <div className="font-semibold cursor-pointer w-full  px-5 py-1">We are hiring</div>
          <div className="font-semibold cursor-pointer w-full  px-5 py-1">Register </div>
          <div className="font-semibold cursor-pointer w-full  px-5 py-1">Login </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
