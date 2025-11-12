import React from "react";
import { NavLink } from "react-router";
import "./Links.css";
// Step-4 : এই ফিইল এর কাজ টি এভাবেই করতে হবে।
// Name Link Setup:

export const links = (
  <>
    <li>
      <NavLink className="mr-5 p-3 rounded-2xl" to="/">
        {" "}
        Home{" "}
      </NavLink>
    </li>
    <li>
      <NavLink className="mr-5 p-3 rounded-2xl" to="/about">
        {" "}
        About{" "}
      </NavLink>
    </li>
    <li>
      <NavLink className="mr-5 p-3 rounded-2xl" to="/post">
        {" "}
        Post{" "}
      </NavLink>
    </li>
    <li>
      <NavLink className="mr-5 p-3 rounded-2xl" to="/login">
        {" "}
        Login{" "}
      </NavLink>
    </li>
    <li>
      <NavLink className="mr-5 p-3 rounded-2xl" to="/register">
        {" "}
        Register{" "}
      </NavLink>
    </li>
  </>
);
