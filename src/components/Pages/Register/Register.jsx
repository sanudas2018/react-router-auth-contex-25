// import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { use, useState } from "react";
import { Link } from "react-router";
// import { auth } from "../../../Firebase/firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthContext";

const Register = () => {
  // success message handle:
  const [success, setSuccess] = useState(false);
  //  error message handle:
  const [errorMessage, setErrorMessage] = useState("");
  // Show Password with icon
  const [showPassword, setShowPassword] = useState(false);
  // Step:3: FirebaseAuthProvider থেকে context এর মাধ্যমে ডাটা টি আনা হয়েছে।
  const { createUser, emailVerified, updateUserProfile } = use(AuthContext);
  // Step:1 -
  // User Register করা হয়েছে।
  const handleRegister = (e) => {
    e.preventDefault();
    // get form value
    const form = e.target;
    const userName = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.checked;
    // console.log(userName, photo, terms);
    // success টি clear করে দিবে।
    setSuccess(false);
    // error টি clear করে দিবে।
    setErrorMessage("");
    // Terms Condition with Checked box
    if (!terms) {
      setErrorMessage("Please Accept Our Terms And Condition");
      return;
    }
    // Password Validate
    // console.log(password.length);
    const passwordRegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
    if (password.length <= 6) {
      setErrorMessage("password must be 6 characters");
      return;
    }
    if (passwordRegExp.test(password) === false) {
      setErrorMessage(
        "Password must be one lowerCase, and One UpperCase, one Digit"
      );
      return;
    }
    // firebase.init.js টি setup করতে হবে.
    // Step:2 - Firebase Auth দিয়ে - Sign Up করা হয়েছে;
    // Password Authenticate এর ভিতরে জেতে হবে।
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed up
    //     const user = userCredential.user;
    //     console.log(user);
    //     setSuccess(true);
    //     // ...
    //   })
    //   .catch((error) => {
    //     // const errorCode = error.code;
    //     const errorMessage = error.message;
    //     setErrorMessage(errorMessage);
    //     // ..
    //   });
    // Step:4: এখানে আগের মতন করে createUser করা হয়েছে।
    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        setSuccess(true);
        /**
         * Email Verification:
         * Send a user a verification email
         *
         * */
        emailVerified().then(() => {
          // Email verification sent!
          // ...
          setSuccess(true);
          alert(
            `We sent you a verification email. please checked email: ${email}`
          );
        });
        // Step:-1 -  Update a user's profile
        const profile = {
          displayName: userName,
          photoURL: photo,
        };
        updateUserProfile(profile)
          .then(() => {
            // Profile updated!
            // ...
            console.log("user profile Update");
          })
          .catch((error) => {
            // An error occurred
            // ...
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
          });
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        // ..
      });

    // clear form value
    form.name.value = "";
    form.photo.value = "";
    form.email.value = "";
    form.password.value = "";
  };

  return (
    <div className="min-h-screen bg-fuchsia-300 flex justify-center items-center">
      <div className="text-center lg:text-left"></div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body ">
          <h1 className="text-5xl font-bold text-center mb-4">Sign Up</h1>
          <form onSubmit={handleRegister} className="fieldset">
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
            <div className="relative">
              <label className="label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input"
                placeholder="Password"
              />
              {/* React Icon Set */}
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-8 right-6"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            <label className="label mt-3">
              <input type="checkbox" name="terms" className="checkbox" />
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
        {/* error message show */}
        <span className="text-center pb-3 font-semibold">
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        </span>
        {/* success message show */}
        {success && (
          <p className="text-center pb-3 font-semibold text-green-600">
            User Has Created Successfully
          </p>
        )}
      </div>
    </div>
  );
};

export default Register;
