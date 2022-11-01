import React from "react";
const image =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRurUFba7Au2m56wvVQGsvj2J_Ak-Dy1gDcMx-DuviMGWbHR0ve3m2wYCp6fqJQb7GV7cU&usqp=CAU";

const UploadImageSection = ({
  handleImage,
  img,
  img2,
  img3,
  img4,
  handleImage2,
  handleImage3,
  handleImage4,
}) => {
  return (
    <>
      <div className="md:flex-nowrap flex-wrap flex justify-between md:space-y-0 space-y-2">
        <div className=" border-[1px] w-[100px] h-[100px] overflow-hidden flex items-center justify-center">
          <label className="" htmlFor="file1">
            <img className="" src={img == null ? image : img} alt="" />
          </label>
          <input
            type="file"
            accept="image/*"
            id="file1"
            style={{ display: "none" }}
            onChange={(e) => handleImage(e)}
          />
        </div>
        <div className="border-[1px] w-[100px] h-[100px] overflow-hidden flex items-center justify-center">
          <label className="" htmlFor="file2">
            <img
              className="object-cover"
              src={img2 == null ? image : img2}
              alt=""
            />
          </label>
          <input
            type="file"
            accept="image/*"
            id="file2"
            style={{ display: "none" }}
            onChange={(e) => handleImage2(e)}
          />
        </div>
        <div className="border-[1px] w-[100px] h-[100px] overflow-hidden flex items-center justify-center">
          <label className="" htmlFor="file3">
            <img
              className="object-cover"
              src={img3 == null ? image : img3}
              alt=""
            />
          </label>
          <input
            type="file"
            accept="image/*"
            id="file3"
            style={{ display: "none" }}
            onChange={(e) => handleImage3(e)}
          />
        </div>
        <div className="border-[1px] w-[100px] h-[100px] overflow-hidden flex items-center justify-center">
          <label className="" htmlFor="file4">
            <img
              className="object-cover"
              src={img4 == null ? image : img4}
              alt=""
            />
          </label>
          <input
            type="file"
            accept="image/*"
            id="file4"
            style={{ display: "none" }}
            onChange={(e) => handleImage4(e)}
          />
        </div>
      </div>
    </>
  );
};

export default UploadImageSection;
