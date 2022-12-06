import React from "react";
import { ColorConsumer } from "../context/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColor = () => {
  return (
    <div>
      <h2>색상을 고르세요.</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map((color, i) => (
              <div
                key={color}
                style={{ width: "24px", height: "24px", background: color }}
                onClick={() => {
                  actions.setColor(color);
                }}
              ></div>
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr></hr>
    </div>
  );
};

export default SelectColor;
