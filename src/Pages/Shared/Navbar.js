import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import CustomLink from "./CustomLink";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  //console.log(user)

  return (
    <div className="bg-black h-24 flex items-center uppercase font-semibold sticky top-0 z-50">
      <div className="navbar max-w-screen-xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 rounded-box text-whi bg-black"
            >
              <li>
                <CustomLink to="/">Home</CustomLink>
              </li>
              <li>
                <CustomLink to="/blogs">Blogs</CustomLink>
              </li>

              {user && (
                <>
                  <li>
                    <CustomLink to="/manage">Manage</CustomLink>
                  </li>
                  <li>
                    <CustomLink to="/inventory">Your Inventory</CustomLink>
                  </li>
                </>
              )}

              <li>
                <CustomLink to="/about">About Us</CustomLink>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-red-700 uppercase text-4xl"
          >
            M-World
          </Link>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu  menu-horizontal p-0 text-white">
            <li>
              <CustomLink to="/">Home</CustomLink>
            </li>
            <li>
              <CustomLink to="/blogs">Blogs</CustomLink>
            </li>
            {user && (
              <>
                <li>
                  <CustomLink to="/manage">Manage</CustomLink>
                </li>
                <li>
                  <CustomLink to="/inventory">Your Inventory</CustomLink>
                </li>
              </>
            )}

            <li>
              <CustomLink to="/about">About Us</CustomLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal p-0 text-white">
            {user ? (
              <li>
                <CustomLink to="/" onClick={logout}>
                  Logout
                </CustomLink>
              </li>
            ) : (
              <li>
                <CustomLink to="/login">Login</CustomLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
