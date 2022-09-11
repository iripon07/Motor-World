import React from "react";

const CustomButton = ({ children }) => {
  return (
    <div>
      <button className="py-3 px-4 bg-transparent text-xl text-red-600 font-semibold border border-red-600 rounded-lg uppercase hover:bg-red-600 hover:text-white hover:border-transparent transition ease-in duration-300 transform hover:-translate-y-1 active:translate-y-0">
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
