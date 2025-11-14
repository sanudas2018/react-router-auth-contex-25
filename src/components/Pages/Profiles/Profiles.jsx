import React, { use } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

const Profiles = () => {
  const { user } = use(AuthContext);

  return (
    <div className="mx-auto text-center">
      <h2>Profiles</h2>
      {/* Step:-3 User Update করে এখানে শো করান হয়েছে। */}
      <p>{user.displayName}</p>
      <p>{user.email}</p>
      <p>{user.photoURL}</p>

      <figure>
        <img
          className="w-[50px] h-[50px]"
          src={user?.photoURL}
          alt="Profile Image"
        />
      </figure>
    </div>
  );
};

export default Profiles;
