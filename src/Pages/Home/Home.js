import React from 'react';
import Banners from './Banners';
import ContactSupplier from './ContactSupplier';
import Inventories from './Inventories';
import Suppliers from './Suppliers';
import 'animate.css';
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
    return (
        <div >
            <Banners></Banners>
            <Inventories></Inventories>
            <Suppliers></Suppliers>
            <ContactSupplier></ContactSupplier>

            <div style={{ marginTop: "" }}>
            <ScrollToTop smooth color width/>
            </div>

        </div>
    );
};

export default Home;