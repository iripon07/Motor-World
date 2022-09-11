import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateInventory = () => {
  const { _id } = useParams();
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/manage/${_id}`)
    .then( res => res.json())
    .then( data => console.log(data));
  }  ,[_id])

  return (
    <div className="max-w-screen-lg mx-auto mt-10">
        <h1 className="text-6xl text-black font-extrabold">{_id}</h1>
    </div>
  );
};

export default UpdateInventory;
