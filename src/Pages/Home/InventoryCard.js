import React from "react";
import { Link} from "react-router-dom";
import CustomButton from "../Shared/CustomButton";

const InventoryCard = ({ product }) => {

  const { _id, img, name, description, quantity, supplier, price } = product;
  return (
    <div className="w-full rounded-lg py-2 transition duration-500 transform hover:scale-105 cursor-pointer">
      <div className="card w-full glass">
        <figure className="">
          <img
            className="rounded-lg w-full h-[200px] object-cover"
            src={img}
            alt="car!"
          />
        </figure>
        <div className="card-body p-2">
          <h2 className="text-2xl font-bold text-red-900">{name}</h2>
          <p>
            {" "}
            <small>{description}</small>
          </p>
          <h2 className="text-xl text-purple-900">
            Price: <span className="text-orange-500">{price}</span>
          </h2>
          <h2 className="text-green-700">Quantity: {quantity}</h2>
          <h1 className="text-yellow-700">Supplier From {supplier}</h1>
          <div className="card-actions justify-start ">
            <Link to={`/update/${_id}`}>
              <CustomButton >STOCK update</CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
