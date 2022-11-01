import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import UploadImageSection from "./UploadImageSection";
import { SelectServices } from "../data/SelectServices";

export default function MaxWidthDialog({ setOpen, open }) {
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const [img, setImg] = React.useState();
  const [img4, setImg4] = React.useState();
  const [img2, setImg2] = React.useState();
  const [img3, setImg3] = React.useState();

  const handleClose = () => {
    setOpen(false);
  };

  function handleImage(e) {
    // console.log(e.target.files);
    setImg(URL.createObjectURL(e.target.files[0]));
  }
  function handleImage2(e) {
    // console.log(e.target.files);
    setImg2(URL.createObjectURL(e.target.files[0]));
  }
  function handleImage3(e) {
    console.log(e.target.files);
    setImg3(URL.createObjectURL(e.target.files[0]));
  }
  function handleImage4(e) {
    // console.log(e.target.files);
    setImg4(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          <div className="flex w-full justify-between">
            <h1>Registration</h1>
            <Button onClick={handleClose}>X</Button>
          </div>
        </DialogTitle>
        <div className="border-b-2"></div>
        <DialogContent>
          <div className="px-1 space-y-3">
            <div className="">
              <h1>Choose Brand</h1>
              <input type="text" className="w-full border-[1px]" />
            </div>

            <div className="flex justify-between md:flex-nowrap flex-wrap ">
              {SelectServices.map((elm) => (
                <div className="" key={elm.id}>
                  <h1>{elm.title}</h1>
                  <div className="border-[1px] p-2 min-w-[150px]">
                    <select name="" id="" className="outline-none">
                      <option value="">{elm.title}</option>
                      <option value="">1</option>
                      <option value="">2</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>

            <div className="">
              <h1>Description</h1>
              <textarea type="text" className="w-full border-[1px]" />
            </div>
            <div className="space-y-1">
              <h1>UPLOAD UP TO 4 PHOTO</h1>
              {/* image upload Section  */}
              <UploadImageSection
                handleImage={handleImage}
                handleImage2={handleImage2}
                handleImage3={handleImage3}
                handleImage4={handleImage4}
                img={img}
                img2={img2}
                img4={img4}
                img3={img3}
              />
            </div>

            <div className="flex flex-wrap  ">
              <div className="">
                <h1>City</h1>
                <input
                  type="text"
                  className="outline-none border-[1px] md:w-auto w-full"
                />
              </div>
              <div className="md:px-5 px-0">
                <h1>State</h1>

                <input type="text" className="outline-none border-[1px]" />
              </div>
              <div className="">
                <h1>Locality</h1>

                <input type="text" className="outline-none border-[1px]" />
              </div>
            </div>

            {/* //address  */}

            <div className="">
              <h1>Address</h1>
              <input className="outline-none border-[1px] w-full"></input>
            </div>

            <div className="flex justify-between space-x-2">
              <div className=" w-1/2">
                <h1>Mobile No</h1>
                <input
                  type="number"
                  className="border-[1px] outline-none w-full"
                />
              </div>
              <div className="w-1/2">
                <h1>Password</h1>
                <input
                  type="password"
                  className="border-[1px] outline-none w-full"
                />
              </div>
            </div>

            {/* //userProfile  */}

            <div className="flex space-x-2 items-center justify-center">
              <div className="w-[80px] h-[70px] rounded-[999px] overflow-hidden border-[1px]">
                <img
                  src="https://www.giantbomb.com/a/uploads/scale_medium/0/7981/973085-snidely_whiplash.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full">
                <h2>Name</h2>

                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full border-[1px] outline-none"
                />
              </div>
            </div>
          </div>
        </DialogContent>

        <DialogActions>
          <div className="w-full items-center flex justify-center border-t-2 py-7">
            <button
              className="px-6 py-2 bg-[#0a59ec] text-[#fff] rounded-sm"
              onClick={handleClose}
            >
              SignUp
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
}
