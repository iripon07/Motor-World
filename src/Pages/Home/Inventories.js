import InventoryCard from "./InventoryCard";
import 'animate.css';
import useGetInventories from "../../UseHooks/useGetInventories";
import { useState } from "react";

const Inventories = () => {
  const [inventories, loading, setLoading] = useGetInventories([]);
  


  return (
    <div className="my-16 max-w-screen-xl mx-auto animate__animated animate__zoomInUp animate__delay-5s">
      <h1 className="text-6xl text-center font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-black to-yellow-300">
        We Have best super bikes
      </h1>

      <div className="flex justify-center">
        <hr className="w-80 border-2 rounded-full border-red-900" />
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center m-10">
        {inventories.slice(0, 6).map((product) => (
          <InventoryCard 
          key={product._id} 
          product={product}
          ></InventoryCard>
        ))}
      </div>
    </div>
  );
};

export default Inventories;
