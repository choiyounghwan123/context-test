import React, { useContext } from "react";
import MyContext from "../context";

const Parent = () => {
  const { name } = useContext(MyContext);
  return (
    <div>
      <p>parent received : {name}</p>
    </div>
  );
};

export default Parent;
