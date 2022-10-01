import React from 'react';

const MyInventoriesCard = ({inventory}) => {
    const { img, name, price, supplier, quantity } = inventory;
    console.log(inventory)
    return (
        <div className="hover:bg-gray-300 even:bg-slate-200">
      <div className="flex ">
        <div className="w-3/12 border-2 border-gray-500">
          <img className="w-full rounded-xl mx-auto" src={img} alt="" />
        </div>
        <div className="w-3/12 border-2 border-gray-500 justify-center items-center flex">
          <p className="text-xl uppercase text-center">{name}</p>
        </div>
        <div className="w-3/12 border-2 border-gray-500 flex justify-center items-center">
          <p className="text-xl uppercase text-center">{supplier}</p>
        </div>
        <div className="w-3/12 border-2 border-gray-500 flex justify-center items-center">
          <p className="text-xl uppercase text-center">{price}</p>
        </div>
        <div className="w-3/12 border-2 border-gray-500 flex justify-center items-center">
          <p className="text-xl uppercase text-center">{quantity}</p>
        </div>
      </div>
    </div>
    );
};

export default MyInventoriesCard;