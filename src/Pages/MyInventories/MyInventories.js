import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import MyInventoriesCard from "./MyInventoriesCard";

const MyInventories = () => {
  const [inventories, setInventories] = useState([]);
  const [user] = useAuthState(auth);
  const email = user?.email;

  useEffect( () => {
    fetch(`http://localhost:5000/manage?email=${email}`)
    .then( res => res.json())
    .then( data => setInventories(data));
  } ,[email, inventories, user])
  return (
    <div>

      <div className="max-w-screen-lg mx-auto my-10 animate__animated animate__bounce">
        <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 uppercase text-center my-10">
        My Added Inventories: {inventories.length}<span className="text-red-600"></span>
        </h1>

        <div className="mx-10">
          <div className="flex bg-purple-700 text-white font-bold uppercase text-2xl">
            <div className="w-3/12 border-2 border-gray-500">
              <p className="text-center ">image</p>
            </div>
            <div className="w-3/12 border-2 border-gray-500 justify-center items-center flex">
              <p className="text-center">name</p>
            </div>
            <div className="w-3/12 border-2 border-gray-500 flex justify-center items-center">
              <p className=" text-center">supplier</p>
            </div>
            <div className="w-3/12 border-2 border-gray-500 flex justify-center items-center">
              <p className="text-center">price</p>
            </div>
            <div className="w-3/12 border-2 border-gray-500 flex justify-center items-center">
              <p className="text-center">quantity</p>
            </div>
          </div>
          {
          inventories.map( inventory => (<MyInventoriesCard
          key={inventory._id}
          inventory={inventory}
          ></MyInventoriesCard>)
        )}
        </div>
      


      </div>
    </div>
  );
};

export default MyInventories;
