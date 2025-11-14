import React from "react";
import { createBrowserRouter } from "react-router";
import Roots from "../components/Root/Roots";
import Home from "../components/Pages/Home/Home";
import About from "../components/Pages/About/About";
import Post from "../components/Pages/Post/Post";
import ErrorPages from "../components/Pages/ErrorPage/ErrorPage";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import Orders from "../components/Pages/Orders/Orders";
import Profiles from "../components/Pages/Profiles/Profiles";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../components/Pages/DashBoard/DashBoard";
// React Routing setup
// Step-2 : আজে যেখানে route টি main.jsx এর ভিতরে করতাম সেখান থেকে, এটিকে বাইরে src > Routes > Routes.jxs এর ভিতরে নিয়ে আসলাম। এবার Root.jsx- Component টি তৈরি করে বাকি প্রয়োজনীয় Component গুলি তৈরি করতে হবে।

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      { index: true, Component: Home },
      { path: "/about", Component: About },
      { path: "/post", Component: Post },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },

      /***
       * Step:-3
       * Orders & Profile - Component তৈরি করা হয়েছে এবং Private Routes এর ভিতরে রাখা হয়েছে।
       * */
      {
        path: "/orders",
        // Component: Orders
        element: (
          <PrivateRoutes>
            <Orders></Orders>
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        // Component: Profiles
        element: (
          <PrivateRoutes>
            <Profiles></Profiles>
          </PrivateRoutes>
        ),
      },
      // Private করা হয়েছে
      {
        path: "/dashboard",
        // Component: Profiles
        element: (
          <PrivateRoutes>
            <DashBoard></DashBoard>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
