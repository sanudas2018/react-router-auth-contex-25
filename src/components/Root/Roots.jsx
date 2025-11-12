import React from "react";
import Nav from "../Header/Nav";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
// Step-3 : Routes.jsx file টি তৈরি করে এটির কাজ টি করতে হবে।  <Outlet> add করতে হবে। এবং Navbar এর NavLink / Link গুলি করতে হবে. এখান থেকে Routes.jsx এর children গুলি কাজ করবে।
const Roots = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Roots;
