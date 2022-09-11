import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Navbar from "./Pages/Shared/Navbar";
import Footer from "./Pages/Shared/Footer";
import ManageInventories from "./Pages/Inventory/ManageInventories";
import YourInventories from "./Pages/YourInventories/YourInventories";
import Blogs from "./Pages/Blogs/Blogs";
import Login from "./Pages/Login/Login";
import Register from "./Pages/SignUp/Register";
import User from "./Pages/User/User";
import RequiredAuth from "./Pages/Login/RequiredAuth";
import UpdateInventory from "./Pages/UpdateInventory/UpdateInventory";
import MyInventories from "./Pages/MyInventories/MyInventories";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="about" element={<About />} />
        <Route path="update/:_id" element={<UpdateInventory />} />
        <Route
          path="manage"
          element={
            <RequiredAuth>
              <ManageInventories />
            </RequiredAuth>
          }
        />
        <Route
          path="inventory"
          element={
            <RequiredAuth>
              <YourInventories />
            </RequiredAuth>
          }
        />
        <Route
          path="myinventory"
          element={
            <RequiredAuth>
              <MyInventories />
            </RequiredAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="user" element={<User />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
