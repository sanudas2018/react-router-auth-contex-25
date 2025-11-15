import { format } from "date-fns";
import React from "react";

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <p>Date Format: {format(new Date(), "EEEE , MMMM MM , yyyy")} </p>
    </div>
  );
};

export default Home;
