import React, { use } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

const Profiles = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      <h2>Profiles</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default Profiles;
