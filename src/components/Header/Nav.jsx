import React, { use, useContext } from "react";
import { links } from "./Links";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router";

const Nav = () => {
  // Step:4 (Context)-Context টি কে check করা হয়েছে।
  // const userInfo = use(AuthContext);
  // const userInfo = useContext(AuthContext);
  // console.log(userInfo);
  // * Step:-4 Observer - (User এবং signOutUser টি কে এখান থেকে access করা হয়েছে)
  const { user, signOutUser } = useContext(AuthContext);
  // signOutUser observer দ্বারা এই function টি করে sign out করা হয়েছে।
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        // console.log("sign out successful");
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mb-4">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {/* user দারা condition করা হয়েছে */}
          {user ? (
            <>
              <span>{user.email}</span>
              {/* Sing Out function টি call করা হয়েছে */}
              <Link onClick={handleSignOut} className="btn">
                Sing Out
              </Link>
            </>
          ) : (
            <Link className="btn">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
