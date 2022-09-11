import React from "react";

const MyInventories = () => {
  return (
    <div>

      <div className="max-w-screen-lg mx-auto my-10 animate__animated animate__bounce">
        <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 uppercase text-center my-10">
        My Added Inventories: <span className="text-red-600"></span>
        </h1>

        <div className="mx-10">
          <div className="flex bg-purple-700 text-white font-bold uppercase text-2xl">
            <div className="w-2/12 border-2 border-gray-500">
              <p className="text-center ">image</p>
            </div>
            <div className="w-2/12 border-2 border-gray-500 justify-center items-center flex">
              <p className="text-center">name</p>
            </div>
            <div className="w-2/12 border-2 border-gray-500 flex justify-center items-center">
              <p className=" text-center">supplier</p>
            </div>
            <div className="w-2/12 border-2 border-gray-500 flex justify-center items-center">
              <p className="text-center">price</p>
            </div>
            <div className="w-2/12 border-2 border-gray-500 flex justify-center items-center">
              <p className="text-center">quantity</p>
            </div>
            <div className="w-2/12 border-2 border-gray-500 flex justify-center items-center">
              <p className=" text-center ">REMOVE</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default MyInventories;
