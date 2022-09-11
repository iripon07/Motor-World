import React, { useEffect, useState } from "react";
import bg from "../../images/bg/3376592.jpg";
import SuppliersCard from "./SuppliersCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  useEffect(() => {
    fetch("suppliers.json")
      .then((res) => res.json())
      .then((data) => setSuppliers(data));
  }, []);
  return (
    <div
      className="mb-28"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <h1 className="text-6xl font-bold text-white uppercase text-center pt-8">
        Our Best Suppliers
      </h1>

      <div className="flex justify-center pb-6 pt-2">
        <hr className="w-80 border-2 rounded-full border-white hover:border-yellow-500" />
      </div>

          <div className="max-w-screen-lg mx-auto pb-10">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10">
            {suppliers.slice(0, 3).map((supplier) => (
              <SuppliersCard
                key={supplier.id}
                supplier={supplier}
              ></SuppliersCard>
            ))}
          </div>
          </div>
    </div>
  );
};

export default Suppliers;
