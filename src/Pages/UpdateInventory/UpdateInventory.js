import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateInventory = () => {
  const [input, setInput] = useState("");
  const { _id } = useParams();
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    fetch(`https://motor-world-server.herokuapp.com/manage/${_id}`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [inventory, _id]);

  const handleDecreaseQuantity = (_id) => {
    let quantity = inventory.quantity;
    quantity = quantity - 1;
    const newQuantity = { quantity };

    fetch(`https://motor-world-server.herokuapp.com/manage/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        
        toast("Your Inventory Delivered!!!");
      });
      setInput(0)
  };

  const handleIncreaseQuantity = (_id) => {
    let quantity = inventory.quantity;
    let restock = parseInt(input);
    quantity = quantity + restock;
    const newQuantity = { quantity };
    fetch(`https://motor-world-server.herokuapp.com/manage/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        // toast("Your Inventory Restock!!!");
      });

  };

  return (
    <div className="my-10 max-w-screen-lg mx-auto">
      <div className="flex justify-center items-center flex-col md:flex-row mx-10">
        <div>
          <img
            className="w-[400px] h-[300px] rounded-lg hover:opacity-90"
            src={inventory.img}
            alt=""
          />
        </div>
        <div className="p-5">
          <h1 className="text-2xl font-semibold text-purple-500">
            {inventory.name}
          </h1>
          <h1 className="text-xs text-gray-600">{inventory.description}</h1>
          <h1 className="text-teal-800">
            Supplier:{" "}
            <span className="text-amber-800">{inventory.supplier}</span>
          </h1>
          <h1 className="text-green-800 text-lg">
            Price:{" "}
            <span className="text-deep-orange-400-accent">
              {inventory.price}
            </span>
          </h1>
          <h1 className="text-brown-800 text-xl">
            Quantity:{" "}
            <span className="text-purple-900">{inventory.quantity}</span>
          </h1>

          <button
            onClick={() => handleDecreaseQuantity(_id)}
            className="btn bg-orange-400 font-bold hover:bg-orange-600 border-none mt-1 mb-3 text-white"
          >
            Deliver
          </button>

          <div>
            <input
              onInput={(e) => setInput(e.target.value)}
              type="number"
              name="restock"
              value={input}
              placeholder="Add Quantity to Restock"
              className="input input-bordered rounded-r-none"
              min="5"
            />

            <button
              onClick={() => handleIncreaseQuantity(_id)}
              className="bg-orange-500 font-bold py-3 px-3 rounded-r-lg text-white hover:bg-orange-600"
            >
              RESTOCK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateInventory;
