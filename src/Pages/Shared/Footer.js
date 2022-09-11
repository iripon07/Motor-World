import React from "react";
import { Link } from "react-router-dom";
import bg from "../../images/bg/123.jpg";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div
      className="mt-auto"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <footer className="footer footer-center p-10  text-white rounded ">
        <div className="grid grid-flow-col gap-4 uppercase font-bold">
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <Link to="/blogs" className="link link-hover">
            Blogs
          </Link>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <BsFacebook className="w-5 h-5 text-stone-100 transition ease-linear hover:cursor-pointer hover:text-[#0eadc9]"></BsFacebook>
            <BsInstagram className="w-5 h-5 text-stone-100 transition ease-linear hover:cursor-pointer hover:text-[#0eadc9]"></BsInstagram>
            <BsTwitter className="w-5 h-5 text-stone-100 transition ease-linear hover:cursor-pointer hover:text-[#0eadc9]"></BsTwitter>
          </div>
        </div>
        <div>
          <p>
            Copyright © {year} - All rights reserved by{" "}
            <span className="text-yellow-400">RIPON</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
