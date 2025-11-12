import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen bg-green-300 flex justify-center items-center my-6">
      <div className="text-center lg:text-left"></div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body ">
          <h1 className="text-5xl font-bold text-center mb-4">Login now</h1>
          <form className="fieldset">
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
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-dash btn-success mt-4">Login</button>
          </form>
          <div className="divider">OR</div>
          <div className="googleLogin flex justify-around items-center mb-3">
            <button className="btn btn-soft btn-warning">Google</button>
            <button className="btn btn-soft btn-secondary">GitHub</button>
            <button className="btn btn-soft btn-info">Facebook</button>
          </div>
          <p>
            You are a new User-{" "}
            <Link to="/register">
              {" "}
              <span className="text-yellow-400 ml-4">SignUp Fast</span>{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
