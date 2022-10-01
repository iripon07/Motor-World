import React from "react";
import Rating from "react-rating";
import { BsFillStarFill } from "react-icons/bs";

const SuppliersCard = ({ supplier }) => {
  const {ratings, img, name, description } = supplier;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-[250px] object-cover" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
       <p className="text-green-500">Ratings:  <span className="text-gray-400"><Rating
          initialRating={ratings}
          emptySymbol={<BsFillStarFill></BsFillStarFill>}
          fullSymbol={
            <BsFillStarFill
              style={{
                color: "rgb(255,226,52)",
              }}
            ></BsFillStarFill>
          }
          fractions={2}
          readonly
        /></span></p>
      </div>
    </div>
  );
};

export default SuppliersCard;
