import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="min-h-screen bg-fuchsia-300 flex justify-center items-center">
      <div className="text-center lg:text-left"></div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body ">
          <h1 className="text-5xl font-bold text-center mb-4">Sign Up</h1>
          <form className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo URL"
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <label className="label mt-3">
              <input type="checkbox" defaultChecked className="checkbox" />
              Terms And Condition
            </label>

            <button className="btn btn-dash btn-success mt-4">Sign Up</button>
          </form>
          <p>
            All Ready Have AN Account{" "}
            <Link to="/login">
              {" "}
              <span className="text-yellow-400 ml-4">Sign In</span>{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
