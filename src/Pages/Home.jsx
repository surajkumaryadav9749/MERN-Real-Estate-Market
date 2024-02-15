import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"about"}>
        <h1 className="text-3xl font-bold underline">Home</h1>
      </Link>
    </div>
  );
};
export default Home;
