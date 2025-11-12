import React from "react";
import { createBrowserRouter } from "react-router";
import Roots from "../components/Root/Roots";
import Home from "../components/Pages/Home/Home";
import About from "../components/Pages/About/About";
import Post from "../components/Pages/Post/Post";
import ErrorPages from "../components/Pages/ErrorPage/ErrorPage";
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
    ],
  },
]);
