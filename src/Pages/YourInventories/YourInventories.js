import React from "react";
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const YourInventories = () => {
  const handleAddInventory = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;
    const quantity = event.target.quantity.value;
    const supplier = event.target.supplier.value;
    const price = event.target.price.value;
    const img = event.target.image.value;
    const inventory = { name, description, quantity, supplier, price, img };

    fetch("https://motor-world-server.herokuapp.com/manage", {
      method: "POST",

      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(inventory),
    })
      .then((res) => res.json())
      .then((data) => {
        event.target.reset();
        toast("Your New Inventory Added Successfully!")
      });
  };

  return (
    <div className="max-w-screen-lg mx-auto my-10">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-2xl text-center font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-black to-yellow-300">
            Add New Inventory
          </h2>

          <div className="flex justify-center">
            <hr className="w-80 border-1 rounded-full border-red-900" />
          </div>

          <form onSubmit={handleAddInventory}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                class="input input-bordered input-primary w-full max-w-xs my-5"
              />
            </div>

            <div>
              <input
                type="text"
                name="supplier"
                placeholder="Supplier"
                required
                class="input input-bordered input-info w-full max-w-xs "
              />
            </div>

            <div>
              <input
                type="number"
                name="price"
                placeholder="Price"
                required
                min="500"
                class="input input-bordered input-success w-full max-w-xs my-5"
              />
            </div>
            <div>
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                required
                min="5"
                class="input input-bordered input-warning w-full max-w-xs "
              />
            </div>

            <div>
              <textarea
                type="text"
                name="description"
                class="textarea textarea-success w-full max-w-xs my-5"
                placeholder="Description"
                required
                minLength="54"
                maxLength="96"
              ></textarea>
            </div>

            <div>
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                required
                min="5"
                class="input input-bordered input-warning w-full max-w-xs mb-5"
              />
            </div>

            <div class="card-actions justify-end">
              <button class="btn btn-primary w-full max-w-xs text-white font-bold">
                Manage Inventory
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default YourInventories;
