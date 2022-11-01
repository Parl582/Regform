import React from "react";
import PersonRemoveOutlinedIcon from "@mui/icons-material/PersonRemoveOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MobileMenu from "./MobileMenu";
import Dialog from '../dialogModule/Dialog'


const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="w-full h-[70px] z-40 bg-[#fff] sticky top-0 flex items-center">
        <div className="flex h-full w-full items-center justify-center md:p-[50px] p-[0px]">
          {/* //logo  & left */}
          <div className="md:flex  lg:w-1/2 md:w-full  items-center">
            <div className="logo lg:mr-[40px]  font-bold text-[30px]">Yes Work</div>
            <div className=" lg:ml-3  lg:space-x-4 md:space-x-3 md:flex hidden ">
              <h1 className="border-2 hover:bg-[#d7d7d7] border-[#000] py-[3px] cursor-pointer rounded-3xl font-medium px-5">
                Who we are{" "}
              </h1>
              <h1 className="border-2 border-[#000] py-[3px] cursor-pointer rounded-3xl font-medium px-5">
                Join with us{" "}
              </h1>
              <h1 className="border-2 border-[#000] py-[3px] cursor-pointer rounded-3xl font-medium px-5">
                we are hiring{" "}
              </h1>
            </div>
          </div>

          {/* rightSide  */}
          <div className="flex lg:w-1/2 w-[20%] justify-end ">
            <div className="lg:flex hidden  justify-end items-center space-x-5 ">
              <div className="flex">
                <select className="outline-none border-0 font-semibold text-[18px] cursor-pointer px-5">
                  <option value="Select">English</option>
                  <option value="Select">Hindi</option>
                  <option value="Select">Assamese</option>
                </select>
              </div>
            
              <div className="flex px-5 items-center space-x-2"  onClick={handleClickOpen}>
                <PersonRemoveOutlinedIcon className="" />
                <h1 className="font-normal text-[18px] cursor-pointer  underline leading-4">
                  Registration/Services
                </h1>
              </div>
              <div className="flex">
                <h1 className="font-normal text-[18px] cursor-pointer px-5 underline leading-4">
                  Sign Up/Login
                </h1>
              </div>
            </div>

            {/* mobile Menu   */}

            <div className="lg:hidden md:flex absolute right-4 top-4 " onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <CloseOutlinedIcon className="cursor-pointer " fontSize="large" />
              ) : (
                <MenuOutlinedIcon className="cursor-pointer " fontSize="large" />
              )}
            </div>
          </div>
        </div>
      
      </div>
      {isOpen && <MobileMenu />}

      <Dialog handleClickOpen={handleClickOpen} open={open} setOpen={setOpen}/>
    </>
  );
};

export default Header;
