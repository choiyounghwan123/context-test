import React, { useContext } from "react";
import Parent from "./Parent";

const GrandParent = () => {
  return (
    <div>
      <h2>grand parent</h2>
      <Parent></Parent>
    </div>
  );
};

export default GrandParent;
