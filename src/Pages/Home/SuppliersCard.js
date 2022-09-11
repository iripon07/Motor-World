import React from "react";

const SuppliersCard = ({ supplier }) => {
  const { img, name, description } = supplier;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-[250px] object-cover" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SuppliersCard;
