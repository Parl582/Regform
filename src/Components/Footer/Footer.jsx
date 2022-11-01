import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneCallbackOutlinedIcon from "@mui/icons-material/PhoneCallbackOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";


const Footer = () => {
  return (
    <>
      <div className="w-full border-2 bg-[#cccccc] md:px-10 px-3  md:py-10 py-7 font-semibold font-[19px] CustomCssP">
        <div className="flex w-full flex-wrap">
          <div className="md:w-1/3 w-full  p-3 space-y-3 text-[#1f1f1f]">
            <div className="flex space-x-2 items-center">
              <LocationOnIcon />
              <p>Sector-27 Noida </p>
            </div>
            <div className="flex space-x-2 items-center">
              <PhoneCallbackOutlinedIcon />

              <p>+91-9876543210</p>
            </div>
            <div className="flex space-x-2 items-center">
              <MailOutlinedIcon />
              <p>parl@Info.com </p>
            </div>
          </div>
          <div className="md:w-1/3 w-full  p-3 space-y-3">
            <span className="font-bold text-[#000]">Legal</span>
            <p>Privacy Policy</p>
            <p>Term & Condition</p>
            <p>Refound Policy</p>
          </div>
          <div className="md:w-1/3 w-full  p-3 space-y-3">
            <span className="font-bold text-[#000]">Help Center</span>
            <p>Contact us</p>
            <p>Feedback</p>
          </div>
        </div>

        <div className="flex my-10 space-x-3">
          <FacebookOutlinedIcon  className="cursor-pointer text-[#0c90bc]" />
          <InstagramIcon className="cursor-pointer text-[#f74e6a]" />
          <TwitterIcon className="cursor-pointer text-[#00b0fc]" />
          <YouTubeIcon className="cursor-pointer text-[#eb032a]" />
          <TelegramIcon  className="cursor-pointer text-[#2684ef]"/>
        </div>
      </div>
     
    </>
  );
};

export default Footer;
