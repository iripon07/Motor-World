import React from "react";
import bg from "../../images/bg/12.jpg";
import CustomButton from "../Shared/CustomButton";

const ContactSupplier = () => {
  return (
    <div
      className="mb-28"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="flex justify-center p-10">
        <div>
          <h1 className="text-5xl font-bold text-red-900 uppercase text-center">
            Wanna be our supplier
          </h1>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-2xl text-yellow-700">
                Company Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Email"
              className="input input-bordered w-full max-w-xs mb-2"
            />
          </div>
          <CustomButton>Subscribe</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ContactSupplier;
