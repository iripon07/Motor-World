import React, { useEffect, useState } from "react";
import ManageInventoriesCard from "./ManageInventoriesCard";
import "animate.css";
import CustomButton from "../Shared/CustomButton";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ManageInventories = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch("https://motor-world-server.herokuapp.com/manage")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, [inventories]);





  const handleRemoveInventory = _id =>{
    const proceed = window.confirm('Are your sure, want to delete???');
    if(proceed){
      const url = `https://motor-world-server.herokuapp.com/manage/${_id}`;
      fetch(url, {
        method: 'DELETE'
      })

      .then(res => res.json())
      .then( data => {
        const restOf = inventories.filter( inventory => inventory._id !== _id)
        setInventories(restOf);
        toast("Inventory Remove Successfully");
      })

    }
  }


  return (
    <div className="max-w-screen-lg mx-auto my-10 animate__animated animate__bounce">
      <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-red-500 to-green-500 uppercase text-center my-10">
        Manage All Inventories: <span className="text-red-600">{inventories.length}</span>
      </h1>

      <div className=" justify-center flex mb-5">
        <Link to="/inventory">
          <CustomButton>Manage Your Inventory</CustomButton>
        </Link>
      </div>

      <div className="flex justify-center mb-5 ">
      <Link to="/myinventory"><button class="btn btn-outline btn-primary px-16">My Added Inventories</button></Link>
      </div>

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

      {inventories.map((inventory) => (
        <ManageInventoriesCard
          key={inventory.id}
          inventory={inventory}
          handleRemoveInventory={handleRemoveInventory}
        ></ManageInventoriesCard>
      ))}
      </div>
    </div>
  );
};

export default ManageInventories;
