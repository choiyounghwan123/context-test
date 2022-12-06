import React, { useRef } from "react";
import MyContext from "../context";

const SetName = () => {
  const inputValue = useRef();
  return (
    <MyContext.Consumer>
      {({ actions }) => (
        <div>
          <input
            type="text"
            placeholder="name"
            ref={inputValue}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                actions.setName(inputValue.current.value);
                inputValue.current.value = "";
              }
            }}
          ></input>
          <button
            onClick={() => {
              actions.setName(inputValue.current.value);
              inputValue.current.value = "";
            }}
          >
            submit
          </button>
          <hr></hr>
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default SetName;
