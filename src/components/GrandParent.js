import React, { useContext } from "react";
import MyContext from "../context";
import Parent from "./Parent";

const GrandParent = () => {
  const { name } = useContext(MyContext);

  return (
    <div>
      <h2>grand parent</h2>
      <p>received:{name}</p>
      <Parent></Parent>
    </div>
  );
};

export default GrandParent;
